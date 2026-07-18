import request from "supertest";
import express from "express";
import crypto from "crypto";

const app = express();

app.get("/", (req, res) => {
  const type = req.get("X-APP-TOKEN");
  res.send(`Hello: ${type}`);
});

describe("Test Header", () => {
  it("should return request header", async () => {
    // Create a SHA-256 hash of the text "bismillah"
    const hash = crypto.createHash("sha256").update("bismillah").digest("hex");

    const response = await request(app).get("/").set("X-APP-TOKEN", hash);

    // Memeriksa status kode HTTP
    expect(response.status).toBe(200);

    // Memeriksa isi dari respons
    expect(response.text).toEqual(
      "Hello: a1dd395c19f3a1f7ff0e6bfe3ee6028e4373b41085a6da776ab02a8baf129abb"
    );
    console.log("\n", response.text);
  });
});
