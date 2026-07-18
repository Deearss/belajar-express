import request from "supertest";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  if (req.query.name) {
    res.status(200).send(`Hello ${req.query.name}!`);
  } else {
    res.status(400).end();
  }
});

describe("Test Response Status", () => {
  it("should return Hello World!", async () => {
    const responseSuccess = await request(app)
      .get("/")
      .query({ name: "Somwan" });

    // Memeriksa status kode HTTP Success
    expect(responseSuccess.status).toBe(200);
    // Memeriksa isi dari responseSuccess
    expect(responseSuccess.text).toEqual("Hello Somwan!");

    const responseError = await request(app).get("/");

    // Memeriksa status kode HTTP Error
    expect(responseError.status).toBe(400);
  });
});
