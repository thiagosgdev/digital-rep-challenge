import { configEnvs } from "shared/config/envs";
import app from "./app";

app.listen(configEnvs.PORT, () => {
  console.log(`Listening on port ${configEnvs.PORT}`);
});
