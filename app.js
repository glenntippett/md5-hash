const crypto = require("crypto");
const prompt = require("prompt-sync")();

function md5Hash(amount) {
  console.log(amount);
  console.log("> Computing MD5 hash...");
  console.log(crypto.createHash("md5").update(amount).digest("hex"));
}

function md5HashWithSalt(amount) {
  console.log("> Computing MD5 hash with salt...");
  amount = amount + "g45beb5wg";
  console.log(crypto.createHash("md5").update(amount).digest("hex"));
}

function main() {
  const amount = prompt("Enter an amount... > ");
  md5Hash(amount);
  md5HashWithSalt(amount);
}

main();
