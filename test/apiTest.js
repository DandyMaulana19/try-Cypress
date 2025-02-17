const request = require("supertest")("https://dummyjson.com");
const expect = require("chai").expect;

describe("Test Dummy API", function () {
  it("Get All Products - Positive", async function () {
    const res = await request.get("/products").send();
    expect(res.status).to.equal(200);
    expect(res.body.products).to.be.an("array");
  });

  it("Get Product By ID - Positive", async function () {
    const res = await request.get("/products/1").send();
    expect(res.status).to.equal(200);
  });

  it("Get All Products - Negative", async function () {
    const res = await request.get("/invalid").send();
    expect(res.status).to.equal(404);
  });

  //   Run spesific testcase using .only
  //   it.only("Add Product - Positive", async function () {

  it("Add Product - Positive", async function () {
    const res = await request
      .post("/products/add")
      .set("Content-Type", "application/json")
      .send({
        title: "Test Product Baru",
      });
    expect(res.status).to.equal(201);
  });
});
