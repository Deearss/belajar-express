import request from "supertest";
import express from "express";

const app = express();

app.get("/hello/world", (req, res) => {
  res.json({
    path: req.path,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure,
  });
});

describe("Test Query Parameter", () => {
  it("should return JSON about request", async () => {
    const response = await request(app)
      .get("/hello/world")
      .query({ name: "Dicoding" });

    // Memeriksa status kode HTTP
    expect(response.status).toBe(200);

    // Memeriksa isi dari respons
    expect(response.body).toEqual({
      path: "/hello/world",
      originalUrl: "/hello/world?name=Dicoding",
      hostname: "127.0.0.1",
      protocol: "http",
      secure: false,
    });
    console.log("\n dari except \n", response.body);

    console.log("\n dari toEqual \n", {
      path: "/hello/world",
      originalUrl: "/hello/world?name=Dicoding",
      hostname: "127.0.0.1",
      protocol: "http",
      secure: false,
    });
  });
});
