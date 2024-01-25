// Ixtiyori sonnig kubini topuvchi funksiya yozing.
// 1-masala
function kubniHajmi(arg1) {
  let kub = arg1 ** 3;
  return kub;
}
console.log(kubniHajmi(5));

const kubnihajmi = function (arg1) {
  let kub = arg1 ** 3;
  return kub;
};
console.log(kubnihajmi(3));

const Kubnihajmi = (arg1) => {
  let kub = arg1 ** 3;
  return kub;
};
console.log(Kubnihajmi(5));

// 2-masala
function maxtwonumbers(arg1, arg2) {
  let max;
  if (arg1 > arg2) {
    max = arg1;
  } else {
    max = arg2;
  }
  return max * 2;
}
console.log(maxtwonumbers(9, 5));

const maxTwonumbers = function (arg1, arg2) {
  let max;
  if (arg1 > arg2) {
    max = arg1;
  } else {
    max = arg2;
  }
  return max * 2;
};
console.log(maxTwonumbers(3, 5));

const MaxTwonumbers = (arg1, arg2) => {
  let max;
  if (arg1 > arg2) {
    max = arg1;
  } else {
    max = arg2;
  }
  return max * 2;
};
console.log(MaxTwonumbers(3, 7));

// 3-masala

function raqamlaryigindisi(son) {
  if (son >= 100 && son <= 999) {
    let birlik = son % 10;
    let onlik = Math.floor((son % 100) / 10);
    let yuzlik = Math.floor(son / 100);

    let yigindi = birlik + onlik + yuzlik;
    return yigindi;
  } else {
    return "Faqat 3-xonali sonlarni kiriting!";
  }
}
console.log(raqamlaryigindisi(225));

const Raqamlaryigindisi = function (son) {
  if (son >= 100 && son <= 999) {
    let birlik = son % 10;
    let onlik = Math.floor((son % 100) / 10);
    let yuzlik = Math.floor(son / 100);

    let yigindi = birlik + onlik + yuzlik;
    return yigindi;
  } else {
    return "Faqat 3-xonali sonlarni kiriting!";
  }
};

console.log(Raqamlaryigindisi(255));

const RaqamlarYigindisi = (son) => {
  if (son >= 100 && son <= 999) {
    let birlik = son % 10;
    let onlik = Math.floor((son % 100) / 10);
    let yuzlik = Math.floor(son / 100);

    let yigindi = birlik + onlik + yuzlik;
    return yigindi;
  } else {
    return "Faqat 3-xonali sonlarni kiriting!";
  }
};
console.log(RaqamlarYigindisi(555));

// 4-masala
function sonningbuluvchilari(arg = 10) {
  let buluvchilari = 0;

  for (let i = 1; i <= Math.abs(arg); i++) {
    if (Math.abs(arg) % i === 0) {
      buluvchilari++;
    }
  }

  return buluvchilari;
}
console.log(sonningbuluvchilari(30));

const Sonningbuluvchilari = function (arg) {
  let buluvchilari = 0;

  for (let i = 1; i <= Math.abs(arg); i++) {
    if (Math.abs(arg) % i === 0) {
      buluvchilari++;
    }
  }

  return buluvchilari;
};
console.log(Sonningbuluvchilari(20));

const SonningBuluvchilari = (arg) => {
  let buluvchilari = 0;

  for (let i = 1; i <= Math.abs(arg); i++) {
    if (Math.abs(arg) % i === 0) {
      buluvchilari++;
    }
  }

  return buluvchilari;
};
console.log(SonningBuluvchilari(10));

// 5-masala
function toqsonlaryigindisi(n) {
  let yigindi = 0;

  for (let i = 1; i <= n; i += 2) {
    yigindi += i;
  }

  return yigindi;
}
console.log(toqsonlaryigindisi(7));

const Toqsonlaryigindisi = function (n) {
  let yigindi = 0;

  for (let i = 1; i <= n; i += 2) {
    yigindi += i;
  }

  return yigindi;
};
console.log(Toqsonlaryigindisi(3));

const ToqSonlaryigindisi = (n) => {
  let yigindi = 0;

  for (let i = 1; i <= n; i += 2) {
    yigindi += i;
  }

  return yigindi;
};
console.log(ToqSonlaryigindisi(5));

// 6-masala
function kupaytma(a, b) {
  let kupaytmasi = 1;

  for (let i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      kupaytmasi *= i;
    }
  }

  return kupaytmasi;
}
console.log(kupaytma(1, 30));

const Kupaytma = function (a, b) {
  let kupaytmasi = 1;
  for (let i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      kupaytmasi *= i;
    }
  }
  return kupaytmasi;
};
console.log(Kupaytma(1, 50));

const KUpaytma = (a, b) => {
  let kupaytmasi = 1;
  for (let i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      kupaytmasi *= i;
    }
  }
  return kupaytmasi;
};
console.log(KUpaytma(1, 20));

// 7-masala
function tubSonTekshirish(son) {
  if (son < 2) {
    return "tub emas";
  }

  for (let i = 2; i <= Math.sqrt(son); i++) {
    if (son % i === 0) {
      return "tub emas";
    }
  }

  return "tub son";
}
console.log(tubSonTekshirish(11));

const tubsontekshirish = function (son) {
  if (son < 2) {
    return "tub emas";
  }

  for (let i = 2; i <= Math.sqrt(son); i++) {
    if (son % i === 0) {
      return "tub emas";
    }
  }

  return "tub son";
};
console.log(tubsontekshirish(10));

const Tubsontekshirish = (son) => {
  if (son < 2) {
    return "tub emas";
  }

  for (let i = 2; i <= Math.sqrt(son); i++) {
    if (son % i === 0) {
      return "tub emas";
    }
  }

  return "tub son";
};
console.log(Tubsontekshirish(11));

// 8-masala
