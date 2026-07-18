import request from "supertest";
import express from "express";
import crypto from "crypto";

const app = express();

app.get("/", (req, res) => {
  const hash = crypto.createHash("sha256").update("bismillah").digest("hex");

  res
    .set({
      "X-APP-TOKEN": hash,
      "X-APP-NAME": "Somwan",
      "Content-Type": "text/html",
    })
    .send(`<html><body>Hello World</body></html>`);
});

describe("Test Response Body", () => {
  it("should return <html><body>Hello World</body></html>", async () => {
    const response = await request(app).get("/");

    // Memeriksa status kode HTTP Success
    expect(response.status).toBe(200);
    // Memeriksa isi dari response
    expect(response.get("X-APP-TOKEN")).toBe(
      "a1dd395c19f3a1f7ff0e6bfe3ee6028e4373b41085a6da776ab02a8baf129abb"
    );
    expect(response.get("X-APP-NAME")).toBe("Somwan");
    expect(response.get("Content-Type")).toContain("text/html");
    expect(response.text).toBe("<html><body>Hello World</body></html>");
  });
});
