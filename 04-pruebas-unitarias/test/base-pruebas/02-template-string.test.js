import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("pruebas en el 02-template-string", () => {
  test("GetSaludo debe retornar hola Juan Bultaif", () => {
    const name = "juan";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
