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
    })
    .send("Hello Response!");
});

describe("Test Response Header", () => {
  it("should return 'Hello Response!' with defined Header!", async () => {
    const responseSuccess = await request(app).get("/");

    // Memeriksa status kode HTTP Success
    expect(responseSuccess.status).toBe(200);
    // Memeriksa isi dari responseSuccess
    expect(responseSuccess.text).toBe("Hello Response!");
    expect(responseSuccess.get("X-APP-TOKEN")).toBe(
      "a1dd395c19f3a1f7ff0e6bfe3ee6028e4373b41085a6da776ab02a8baf129abb"
    );
    expect(responseSuccess.get("X-APP-NAME")).toBe("Somwan");
  });
});
