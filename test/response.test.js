import request from "supertest";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

describe("tes response", () => {
  it("should return Hello World!", async () => {
    const response = await request(app).get("/");

    // Memeriksa status kode HTTP
    expect(response.status).toBe(200);

    // Memeriksa isi dari respons
    expect(response.text).toEqual("Hello World!");
  });
});
