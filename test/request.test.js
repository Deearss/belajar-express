import request from "supertest";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

describe("tes", () => {
  it("should return JSON with property {message : Hello World}", async () => {
    const response = await request(app).get("/");

    // Memeriksa status kode HTTP
    expect(response.status).toBe(200);

    // Memeriksa isi dari respons
    expect(response.body).toEqual({ message: "Hello World!" });
  });
});
