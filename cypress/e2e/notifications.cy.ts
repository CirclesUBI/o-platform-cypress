import { loginFirstPreSeededAccount } from "./testModules/loginPreSeeded";
import { testNotification } from "./testModules/notifications";

describe("middle-menu", { testIsolation: false }, () => {
  it("should log in with pre-seeded account", () => {
    loginFirstPreSeededAccount();
  });

  testNotification();
});