export function generateRandomID() {
  let id = "";
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  id += letters.charAt(Math.floor(Math.random() * letters.length));
  id += letters.charAt(Math.floor(Math.random() * letters.length));
  id += String(Math.random()).slice(2, 6);
  return id;
}

export function generateUniqueId(ids: any) {
  while (true) {
    let id = generateRandomID();
    if (!ids.includes(id)) {
      return id;
    }
  }
}
