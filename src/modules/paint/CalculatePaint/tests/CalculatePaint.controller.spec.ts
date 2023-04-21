import { Request, Response } from "express";
import { CalculatePaintController } from "../CalculatePaint.controller";

const mockRequest = {
  body: {
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
  },
} as Request;

const mockResponse = {
  send: () => {
    ({ "0.5": 1, "18": 1, "2.5": 0, "3.6": 2 });
  },
} as Response;

type SutTypes = {
  sut: CalculatePaintController;
};

const makeSut = (): SutTypes => {
  const sut = new CalculatePaintController();
  return {
    sut,
  };
};

describe("Calculate Paint Controller", () => {
  it("Should execute with the correct values", () => {
    const { sut } = makeSut();
    const calculateSpy = jest.spyOn(sut, "handle");
    sut.handle(mockRequest, mockResponse);
    expect(calculateSpy).toHaveBeenCalledWith(mockRequest, mockResponse);
  });

  it("Should return the number of cans needed", () => {
    const { sut } = makeSut();
    const totalCans = sut.handle(mockRequest, mockResponse);
    expect(totalCans).toEqual(mockResponse.send());
  });
});
