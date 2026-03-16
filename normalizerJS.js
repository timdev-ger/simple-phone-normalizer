const countryCodes = {
  DE: "49",
  AT: "43",
  CH: "41"
};

function normalizePhoneNumber(phone, defaultCountry = "DE") {
  if (!phone) return null;

  let cleaned = phone.replace(/[^\d+]/g, "");

  if (cleaned.startsWith("00")) {
    cleaned = "+" + cleaned.slice(2);
  }

  if (cleaned.startsWith("+")) {
    const match = cleaned.match(/^\+(\d{2})(0?)(\d+)/);

    if (!match) return null;

    const country = match[1];
    const rest = match[3];

    return `+${country}${rest}`;
  }

  if (cleaned.startsWith("0")) {
    const code = countryCodes[defaultCountry];
    cleaned = cleaned.slice(1);

    return `+${code}${cleaned}`;
  }

  return null;
}

module.exports = {
  normalizePhoneNumber
};
