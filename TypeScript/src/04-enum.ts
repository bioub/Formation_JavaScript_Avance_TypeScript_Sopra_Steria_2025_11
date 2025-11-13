
// ATTENTION les enums ne peuvent pas être utilisés
// avec Node.js sans builder avec tsc.
enum Roles {
  ADMIN,
  USER,
  GUEST,
}

function getRoleName(role: Roles): string {
  switch (role) {
    case Roles.ADMIN:
      return "Administrator";
    case Roles.USER:
      return "User";
    case Roles.GUEST:
      return "Guest";
    default:
      return "Unknown";
  }
}

console.log(getRoleName(Roles.ADMIN)); // Output: Administrator
console.log(getRoleName(Roles.USER)); // Output: User
console.log(getRoleName(Roles.GUEST)); // Output: Guest
