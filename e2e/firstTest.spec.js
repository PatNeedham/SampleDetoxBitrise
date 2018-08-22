describe("First set of tests", () => {
  it("should have welcome text", async () => {
    await waitFor(element(by.id("welcomeText")))
      .toExist()
      .withTimeout(5000);
    await expect(element(by.id("welcomeText"))).toHaveText(
      "Welcome to React Native!"
    );
  });
});
