import { CalculatePaintService } from "../CalculatePaint.service";

const mockWallsParams = () => ({
  walls: [
    {
      height: 5,
      length: 5,
      doors: 1,
      windows: 2,
    },
    {
      height: 5,
      length: 8,
      doors: 2,
      windows: 0,
    },
    {
      height: 5,
      length: 7,
      doors: 2,
      windows: 2,
    },
    {
      height: 5,
      length: 9,
      doors: 1,
      windows: 0,
    },
  ],
});

type SutTypes = {
  sut: CalculatePaintService;
};

const makeSut = (): SutTypes => {
  const sut = new CalculatePaintService();
  return {
    sut,
  };
};

describe(" Calculate Paint Service", () => {
  it("Should execute with the correct values", () => {
    const { sut } = makeSut();
    const calculateSpy = jest.spyOn(sut, "execute");
    sut.execute(mockWallsParams());
    expect(calculateSpy).toHaveBeenCalledWith(mockWallsParams());
  });

  it("Should throw if one of the wall x door difference is lower than 0.3m", () => {
    const { sut } = makeSut();
    const mockInvalidDoorDiff = mockWallsParams();
    mockInvalidDoorDiff.walls[0].height = 1;

    expect(() => sut.execute(mockInvalidDoorDiff)).toThrow();
  });

  it("Should throw if the doors + windows area is more than 50% of the wall area", () => {
    const { sut } = makeSut();
    const mockInvalidDoorArea = mockWallsParams();
    mockInvalidDoorArea.walls[0].doors = 100;

    expect(() => sut.execute(mockInvalidDoorArea)).toThrow();
  });

  it("Should throw if the wall area is lower than 1m²", () => {
    const { sut } = makeSut();
    const mockInvalidLowArea = mockWallsParams();
    mockInvalidLowArea.walls[0].height = 1;
    mockInvalidLowArea.walls[0].length = 0.5;
    mockInvalidLowArea.walls[0].doors = 0;
    mockInvalidLowArea.walls[0].windows = 0;

    expect(() => sut.execute(mockInvalidLowArea)).toThrow();
  });

  it("Should throw if the wall area has more than 50m²", () => {
    const { sut } = makeSut();
    const mockInvalidHighArea = mockWallsParams();
    mockInvalidHighArea.walls[0].height = 50;

    expect(() => sut.execute(mockInvalidHighArea)).toThrow();
  });
});
