function testPassword(mdp) {
  return mdp.length >= 12;
}
module.exports = testPassword;