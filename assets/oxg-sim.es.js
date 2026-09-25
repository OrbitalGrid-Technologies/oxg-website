var Rd = Object.defineProperty;
var Cd = (i, e, t) => e in i ? Rd(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Z = (i, e, t) => Cd(i, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Co = "170", ji = { ROTATE: 0, DOLLY: 1, PAN: 2 }, qi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Pd = 0, el = 1, Dd = 2, Uc = 1, Ld = 2, Dn = 3, ni = 0, Bt = 1, vn = 2, Qn = 0, Zi = 1, Da = 2, tl = 3, nl = 4, Id = 5, mi = 100, Ud = 101, Nd = 102, Od = 103, Fd = 104, kd = 200, Bd = 201, zd = 202, Hd = 203, La = 204, Ia = 205, Vd = 206, Gd = 207, Wd = 208, Xd = 209, $d = 210, qd = 211, Yd = 212, jd = 213, Zd = 214, Ua = 0, Na = 1, Oa = 2, es = 3, Fa = 4, ka = 5, Ba = 6, za = 7, Nc = 0, Kd = 1, Jd = 2, ei = 0, Qd = 1, eu = 2, tu = 3, Oc = 4, nu = 5, iu = 6, su = 7, Fc = 300, ts = 301, ns = 302, Ha = 303, Va = 304, Wr = 306, Pr = 1e3, Kn = 1001, Ga = 1002, fn = 1003, ru = 1004, Ws = 1005, yn = 1006, Zr = 1007, _i = 1008, Fn = 1009, kc = 1010, Bc = 1011, Ps = 1012, Po = 1013, xi = 1014, Ln = 1015, zs = 1016, Do = 1017, Lo = 1018, is = 1020, zc = 35902, Hc = 1021, Vc = 1022, dn = 1023, Gc = 1024, Wc = 1025, Ki = 1026, ss = 1027, Xc = 1028, Io = 1029, $c = 1030, Uo = 1031, No = 1033, Mr = 33776, Er = 33777, Tr = 33778, wr = 33779, Wa = 35840, Xa = 35841, $a = 35842, qa = 35843, Ya = 36196, ja = 37492, Za = 37496, Ka = 37808, Ja = 37809, Qa = 37810, eo = 37811, to = 37812, no = 37813, io = 37814, so = 37815, ro = 37816, ao = 37817, oo = 37818, lo = 37819, co = 37820, uo = 37821, Ar = 36492, ho = 36494, fo = 36495, qc = 36283, po = 36284, mo = 36285, go = 36286, au = 3200, ou = 3201, lu = 0, cu = 1, Zn = "", It = "srgb", fs = "srgb-linear", Xr = "linear", ot = "srgb", Ri = 7680, il = 519, du = 512, uu = 513, hu = 514, Yc = 515, fu = 516, pu = 517, mu = 518, gu = 519, _o = 35044, sl = "300 es", In = 2e3, Dr = 2001;
class Ei {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const s = this._listeners[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++)
        s[r].call(this, e);
      e.target = null;
    }
  }
}
const Dt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let rl = 1234567;
const Rs = Math.PI / 180, Ds = 180 / Math.PI;
function Un() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Dt[i & 255] + Dt[i >> 8 & 255] + Dt[i >> 16 & 255] + Dt[i >> 24 & 255] + "-" + Dt[e & 255] + Dt[e >> 8 & 255] + "-" + Dt[e >> 16 & 15 | 64] + Dt[e >> 24 & 255] + "-" + Dt[t & 63 | 128] + Dt[t >> 8 & 255] + "-" + Dt[t >> 16 & 255] + Dt[t >> 24 & 255] + Dt[n & 255] + Dt[n >> 8 & 255] + Dt[n >> 16 & 255] + Dt[n >> 24 & 255]).toLowerCase();
}
function At(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Oo(i, e) {
  return (i % e + e) % e;
}
function _u(i, e, t, n, s) {
  return n + (i - e) * (s - n) / (t - e);
}
function vu(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function Cs(i, e, t) {
  return (1 - t) * i + t * e;
}
function xu(i, e, t, n) {
  return Cs(i, e, 1 - Math.exp(-t * n));
}
function yu(i, e = 1) {
  return e - Math.abs(Oo(i, e * 2) - e);
}
function Su(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * (3 - 2 * i));
}
function bu(i, e, t) {
  return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e), i * i * i * (i * (i * 6 - 15) + 10));
}
function Mu(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function Eu(i, e) {
  return i + Math.random() * (e - i);
}
function Tu(i) {
  return i * (0.5 - Math.random());
}
function wu(i) {
  i !== void 0 && (rl = i);
  let e = rl += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Au(i) {
  return i * Rs;
}
function Ru(i) {
  return i * Ds;
}
function Cu(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function Pu(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function Du(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Lu(i, e, t, n, s) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + n) / 2), u = a((e + n) / 2), h = r((e - n) / 2), d = a((e - n) / 2), p = r((n - e) / 2), _ = a((n - e) / 2);
  switch (s) {
    case "XYX":
      i.set(o * u, l * h, l * d, o * c);
      break;
    case "YZY":
      i.set(l * d, o * u, l * h, o * c);
      break;
    case "ZXZ":
      i.set(l * h, l * d, o * u, o * c);
      break;
    case "XZX":
      i.set(o * u, l * _, l * p, o * c);
      break;
    case "YXY":
      i.set(l * p, o * u, l * _, o * c);
      break;
    case "ZYZ":
      i.set(l * _, l * p, o * u, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function cn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function at(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const jc = {
  DEG2RAD: Rs,
  RAD2DEG: Ds,
  generateUUID: Un,
  clamp: At,
  euclideanModulo: Oo,
  mapLinear: _u,
  inverseLerp: vu,
  lerp: Cs,
  damp: xu,
  pingpong: yu,
  smoothstep: Su,
  smootherstep: bu,
  randInt: Mu,
  randFloat: Eu,
  randFloatSpread: Tu,
  seededRandom: wu,
  degToRad: Au,
  radToDeg: Ru,
  isPowerOfTwo: Cu,
  ceilPowerOfTwo: Pu,
  floorPowerOfTwo: Du,
  setQuaternionFromProperEuler: Lu,
  normalize: at,
  denormalize: cn
};
class Le {
  constructor(e = 0, t = 0) {
    Le.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(At(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), s = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * s + e.x, this.y = r * s + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class He {
  constructor(e, t, n, s, r, a, o, l, c) {
    He.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, r, a, o, l, c);
  }
  set(e, t, n, s, r, a, o, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = s, u[2] = o, u[3] = t, u[4] = r, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], p = n[5], _ = n[8], g = s[0], m = s[3], f = s[6], E = s[1], M = s[4], v = s[7], N = s[2], w = s[5], A = s[8];
    return r[0] = a * g + o * E + l * N, r[3] = a * m + o * M + l * w, r[6] = a * f + o * v + l * A, r[1] = c * g + u * E + h * N, r[4] = c * m + u * M + h * w, r[7] = c * f + u * v + h * A, r[2] = d * g + p * E + _ * N, r[5] = d * m + p * M + _ * w, r[8] = d * f + p * v + _ * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * a * u - t * o * c - n * r * u + n * o * l + s * r * c - s * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = u * a - o * c, d = o * l - u * r, p = c * r - a * l, _ = t * h + n * d + s * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = h * g, e[1] = (s * c - u * n) * g, e[2] = (o * n - s * a) * g, e[3] = d * g, e[4] = (u * t - s * l) * g, e[5] = (s * r - o * t) * g, e[6] = p * g, e[7] = (n * l - c * t) * g, e[8] = (a * t - n * r) * g, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, s, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -s * c,
      s * l,
      -s * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Kr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Kr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Kr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 9; s++)
      if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Kr = /* @__PURE__ */ new He();
function Zc(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Ls(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Iu() {
  const i = Ls("canvas");
  return i.style.display = "block", i;
}
const al = {};
function Ts(i) {
  i in al || (al[i] = !0, console.warn(i));
}
function Uu(i, e, t) {
  return new Promise(function(n, s) {
    function r() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function Nu(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Ou(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Qe = {
  enabled: !0,
  workingColorSpace: fs,
  /**
   * Implementations of supported color spaces.
   *
   * Required:
   *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
   *	- whitePoint: reference white [ x y ]
   *	- transfer: transfer function (pre-defined)
   *	- toXYZ: Matrix3 RGB to XYZ transform
   *	- fromXYZ: Matrix3 XYZ to RGB transform
   *	- luminanceCoefficients: RGB luminance coefficients
   *
   * Optional:
   *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
   *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
   *
   * Reference:
   * - https://www.russellcottrell.com/photo/matrixCalculator.htm
   */
  spaces: {},
  convert: function(i, e, t) {
    return this.enabled === !1 || e === t || !e || !t || (this.spaces[e].transfer === ot && (i.r = Nn(i.r), i.g = Nn(i.g), i.b = Nn(i.b)), this.spaces[e].primaries !== this.spaces[t].primaries && (i.applyMatrix3(this.spaces[e].toXYZ), i.applyMatrix3(this.spaces[t].fromXYZ)), this.spaces[t].transfer === ot && (i.r = Ji(i.r), i.g = Ji(i.g), i.b = Ji(i.b))), i;
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this.workingColorSpace);
  },
  getPrimaries: function(i) {
    return this.spaces[i].primaries;
  },
  getTransfer: function(i) {
    return i === Zn ? Xr : this.spaces[i].transfer;
  },
  getLuminanceCoefficients: function(i, e = this.workingColorSpace) {
    return i.fromArray(this.spaces[e].luminanceCoefficients);
  },
  define: function(i) {
    Object.assign(this.spaces, i);
  },
  // Internal APIs
  _getMatrix: function(i, e, t) {
    return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ);
  },
  _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  }
};
function Nn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ji(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const ol = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], ll = [0.2126, 0.7152, 0.0722], cl = [0.3127, 0.329], dl = /* @__PURE__ */ new He().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), ul = /* @__PURE__ */ new He().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
Qe.define({
  [fs]: {
    primaries: ol,
    whitePoint: cl,
    transfer: Xr,
    toXYZ: dl,
    fromXYZ: ul,
    luminanceCoefficients: ll,
    workingColorSpaceConfig: { unpackColorSpace: It },
    outputColorSpaceConfig: { drawingBufferColorSpace: It }
  },
  [It]: {
    primaries: ol,
    whitePoint: cl,
    transfer: ot,
    toXYZ: dl,
    fromXYZ: ul,
    luminanceCoefficients: ll,
    outputColorSpaceConfig: { drawingBufferColorSpace: It }
  }
});
let Ci;
class Fu {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Ci === void 0 && (Ci = Ls("canvas")), Ci.width = e.width, Ci.height = e.height;
      const n = Ci.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ci;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ls("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let a = 0; a < r.length; a++)
        r[a] = Nn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Nn(t[n] / 255) * 255) : t[n] = Nn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let ku = 0;
class Kc {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: ku++ }), this.uuid = Un(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++)
          s[a].isDataTexture ? r.push(Jr(s[a].image)) : r.push(Jr(s[a]));
      } else
        r = Jr(s);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Jr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Fu.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Bu = 0;
class Ut extends Ei {
  constructor(e = Ut.DEFAULT_IMAGE, t = Ut.DEFAULT_MAPPING, n = Kn, s = Kn, r = yn, a = _i, o = dn, l = Fn, c = Ut.DEFAULT_ANISOTROPY, u = Zn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Bu++ }), this.uuid = Un(), this.name = "", this.source = new Kc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Le(0, 0), this.repeat = new Le(1, 1), this.center = new Le(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new He(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Fc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Pr:
          e.x = e.x - Math.floor(e.x);
          break;
        case Kn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ga:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Pr:
          e.y = e.y - Math.floor(e.y);
          break;
        case Kn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ga:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Ut.DEFAULT_IMAGE = null;
Ut.DEFAULT_MAPPING = Fc;
Ut.DEFAULT_ANISOTROPY = 1;
class ut {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    ut.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, s) {
    return this.x = e, this.y = t, this.z = n, this.w = s, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * s + a[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, s, r;
    const l = e.elements, c = l[0], u = l[4], h = l[8], d = l[1], p = l[5], _ = l[9], g = l[2], m = l[6], f = l[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(h - g) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(h + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2, v = (p + 1) / 2, N = (f + 1) / 2, w = (u + d) / 4, A = (h + g) / 4, P = (_ + m) / 4;
      return M > v && M > N ? M < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(M), s = w / n, r = A / n) : v > N ? v < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(v), n = w / s, r = P / s) : N < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(N), n = A / r, s = P / r), this.set(n, s, r, t), this;
    }
    let E = Math.sqrt((m - _) * (m - _) + (h - g) * (h - g) + (d - u) * (d - u));
    return Math.abs(E) < 1e-3 && (E = 1), this.x = (m - _) / E, this.y = (h - g) / E, this.z = (d - u) / E, this.w = Math.acos((c + p + f - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class zu extends Ei {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ut(0, 0, e, t), this.scissorTest = !1, this.viewport = new ut(0, 0, e, t);
    const s = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: yn,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const r = new Ut(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let s = 0, r = this.textures.length; s < r; s++)
        this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, s = e.textures.length; n < s; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Kc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class yi extends zu {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Jc extends Ut {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = fn, this.minFilter = fn, this.wrapR = Kn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Hu extends Ut {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = fn, this.minFilter = fn, this.wrapR = Kn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Si {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = s;
  }
  static slerpFlat(e, t, n, s, r, a, o) {
    let l = n[s + 0], c = n[s + 1], u = n[s + 2], h = n[s + 3];
    const d = r[a + 0], p = r[a + 1], _ = r[a + 2], g = r[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (h !== g || l !== d || c !== p || u !== _) {
      let m = 1 - o;
      const f = l * d + c * p + u * _ + h * g, E = f >= 0 ? 1 : -1, M = 1 - f * f;
      if (M > Number.EPSILON) {
        const N = Math.sqrt(M), w = Math.atan2(N, f * E);
        m = Math.sin(m * w) / N, o = Math.sin(o * w) / N;
      }
      const v = o * E;
      if (l = l * m + d * v, c = c * m + p * v, u = u * m + _ * v, h = h * m + g * v, m === 1 - o) {
        const N = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= N, c *= N, u *= N, h *= N;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, s, r, a) {
    const o = n[s], l = n[s + 1], c = n[s + 2], u = n[s + 3], h = r[a], d = r[a + 1], p = r[a + 2], _ = r[a + 3];
    return e[t] = o * _ + u * h + l * p - c * d, e[t + 1] = l * _ + u * d + c * h - o * p, e[t + 2] = c * _ + u * p + o * d - l * h, e[t + 3] = u * _ - o * h - l * d - c * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, s) {
    return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, s = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(s / 2), h = o(r / 2), d = l(n / 2), p = l(s / 2), _ = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * u * h + c * p * _, this._y = c * p * h - d * u * _, this._z = c * u * _ + d * p * h, this._w = c * u * h - d * p * _;
        break;
      case "YXZ":
        this._x = d * u * h + c * p * _, this._y = c * p * h - d * u * _, this._z = c * u * _ - d * p * h, this._w = c * u * h + d * p * _;
        break;
      case "ZXY":
        this._x = d * u * h - c * p * _, this._y = c * p * h + d * u * _, this._z = c * u * _ + d * p * h, this._w = c * u * h - d * p * _;
        break;
      case "ZYX":
        this._x = d * u * h - c * p * _, this._y = c * p * h + d * u * _, this._z = c * u * _ - d * p * h, this._w = c * u * h + d * p * _;
        break;
      case "YZX":
        this._x = d * u * h + c * p * _, this._y = c * p * h + d * u * _, this._z = c * u * _ - d * p * h, this._w = c * u * h - d * p * _;
        break;
      case "XZY":
        this._x = d * u * h - c * p * _, this._y = c * p * h - d * u * _, this._z = c * u * _ + d * p * h, this._w = c * u * h + d * p * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, s = Math.sin(n);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], s = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], u = t[6], h = t[10], d = n + o + h;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (u - l) * p, this._y = (r - c) * p, this._z = (a - s) * p;
    } else if (n > o && n > h) {
      const p = 2 * Math.sqrt(1 + n - o - h);
      this._w = (u - l) / p, this._x = 0.25 * p, this._y = (s + a) / p, this._z = (r + c) / p;
    } else if (o > h) {
      const p = 2 * Math.sqrt(1 + o - n - h);
      this._w = (r - c) / p, this._x = (s + a) / p, this._y = 0.25 * p, this._z = (l + u) / p;
    } else {
      const p = 2 * Math.sqrt(1 + h - n - o);
      this._w = (a - s) / p, this._x = (r + c) / p, this._y = (l + u) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(At(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, s = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + a * o + s * c - r * l, this._y = s * u + a * l + r * o - n * c, this._z = r * u + a * c + n * l - s * o, this._w = a * u - n * o - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, s = this._y, r = this._z, a = this._w;
    let o = a * e._w + n * e._x + s * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = s, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * s + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), h = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
    return this._w = a * h + this._w * d, this._x = n * h + this._x * d, this._y = s * h + this._y * d, this._z = r * h + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(
      s * Math.sin(e),
      s * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(hl.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(hl.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * s, this.y = r[1] * t + r[4] * n + r[7] * s, this.z = r[2] * t + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, s = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * s - o * n), u = 2 * (o * t - r * s), h = 2 * (r * n - a * t);
    return this.x = t + l * c + a * h - o * u, this.y = n + l * u + o * c - r * h, this.z = s + l * h + r * u - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * s, this.y = r[1] * t + r[5] * n + r[9] * s, this.z = r[2] * t + r[6] * n + r[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, s = e.y, r = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = s * l - r * o, this.y = r * a - n * l, this.z = n * o - s * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Qr.copy(this).projectOnVector(e), this.sub(Qr);
  }
  reflect(e) {
    return this.sub(Qr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(At(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Qr = /* @__PURE__ */ new R(), hl = /* @__PURE__ */ new Si();
class ai {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(rn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(rn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = rn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, rn) : rn.fromBufferAttribute(r, a), rn.applyMatrix4(e.matrixWorld), this.expandByPoint(rn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Xs.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Xs.copy(n.boundingBox)), Xs.applyMatrix4(e.matrixWorld), this.union(Xs);
    }
    const s = e.children;
    for (let r = 0, a = s.length; r < a; r++)
      this.expandByObject(s[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, rn), rn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(_s), $s.subVectors(this.max, _s), Pi.subVectors(e.a, _s), Di.subVectors(e.b, _s), Li.subVectors(e.c, _s), Vn.subVectors(Di, Pi), Gn.subVectors(Li, Di), li.subVectors(Pi, Li);
    let t = [
      0,
      -Vn.z,
      Vn.y,
      0,
      -Gn.z,
      Gn.y,
      0,
      -li.z,
      li.y,
      Vn.z,
      0,
      -Vn.x,
      Gn.z,
      0,
      -Gn.x,
      li.z,
      0,
      -li.x,
      -Vn.y,
      Vn.x,
      0,
      -Gn.y,
      Gn.x,
      0,
      -li.y,
      li.x,
      0
    ];
    return !ea(t, Pi, Di, Li, $s) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ea(t, Pi, Di, Li, $s)) ? !1 : (qs.crossVectors(Vn, Gn), t = [qs.x, qs.y, qs.z], ea(t, Pi, Di, Li, $s));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, rn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(rn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Tn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Tn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Tn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Tn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Tn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Tn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Tn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Tn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Tn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Tn = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], rn = /* @__PURE__ */ new R(), Xs = /* @__PURE__ */ new ai(), Pi = /* @__PURE__ */ new R(), Di = /* @__PURE__ */ new R(), Li = /* @__PURE__ */ new R(), Vn = /* @__PURE__ */ new R(), Gn = /* @__PURE__ */ new R(), li = /* @__PURE__ */ new R(), _s = /* @__PURE__ */ new R(), $s = /* @__PURE__ */ new R(), qs = /* @__PURE__ */ new R(), ci = /* @__PURE__ */ new R();
function ea(i, e, t, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    ci.fromArray(i, r);
    const o = s.x * Math.abs(ci.x) + s.y * Math.abs(ci.y) + s.z * Math.abs(ci.z), l = e.dot(ci), c = t.dot(ci), u = n.dot(ci);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const Vu = /* @__PURE__ */ new ai(), vs = /* @__PURE__ */ new R(), ta = /* @__PURE__ */ new R();
class Ti {
  constructor(e = new R(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Vu.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let r = 0, a = e.length; r < a; r++)
      s = Math.max(s, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    vs.subVectors(e, this.center);
    const t = vs.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(vs, s / n), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ta.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(vs.copy(e.center).add(ta)), this.expandByPoint(vs.copy(e.center).sub(ta))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wn = /* @__PURE__ */ new R(), na = /* @__PURE__ */ new R(), Ys = /* @__PURE__ */ new R(), Wn = /* @__PURE__ */ new R(), ia = /* @__PURE__ */ new R(), js = /* @__PURE__ */ new R(), sa = /* @__PURE__ */ new R();
class $r {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, wn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (wn.copy(this.origin).addScaledVector(this.direction, t), wn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    na.copy(e).add(t).multiplyScalar(0.5), Ys.copy(t).sub(e).normalize(), Wn.copy(this.origin).sub(na);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Ys), o = Wn.dot(this.direction), l = -Wn.dot(Ys), c = Wn.lengthSq(), u = Math.abs(1 - a * a);
    let h, d, p, _;
    if (u > 0)
      if (h = a * l - o, d = a * o - l, _ = r * u, h >= 0)
        if (d >= -_)
          if (d <= _) {
            const g = 1 / u;
            h *= g, d *= g, p = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * l) + c;
          } else
            d = r, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * l) + c;
        else
          d = -r, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * l) + c;
      else
        d <= -_ ? (h = Math.max(0, -(-a * r + o)), d = h > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -h * h + d * (d + 2 * l) + c) : d <= _ ? (h = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (h = Math.max(0, -(a * r + o)), d = h > 0 ? r : Math.min(Math.max(-r, -l), r), p = -h * h + d * (d + 2 * l) + c);
    else
      d = a > 0 ? -r : r, h = Math.max(0, -(a * d + o)), p = -h * h + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), s && s.copy(na).addScaledVector(Ys, d), p;
  }
  intersectSphere(e, t) {
    wn.subVectors(e.center, this.origin);
    const n = wn.dot(this.direction), s = wn.dot(wn) - n * n, r = e.radius * e.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, s, r, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, s = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, s = (e.min.x - d.x) * c), u >= 0 ? (r = (e.min.y - d.y) * u, a = (e.max.y - d.y) * u) : (r = (e.max.y - d.y) * u, a = (e.min.y - d.y) * u), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), h >= 0 ? (o = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (o = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || o > s) || ((o > n || n !== n) && (n = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, wn) !== null;
  }
  intersectTriangle(e, t, n, s, r) {
    ia.subVectors(t, e), js.subVectors(n, e), sa.crossVectors(ia, js);
    let a = this.direction.dot(sa), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Wn.subVectors(this.origin, e);
    const l = o * this.direction.dot(js.crossVectors(Wn, js));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(ia.cross(Wn));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * Wn.dot(sa);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class pt {
  constructor(e, t, n, s, r, a, o, l, c, u, h, d, p, _, g, m) {
    pt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, r, a, o, l, c, u, h, d, p, _, g, m);
  }
  set(e, t, n, s, r, a, o, l, c, u, h, d, p, _, g, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = s, f[1] = r, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = u, f[10] = h, f[14] = d, f[3] = p, f[7] = _, f[11] = g, f[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new pt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, s = 1 / Ii.setFromMatrixColumn(e, 0).length(), r = 1 / Ii.setFromMatrixColumn(e, 1).length(), a = 1 / Ii.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(s), c = Math.sin(s), u = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * u, p = a * h, _ = o * u, g = o * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = p + _ * c, t[5] = d - g * c, t[9] = -o * l, t[2] = g - d * c, t[6] = _ + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * u, p = l * h, _ = c * u, g = c * h;
      t[0] = d + g * o, t[4] = _ * o - p, t[8] = a * c, t[1] = a * h, t[5] = a * u, t[9] = -o, t[2] = p * o - _, t[6] = g + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * u, p = l * h, _ = c * u, g = c * h;
      t[0] = d - g * o, t[4] = -a * h, t[8] = _ + p * o, t[1] = p + _ * o, t[5] = a * u, t[9] = g - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * u, p = a * h, _ = o * u, g = o * h;
      t[0] = l * u, t[4] = _ * c - p, t[8] = d * c + g, t[1] = l * h, t[5] = g * c + d, t[9] = p * c - _, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, p = a * c, _ = o * l, g = o * c;
      t[0] = l * u, t[4] = g - d * h, t[8] = _ * h + p, t[1] = h, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = p * h + _, t[10] = d - g * h;
    } else if (e.order === "XZY") {
      const d = a * l, p = a * c, _ = o * l, g = o * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = d * h + g, t[5] = a * u, t[9] = p * h - _, t[2] = _ * h - p, t[6] = o * u, t[10] = g * h + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Gu, e, Wu);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return $t.subVectors(e, t), $t.lengthSq() === 0 && ($t.z = 1), $t.normalize(), Xn.crossVectors(n, $t), Xn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? $t.x += 1e-4 : $t.z += 1e-4, $t.normalize(), Xn.crossVectors(n, $t)), Xn.normalize(), Zs.crossVectors($t, Xn), s[0] = Xn.x, s[4] = Zs.x, s[8] = $t.x, s[1] = Xn.y, s[5] = Zs.y, s[9] = $t.y, s[2] = Xn.z, s[6] = Zs.z, s[10] = $t.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], p = n[13], _ = n[2], g = n[6], m = n[10], f = n[14], E = n[3], M = n[7], v = n[11], N = n[15], w = s[0], A = s[4], P = s[8], b = s[12], y = s[1], C = s[5], H = s[9], O = s[13], G = s[2], $ = s[6], B = s[10], te = s[14], W = s[3], re = s[7], ce = s[11], Ee = s[15];
    return r[0] = a * w + o * y + l * G + c * W, r[4] = a * A + o * C + l * $ + c * re, r[8] = a * P + o * H + l * B + c * ce, r[12] = a * b + o * O + l * te + c * Ee, r[1] = u * w + h * y + d * G + p * W, r[5] = u * A + h * C + d * $ + p * re, r[9] = u * P + h * H + d * B + p * ce, r[13] = u * b + h * O + d * te + p * Ee, r[2] = _ * w + g * y + m * G + f * W, r[6] = _ * A + g * C + m * $ + f * re, r[10] = _ * P + g * H + m * B + f * ce, r[14] = _ * b + g * O + m * te + f * Ee, r[3] = E * w + M * y + v * G + N * W, r[7] = E * A + M * C + v * $ + N * re, r[11] = E * P + M * H + v * B + N * ce, r[15] = E * b + M * O + v * te + N * Ee, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], s = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], u = e[2], h = e[6], d = e[10], p = e[14], _ = e[3], g = e[7], m = e[11], f = e[15];
    return _ * (+r * l * h - s * c * h - r * o * d + n * c * d + s * o * p - n * l * p) + g * (+t * l * p - t * c * d + r * a * d - s * a * p + s * c * u - r * l * u) + m * (+t * c * h - t * o * p - r * a * h + n * a * p + r * o * u - n * c * u) + f * (-s * o * u - t * l * h + t * o * d + s * a * h - n * a * d + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], p = e[11], _ = e[12], g = e[13], m = e[14], f = e[15], E = h * m * c - g * d * c + g * l * p - o * m * p - h * l * f + o * d * f, M = _ * d * c - u * m * c - _ * l * p + a * m * p + u * l * f - a * d * f, v = u * g * c - _ * h * c + _ * o * p - a * g * p - u * o * f + a * h * f, N = _ * h * l - u * g * l - _ * o * d + a * g * d + u * o * m - a * h * m, w = t * E + n * M + s * v + r * N;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / w;
    return e[0] = E * A, e[1] = (g * d * r - h * m * r - g * s * p + n * m * p + h * s * f - n * d * f) * A, e[2] = (o * m * r - g * l * r + g * s * c - n * m * c - o * s * f + n * l * f) * A, e[3] = (h * l * r - o * d * r - h * s * c + n * d * c + o * s * p - n * l * p) * A, e[4] = M * A, e[5] = (u * m * r - _ * d * r + _ * s * p - t * m * p - u * s * f + t * d * f) * A, e[6] = (_ * l * r - a * m * r - _ * s * c + t * m * c + a * s * f - t * l * f) * A, e[7] = (a * d * r - u * l * r + u * s * c - t * d * c - a * s * p + t * l * p) * A, e[8] = v * A, e[9] = (_ * h * r - u * g * r - _ * n * p + t * g * p + u * n * f - t * h * f) * A, e[10] = (a * g * r - _ * o * r + _ * n * c - t * g * c - a * n * f + t * o * f) * A, e[11] = (u * o * r - a * h * r - u * n * c + t * h * c + a * n * p - t * o * p) * A, e[12] = N * A, e[13] = (u * g * s - _ * h * s + _ * n * d - t * g * d - u * n * m + t * h * m) * A, e[14] = (_ * o * s - a * g * s - _ * n * l + t * g * l + a * n * m - t * o * m) * A, e[15] = (a * h * s - u * o * s + u * n * l - t * h * l - a * n * d + t * o * d) * A, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z;
    return t[0] *= n, t[4] *= s, t[8] *= r, t[1] *= n, t[5] *= s, t[9] *= r, t[2] *= n, t[6] *= s, t[10] *= r, t[3] *= n, t[7] *= s, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), s = Math.sin(t), r = 1 - n, a = e.x, o = e.y, l = e.z, c = r * a, u = r * o;
    return this.set(
      c * a + n,
      c * o - s * l,
      c * l + s * o,
      0,
      c * o + s * l,
      u * o + n,
      u * l - s * a,
      0,
      c * l - s * o,
      u * l + s * a,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, s, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      a,
      0,
      t,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const s = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, u = a + a, h = o + o, d = r * c, p = r * u, _ = r * h, g = a * u, m = a * h, f = o * h, E = l * c, M = l * u, v = l * h, N = n.x, w = n.y, A = n.z;
    return s[0] = (1 - (g + f)) * N, s[1] = (p + v) * N, s[2] = (_ - M) * N, s[3] = 0, s[4] = (p - v) * w, s[5] = (1 - (d + f)) * w, s[6] = (m + E) * w, s[7] = 0, s[8] = (_ + M) * A, s[9] = (m - E) * A, s[10] = (1 - (d + g)) * A, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, n) {
    const s = this.elements;
    let r = Ii.set(s[0], s[1], s[2]).length();
    const a = Ii.set(s[4], s[5], s[6]).length(), o = Ii.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], an.copy(this);
    const c = 1 / r, u = 1 / a, h = 1 / o;
    return an.elements[0] *= c, an.elements[1] *= c, an.elements[2] *= c, an.elements[4] *= u, an.elements[5] *= u, an.elements[6] *= u, an.elements[8] *= h, an.elements[9] *= h, an.elements[10] *= h, t.setFromRotationMatrix(an), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, s, r, a, o = In) {
    const l = this.elements, c = 2 * r / (t - e), u = 2 * r / (n - s), h = (t + e) / (t - e), d = (n + s) / (n - s);
    let p, _;
    if (o === In)
      p = -(a + r) / (a - r), _ = -2 * a * r / (a - r);
    else if (o === Dr)
      p = -a / (a - r), _ = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, r, a, o = In) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - s), h = 1 / (a - r), d = (t + e) * c, p = (n + s) * u;
    let _, g;
    if (o === In)
      _ = (a + r) * h, g = -2 * h;
    else if (o === Dr)
      _ = r * h, g = -1 * h;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = g, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 16; s++)
      if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Ii = /* @__PURE__ */ new R(), an = /* @__PURE__ */ new pt(), Gu = /* @__PURE__ */ new R(0, 0, 0), Wu = /* @__PURE__ */ new R(1, 1, 1), Xn = /* @__PURE__ */ new R(), Zs = /* @__PURE__ */ new R(), $t = /* @__PURE__ */ new R(), fl = /* @__PURE__ */ new pt(), pl = /* @__PURE__ */ new Si();
class kn {
  constructor(e = 0, t = 0, n = 0, s = kn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, s = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const s = e.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], u = s[9], h = s[2], d = s[6], p = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(At(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-At(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(At(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-At(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(At(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-At(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return fl.makeRotationFromQuaternion(e), this.setFromRotationMatrix(fl, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return pl.setFromEuler(this), this.setFromQuaternion(pl, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
kn.DEFAULT_ORDER = "XYZ";
class Qc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Xu = 0;
const ml = /* @__PURE__ */ new R(), Ui = /* @__PURE__ */ new Si(), An = /* @__PURE__ */ new pt(), Ks = /* @__PURE__ */ new R(), xs = /* @__PURE__ */ new R(), $u = /* @__PURE__ */ new R(), qu = /* @__PURE__ */ new Si(), gl = /* @__PURE__ */ new R(1, 0, 0), _l = /* @__PURE__ */ new R(0, 1, 0), vl = /* @__PURE__ */ new R(0, 0, 1), xl = { type: "added" }, Yu = { type: "removed" }, Ni = { type: "childadded", child: null }, ra = { type: "childremoved", child: null };
class Nt extends Ei {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Xu++ }), this.uuid = Un(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Nt.DEFAULT_UP.clone();
    const e = new R(), t = new kn(), n = new Si(), s = new R(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new pt()
      },
      normalMatrix: {
        value: new He()
      }
    }), this.matrix = new pt(), this.matrixWorld = new pt(), this.matrixAutoUpdate = Nt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Qc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ui.setFromAxisAngle(e, t), this.quaternion.multiply(Ui), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ui.setFromAxisAngle(e, t), this.quaternion.premultiply(Ui), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(gl, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(_l, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(vl, e);
  }
  translateOnAxis(e, t) {
    return ml.copy(e).applyQuaternion(this.quaternion), this.position.add(ml.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(gl, e);
  }
  translateY(e) {
    return this.translateOnAxis(_l, e);
  }
  translateZ(e) {
    return this.translateOnAxis(vl, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(An.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ks.copy(e) : Ks.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), xs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? An.lookAt(xs, Ks, this.up) : An.lookAt(Ks, xs, this.up), this.quaternion.setFromRotationMatrix(An), s && (An.extractRotation(s.matrixWorld), Ui.setFromRotationMatrix(An), this.quaternion.premultiply(Ui.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(xl), Ni.child = e, this.dispatchEvent(Ni), Ni.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Yu), ra.child = e, this.dispatchEvent(ra), ra.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), An.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), An.multiply(e.parent.matrixWorld)), e.applyMatrix4(An), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(xl), Ni.child = e, this.dispatchEvent(Ni), Ni.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++)
      s[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xs, e, $u), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(xs, qu, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++)
        s[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            r(e.shapes, h);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(e.materials, this.material[l]));
        s.material = o;
      } else
        s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++)
        s.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        s.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), u = a(e.images), h = a(e.shapes), d = a(e.skeletons), p = a(e.animations), _ = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
    }
    return n.object = s, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const s = e.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
Nt.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
Nt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const on = /* @__PURE__ */ new R(), Rn = /* @__PURE__ */ new R(), aa = /* @__PURE__ */ new R(), Cn = /* @__PURE__ */ new R(), Oi = /* @__PURE__ */ new R(), Fi = /* @__PURE__ */ new R(), yl = /* @__PURE__ */ new R(), oa = /* @__PURE__ */ new R(), la = /* @__PURE__ */ new R(), ca = /* @__PURE__ */ new R(), da = /* @__PURE__ */ new ut(), ua = /* @__PURE__ */ new ut(), ha = /* @__PURE__ */ new ut();
class Qt {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), on.subVectors(e, t), s.cross(on);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, s, r) {
    on.subVectors(s, t), Rn.subVectors(n, t), aa.subVectors(e, t);
    const a = on.dot(on), o = on.dot(Rn), l = on.dot(aa), c = Rn.dot(Rn), u = Rn.dot(aa), h = a * c - o * o;
    if (h === 0)
      return r.set(0, 0, 0), null;
    const d = 1 / h, p = (c * l - o * u) * d, _ = (a * u - o * l) * d;
    return r.set(1 - p - _, _, p);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, Cn) === null ? !1 : Cn.x >= 0 && Cn.y >= 0 && Cn.x + Cn.y <= 1;
  }
  static getInterpolation(e, t, n, s, r, a, o, l) {
    return this.getBarycoord(e, t, n, s, Cn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Cn.x), l.addScaledVector(a, Cn.y), l.addScaledVector(o, Cn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, s, r, a) {
    return da.setScalar(0), ua.setScalar(0), ha.setScalar(0), da.fromBufferAttribute(e, t), ua.fromBufferAttribute(e, n), ha.fromBufferAttribute(e, s), a.setScalar(0), a.addScaledVector(da, r.x), a.addScaledVector(ua, r.y), a.addScaledVector(ha, r.z), a;
  }
  static isFrontFacing(e, t, n, s) {
    return on.subVectors(n, t), Rn.subVectors(e, t), on.cross(Rn).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return on.subVectors(this.c, this.b), Rn.subVectors(this.a, this.b), on.cross(Rn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Qt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Qt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, s, r) {
    return Qt.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  containsPoint(e) {
    return Qt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Qt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    Oi.subVectors(s, n), Fi.subVectors(r, n), oa.subVectors(e, n);
    const l = Oi.dot(oa), c = Fi.dot(oa);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    la.subVectors(e, s);
    const u = Oi.dot(la), h = Fi.dot(la);
    if (u >= 0 && h <= u)
      return t.copy(s);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), t.copy(n).addScaledVector(Oi, a);
    ca.subVectors(e, r);
    const p = Oi.dot(ca), _ = Fi.dot(ca);
    if (_ >= 0 && p <= _)
      return t.copy(r);
    const g = p * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), t.copy(n).addScaledVector(Fi, o);
    const m = u * _ - p * h;
    if (m <= 0 && h - u >= 0 && p - _ >= 0)
      return yl.subVectors(r, s), o = (h - u) / (h - u + (p - _)), t.copy(s).addScaledVector(yl, o);
    const f = 1 / (m + g + d);
    return a = g * f, o = d * f, t.copy(n).addScaledVector(Oi, a).addScaledVector(Fi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const ed = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, $n = { h: 0, s: 0, l: 0 }, Js = { h: 0, s: 0, l: 0 };
function fa(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class We {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = It) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Qe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = Qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Qe.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = Qe.workingColorSpace) {
    if (e = Oo(e, 1), t = At(t, 0, 1), n = At(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = fa(a, r, e + 1 / 3), this.g = fa(a, r, e), this.b = fa(a, r, e - 1 / 3);
    }
    return Qe.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = It) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              t
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = It) {
    const n = ed[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Nn(e.r), this.g = Nn(e.g), this.b = Nn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ji(e.r), this.g = Ji(e.g), this.b = Ji(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = It) {
    return Qe.fromWorkingColorSpace(Lt.copy(this), e), Math.round(At(Lt.r * 255, 0, 255)) * 65536 + Math.round(At(Lt.g * 255, 0, 255)) * 256 + Math.round(At(Lt.b * 255, 0, 255));
  }
  getHexString(e = It) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Qe.workingColorSpace) {
    Qe.fromWorkingColorSpace(Lt.copy(this), t);
    const n = Lt.r, s = Lt.g, r = Lt.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let l, c;
    const u = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const h = a - o;
      switch (c = u <= 0.5 ? h / (a + o) : h / (2 - a - o), a) {
        case n:
          l = (s - r) / h + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / h + 2;
          break;
        case r:
          l = (n - s) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Qe.workingColorSpace) {
    return Qe.fromWorkingColorSpace(Lt.copy(this), t), e.r = Lt.r, e.g = Lt.g, e.b = Lt.b, e;
  }
  getStyle(e = It) {
    Qe.fromWorkingColorSpace(Lt.copy(this), e);
    const t = Lt.r, n = Lt.g, s = Lt.b;
    return e !== It ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL($n), this.setHSL($n.h + e, $n.s + t, $n.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL($n), e.getHSL(Js);
    const n = Cs($n.h, Js.h, t), s = Cs($n.s, Js.s, t), r = Cs($n.l, Js.l, t);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * s, this.g = r[1] * t + r[4] * n + r[7] * s, this.b = r[2] * t + r[5] * n + r[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Lt = /* @__PURE__ */ new We();
We.NAMES = ed;
let ju = 0;
class wi extends Ei {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(e) {
  }
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ju++ }), this.uuid = Un(), this.name = "", this.blending = Zi, this.side = ni, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = La, this.blendDst = Ia, this.blendEquation = mi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new We(0, 0, 0), this.blendAlpha = 0, this.depthFunc = es, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = il, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ri, this.stencilZFail = Ri, this.stencilZPass = Ri, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const s = this[t];
        if (s === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Zi && (n.blending = this.blending), this.side !== ni && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== La && (n.blendSrc = this.blendSrc), this.blendDst !== Ia && (n.blendDst = this.blendDst), this.blendEquation !== mi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== es && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== il && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ri && (n.stencilFail = this.stencilFail), this.stencilZFail !== Ri && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Ri && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = s(e.textures), a = s(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const s = t.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Is extends wi {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.color = new We(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new kn(), this.combine = Nc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const _t = /* @__PURE__ */ new R(), Qs = /* @__PURE__ */ new Le();
class en {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = _o, this.updateRanges = [], this.gpuType = Ln, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Qs.fromBufferAttribute(this, t), Qs.applyMatrix3(e), this.setXY(t, Qs.x, Qs.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        _t.fromBufferAttribute(this, t), _t.applyMatrix3(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyMatrix4(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyNormalMatrix(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.transformDirection(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = cn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = at(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = cn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = at(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = cn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = at(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = cn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = at(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = cn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = at(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = at(t, this.array), n = at(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e *= this.itemSize, this.normalized && (t = at(t, this.array), n = at(n, this.array), s = at(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, r) {
    return e *= this.itemSize, this.normalized && (t = at(t, this.array), n = at(n, this.array), s = at(s, this.array), r = at(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== _o && (e.usage = this.usage), e;
  }
}
class td extends en {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class nd extends en {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Rt extends en {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Zu = 0;
const Zt = /* @__PURE__ */ new pt(), pa = /* @__PURE__ */ new Nt(), ki = /* @__PURE__ */ new R(), qt = /* @__PURE__ */ new ai(), ys = /* @__PURE__ */ new ai(), Mt = /* @__PURE__ */ new R();
class Ct extends Ei {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Zu++ }), this.uuid = Un(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Zc(e) ? nd : td)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new He().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Zt.makeRotationFromQuaternion(e), this.applyMatrix4(Zt), this;
  }
  rotateX(e) {
    return Zt.makeRotationX(e), this.applyMatrix4(Zt), this;
  }
  rotateY(e) {
    return Zt.makeRotationY(e), this.applyMatrix4(Zt), this;
  }
  rotateZ(e) {
    return Zt.makeRotationZ(e), this.applyMatrix4(Zt), this;
  }
  translate(e, t, n) {
    return Zt.makeTranslation(e, t, n), this.applyMatrix4(Zt), this;
  }
  scale(e, t, n) {
    return Zt.makeScale(e, t, n), this.applyMatrix4(Zt), this;
  }
  lookAt(e) {
    return pa.lookAt(e), pa.updateMatrix(), this.applyMatrix4(pa.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ki).negate(), this.translate(ki.x, ki.y, ki.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Rt(n, 3));
    } else {
      for (let n = 0, s = t.count; n < s; n++) {
        const r = e[n];
        t.setXYZ(n, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ai());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, s = t.length; n < s; n++) {
          const r = t[n];
          qt.setFromBufferAttribute(r), this.morphTargetsRelative ? (Mt.addVectors(this.boundingBox.min, qt.min), this.boundingBox.expandByPoint(Mt), Mt.addVectors(this.boundingBox.max, qt.max), this.boundingBox.expandByPoint(Mt)) : (this.boundingBox.expandByPoint(qt.min), this.boundingBox.expandByPoint(qt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ti());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (qt.setFromBufferAttribute(e), t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          ys.setFromBufferAttribute(o), this.morphTargetsRelative ? (Mt.addVectors(qt.min, ys.min), qt.expandByPoint(Mt), Mt.addVectors(qt.max, ys.max), qt.expandByPoint(Mt)) : (qt.expandByPoint(ys.min), qt.expandByPoint(ys.max));
        }
      qt.getCenter(n);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++)
        Mt.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(Mt));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            Mt.fromBufferAttribute(o, c), l && (ki.fromBufferAttribute(e, c), Mt.add(ki)), s = Math.max(s, n.distanceToSquared(Mt));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, s = t.normal, r = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new en(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let P = 0; P < n.count; P++)
      o[P] = new R(), l[P] = new R();
    const c = new R(), u = new R(), h = new R(), d = new Le(), p = new Le(), _ = new Le(), g = new R(), m = new R();
    function f(P, b, y) {
      c.fromBufferAttribute(n, P), u.fromBufferAttribute(n, b), h.fromBufferAttribute(n, y), d.fromBufferAttribute(r, P), p.fromBufferAttribute(r, b), _.fromBufferAttribute(r, y), u.sub(c), h.sub(c), p.sub(d), _.sub(d);
      const C = 1 / (p.x * _.y - _.x * p.y);
      isFinite(C) && (g.copy(u).multiplyScalar(_.y).addScaledVector(h, -p.y).multiplyScalar(C), m.copy(h).multiplyScalar(p.x).addScaledVector(u, -_.x).multiplyScalar(C), o[P].add(g), o[b].add(g), o[y].add(g), l[P].add(m), l[b].add(m), l[y].add(m));
    }
    let E = this.groups;
    E.length === 0 && (E = [{
      start: 0,
      count: e.count
    }]);
    for (let P = 0, b = E.length; P < b; ++P) {
      const y = E[P], C = y.start, H = y.count;
      for (let O = C, G = C + H; O < G; O += 3)
        f(
          e.getX(O + 0),
          e.getX(O + 1),
          e.getX(O + 2)
        );
    }
    const M = new R(), v = new R(), N = new R(), w = new R();
    function A(P) {
      N.fromBufferAttribute(s, P), w.copy(N);
      const b = o[P];
      M.copy(b), M.sub(N.multiplyScalar(N.dot(b))).normalize(), v.crossVectors(w, b);
      const C = v.dot(l[P]) < 0 ? -1 : 1;
      a.setXYZW(P, M.x, M.y, M.z, C);
    }
    for (let P = 0, b = E.length; P < b; ++P) {
      const y = E[P], C = y.start, H = y.count;
      for (let O = C, G = C + H; O < G; O += 3)
        A(e.getX(O + 0)), A(e.getX(O + 1)), A(e.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new en(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const s = new R(), r = new R(), a = new R(), o = new R(), l = new R(), c = new R(), u = new R(), h = new R();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const _ = e.getX(d + 0), g = e.getX(d + 1), m = e.getX(d + 2);
          s.fromBufferAttribute(t, _), r.fromBufferAttribute(t, g), a.fromBufferAttribute(t, m), u.subVectors(a, r), h.subVectors(s, r), u.cross(h), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), o.add(u), l.add(u), c.add(u), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          s.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), u.subVectors(a, r), h.subVectors(s, r), u.cross(h), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Mt.fromBufferAttribute(e, t), Mt.normalize(), e.setXYZ(t, Mt.x, Mt.y, Mt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, h = o.normalized, d = new c.constructor(l.length * u);
      let p = 0, _ = 0;
      for (let g = 0, m = l.length; g < m; g++) {
        o.isInterleavedBufferAttribute ? p = l[g] * o.data.stride + o.offset : p = l[g] * u;
        for (let f = 0; f < u; f++)
          d[_++] = c[p++];
      }
      return new en(d, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ct(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const l = s[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const s = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        const p = c[h];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && (s[l] = u, r = !0);
    }
    r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const s = e.attributes;
    for (const c in s) {
      const u = s[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], h = r[c];
      for (let d = 0, p = h.length; d < p; d++)
        u.push(h[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Sl = /* @__PURE__ */ new pt(), di = /* @__PURE__ */ new $r(), er = /* @__PURE__ */ new Ti(), bl = /* @__PURE__ */ new R(), tr = /* @__PURE__ */ new R(), nr = /* @__PURE__ */ new R(), ir = /* @__PURE__ */ new R(), ma = /* @__PURE__ */ new R(), sr = /* @__PURE__ */ new R(), Ml = /* @__PURE__ */ new R(), rr = /* @__PURE__ */ new R();
class Wt extends Nt {
  constructor(e = new Ct(), t = new Is()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      sr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = o[l], h = r[l];
        u !== 0 && (ma.fromBufferAttribute(h, e), a ? sr.addScaledVector(ma, u) : sr.addScaledVector(ma.sub(t), u));
      }
      t.add(sr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), er.copy(n.boundingSphere), er.applyMatrix4(r), di.copy(e.ray).recast(e.near), !(er.containsPoint(di.origin) === !1 && (di.intersectSphere(er, bl) === null || di.origin.distanceToSquared(bl) > (e.far - e.near) ** 2)) && (Sl.copy(r).invert(), di.copy(e.ray).applyMatrix4(Sl), !(n.boundingBox !== null && di.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, di)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, h = r.attributes.normal, d = r.groups, p = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, g = d.length; _ < g; _++) {
          const m = d[_], f = a[m.materialIndex], E = Math.max(m.start, p.start), M = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let v = E, N = M; v < N; v += 3) {
            const w = o.getX(v), A = o.getX(v + 1), P = o.getX(v + 2);
            s = ar(this, f, e, n, c, u, h, w, A, P), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = m.materialIndex, t.push(s));
          }
        }
      else {
        const _ = Math.max(0, p.start), g = Math.min(o.count, p.start + p.count);
        for (let m = _, f = g; m < f; m += 3) {
          const E = o.getX(m), M = o.getX(m + 1), v = o.getX(m + 2);
          s = ar(this, a, e, n, c, u, h, E, M, v), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, g = d.length; _ < g; _++) {
          const m = d[_], f = a[m.materialIndex], E = Math.max(m.start, p.start), M = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
          for (let v = E, N = M; v < N; v += 3) {
            const w = v, A = v + 1, P = v + 2;
            s = ar(this, f, e, n, c, u, h, w, A, P), s && (s.faceIndex = Math.floor(v / 3), s.face.materialIndex = m.materialIndex, t.push(s));
          }
        }
      else {
        const _ = Math.max(0, p.start), g = Math.min(l.count, p.start + p.count);
        for (let m = _, f = g; m < f; m += 3) {
          const E = m, M = m + 1, v = m + 2;
          s = ar(this, a, e, n, c, u, h, E, M, v), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
        }
      }
  }
}
function Ku(i, e, t, n, s, r, a, o) {
  let l;
  if (e.side === Bt ? l = n.intersectTriangle(a, r, s, !0, o) : l = n.intersectTriangle(s, r, a, e.side === ni, o), l === null) return null;
  rr.copy(o), rr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(rr);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: rr.clone(),
    object: i
  };
}
function ar(i, e, t, n, s, r, a, o, l, c) {
  i.getVertexPosition(o, tr), i.getVertexPosition(l, nr), i.getVertexPosition(c, ir);
  const u = Ku(i, e, t, n, tr, nr, ir, Ml);
  if (u) {
    const h = new R();
    Qt.getBarycoord(Ml, tr, nr, ir, h), s && (u.uv = Qt.getInterpolatedAttribute(s, o, l, c, h, new Le())), r && (u.uv1 = Qt.getInterpolatedAttribute(r, o, l, c, h, new Le())), a && (u.normal = Qt.getInterpolatedAttribute(a, o, l, c, h, new R()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: l,
      c,
      normal: new R(),
      materialIndex: 0
    };
    Qt.getNormal(tr, nr, ir, d.normal), u.face = d, u.barycoord = h;
  }
  return u;
}
class Hs extends Ct {
  constructor(e = 1, t = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: s,
      heightSegments: r,
      depthSegments: a
    };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], u = [], h = [];
    let d = 0, p = 0;
    _("z", "y", "x", -1, -1, n, t, e, a, r, 0), _("z", "y", "x", 1, -1, n, t, -e, a, r, 1), _("x", "z", "y", 1, 1, e, n, t, s, a, 2), _("x", "z", "y", 1, -1, e, n, -t, s, a, 3), _("x", "y", "z", 1, -1, e, t, n, s, r, 4), _("x", "y", "z", -1, -1, e, t, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new Rt(c, 3)), this.setAttribute("normal", new Rt(u, 3)), this.setAttribute("uv", new Rt(h, 2));
    function _(g, m, f, E, M, v, N, w, A, P, b) {
      const y = v / A, C = N / P, H = v / 2, O = N / 2, G = w / 2, $ = A + 1, B = P + 1;
      let te = 0, W = 0;
      const re = new R();
      for (let ce = 0; ce < B; ce++) {
        const Ee = ce * C - O;
        for (let Ne = 0; Ne < $; Ne++) {
          const Ze = Ne * y - H;
          re[g] = Ze * E, re[m] = Ee * M, re[f] = G, c.push(re.x, re.y, re.z), re[g] = 0, re[m] = 0, re[f] = w > 0 ? 1 : -1, u.push(re.x, re.y, re.z), h.push(Ne / A), h.push(1 - ce / P), te += 1;
        }
      }
      for (let ce = 0; ce < P; ce++)
        for (let Ee = 0; Ee < A; Ee++) {
          const Ne = d + Ee + $ * ce, Ze = d + Ee + $ * (ce + 1), F = d + (Ee + 1) + $ * (ce + 1), j = d + (Ee + 1) + $ * ce;
          l.push(Ne, Ze, j), l.push(Ze, F, j), W += 6;
        }
      o.addGroup(p, W, b), p += W, d += te;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Hs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function rs(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s;
    }
  }
  return e;
}
function kt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = rs(i[t]);
    for (const s in n)
      e[s] = n[s];
  }
  return e;
}
function Ju(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function id(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Qe.workingColorSpace;
}
const Fo = { clone: rs, merge: kt };
var Qu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, eh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class pn extends wi {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Qu, this.fragmentShader = eh, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = rs(e.uniforms), this.uniformsGroups = Ju(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? t.uniforms[s] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[s] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[s] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[s] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[s] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[s] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[s] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[s] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class sd extends Nt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new pt(), this.projectionMatrix = new pt(), this.projectionMatrixInverse = new pt(), this.coordinateSystem = In;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qn = /* @__PURE__ */ new R(), El = /* @__PURE__ */ new Le(), Tl = /* @__PURE__ */ new Le();
class Jt extends sd {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ds * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Rs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ds * 2 * Math.atan(
      Math.tan(Rs * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    qn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(qn.x, qn.y).multiplyScalar(-e / qn.z), qn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(qn.x, qn.y).multiplyScalar(-e / qn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, El, Tl), t.subVectors(Tl, El);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, s, r, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Rs * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * s / l, t -= a.offsetY * n / c, s *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Bi = -90, zi = 1;
class th extends Nt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Jt(Bi, zi, e, t);
    s.layers = this.layers, this.add(s);
    const r = new Jt(Bi, zi, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Jt(Bi, zi, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Jt(Bi, zi, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Jt(Bi, zi, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Jt(Bi, zi, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, s, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === In)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Dr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, u] = this.children, h = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, s), e.render(t, r), e.setRenderTarget(n, 1, s), e.render(t, a), e.setRenderTarget(n, 2, s), e.render(t, o), e.setRenderTarget(n, 3, s), e.render(t, l), e.setRenderTarget(n, 4, s), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, s), e.render(t, u), e.setRenderTarget(h, d, p), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class rd extends Ut {
  constructor(e, t, n, s, r, a, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ts, super(e, t, n, s, r, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class nh extends yi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new rd(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : yn;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, s = new Hs(5, 5, 5), r = new pn({
      name: "CubemapFromEquirect",
      uniforms: rs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Bt,
      blending: Qn
    });
    r.uniforms.tEquirect.value = t;
    const a = new Wt(s, r), o = t.minFilter;
    return t.minFilter === _i && (t.minFilter = yn), new th(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, s) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, s);
    e.setRenderTarget(r);
  }
}
const ga = /* @__PURE__ */ new R(), ih = /* @__PURE__ */ new R(), sh = /* @__PURE__ */ new He();
class Yn {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = ga.subVectors(n, t).cross(ih.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(ga), s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || sh.getNormalMatrix(e), s = this.coplanarPoint(ga).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ui = /* @__PURE__ */ new Ti(), or = /* @__PURE__ */ new R();
class ad {
  constructor(e = new Yn(), t = new Yn(), n = new Yn(), s = new Yn(), r = new Yn(), a = new Yn()) {
    this.planes = [e, t, n, s, r, a];
  }
  set(e, t, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = In) {
    const n = this.planes, s = e.elements, r = s[0], a = s[1], o = s[2], l = s[3], c = s[4], u = s[5], h = s[6], d = s[7], p = s[8], _ = s[9], g = s[10], m = s[11], f = s[12], E = s[13], M = s[14], v = s[15];
    if (n[0].setComponents(l - r, d - c, m - p, v - f).normalize(), n[1].setComponents(l + r, d + c, m + p, v + f).normalize(), n[2].setComponents(l + a, d + u, m + _, v + E).normalize(), n[3].setComponents(l - a, d - u, m - _, v - E).normalize(), n[4].setComponents(l - o, d - h, m - g, v - M).normalize(), t === In)
      n[5].setComponents(l + o, d + h, m + g, v + M).normalize();
    else if (t === Dr)
      n[5].setComponents(o, h, g, M).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ui);
  }
  intersectsSprite(e) {
    return ui.center.set(0, 0, 0), ui.radius = 0.7071067811865476, ui.applyMatrix4(e.matrixWorld), this.intersectsSphere(ui);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, s = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < s)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (or.x = s.normal.x > 0 ? e.max.x : e.min.x, or.y = s.normal.y > 0 ? e.max.y : e.min.y, or.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(or) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function od() {
  let i = null, e = !1, t = null, n = null;
  function s(r, a) {
    t(r, a), n = i.requestAnimationFrame(s);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(s), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      i = r;
    }
  };
}
function rh(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, u = o.usage, h = c.byteLength, d = i.createBuffer();
    i.bindBuffer(l, d), i.bufferData(l, c, u), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array)
      p = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      p = i.SHORT;
    else if (c instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      p = i.INT;
    else if (c instanceof Int8Array)
      p = i.BYTE;
    else if (c instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: d,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: h
    };
  }
  function n(o, l, c) {
    const u = l.array, h = l.updateRanges;
    if (i.bindBuffer(c, o), h.length === 0)
      i.bufferSubData(c, 0, u);
    else {
      h.sort((p, _) => p.start - _.start);
      let d = 0;
      for (let p = 1; p < h.length; p++) {
        const _ = h[d], g = h[p];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          g.start + g.count - _.start
        ) : (++d, h[d] = g);
      }
      h.length = d + 1;
      for (let p = 0, _ = h.length; p < _; p++) {
        const g = h[p];
        i.bufferSubData(
          c,
          g.start * u.BYTES_PER_ELEMENT,
          u,
          g.start,
          g.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = e.get(o);
      (!u || u.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: s,
    remove: r,
    update: a
  };
}
class qr extends Ct {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: s
    };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(s), c = o + 1, u = l + 1, h = e / o, d = t / l, p = [], _ = [], g = [], m = [];
    for (let f = 0; f < u; f++) {
      const E = f * d - a;
      for (let M = 0; M < c; M++) {
        const v = M * h - r;
        _.push(v, -E, 0), g.push(0, 0, 1), m.push(M / o), m.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++)
      for (let E = 0; E < o; E++) {
        const M = E + c * f, v = E + c * (f + 1), N = E + 1 + c * (f + 1), w = E + 1 + c * f;
        p.push(M, v, w), p.push(v, N, w);
      }
    this.setIndex(p), this.setAttribute("position", new Rt(_, 3)), this.setAttribute("normal", new Rt(g, 3)), this.setAttribute("uv", new Rt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new qr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var ah = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, oh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, lh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, ch = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, dh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, uh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, hh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, fh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, ph = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, mh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, gh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, _h = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, vh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, xh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, yh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Sh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, bh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Mh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Eh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Th = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, wh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ah = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Rh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Ch = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Ph = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Dh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Lh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Ih = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Uh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Nh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Oh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Fh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, kh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Bh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, zh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Hh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Vh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Gh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Wh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Xh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, $h = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, qh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Yh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, jh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Zh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Kh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Jh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Qh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ef = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, tf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, nf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, sf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, rf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, af = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, of = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, lf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, cf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, df = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, uf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, hf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, ff = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, pf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, mf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, gf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _f = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, vf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, xf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, yf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Sf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, bf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Mf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ef = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Tf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, wf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Af = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Rf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Cf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Pf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Df = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Lf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, If = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Uf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Nf = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Of = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ff = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, kf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Bf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, zf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Hf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Vf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Gf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Wf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Xf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, $f = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, qf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Yf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, jf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Zf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Kf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Jf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Qf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, ep = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, tp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, np = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ip = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, sp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, rp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ap = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, op = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, lp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, cp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, dp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, up = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, hp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, fp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, pp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, mp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, gp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, _p = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, xp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, yp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Sp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Mp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ep = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Tp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Ap = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Rp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Cp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Dp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ip = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Up = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Np = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Op = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, kp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Bp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ge = {
  alphahash_fragment: ah,
  alphahash_pars_fragment: oh,
  alphamap_fragment: lh,
  alphamap_pars_fragment: ch,
  alphatest_fragment: dh,
  alphatest_pars_fragment: uh,
  aomap_fragment: hh,
  aomap_pars_fragment: fh,
  batching_pars_vertex: ph,
  batching_vertex: mh,
  begin_vertex: gh,
  beginnormal_vertex: _h,
  bsdfs: vh,
  iridescence_fragment: xh,
  bumpmap_pars_fragment: yh,
  clipping_planes_fragment: Sh,
  clipping_planes_pars_fragment: bh,
  clipping_planes_pars_vertex: Mh,
  clipping_planes_vertex: Eh,
  color_fragment: Th,
  color_pars_fragment: wh,
  color_pars_vertex: Ah,
  color_vertex: Rh,
  common: Ch,
  cube_uv_reflection_fragment: Ph,
  defaultnormal_vertex: Dh,
  displacementmap_pars_vertex: Lh,
  displacementmap_vertex: Ih,
  emissivemap_fragment: Uh,
  emissivemap_pars_fragment: Nh,
  colorspace_fragment: Oh,
  colorspace_pars_fragment: Fh,
  envmap_fragment: kh,
  envmap_common_pars_fragment: Bh,
  envmap_pars_fragment: zh,
  envmap_pars_vertex: Hh,
  envmap_physical_pars_fragment: Jh,
  envmap_vertex: Vh,
  fog_vertex: Gh,
  fog_pars_vertex: Wh,
  fog_fragment: Xh,
  fog_pars_fragment: $h,
  gradientmap_pars_fragment: qh,
  lightmap_pars_fragment: Yh,
  lights_lambert_fragment: jh,
  lights_lambert_pars_fragment: Zh,
  lights_pars_begin: Kh,
  lights_toon_fragment: Qh,
  lights_toon_pars_fragment: ef,
  lights_phong_fragment: tf,
  lights_phong_pars_fragment: nf,
  lights_physical_fragment: sf,
  lights_physical_pars_fragment: rf,
  lights_fragment_begin: af,
  lights_fragment_maps: of,
  lights_fragment_end: lf,
  logdepthbuf_fragment: cf,
  logdepthbuf_pars_fragment: df,
  logdepthbuf_pars_vertex: uf,
  logdepthbuf_vertex: hf,
  map_fragment: ff,
  map_pars_fragment: pf,
  map_particle_fragment: mf,
  map_particle_pars_fragment: gf,
  metalnessmap_fragment: _f,
  metalnessmap_pars_fragment: vf,
  morphinstance_vertex: xf,
  morphcolor_vertex: yf,
  morphnormal_vertex: Sf,
  morphtarget_pars_vertex: bf,
  morphtarget_vertex: Mf,
  normal_fragment_begin: Ef,
  normal_fragment_maps: Tf,
  normal_pars_fragment: wf,
  normal_pars_vertex: Af,
  normal_vertex: Rf,
  normalmap_pars_fragment: Cf,
  clearcoat_normal_fragment_begin: Pf,
  clearcoat_normal_fragment_maps: Df,
  clearcoat_pars_fragment: Lf,
  iridescence_pars_fragment: If,
  opaque_fragment: Uf,
  packing: Nf,
  premultiplied_alpha_fragment: Of,
  project_vertex: Ff,
  dithering_fragment: kf,
  dithering_pars_fragment: Bf,
  roughnessmap_fragment: zf,
  roughnessmap_pars_fragment: Hf,
  shadowmap_pars_fragment: Vf,
  shadowmap_pars_vertex: Gf,
  shadowmap_vertex: Wf,
  shadowmask_pars_fragment: Xf,
  skinbase_vertex: $f,
  skinning_pars_vertex: qf,
  skinning_vertex: Yf,
  skinnormal_vertex: jf,
  specularmap_fragment: Zf,
  specularmap_pars_fragment: Kf,
  tonemapping_fragment: Jf,
  tonemapping_pars_fragment: Qf,
  transmission_fragment: ep,
  transmission_pars_fragment: tp,
  uv_pars_fragment: np,
  uv_pars_vertex: ip,
  uv_vertex: sp,
  worldpos_vertex: rp,
  background_vert: ap,
  background_frag: op,
  backgroundCube_vert: lp,
  backgroundCube_frag: cp,
  cube_vert: dp,
  cube_frag: up,
  depth_vert: hp,
  depth_frag: fp,
  distanceRGBA_vert: pp,
  distanceRGBA_frag: mp,
  equirect_vert: gp,
  equirect_frag: _p,
  linedashed_vert: vp,
  linedashed_frag: xp,
  meshbasic_vert: yp,
  meshbasic_frag: Sp,
  meshlambert_vert: bp,
  meshlambert_frag: Mp,
  meshmatcap_vert: Ep,
  meshmatcap_frag: Tp,
  meshnormal_vert: wp,
  meshnormal_frag: Ap,
  meshphong_vert: Rp,
  meshphong_frag: Cp,
  meshphysical_vert: Pp,
  meshphysical_frag: Dp,
  meshtoon_vert: Lp,
  meshtoon_frag: Ip,
  points_vert: Up,
  points_frag: Np,
  shadow_vert: Op,
  shadow_frag: Fp,
  sprite_vert: kp,
  sprite_frag: Bp
}, ae = {
  common: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new He() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new He() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new He() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new He() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new He() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new He() },
    normalScale: { value: /* @__PURE__ */ new Le(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new He() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new He() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new We(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new He() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Le(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  }
}, Gt = {
  basic: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.fog
    ]),
    vertexShader: Ge.meshbasic_vert,
    fragmentShader: Ge.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) }
      }
    ]),
    vertexShader: Ge.meshlambert_vert,
    fragmentShader: Ge.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) },
        specular: { value: /* @__PURE__ */ new We(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ge.meshphong_vert,
    fragmentShader: Ge.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.roughnessmap,
      ae.metalnessmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ge.meshphysical_vert,
    fragmentShader: Ge.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.gradientmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) }
      }
    ]),
    vertexShader: Ge.meshtoon_vert,
    fragmentShader: Ge.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ge.meshmatcap_vert,
    fragmentShader: Ge.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ kt([
      ae.points,
      ae.fog
    ]),
    vertexShader: Ge.points_vert,
    fragmentShader: Ge.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ge.linedashed_vert,
    fragmentShader: Ge.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.displacementmap
    ]),
    vertexShader: Ge.depth_vert,
    fragmentShader: Ge.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ge.meshnormal_vert,
    fragmentShader: Ge.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ kt([
      ae.sprite,
      ae.fog
    ]),
    vertexShader: Ge.sprite_vert,
    fragmentShader: Ge.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new He() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ge.background_vert,
    fragmentShader: Ge.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new He() }
    },
    vertexShader: Ge.backgroundCube_vert,
    fragmentShader: Ge.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ge.cube_vert,
    fragmentShader: Ge.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ge.equirect_vert,
    fragmentShader: Ge.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ kt([
      ae.common,
      ae.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ge.distanceRGBA_vert,
    fragmentShader: Ge.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ kt([
      ae.lights,
      ae.fog,
      {
        color: { value: /* @__PURE__ */ new We(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ge.shadow_vert,
    fragmentShader: Ge.shadow_frag
  }
};
Gt.physical = {
  uniforms: /* @__PURE__ */ kt([
    Gt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Le(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new He() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new He() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new We(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new He() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new He() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Le() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new He() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new We(0) },
      specularColor: { value: /* @__PURE__ */ new We(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new He() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new He() },
      anisotropyVector: { value: /* @__PURE__ */ new Le() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new He() }
    }
  ]),
  vertexShader: Ge.meshphysical_vert,
  fragmentShader: Ge.meshphysical_frag
};
const lr = { r: 0, b: 0, g: 0 }, hi = /* @__PURE__ */ new kn(), zp = /* @__PURE__ */ new pt();
function Hp(i, e, t, n, s, r, a) {
  const o = new We(0);
  let l = r === !0 ? 0 : 1, c, u, h = null, d = 0, p = null;
  function _(E) {
    let M = E.isScene === !0 ? E.background : null;
    return M && M.isTexture && (M = (E.backgroundBlurriness > 0 ? t : e).get(M)), M;
  }
  function g(E) {
    let M = !1;
    const v = _(E);
    v === null ? f(o, l) : v && v.isColor && (f(v, 1), M = !0);
    const N = i.xr.getEnvironmentBlendMode();
    N === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : N === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || M) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(E, M) {
    const v = _(M);
    v && (v.isCubeTexture || v.mapping === Wr) ? (u === void 0 && (u = new Wt(
      new Hs(1, 1, 1),
      new pn({
        name: "BackgroundCubeMaterial",
        uniforms: rs(Gt.backgroundCube.uniforms),
        vertexShader: Gt.backgroundCube.vertexShader,
        fragmentShader: Gt.backgroundCube.fragmentShader,
        side: Bt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(N, w, A) {
      this.matrixWorld.copyPosition(A.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(u)), hi.copy(M.backgroundRotation), hi.x *= -1, hi.y *= -1, hi.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (hi.y *= -1, hi.z *= -1), u.material.uniforms.envMap.value = v, u.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(zp.makeRotationFromEuler(hi)), u.material.toneMapped = Qe.getTransfer(v.colorSpace) !== ot, (h !== v || d !== v.version || p !== i.toneMapping) && (u.material.needsUpdate = !0, h = v, d = v.version, p = i.toneMapping), u.layers.enableAll(), E.unshift(u, u.geometry, u.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new Wt(
      new qr(2, 2),
      new pn({
        name: "BackgroundMaterial",
        uniforms: rs(Gt.background.uniforms),
        vertexShader: Gt.background.vertexShader,
        fragmentShader: Gt.background.fragmentShader,
        side: ni,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, c.material.toneMapped = Qe.getTransfer(v.colorSpace) !== ot, v.matrixAutoUpdate === !0 && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (h !== v || d !== v.version || p !== i.toneMapping) && (c.material.needsUpdate = !0, h = v, d = v.version, p = i.toneMapping), c.layers.enableAll(), E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(E, M) {
    E.getRGB(lr, id(i)), n.buffers.color.setClear(lr.r, lr.g, lr.b, M, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(E, M = 1) {
      o.set(E), l = M, f(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(E) {
      l = E, f(o, l);
    },
    render: g,
    addToRenderList: m
  };
}
function Vp(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = d(null);
  let r = s, a = !1;
  function o(y, C, H, O, G) {
    let $ = !1;
    const B = h(O, H, C);
    r !== B && (r = B, c(r.object)), $ = p(y, O, H, G), $ && _(y, O, H, G), G !== null && e.update(G, i.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, v(y, C, H, O), G !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(G).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(y) {
    return i.bindVertexArray(y);
  }
  function u(y) {
    return i.deleteVertexArray(y);
  }
  function h(y, C, H) {
    const O = H.wireframe === !0;
    let G = n[y.id];
    G === void 0 && (G = {}, n[y.id] = G);
    let $ = G[C.id];
    $ === void 0 && ($ = {}, G[C.id] = $);
    let B = $[O];
    return B === void 0 && (B = d(l()), $[O] = B), B;
  }
  function d(y) {
    const C = [], H = [], O = [];
    for (let G = 0; G < t; G++)
      C[G] = 0, H[G] = 0, O[G] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: C,
      enabledAttributes: H,
      attributeDivisors: O,
      object: y,
      attributes: {},
      index: null
    };
  }
  function p(y, C, H, O) {
    const G = r.attributes, $ = C.attributes;
    let B = 0;
    const te = H.getAttributes();
    for (const W in te)
      if (te[W].location >= 0) {
        const ce = G[W];
        let Ee = $[W];
        if (Ee === void 0 && (W === "instanceMatrix" && y.instanceMatrix && (Ee = y.instanceMatrix), W === "instanceColor" && y.instanceColor && (Ee = y.instanceColor)), ce === void 0 || ce.attribute !== Ee || Ee && ce.data !== Ee.data) return !0;
        B++;
      }
    return r.attributesNum !== B || r.index !== O;
  }
  function _(y, C, H, O) {
    const G = {}, $ = C.attributes;
    let B = 0;
    const te = H.getAttributes();
    for (const W in te)
      if (te[W].location >= 0) {
        let ce = $[W];
        ce === void 0 && (W === "instanceMatrix" && y.instanceMatrix && (ce = y.instanceMatrix), W === "instanceColor" && y.instanceColor && (ce = y.instanceColor));
        const Ee = {};
        Ee.attribute = ce, ce && ce.data && (Ee.data = ce.data), G[W] = Ee, B++;
      }
    r.attributes = G, r.attributesNum = B, r.index = O;
  }
  function g() {
    const y = r.newAttributes;
    for (let C = 0, H = y.length; C < H; C++)
      y[C] = 0;
  }
  function m(y) {
    f(y, 0);
  }
  function f(y, C) {
    const H = r.newAttributes, O = r.enabledAttributes, G = r.attributeDivisors;
    H[y] = 1, O[y] === 0 && (i.enableVertexAttribArray(y), O[y] = 1), G[y] !== C && (i.vertexAttribDivisor(y, C), G[y] = C);
  }
  function E() {
    const y = r.newAttributes, C = r.enabledAttributes;
    for (let H = 0, O = C.length; H < O; H++)
      C[H] !== y[H] && (i.disableVertexAttribArray(H), C[H] = 0);
  }
  function M(y, C, H, O, G, $, B) {
    B === !0 ? i.vertexAttribIPointer(y, C, H, G, $) : i.vertexAttribPointer(y, C, H, O, G, $);
  }
  function v(y, C, H, O) {
    g();
    const G = O.attributes, $ = H.getAttributes(), B = C.defaultAttributeValues;
    for (const te in $) {
      const W = $[te];
      if (W.location >= 0) {
        let re = G[te];
        if (re === void 0 && (te === "instanceMatrix" && y.instanceMatrix && (re = y.instanceMatrix), te === "instanceColor" && y.instanceColor && (re = y.instanceColor)), re !== void 0) {
          const ce = re.normalized, Ee = re.itemSize, Ne = e.get(re);
          if (Ne === void 0) continue;
          const Ze = Ne.buffer, F = Ne.type, j = Ne.bytesPerElement, Y = F === i.INT || F === i.UNSIGNED_INT || re.gpuType === Po;
          if (re.isInterleavedBufferAttribute) {
            const Q = re.data, oe = Q.stride, _e = re.offset;
            if (Q.isInstancedInterleavedBuffer) {
              for (let Re = 0; Re < W.locationSize; Re++)
                f(W.location + Re, Q.meshPerAttribute);
              y.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = Q.meshPerAttribute * Q.count);
            } else
              for (let Re = 0; Re < W.locationSize; Re++)
                m(W.location + Re);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let Re = 0; Re < W.locationSize; Re++)
              M(
                W.location + Re,
                Ee / W.locationSize,
                F,
                ce,
                oe * j,
                (_e + Ee / W.locationSize * Re) * j,
                Y
              );
          } else {
            if (re.isInstancedBufferAttribute) {
              for (let Q = 0; Q < W.locationSize; Q++)
                f(W.location + Q, re.meshPerAttribute);
              y.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = re.meshPerAttribute * re.count);
            } else
              for (let Q = 0; Q < W.locationSize; Q++)
                m(W.location + Q);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let Q = 0; Q < W.locationSize; Q++)
              M(
                W.location + Q,
                Ee / W.locationSize,
                F,
                ce,
                Ee * j,
                Ee / W.locationSize * Q * j,
                Y
              );
          }
        } else if (B !== void 0) {
          const ce = B[te];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                i.vertexAttrib2fv(W.location, ce);
                break;
              case 3:
                i.vertexAttrib3fv(W.location, ce);
                break;
              case 4:
                i.vertexAttrib4fv(W.location, ce);
                break;
              default:
                i.vertexAttrib1fv(W.location, ce);
            }
        }
      }
    }
    E();
  }
  function N() {
    P();
    for (const y in n) {
      const C = n[y];
      for (const H in C) {
        const O = C[H];
        for (const G in O)
          u(O[G].object), delete O[G];
        delete C[H];
      }
      delete n[y];
    }
  }
  function w(y) {
    if (n[y.id] === void 0) return;
    const C = n[y.id];
    for (const H in C) {
      const O = C[H];
      for (const G in O)
        u(O[G].object), delete O[G];
      delete C[H];
    }
    delete n[y.id];
  }
  function A(y) {
    for (const C in n) {
      const H = n[C];
      if (H[y.id] === void 0) continue;
      const O = H[y.id];
      for (const G in O)
        u(O[G].object), delete O[G];
      delete H[y.id];
    }
  }
  function P() {
    b(), a = !0, r !== s && (r = s, c(r.object));
  }
  function b() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: o,
    reset: P,
    resetDefaultState: b,
    dispose: N,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: A,
    initAttributes: g,
    enableAttribute: m,
    disableUnusedAttributes: E
  };
}
function Gp(i, e, t) {
  let n;
  function s(c) {
    n = c;
  }
  function r(c, u) {
    i.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, h) {
    h !== 0 && (i.drawArraysInstanced(n, c, u, h), t.update(u, n, h));
  }
  function o(c, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, h);
    let p = 0;
    for (let _ = 0; _ < h; _++)
      p += u[_];
    t.update(p, n, 1);
  }
  function l(c, u, h, d) {
    if (h === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let _ = 0; _ < c.length; _++)
        a(c[_], u[_], d[_]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, d, 0, h);
      let _ = 0;
      for (let g = 0; g < h; g++)
        _ += u[g] * d[g];
      t.update(_, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function Wp(i, e, t, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      s = 0;
    return s;
  }
  function a(A) {
    return !(A !== dn && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(A) {
    const P = A === zs && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== Fn && n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    A !== Ln && !P);
  }
  function l(A) {
    if (A === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const h = t.logarithmicDepthBuffer === !0, d = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), f = i.getParameter(i.MAX_VERTEX_ATTRIBS), E = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), M = i.getParameter(i.MAX_VARYING_VECTORS), v = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), N = _ > 0, w = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: h,
    reverseDepthBuffer: d,
    maxTextures: p,
    maxVertexTextures: _,
    maxTextureSize: g,
    maxCubemapSize: m,
    maxAttributes: f,
    maxVertexUniforms: E,
    maxVaryings: M,
    maxFragmentUniforms: v,
    vertexTextures: N,
    maxSamples: w
  };
}
function Xp(i) {
  const e = this;
  let t = null, n = 0, s = !1, r = !1;
  const a = new Yn(), o = new He(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
    const p = h.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = d, n = h.length, p;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(h, d) {
    t = u(h, d, 0);
  }, this.setState = function(h, d, p) {
    const _ = h.clippingPlanes, g = h.clipIntersection, m = h.clipShadows, f = i.get(h);
    if (!s || _ === null || _.length === 0 || r && !m)
      r ? u(null) : c();
    else {
      const E = r ? 0 : n, M = E * 4;
      let v = f.clippingState || null;
      l.value = v, v = u(_, d, M, p);
      for (let N = 0; N !== M; ++N)
        v[N] = t[N];
      f.clippingState = v, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += E;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, d, p, _) {
    const g = h !== null ? h.length : 0;
    let m = null;
    if (g !== 0) {
      if (m = l.value, _ !== !0 || m === null) {
        const f = p + g * 4, E = d.matrixWorldInverse;
        o.getNormalMatrix(E), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let M = 0, v = p; M !== g; ++M, v += 4)
          a.copy(h[M]).applyMatrix4(E, o), a.normal.toArray(m, v), m[v + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return e.numPlanes = g, e.numIntersection = 0, m;
  }
}
function $p(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Ha ? a.mapping = ts : o === Va && (a.mapping = ns), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ha || o === Va)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new nh(l.height);
            return c.fromEquirectangularTexture(i, a), e.set(a, c), a.addEventListener("dispose", s), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class qp extends sd {
  constructor(e = -1, t = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, s, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = s + t, l = s - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Yi = 4, wl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], gi = 20, _a = /* @__PURE__ */ new qp(), Al = /* @__PURE__ */ new We();
let va = null, xa = 0, ya = 0, Sa = !1;
const pi = (1 + Math.sqrt(5)) / 2, Hi = 1 / pi, Rl = [
  /* @__PURE__ */ new R(-pi, Hi, 0),
  /* @__PURE__ */ new R(pi, Hi, 0),
  /* @__PURE__ */ new R(-Hi, 0, pi),
  /* @__PURE__ */ new R(Hi, 0, pi),
  /* @__PURE__ */ new R(0, pi, -Hi),
  /* @__PURE__ */ new R(0, pi, Hi),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, 1)
];
class Cl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, s = 100) {
    va = this._renderer.getRenderTarget(), xa = this._renderer.getActiveCubeFace(), ya = this._renderer.getActiveMipmapLevel(), Sa = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, s, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ll(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Dl(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(va, xa, ya), this._renderer.xr.enabled = Sa, e.scissorTest = !1, cr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ts || e.mapping === ns ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), va = this._renderer.getRenderTarget(), xa = this._renderer.getActiveCubeFace(), ya = this._renderer.getActiveMipmapLevel(), Sa = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: yn,
      minFilter: yn,
      generateMipmaps: !1,
      type: zs,
      format: dn,
      colorSpace: fs,
      depthBuffer: !1
    }, s = Pl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Pl(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Yp(r)), this._blurMaterial = jp(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new Wt(this._lodPlanes[0], e);
    this._renderer.compile(t, _a);
  }
  _sceneToCubeUV(e, t, n, s) {
    const o = new Jt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, d = u.toneMapping;
    u.getClearColor(Al), u.toneMapping = ei, u.autoClear = !1;
    const p = new Is({
      name: "PMREM.Background",
      side: Bt,
      depthWrite: !1,
      depthTest: !1
    }), _ = new Wt(new Hs(), p);
    let g = !1;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, g = !0) : (p.color.copy(Al), g = !0);
    for (let f = 0; f < 6; f++) {
      const E = f % 3;
      E === 0 ? (o.up.set(0, l[f], 0), o.lookAt(c[f], 0, 0)) : E === 1 ? (o.up.set(0, 0, l[f]), o.lookAt(0, c[f], 0)) : (o.up.set(0, l[f], 0), o.lookAt(0, 0, c[f]));
      const M = this._cubeSize;
      cr(s, E * M, f > 2 ? M : 0, M, M), u.setRenderTarget(s), g && u.render(_, o), u.render(e, o);
    }
    _.geometry.dispose(), _.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, s = e.mapping === ts || e.mapping === ns;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ll()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Dl());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new Wt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    cr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, _a);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Rl[(s - r - 1) % Rl.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      s,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      s,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, s, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new Wt(this._lodPlanes[s], c), d = c.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * gi - 1), g = r / _, m = isFinite(r) ? 1 + Math.floor(u * g) : gi;
    m > gi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);
    const f = [];
    let E = 0;
    for (let A = 0; A < gi; ++A) {
      const P = A / g, b = Math.exp(-P * P / 2);
      f.push(b), A === 0 ? E += b : A < m && (E += 2 * b);
    }
    for (let A = 0; A < f.length; A++)
      f[A] = f[A] / E;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: M } = this;
    d.dTheta.value = _, d.mipInt.value = M - n;
    const v = this._sizeLods[s], N = 3 * v * (s > M - Yi ? s - M + Yi : 0), w = 4 * (this._cubeSize - v);
    cr(t, N, w, 3 * v, 2 * v), l.setRenderTarget(t), l.render(h, _a);
  }
}
function Yp(i) {
  const e = [], t = [], n = [];
  let s = i;
  const r = i - Yi + 1 + wl.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    t.push(o);
    let l = 1 / o;
    a > i - Yi ? l = wl[a - i + Yi - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, h = 1 + c, d = [u, u, h, u, h, h, u, u, h, h, u, h], p = 6, _ = 6, g = 3, m = 2, f = 1, E = new Float32Array(g * _ * p), M = new Float32Array(m * _ * p), v = new Float32Array(f * _ * p);
    for (let w = 0; w < p; w++) {
      const A = w % 3 * 2 / 3 - 1, P = w > 2 ? 0 : -1, b = [
        A,
        P,
        0,
        A + 2 / 3,
        P,
        0,
        A + 2 / 3,
        P + 1,
        0,
        A,
        P,
        0,
        A + 2 / 3,
        P + 1,
        0,
        A,
        P + 1,
        0
      ];
      E.set(b, g * _ * w), M.set(d, m * _ * w);
      const y = [w, w, w, w, w, w];
      v.set(y, f * _ * w);
    }
    const N = new Ct();
    N.setAttribute("position", new en(E, g)), N.setAttribute("uv", new en(M, m)), N.setAttribute("faceIndex", new en(v, f)), e.push(N), s > Yi && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Pl(i, e, t) {
  const n = new yi(i, e, t);
  return n.texture.mapping = Wr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function cr(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function jp(i, e, t) {
  const n = new Float32Array(gi), s = new R(0, 1, 0);
  return new pn({
    name: "SphericalGaussianBlur",
    defines: {
      n: gi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: ko(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Qn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Dl() {
  return new pn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ko(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Qn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ll() {
  return new pn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ko(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Qn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ko() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Zp(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Ha || l === Va, u = l === ts || l === ns;
      if (c || u) {
        let h = e.get(o);
        const d = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return t === null && (t = new Cl(i)), h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), h.texture;
        if (h !== void 0)
          return h.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || u && p && s(p) ? (t === null && (t = new Cl(i)), h = c ? t.fromEquirectangular(o) : t.fromCubemap(o), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), o.addEventListener("dispose", r), h.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function Kp(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return e[n] = s, s;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const s = t(n);
      return s === null && Ts("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function Jp(i, e, t, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes)
      e.remove(d.attributes[_]);
    for (const _ in d.morphAttributes) {
      const g = d.morphAttributes[_];
      for (let m = 0, f = g.length; m < f; m++)
        e.remove(g[m]);
    }
    d.removeEventListener("dispose", a), delete s[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, d) {
    return s[d.id] === !0 || (d.addEventListener("dispose", a), s[d.id] = !0, t.memory.geometries++), d;
  }
  function l(h) {
    const d = h.attributes;
    for (const _ in d)
      e.update(d[_], i.ARRAY_BUFFER);
    const p = h.morphAttributes;
    for (const _ in p) {
      const g = p[_];
      for (let m = 0, f = g.length; m < f; m++)
        e.update(g[m], i.ARRAY_BUFFER);
    }
  }
  function c(h) {
    const d = [], p = h.index, _ = h.attributes.position;
    let g = 0;
    if (p !== null) {
      const E = p.array;
      g = p.version;
      for (let M = 0, v = E.length; M < v; M += 3) {
        const N = E[M + 0], w = E[M + 1], A = E[M + 2];
        d.push(N, w, w, A, A, N);
      }
    } else if (_ !== void 0) {
      const E = _.array;
      g = _.version;
      for (let M = 0, v = E.length / 3 - 1; M < v; M += 3) {
        const N = M + 0, w = M + 1, A = M + 2;
        d.push(N, w, w, A, A, N);
      }
    } else
      return;
    const m = new (Zc(d) ? nd : td)(d, 1);
    m.version = g;
    const f = r.get(h);
    f && e.remove(f), r.set(h, m);
  }
  function u(h) {
    const d = r.get(h);
    if (d) {
      const p = h.index;
      p !== null && d.version < p.version && c(h);
    } else
      c(h);
    return r.get(h);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function Qp(i, e, t) {
  let n;
  function s(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    r = d.type, a = d.bytesPerElement;
  }
  function l(d, p) {
    i.drawElements(n, p, r, d * a), t.update(p, n, 1);
  }
  function c(d, p, _) {
    _ !== 0 && (i.drawElementsInstanced(n, p, r, d * a, _), t.update(p, n, _));
  }
  function u(d, p, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, _);
    let m = 0;
    for (let f = 0; f < _; f++)
      m += p[f];
    t.update(m, n, 1);
  }
  function h(d, p, _, g) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let f = 0; f < d.length; f++)
        c(d[f] / a, p[f], g[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, g, 0, _);
      let f = 0;
      for (let E = 0; E < _; E++)
        f += p[E] * g[E];
      t.update(f, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function em(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case i.LINES:
        t.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * r;
        break;
      case i.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n
  };
}
function tm(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), s = new ut();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== h) {
      let b = function() {
        A.dispose(), n.delete(o), o.removeEventListener("dispose", b);
      };
      d !== void 0 && d.texture.dispose();
      const p = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, g = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], f = o.morphAttributes.normal || [], E = o.morphAttributes.color || [];
      let M = 0;
      p === !0 && (M = 1), _ === !0 && (M = 2), g === !0 && (M = 3);
      let v = o.attributes.position.count * M, N = 1;
      v > e.maxTextureSize && (N = Math.ceil(v / e.maxTextureSize), v = e.maxTextureSize);
      const w = new Float32Array(v * N * 4 * h), A = new Jc(w, v, N, h);
      A.type = Ln, A.needsUpdate = !0;
      const P = M * 4;
      for (let y = 0; y < h; y++) {
        const C = m[y], H = f[y], O = E[y], G = v * N * 4 * y;
        for (let $ = 0; $ < C.count; $++) {
          const B = $ * P;
          p === !0 && (s.fromBufferAttribute(C, $), w[G + B + 0] = s.x, w[G + B + 1] = s.y, w[G + B + 2] = s.z, w[G + B + 3] = 0), _ === !0 && (s.fromBufferAttribute(H, $), w[G + B + 4] = s.x, w[G + B + 5] = s.y, w[G + B + 6] = s.z, w[G + B + 7] = 0), g === !0 && (s.fromBufferAttribute(O, $), w[G + B + 8] = s.x, w[G + B + 9] = s.y, w[G + B + 10] = s.z, w[G + B + 11] = O.itemSize === 4 ? s.w : 1);
        }
      }
      d = {
        count: h,
        texture: A,
        size: new Le(v, N)
      }, n.set(o, d), o.addEventListener("dispose", b);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let g = 0; g < c.length; g++)
        p += c[g];
      const _ = o.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", _), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", d.size);
  }
  return {
    update: r
  };
}
function nm(i, e, t, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, u = l.geometry, h = e.get(l, u);
    if (s.get(h) !== c && (e.update(h), s.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), s.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      s.get(d) !== c && (d.update(), s.set(d, c));
    }
    return h;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
class ld extends Ut {
  constructor(e, t, n, s, r, a, o, l, c, u = Ki) {
    if (u !== Ki && u !== ss)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Ki && (n = xi), n === void 0 && u === ss && (n = is), super(null, s, r, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : fn, this.minFilter = l !== void 0 ? l : fn, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const cd = /* @__PURE__ */ new Ut(), Il = /* @__PURE__ */ new ld(1, 1), dd = /* @__PURE__ */ new Jc(), ud = /* @__PURE__ */ new Hu(), hd = /* @__PURE__ */ new rd(), Ul = [], Nl = [], Ol = new Float32Array(16), Fl = new Float32Array(9), kl = new Float32Array(4);
function ps(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let r = Ul[s];
  if (r === void 0 && (r = new Float32Array(s), Ul[s] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, i[a].toArray(r, o);
  }
  return r;
}
function St(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function bt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Yr(i, e) {
  let t = Nl[e];
  t === void 0 && (t = new Int32Array(e), Nl[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function im(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function sm(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e)) return;
    i.uniform2fv(this.addr, e), bt(t, e);
  }
}
function rm(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (St(t, e)) return;
    i.uniform3fv(this.addr, e), bt(t, e);
  }
}
function am(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e)) return;
    i.uniform4fv(this.addr, e), bt(t, e);
  }
}
function om(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), bt(t, e);
  } else {
    if (St(t, n)) return;
    kl.set(n), i.uniformMatrix2fv(this.addr, !1, kl), bt(t, n);
  }
}
function lm(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), bt(t, e);
  } else {
    if (St(t, n)) return;
    Fl.set(n), i.uniformMatrix3fv(this.addr, !1, Fl), bt(t, n);
  }
}
function cm(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), bt(t, e);
  } else {
    if (St(t, n)) return;
    Ol.set(n), i.uniformMatrix4fv(this.addr, !1, Ol), bt(t, n);
  }
}
function dm(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function um(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e)) return;
    i.uniform2iv(this.addr, e), bt(t, e);
  }
}
function hm(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (St(t, e)) return;
    i.uniform3iv(this.addr, e), bt(t, e);
  }
}
function fm(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e)) return;
    i.uniform4iv(this.addr, e), bt(t, e);
  }
}
function pm(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function mm(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e)) return;
    i.uniform2uiv(this.addr, e), bt(t, e);
  }
}
function gm(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (St(t, e)) return;
    i.uniform3uiv(this.addr, e), bt(t, e);
  }
}
function _m(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e)) return;
    i.uniform4uiv(this.addr, e), bt(t, e);
  }
}
function vm(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (Il.compareFunction = Yc, r = Il) : r = cd, t.setTexture2D(e || r, s);
}
function xm(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || ud, s);
}
function ym(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || hd, s);
}
function Sm(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || dd, s);
}
function bm(i) {
  switch (i) {
    case 5126:
      return im;
    case 35664:
      return sm;
    case 35665:
      return rm;
    case 35666:
      return am;
    case 35674:
      return om;
    case 35675:
      return lm;
    case 35676:
      return cm;
    case 5124:
    case 35670:
      return dm;
    case 35667:
    case 35671:
      return um;
    case 35668:
    case 35672:
      return hm;
    case 35669:
    case 35673:
      return fm;
    case 5125:
      return pm;
    case 36294:
      return mm;
    case 36295:
      return gm;
    case 36296:
      return _m;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return vm;
    case 35679:
    case 36299:
    case 36307:
      return xm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ym;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Sm;
  }
}
function Mm(i, e) {
  i.uniform1fv(this.addr, e);
}
function Em(i, e) {
  const t = ps(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Tm(i, e) {
  const t = ps(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function wm(i, e) {
  const t = ps(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Am(i, e) {
  const t = ps(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Rm(i, e) {
  const t = ps(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Cm(i, e) {
  const t = ps(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Pm(i, e) {
  i.uniform1iv(this.addr, e);
}
function Dm(i, e) {
  i.uniform2iv(this.addr, e);
}
function Lm(i, e) {
  i.uniform3iv(this.addr, e);
}
function Im(i, e) {
  i.uniform4iv(this.addr, e);
}
function Um(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Nm(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Om(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Fm(i, e) {
  i.uniform4uiv(this.addr, e);
}
function km(i, e, t) {
  const n = this.cache, s = e.length, r = Yr(t, s);
  St(n, r) || (i.uniform1iv(this.addr, r), bt(n, r));
  for (let a = 0; a !== s; ++a)
    t.setTexture2D(e[a] || cd, r[a]);
}
function Bm(i, e, t) {
  const n = this.cache, s = e.length, r = Yr(t, s);
  St(n, r) || (i.uniform1iv(this.addr, r), bt(n, r));
  for (let a = 0; a !== s; ++a)
    t.setTexture3D(e[a] || ud, r[a]);
}
function zm(i, e, t) {
  const n = this.cache, s = e.length, r = Yr(t, s);
  St(n, r) || (i.uniform1iv(this.addr, r), bt(n, r));
  for (let a = 0; a !== s; ++a)
    t.setTextureCube(e[a] || hd, r[a]);
}
function Hm(i, e, t) {
  const n = this.cache, s = e.length, r = Yr(t, s);
  St(n, r) || (i.uniform1iv(this.addr, r), bt(n, r));
  for (let a = 0; a !== s; ++a)
    t.setTexture2DArray(e[a] || dd, r[a]);
}
function Vm(i) {
  switch (i) {
    case 5126:
      return Mm;
    case 35664:
      return Em;
    case 35665:
      return Tm;
    case 35666:
      return wm;
    case 35674:
      return Am;
    case 35675:
      return Rm;
    case 35676:
      return Cm;
    case 5124:
    case 35670:
      return Pm;
    case 35667:
    case 35671:
      return Dm;
    case 35668:
    case 35672:
      return Lm;
    case 35669:
    case 35673:
      return Im;
    case 5125:
      return Um;
    case 36294:
      return Nm;
    case 36295:
      return Om;
    case 36296:
      return Fm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return km;
    case 35679:
    case 36299:
    case 36307:
      return Bm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return zm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Hm;
  }
}
class Gm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = bm(t.type);
  }
}
class Wm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Vm(t.type);
  }
}
class Xm {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ba = /(\w+)(\])?(\[|\.)?/g;
function Bl(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function $m(i, e, t) {
  const n = i.name, s = n.length;
  for (ba.lastIndex = 0; ; ) {
    const r = ba.exec(n), a = ba.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      Bl(t, c === void 0 ? new Gm(o, i, e) : new Wm(o, i, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new Xm(o), Bl(t, h)), t = h;
    }
  }
}
class Rr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = e.getActiveUniform(t, s), a = e.getUniformLocation(t, r.name);
      $m(r, a, this);
    }
  }
  setValue(e, t, n, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const a = e[s];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function zl(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const qm = 37297;
let Ym = 0;
function jm(i, e) {
  const t = i.split(`
`), n = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Hl = /* @__PURE__ */ new He();
function Zm(i) {
  Qe._getMatrix(Hl, Qe.workingColorSpace, i);
  const e = `mat3( ${Hl.elements.map((t) => t.toFixed(4))} )`;
  switch (Qe.getTransfer(i)) {
    case Xr:
      return [e, "LinearTransferOETF"];
    case ot:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function Vl(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = i.getShaderInfoLog(e).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + s + `

` + jm(i.getShaderSource(e), a);
  } else
    return s;
}
function Km(i, e) {
  const t = Zm(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function Jm(i, e) {
  let t;
  switch (e) {
    case Qd:
      t = "Linear";
      break;
    case eu:
      t = "Reinhard";
      break;
    case tu:
      t = "Cineon";
      break;
    case Oc:
      t = "ACESFilmic";
      break;
    case iu:
      t = "AgX";
      break;
    case su:
      t = "Neutral";
      break;
    case nu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const dr = /* @__PURE__ */ new R();
function Qm() {
  Qe.getLuminanceCoefficients(dr);
  const i = dr.x.toFixed(4), e = dr.y.toFixed(4), t = dr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function eg(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(ws).join(`
`);
}
function tg(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function ng(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(e, s), a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), t[a] = {
      type: r.type,
      location: i.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function ws(i) {
  return i !== "";
}
function Gl(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Wl(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ig = /^[ \t]*#include +<([\w\d./]+)>/gm;
function vo(i) {
  return i.replace(ig, rg);
}
const sg = /* @__PURE__ */ new Map();
function rg(i, e) {
  let t = Ge[e];
  if (t === void 0) {
    const n = sg.get(e);
    if (n !== void 0)
      t = Ge[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return vo(t);
}
const ag = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xl(i) {
  return i.replace(ag, og);
}
function og(i, e, t, n) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function $l(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function lg(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Uc ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Ld ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Dn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function cg(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ts:
      case ns:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Wr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function dg(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case ns:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function ug(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Nc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Kd:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Jd:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function hg(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function fg(i, e, t, n) {
  const s = i.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = lg(t), c = cg(t), u = dg(t), h = ug(t), d = hg(t), p = eg(t), _ = tg(r), g = s.createProgram();
  let m, f, E = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ws).join(`
`), m.length > 0 && (m += `
`), f = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ws).join(`
`), f.length > 0 && (f += `
`)) : (m = [
    $l(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(ws).join(`
`), f = [
    $l(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== ei ? "#define TONE_MAPPING" : "",
    t.toneMapping !== ei ? Ge.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== ei ? Jm("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ge.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Km("linearToOutputTexel", t.outputColorSpace),
    Qm(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ws).join(`
`)), a = vo(a), a = Gl(a, t), a = Wl(a, t), o = vo(o), o = Gl(o, t), o = Wl(o, t), a = Xl(a), o = Xl(o), t.isRawShaderMaterial !== !0 && (E = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, f = [
    "#define varying in",
    t.glslVersion === sl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === sl ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + f);
  const M = E + m + a, v = E + f + o, N = zl(s, s.VERTEX_SHADER, M), w = zl(s, s.FRAGMENT_SHADER, v);
  s.attachShader(g, N), s.attachShader(g, w), t.index0AttributeName !== void 0 ? s.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === !0 && s.bindAttribLocation(g, 0, "position"), s.linkProgram(g);
  function A(C) {
    if (i.debug.checkShaderErrors) {
      const H = s.getProgramInfoLog(g).trim(), O = s.getShaderInfoLog(N).trim(), G = s.getShaderInfoLog(w).trim();
      let $ = !0, B = !0;
      if (s.getProgramParameter(g, s.LINK_STATUS) === !1)
        if ($ = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, g, N, w);
        else {
          const te = Vl(s, N, "vertex"), W = Vl(s, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(g, s.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + H + `
` + te + `
` + W
          );
        }
      else H !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", H) : (O === "" || G === "") && (B = !1);
      B && (C.diagnostics = {
        runnable: $,
        programLog: H,
        vertexShader: {
          log: O,
          prefix: m
        },
        fragmentShader: {
          log: G,
          prefix: f
        }
      });
    }
    s.deleteShader(N), s.deleteShader(w), P = new Rr(s, g), b = ng(s, g);
  }
  let P;
  this.getUniforms = function() {
    return P === void 0 && A(this), P;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && A(this), b;
  };
  let y = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return y === !1 && (y = s.getProgramParameter(g, qm)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Ym++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = N, this.fragmentShader = w, this;
}
let pg = 0;
class mg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(s) === !1 && (a.add(s), s.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new gg(e), t.set(e, n)), n;
  }
}
class gg {
  constructor(e) {
    this.id = pg++, this.code = e, this.usedTimes = 0;
  }
}
function _g(i, e, t, n, s, r, a) {
  const o = new Qc(), l = new mg(), c = /* @__PURE__ */ new Set(), u = [], h = s.logarithmicDepthBuffer, d = s.vertexTextures;
  let p = s.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function g(b) {
    return c.add(b), b === 0 ? "uv" : `uv${b}`;
  }
  function m(b, y, C, H, O) {
    const G = H.fog, $ = O.geometry, B = b.isMeshStandardMaterial ? H.environment : null, te = (b.isMeshStandardMaterial ? t : e).get(b.envMap || B), W = te && te.mapping === Wr ? te.image.height : null, re = _[b.type];
    b.precision !== null && (p = s.getMaxPrecision(b.precision), p !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", p, "instead."));
    const ce = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, Ee = ce !== void 0 ? ce.length : 0;
    let Ne = 0;
    $.morphAttributes.position !== void 0 && (Ne = 1), $.morphAttributes.normal !== void 0 && (Ne = 2), $.morphAttributes.color !== void 0 && (Ne = 3);
    let Ze, F, j, Y;
    if (re) {
      const rt = Gt[re];
      Ze = rt.vertexShader, F = rt.fragmentShader;
    } else
      Ze = b.vertexShader, F = b.fragmentShader, l.update(b), j = l.getVertexShaderID(b), Y = l.getFragmentShaderID(b);
    const Q = i.getRenderTarget(), oe = i.state.buffers.depth.getReversed(), _e = O.isInstancedMesh === !0, Re = O.isBatchedMesh === !0, qe = !!b.map, Ye = !!b.matcap, mt = !!te, U = !!b.aoMap, zt = !!b.lightMap, me = !!b.bumpMap, De = !!b.normalMap, ge = !!b.displacementMap, $e = !!b.emissiveMap, Se = !!b.metalnessMap, T = !!b.roughnessMap, x = b.anisotropy > 0, k = b.clearcoat > 0, K = b.dispersion > 0, ee = b.iridescence > 0, q = b.sheen > 0, Ce = b.transmission > 0, de = x && !!b.anisotropyMap, ve = k && !!b.clearcoatMap, Je = k && !!b.clearcoatNormalMap, ie = k && !!b.clearcoatRoughnessMap, xe = ee && !!b.iridescenceMap, Ie = ee && !!b.iridescenceThicknessMap, Ue = q && !!b.sheenColorMap, ye = q && !!b.sheenRoughnessMap, Ke = !!b.specularMap, Ve = !!b.specularColorMap, ct = !!b.specularIntensityMap, D = Ce && !!b.transmissionMap, le = Ce && !!b.thicknessMap, X = !!b.gradientMap, J = !!b.alphaMap, pe = b.alphaTest > 0, ue = !!b.alphaHash, Be = !!b.extensions;
    let gt = ei;
    b.toneMapped && (Q === null || Q.isXRRenderTarget === !0) && (gt = i.toneMapping);
    const Pt = {
      shaderID: re,
      shaderType: b.type,
      shaderName: b.name,
      vertexShader: Ze,
      fragmentShader: F,
      defines: b.defines,
      customVertexShaderID: j,
      customFragmentShaderID: Y,
      isRawShaderMaterial: b.isRawShaderMaterial === !0,
      glslVersion: b.glslVersion,
      precision: p,
      batching: Re,
      batchingColor: Re && O._colorsTexture !== null,
      instancing: _e,
      instancingColor: _e && O.instanceColor !== null,
      instancingMorph: _e && O.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace: Q === null ? i.outputColorSpace : Q.isXRRenderTarget === !0 ? Q.texture.colorSpace : fs,
      alphaToCoverage: !!b.alphaToCoverage,
      map: qe,
      matcap: Ye,
      envMap: mt,
      envMapMode: mt && te.mapping,
      envMapCubeUVHeight: W,
      aoMap: U,
      lightMap: zt,
      bumpMap: me,
      normalMap: De,
      displacementMap: d && ge,
      emissiveMap: $e,
      normalMapObjectSpace: De && b.normalMapType === cu,
      normalMapTangentSpace: De && b.normalMapType === lu,
      metalnessMap: Se,
      roughnessMap: T,
      anisotropy: x,
      anisotropyMap: de,
      clearcoat: k,
      clearcoatMap: ve,
      clearcoatNormalMap: Je,
      clearcoatRoughnessMap: ie,
      dispersion: K,
      iridescence: ee,
      iridescenceMap: xe,
      iridescenceThicknessMap: Ie,
      sheen: q,
      sheenColorMap: Ue,
      sheenRoughnessMap: ye,
      specularMap: Ke,
      specularColorMap: Ve,
      specularIntensityMap: ct,
      transmission: Ce,
      transmissionMap: D,
      thicknessMap: le,
      gradientMap: X,
      opaque: b.transparent === !1 && b.blending === Zi && b.alphaToCoverage === !1,
      alphaMap: J,
      alphaTest: pe,
      alphaHash: ue,
      combine: b.combine,
      //
      mapUv: qe && g(b.map.channel),
      aoMapUv: U && g(b.aoMap.channel),
      lightMapUv: zt && g(b.lightMap.channel),
      bumpMapUv: me && g(b.bumpMap.channel),
      normalMapUv: De && g(b.normalMap.channel),
      displacementMapUv: ge && g(b.displacementMap.channel),
      emissiveMapUv: $e && g(b.emissiveMap.channel),
      metalnessMapUv: Se && g(b.metalnessMap.channel),
      roughnessMapUv: T && g(b.roughnessMap.channel),
      anisotropyMapUv: de && g(b.anisotropyMap.channel),
      clearcoatMapUv: ve && g(b.clearcoatMap.channel),
      clearcoatNormalMapUv: Je && g(b.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ie && g(b.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xe && g(b.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ie && g(b.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ue && g(b.sheenColorMap.channel),
      sheenRoughnessMapUv: ye && g(b.sheenRoughnessMap.channel),
      specularMapUv: Ke && g(b.specularMap.channel),
      specularColorMapUv: Ve && g(b.specularColorMap.channel),
      specularIntensityMapUv: ct && g(b.specularIntensityMap.channel),
      transmissionMapUv: D && g(b.transmissionMap.channel),
      thicknessMapUv: le && g(b.thicknessMap.channel),
      alphaMapUv: J && g(b.alphaMap.channel),
      //
      vertexTangents: !!$.attributes.tangent && (De || x),
      vertexColors: b.vertexColors,
      vertexAlphas: b.vertexColors === !0 && !!$.attributes.color && $.attributes.color.itemSize === 4,
      pointsUvs: O.isPoints === !0 && !!$.attributes.uv && (qe || J),
      fog: !!G,
      useFog: b.fog === !0,
      fogExp2: !!G && G.isFogExp2,
      flatShading: b.flatShading === !0,
      sizeAttenuation: b.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reverseDepthBuffer: oe,
      skinning: O.isSkinnedMesh === !0,
      morphTargets: $.morphAttributes.position !== void 0,
      morphNormals: $.morphAttributes.normal !== void 0,
      morphColors: $.morphAttributes.color !== void 0,
      morphTargetsCount: Ee,
      morphTextureStride: Ne,
      numDirLights: y.directional.length,
      numPointLights: y.point.length,
      numSpotLights: y.spot.length,
      numSpotLightMaps: y.spotLightMap.length,
      numRectAreaLights: y.rectArea.length,
      numHemiLights: y.hemi.length,
      numDirLightShadows: y.directionalShadowMap.length,
      numPointLightShadows: y.pointShadowMap.length,
      numSpotLightShadows: y.spotShadowMap.length,
      numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps,
      numLightProbes: y.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: b.dithering,
      shadowMapEnabled: i.shadowMap.enabled && C.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: gt,
      decodeVideoTexture: qe && b.map.isVideoTexture === !0 && Qe.getTransfer(b.map.colorSpace) === ot,
      decodeVideoTextureEmissive: $e && b.emissiveMap.isVideoTexture === !0 && Qe.getTransfer(b.emissiveMap.colorSpace) === ot,
      premultipliedAlpha: b.premultipliedAlpha,
      doubleSided: b.side === vn,
      flipSided: b.side === Bt,
      useDepthPacking: b.depthPacking >= 0,
      depthPacking: b.depthPacking || 0,
      index0AttributeName: b.index0AttributeName,
      extensionClipCullDistance: Be && b.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Be && b.extensions.multiDraw === !0 || Re) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: b.customProgramCacheKey()
    };
    return Pt.vertexUv1s = c.has(1), Pt.vertexUv2s = c.has(2), Pt.vertexUv3s = c.has(3), c.clear(), Pt;
  }
  function f(b) {
    const y = [];
    if (b.shaderID ? y.push(b.shaderID) : (y.push(b.customVertexShaderID), y.push(b.customFragmentShaderID)), b.defines !== void 0)
      for (const C in b.defines)
        y.push(C), y.push(b.defines[C]);
    return b.isRawShaderMaterial === !1 && (E(y, b), M(y, b), y.push(i.outputColorSpace)), y.push(b.customProgramCacheKey), y.join();
  }
  function E(b, y) {
    b.push(y.precision), b.push(y.outputColorSpace), b.push(y.envMapMode), b.push(y.envMapCubeUVHeight), b.push(y.mapUv), b.push(y.alphaMapUv), b.push(y.lightMapUv), b.push(y.aoMapUv), b.push(y.bumpMapUv), b.push(y.normalMapUv), b.push(y.displacementMapUv), b.push(y.emissiveMapUv), b.push(y.metalnessMapUv), b.push(y.roughnessMapUv), b.push(y.anisotropyMapUv), b.push(y.clearcoatMapUv), b.push(y.clearcoatNormalMapUv), b.push(y.clearcoatRoughnessMapUv), b.push(y.iridescenceMapUv), b.push(y.iridescenceThicknessMapUv), b.push(y.sheenColorMapUv), b.push(y.sheenRoughnessMapUv), b.push(y.specularMapUv), b.push(y.specularColorMapUv), b.push(y.specularIntensityMapUv), b.push(y.transmissionMapUv), b.push(y.thicknessMapUv), b.push(y.combine), b.push(y.fogExp2), b.push(y.sizeAttenuation), b.push(y.morphTargetsCount), b.push(y.morphAttributeCount), b.push(y.numDirLights), b.push(y.numPointLights), b.push(y.numSpotLights), b.push(y.numSpotLightMaps), b.push(y.numHemiLights), b.push(y.numRectAreaLights), b.push(y.numDirLightShadows), b.push(y.numPointLightShadows), b.push(y.numSpotLightShadows), b.push(y.numSpotLightShadowsWithMaps), b.push(y.numLightProbes), b.push(y.shadowMapType), b.push(y.toneMapping), b.push(y.numClippingPlanes), b.push(y.numClipIntersection), b.push(y.depthPacking);
  }
  function M(b, y) {
    o.disableAll(), y.supportsVertexTextures && o.enable(0), y.instancing && o.enable(1), y.instancingColor && o.enable(2), y.instancingMorph && o.enable(3), y.matcap && o.enable(4), y.envMap && o.enable(5), y.normalMapObjectSpace && o.enable(6), y.normalMapTangentSpace && o.enable(7), y.clearcoat && o.enable(8), y.iridescence && o.enable(9), y.alphaTest && o.enable(10), y.vertexColors && o.enable(11), y.vertexAlphas && o.enable(12), y.vertexUv1s && o.enable(13), y.vertexUv2s && o.enable(14), y.vertexUv3s && o.enable(15), y.vertexTangents && o.enable(16), y.anisotropy && o.enable(17), y.alphaHash && o.enable(18), y.batching && o.enable(19), y.dispersion && o.enable(20), y.batchingColor && o.enable(21), b.push(o.mask), o.disableAll(), y.fog && o.enable(0), y.useFog && o.enable(1), y.flatShading && o.enable(2), y.logarithmicDepthBuffer && o.enable(3), y.reverseDepthBuffer && o.enable(4), y.skinning && o.enable(5), y.morphTargets && o.enable(6), y.morphNormals && o.enable(7), y.morphColors && o.enable(8), y.premultipliedAlpha && o.enable(9), y.shadowMapEnabled && o.enable(10), y.doubleSided && o.enable(11), y.flipSided && o.enable(12), y.useDepthPacking && o.enable(13), y.dithering && o.enable(14), y.transmission && o.enable(15), y.sheen && o.enable(16), y.opaque && o.enable(17), y.pointsUvs && o.enable(18), y.decodeVideoTexture && o.enable(19), y.decodeVideoTextureEmissive && o.enable(20), y.alphaToCoverage && o.enable(21), b.push(o.mask);
  }
  function v(b) {
    const y = _[b.type];
    let C;
    if (y) {
      const H = Gt[y];
      C = Fo.clone(H.uniforms);
    } else
      C = b.uniforms;
    return C;
  }
  function N(b, y) {
    let C;
    for (let H = 0, O = u.length; H < O; H++) {
      const G = u[H];
      if (G.cacheKey === y) {
        C = G, ++C.usedTimes;
        break;
      }
    }
    return C === void 0 && (C = new fg(i, y, b, r), u.push(C)), C;
  }
  function w(b) {
    if (--b.usedTimes === 0) {
      const y = u.indexOf(b);
      u[y] = u[u.length - 1], u.pop(), b.destroy();
    }
  }
  function A(b) {
    l.remove(b);
  }
  function P() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: f,
    getUniforms: v,
    acquireProgram: N,
    releaseProgram: w,
    releaseShaderCache: A,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: P
  };
}
function vg() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, l) {
    i.get(a)[o] = l;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: s,
    dispose: r
  };
}
function xg(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function ql(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Yl() {
  const i = [];
  let e = 0;
  const t = [], n = [], s = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, s.length = 0;
  }
  function a(h, d, p, _, g, m) {
    let f = i[e];
    return f === void 0 ? (f = {
      id: h.id,
      object: h,
      geometry: d,
      material: p,
      groupOrder: _,
      renderOrder: h.renderOrder,
      z: g,
      group: m
    }, i[e] = f) : (f.id = h.id, f.object = h, f.geometry = d, f.material = p, f.groupOrder = _, f.renderOrder = h.renderOrder, f.z = g, f.group = m), e++, f;
  }
  function o(h, d, p, _, g, m) {
    const f = a(h, d, p, _, g, m);
    p.transmission > 0 ? n.push(f) : p.transparent === !0 ? s.push(f) : t.push(f);
  }
  function l(h, d, p, _, g, m) {
    const f = a(h, d, p, _, g, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === !0 ? s.unshift(f) : t.unshift(f);
  }
  function c(h, d) {
    t.length > 1 && t.sort(h || xg), n.length > 1 && n.sort(d || ql), s.length > 1 && s.sort(d || ql);
  }
  function u() {
    for (let h = e, d = i.length; h < d; h++) {
      const p = i[h];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: s,
    init: r,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function yg() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new Yl(), i.set(n, [a])) : s >= r.length ? (a = new Yl(), r.push(a)) : a = r[s], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Sg() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new We()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new We(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new We(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new We(),
            groundColor: new We()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new We(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function bg() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Mg = 0;
function Eg(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Tg(i) {
  const e = new Sg(), t = bg(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new R());
  const s = new R(), r = new pt(), a = new pt();
  function o(c) {
    let u = 0, h = 0, d = 0;
    for (let b = 0; b < 9; b++) n.probe[b].set(0, 0, 0);
    let p = 0, _ = 0, g = 0, m = 0, f = 0, E = 0, M = 0, v = 0, N = 0, w = 0, A = 0;
    c.sort(Eg);
    for (let b = 0, y = c.length; b < y; b++) {
      const C = c[b], H = C.color, O = C.intensity, G = C.distance, $ = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight)
        u += H.r * O, h += H.g * O, d += H.b * O;
      else if (C.isLightProbe) {
        for (let B = 0; B < 9; B++)
          n.probe[B].addScaledVector(C.sh.coefficients[B], O);
        A++;
      } else if (C.isDirectionalLight) {
        const B = e.get(C);
        if (B.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const te = C.shadow, W = t.get(C);
          W.shadowIntensity = te.intensity, W.shadowBias = te.bias, W.shadowNormalBias = te.normalBias, W.shadowRadius = te.radius, W.shadowMapSize = te.mapSize, n.directionalShadow[p] = W, n.directionalShadowMap[p] = $, n.directionalShadowMatrix[p] = C.shadow.matrix, E++;
        }
        n.directional[p] = B, p++;
      } else if (C.isSpotLight) {
        const B = e.get(C);
        B.position.setFromMatrixPosition(C.matrixWorld), B.color.copy(H).multiplyScalar(O), B.distance = G, B.coneCos = Math.cos(C.angle), B.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), B.decay = C.decay, n.spot[g] = B;
        const te = C.shadow;
        if (C.map && (n.spotLightMap[N] = C.map, N++, te.updateMatrices(C), C.castShadow && w++), n.spotLightMatrix[g] = te.matrix, C.castShadow) {
          const W = t.get(C);
          W.shadowIntensity = te.intensity, W.shadowBias = te.bias, W.shadowNormalBias = te.normalBias, W.shadowRadius = te.radius, W.shadowMapSize = te.mapSize, n.spotShadow[g] = W, n.spotShadowMap[g] = $, v++;
        }
        g++;
      } else if (C.isRectAreaLight) {
        const B = e.get(C);
        B.color.copy(H).multiplyScalar(O), B.halfWidth.set(C.width * 0.5, 0, 0), B.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[m] = B, m++;
      } else if (C.isPointLight) {
        const B = e.get(C);
        if (B.color.copy(C.color).multiplyScalar(C.intensity), B.distance = C.distance, B.decay = C.decay, C.castShadow) {
          const te = C.shadow, W = t.get(C);
          W.shadowIntensity = te.intensity, W.shadowBias = te.bias, W.shadowNormalBias = te.normalBias, W.shadowRadius = te.radius, W.shadowMapSize = te.mapSize, W.shadowCameraNear = te.camera.near, W.shadowCameraFar = te.camera.far, n.pointShadow[_] = W, n.pointShadowMap[_] = $, n.pointShadowMatrix[_] = C.shadow.matrix, M++;
        }
        n.point[_] = B, _++;
      } else if (C.isHemisphereLight) {
        const B = e.get(C);
        B.skyColor.copy(C.color).multiplyScalar(O), B.groundColor.copy(C.groundColor).multiplyScalar(O), n.hemi[f] = B, f++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ae.LTC_FLOAT_1, n.rectAreaLTC2 = ae.LTC_FLOAT_2) : (n.rectAreaLTC1 = ae.LTC_HALF_1, n.rectAreaLTC2 = ae.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = d;
    const P = n.hash;
    (P.directionalLength !== p || P.pointLength !== _ || P.spotLength !== g || P.rectAreaLength !== m || P.hemiLength !== f || P.numDirectionalShadows !== E || P.numPointShadows !== M || P.numSpotShadows !== v || P.numSpotMaps !== N || P.numLightProbes !== A) && (n.directional.length = p, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = f, n.directionalShadow.length = E, n.directionalShadowMap.length = E, n.pointShadow.length = M, n.pointShadowMap.length = M, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = E, n.pointShadowMatrix.length = M, n.spotLightMatrix.length = v + N - w, n.spotLightMap.length = N, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = A, P.directionalLength = p, P.pointLength = _, P.spotLength = g, P.rectAreaLength = m, P.hemiLength = f, P.numDirectionalShadows = E, P.numPointShadows = M, P.numSpotShadows = v, P.numSpotMaps = N, P.numLightProbes = A, n.version = Mg++);
  }
  function l(c, u) {
    let h = 0, d = 0, p = 0, _ = 0, g = 0;
    const m = u.matrixWorldInverse;
    for (let f = 0, E = c.length; f < E; f++) {
      const M = c[f];
      if (M.isDirectionalLight) {
        const v = n.directional[h];
        v.direction.setFromMatrixPosition(M.matrixWorld), s.setFromMatrixPosition(M.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(m), h++;
      } else if (M.isSpotLight) {
        const v = n.spot[p];
        v.position.setFromMatrixPosition(M.matrixWorld), v.position.applyMatrix4(m), v.direction.setFromMatrixPosition(M.matrixWorld), s.setFromMatrixPosition(M.target.matrixWorld), v.direction.sub(s), v.direction.transformDirection(m), p++;
      } else if (M.isRectAreaLight) {
        const v = n.rectArea[_];
        v.position.setFromMatrixPosition(M.matrixWorld), v.position.applyMatrix4(m), a.identity(), r.copy(M.matrixWorld), r.premultiply(m), a.extractRotation(r), v.halfWidth.set(M.width * 0.5, 0, 0), v.halfHeight.set(0, M.height * 0.5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), _++;
      } else if (M.isPointLight) {
        const v = n.point[d];
        v.position.setFromMatrixPosition(M.matrixWorld), v.position.applyMatrix4(m), d++;
      } else if (M.isHemisphereLight) {
        const v = n.hemi[g];
        v.direction.setFromMatrixPosition(M.matrixWorld), v.direction.transformDirection(m), g++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function jl(i) {
  const e = new Tg(i), t = [], n = [];
  function s(u) {
    c.camera = u, t.length = 0, n.length = 0;
  }
  function r(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: s,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: r,
    pushShadow: a
  };
}
function wg(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, r = 0) {
    const a = e.get(s);
    let o;
    return a === void 0 ? (o = new jl(i), e.set(s, [o])) : r >= a.length ? (o = new jl(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Ag extends wi {
  static get type() {
    return "MeshDepthMaterial";
  }
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.depthPacking = au, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Rg extends wi {
  static get type() {
    return "MeshDistanceMaterial";
  }
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Cg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Pg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Dg(i, e, t) {
  let n = new ad();
  const s = new Le(), r = new Le(), a = new ut(), o = new Ag({ depthPacking: ou }), l = new Rg(), c = {}, u = t.maxTextureSize, h = { [ni]: Bt, [Bt]: ni, [vn]: vn }, d = new pn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Le() },
      radius: { value: 4 }
    },
    vertexShader: Cg,
    fragmentShader: Pg
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new Ct();
  _.setAttribute(
    "position",
    new en(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const g = new Wt(_, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Uc;
  let f = this.type;
  this.render = function(w, A, P) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || w.length === 0) return;
    const b = i.getRenderTarget(), y = i.getActiveCubeFace(), C = i.getActiveMipmapLevel(), H = i.state;
    H.setBlending(Qn), H.buffers.color.setClear(1, 1, 1, 1), H.buffers.depth.setTest(!0), H.setScissorTest(!1);
    const O = f !== Dn && this.type === Dn, G = f === Dn && this.type !== Dn;
    for (let $ = 0, B = w.length; $ < B; $++) {
      const te = w[$], W = te.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", te, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      s.copy(W.mapSize);
      const re = W.getFrameExtents();
      if (s.multiply(re), r.copy(W.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / re.x), s.x = r.x * re.x, W.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / re.y), s.y = r.y * re.y, W.mapSize.y = r.y)), W.map === null || O === !0 || G === !0) {
        const Ee = this.type !== Dn ? { minFilter: fn, magFilter: fn } : {};
        W.map !== null && W.map.dispose(), W.map = new yi(s.x, s.y, Ee), W.map.texture.name = te.name + ".shadowMap", W.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(W.map), i.clear();
      const ce = W.getViewportCount();
      for (let Ee = 0; Ee < ce; Ee++) {
        const Ne = W.getViewport(Ee);
        a.set(
          r.x * Ne.x,
          r.y * Ne.y,
          r.x * Ne.z,
          r.y * Ne.w
        ), H.viewport(a), W.updateMatrices(te, Ee), n = W.getFrustum(), v(A, P, W.camera, te, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === Dn && E(W, P), W.needsUpdate = !1;
    }
    f = this.type, m.needsUpdate = !1, i.setRenderTarget(b, y, C);
  };
  function E(w, A) {
    const P = e.update(g);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, p.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), w.mapPass === null && (w.mapPass = new yi(s.x, s.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(A, null, P, d, g, null), p.uniforms.shadow_pass.value = w.mapPass.texture, p.uniforms.resolution.value = w.mapSize, p.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(A, null, P, p, g, null);
  }
  function M(w, A, P, b) {
    let y = null;
    const C = P.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (C !== void 0)
      y = C;
    else if (y = P.isPointLight === !0 ? l : o, i.localClippingEnabled && A.clipShadows === !0 && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
      const H = y.uuid, O = A.uuid;
      let G = c[H];
      G === void 0 && (G = {}, c[H] = G);
      let $ = G[O];
      $ === void 0 && ($ = y.clone(), G[O] = $, A.addEventListener("dispose", N)), y = $;
    }
    if (y.visible = A.visible, y.wireframe = A.wireframe, b === Dn ? y.side = A.shadowSide !== null ? A.shadowSide : A.side : y.side = A.shadowSide !== null ? A.shadowSide : h[A.side], y.alphaMap = A.alphaMap, y.alphaTest = A.alphaTest, y.map = A.map, y.clipShadows = A.clipShadows, y.clippingPlanes = A.clippingPlanes, y.clipIntersection = A.clipIntersection, y.displacementMap = A.displacementMap, y.displacementScale = A.displacementScale, y.displacementBias = A.displacementBias, y.wireframeLinewidth = A.wireframeLinewidth, y.linewidth = A.linewidth, P.isPointLight === !0 && y.isMeshDistanceMaterial === !0) {
      const H = i.properties.get(y);
      H.light = P;
    }
    return y;
  }
  function v(w, A, P, b, y) {
    if (w.visible === !1) return;
    if (w.layers.test(A.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && y === Dn) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, w.matrixWorld);
      const O = e.update(w), G = w.material;
      if (Array.isArray(G)) {
        const $ = O.groups;
        for (let B = 0, te = $.length; B < te; B++) {
          const W = $[B], re = G[W.materialIndex];
          if (re && re.visible) {
            const ce = M(w, re, b, y);
            w.onBeforeShadow(i, w, A, P, O, ce, W), i.renderBufferDirect(P, null, O, ce, w, W), w.onAfterShadow(i, w, A, P, O, ce, W);
          }
        }
      } else if (G.visible) {
        const $ = M(w, G, b, y);
        w.onBeforeShadow(i, w, A, P, O, $, null), i.renderBufferDirect(P, null, O, $, w, null), w.onAfterShadow(i, w, A, P, O, $, null);
      }
    }
    const H = w.children;
    for (let O = 0, G = H.length; O < G; O++)
      v(H[O], A, P, b, y);
  }
  function N(w) {
    w.target.removeEventListener("dispose", N);
    for (const P in c) {
      const b = c[P], y = w.target.uuid;
      y in b && (b[y].dispose(), delete b[y]);
    }
  }
}
const Lg = {
  [Ua]: Na,
  [Oa]: Ba,
  [Fa]: za,
  [es]: ka,
  [Na]: Ua,
  [Ba]: Oa,
  [za]: Fa,
  [ka]: es
};
function Ig(i, e) {
  function t() {
    let D = !1;
    const le = new ut();
    let X = null;
    const J = new ut(0, 0, 0, 0);
    return {
      setMask: function(pe) {
        X !== pe && !D && (i.colorMask(pe, pe, pe, pe), X = pe);
      },
      setLocked: function(pe) {
        D = pe;
      },
      setClear: function(pe, ue, Be, gt, Pt) {
        Pt === !0 && (pe *= gt, ue *= gt, Be *= gt), le.set(pe, ue, Be, gt), J.equals(le) === !1 && (i.clearColor(pe, ue, Be, gt), J.copy(le));
      },
      reset: function() {
        D = !1, X = null, J.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let D = !1, le = !1, X = null, J = null, pe = null;
    return {
      setReversed: function(ue) {
        if (le !== ue) {
          const Be = e.get("EXT_clip_control");
          le ? Be.clipControlEXT(Be.LOWER_LEFT_EXT, Be.ZERO_TO_ONE_EXT) : Be.clipControlEXT(Be.LOWER_LEFT_EXT, Be.NEGATIVE_ONE_TO_ONE_EXT);
          const gt = pe;
          pe = null, this.setClear(gt);
        }
        le = ue;
      },
      getReversed: function() {
        return le;
      },
      setTest: function(ue) {
        ue ? Q(i.DEPTH_TEST) : oe(i.DEPTH_TEST);
      },
      setMask: function(ue) {
        X !== ue && !D && (i.depthMask(ue), X = ue);
      },
      setFunc: function(ue) {
        if (le && (ue = Lg[ue]), J !== ue) {
          switch (ue) {
            case Ua:
              i.depthFunc(i.NEVER);
              break;
            case Na:
              i.depthFunc(i.ALWAYS);
              break;
            case Oa:
              i.depthFunc(i.LESS);
              break;
            case es:
              i.depthFunc(i.LEQUAL);
              break;
            case Fa:
              i.depthFunc(i.EQUAL);
              break;
            case ka:
              i.depthFunc(i.GEQUAL);
              break;
            case Ba:
              i.depthFunc(i.GREATER);
              break;
            case za:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          J = ue;
        }
      },
      setLocked: function(ue) {
        D = ue;
      },
      setClear: function(ue) {
        pe !== ue && (le && (ue = 1 - ue), i.clearDepth(ue), pe = ue);
      },
      reset: function() {
        D = !1, X = null, J = null, pe = null, le = !1;
      }
    };
  }
  function s() {
    let D = !1, le = null, X = null, J = null, pe = null, ue = null, Be = null, gt = null, Pt = null;
    return {
      setTest: function(rt) {
        D || (rt ? Q(i.STENCIL_TEST) : oe(i.STENCIL_TEST));
      },
      setMask: function(rt) {
        le !== rt && !D && (i.stencilMask(rt), le = rt);
      },
      setFunc: function(rt, nn, Mn) {
        (X !== rt || J !== nn || pe !== Mn) && (i.stencilFunc(rt, nn, Mn), X = rt, J = nn, pe = Mn);
      },
      setOp: function(rt, nn, Mn) {
        (ue !== rt || Be !== nn || gt !== Mn) && (i.stencilOp(rt, nn, Mn), ue = rt, Be = nn, gt = Mn);
      },
      setLocked: function(rt) {
        D = rt;
      },
      setClear: function(rt) {
        Pt !== rt && (i.clearStencil(rt), Pt = rt);
      },
      reset: function() {
        D = !1, le = null, X = null, J = null, pe = null, ue = null, Be = null, gt = null, Pt = null;
      }
    };
  }
  const r = new t(), a = new n(), o = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, d = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = !1, m = null, f = null, E = null, M = null, v = null, N = null, w = null, A = new We(0, 0, 0), P = 0, b = !1, y = null, C = null, H = null, O = null, G = null;
  const $ = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let B = !1, te = 0;
  const W = i.getParameter(i.VERSION);
  W.indexOf("WebGL") !== -1 ? (te = parseFloat(/^WebGL (\d)/.exec(W)[1]), B = te >= 1) : W.indexOf("OpenGL ES") !== -1 && (te = parseFloat(/^OpenGL ES (\d)/.exec(W)[1]), B = te >= 2);
  let re = null, ce = {};
  const Ee = i.getParameter(i.SCISSOR_BOX), Ne = i.getParameter(i.VIEWPORT), Ze = new ut().fromArray(Ee), F = new ut().fromArray(Ne);
  function j(D, le, X, J) {
    const pe = new Uint8Array(4), ue = i.createTexture();
    i.bindTexture(D, ue), i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Be = 0; Be < X; Be++)
      D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(le, 0, i.RGBA, 1, 1, J, 0, i.RGBA, i.UNSIGNED_BYTE, pe) : i.texImage2D(le + Be, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, pe);
    return ue;
  }
  const Y = {};
  Y[i.TEXTURE_2D] = j(i.TEXTURE_2D, i.TEXTURE_2D, 1), Y[i.TEXTURE_CUBE_MAP] = j(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Y[i.TEXTURE_2D_ARRAY] = j(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Y[i.TEXTURE_3D] = j(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), Q(i.DEPTH_TEST), a.setFunc(es), me(!1), De(el), Q(i.CULL_FACE), U(Qn);
  function Q(D) {
    u[D] !== !0 && (i.enable(D), u[D] = !0);
  }
  function oe(D) {
    u[D] !== !1 && (i.disable(D), u[D] = !1);
  }
  function _e(D, le) {
    return h[D] !== le ? (i.bindFramebuffer(D, le), h[D] = le, D === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = le), D === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = le), !0) : !1;
  }
  function Re(D, le) {
    let X = p, J = !1;
    if (D) {
      X = d.get(le), X === void 0 && (X = [], d.set(le, X));
      const pe = D.textures;
      if (X.length !== pe.length || X[0] !== i.COLOR_ATTACHMENT0) {
        for (let ue = 0, Be = pe.length; ue < Be; ue++)
          X[ue] = i.COLOR_ATTACHMENT0 + ue;
        X.length = pe.length, J = !0;
      }
    } else
      X[0] !== i.BACK && (X[0] = i.BACK, J = !0);
    J && i.drawBuffers(X);
  }
  function qe(D) {
    return _ !== D ? (i.useProgram(D), _ = D, !0) : !1;
  }
  const Ye = {
    [mi]: i.FUNC_ADD,
    [Ud]: i.FUNC_SUBTRACT,
    [Nd]: i.FUNC_REVERSE_SUBTRACT
  };
  Ye[Od] = i.MIN, Ye[Fd] = i.MAX;
  const mt = {
    [kd]: i.ZERO,
    [Bd]: i.ONE,
    [zd]: i.SRC_COLOR,
    [La]: i.SRC_ALPHA,
    [$d]: i.SRC_ALPHA_SATURATE,
    [Wd]: i.DST_COLOR,
    [Vd]: i.DST_ALPHA,
    [Hd]: i.ONE_MINUS_SRC_COLOR,
    [Ia]: i.ONE_MINUS_SRC_ALPHA,
    [Xd]: i.ONE_MINUS_DST_COLOR,
    [Gd]: i.ONE_MINUS_DST_ALPHA,
    [qd]: i.CONSTANT_COLOR,
    [Yd]: i.ONE_MINUS_CONSTANT_COLOR,
    [jd]: i.CONSTANT_ALPHA,
    [Zd]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function U(D, le, X, J, pe, ue, Be, gt, Pt, rt) {
    if (D === Qn) {
      g === !0 && (oe(i.BLEND), g = !1);
      return;
    }
    if (g === !1 && (Q(i.BLEND), g = !0), D !== Id) {
      if (D !== m || rt !== b) {
        if ((f !== mi || v !== mi) && (i.blendEquation(i.FUNC_ADD), f = mi, v = mi), rt)
          switch (D) {
            case Zi:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Da:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case tl:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case nl:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case Zi:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Da:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case tl:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case nl:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        E = null, M = null, N = null, w = null, A.set(0, 0, 0), P = 0, m = D, b = rt;
      }
      return;
    }
    pe = pe || le, ue = ue || X, Be = Be || J, (le !== f || pe !== v) && (i.blendEquationSeparate(Ye[le], Ye[pe]), f = le, v = pe), (X !== E || J !== M || ue !== N || Be !== w) && (i.blendFuncSeparate(mt[X], mt[J], mt[ue], mt[Be]), E = X, M = J, N = ue, w = Be), (gt.equals(A) === !1 || Pt !== P) && (i.blendColor(gt.r, gt.g, gt.b, Pt), A.copy(gt), P = Pt), m = D, b = !1;
  }
  function zt(D, le) {
    D.side === vn ? oe(i.CULL_FACE) : Q(i.CULL_FACE);
    let X = D.side === Bt;
    le && (X = !X), me(X), D.blending === Zi && D.transparent === !1 ? U(Qn) : U(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const J = D.stencilWrite;
    o.setTest(J), J && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), $e(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? Q(i.SAMPLE_ALPHA_TO_COVERAGE) : oe(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function me(D) {
    y !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW), y = D);
  }
  function De(D) {
    D !== Pd ? (Q(i.CULL_FACE), D !== C && (D === el ? i.cullFace(i.BACK) : D === Dd ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : oe(i.CULL_FACE), C = D;
  }
  function ge(D) {
    D !== H && (B && i.lineWidth(D), H = D);
  }
  function $e(D, le, X) {
    D ? (Q(i.POLYGON_OFFSET_FILL), (O !== le || G !== X) && (i.polygonOffset(le, X), O = le, G = X)) : oe(i.POLYGON_OFFSET_FILL);
  }
  function Se(D) {
    D ? Q(i.SCISSOR_TEST) : oe(i.SCISSOR_TEST);
  }
  function T(D) {
    D === void 0 && (D = i.TEXTURE0 + $ - 1), re !== D && (i.activeTexture(D), re = D);
  }
  function x(D, le, X) {
    X === void 0 && (re === null ? X = i.TEXTURE0 + $ - 1 : X = re);
    let J = ce[X];
    J === void 0 && (J = { type: void 0, texture: void 0 }, ce[X] = J), (J.type !== D || J.texture !== le) && (re !== X && (i.activeTexture(X), re = X), i.bindTexture(D, le || Y[D]), J.type = D, J.texture = le);
  }
  function k() {
    const D = ce[re];
    D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function K() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ee() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function q() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ce() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function de() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ve() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Je() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ie() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function xe() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ie() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ue(D) {
    Ze.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w), Ze.copy(D));
  }
  function ye(D) {
    F.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w), F.copy(D));
  }
  function Ke(D, le) {
    let X = c.get(le);
    X === void 0 && (X = /* @__PURE__ */ new WeakMap(), c.set(le, X));
    let J = X.get(D);
    J === void 0 && (J = i.getUniformBlockIndex(le, D.name), X.set(D, J));
  }
  function Ve(D, le) {
    const J = c.get(le).get(D);
    l.get(le) !== J && (i.uniformBlockBinding(le, J, D.__bindingPointIndex), l.set(le, J));
  }
  function ct() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, re = null, ce = {}, h = {}, d = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = !1, m = null, f = null, E = null, M = null, v = null, N = null, w = null, A = new We(0, 0, 0), P = 0, b = !1, y = null, C = null, H = null, O = null, G = null, Ze.set(0, 0, i.canvas.width, i.canvas.height), F.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: o
    },
    enable: Q,
    disable: oe,
    bindFramebuffer: _e,
    drawBuffers: Re,
    useProgram: qe,
    setBlending: U,
    setMaterial: zt,
    setFlipSided: me,
    setCullFace: De,
    setLineWidth: ge,
    setPolygonOffset: $e,
    setScissorTest: Se,
    activeTexture: T,
    bindTexture: x,
    unbindTexture: k,
    compressedTexImage2D: K,
    compressedTexImage3D: ee,
    texImage2D: xe,
    texImage3D: Ie,
    updateUBOMapping: Ke,
    uniformBlockBinding: Ve,
    texStorage2D: Je,
    texStorage3D: ie,
    texSubImage2D: q,
    texSubImage3D: Ce,
    compressedTexSubImage2D: de,
    compressedTexSubImage3D: ve,
    scissor: Ue,
    viewport: ye,
    reset: ct
  };
}
function Zl(i, e, t, n) {
  const s = Ug(n);
  switch (t) {
    case Hc:
      return i * e;
    case Gc:
      return i * e;
    case Wc:
      return i * e * 2;
    case Xc:
      return i * e / s.components * s.byteLength;
    case Io:
      return i * e / s.components * s.byteLength;
    case $c:
      return i * e * 2 / s.components * s.byteLength;
    case Uo:
      return i * e * 2 / s.components * s.byteLength;
    case Vc:
      return i * e * 3 / s.components * s.byteLength;
    case dn:
      return i * e * 4 / s.components * s.byteLength;
    case No:
      return i * e * 4 / s.components * s.byteLength;
    case Mr:
    case Er:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Tr:
    case wr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Xa:
    case qa:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case Wa:
    case $a:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case Ya:
    case ja:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Za:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ka:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ja:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Qa:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case eo:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case to:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case no:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case io:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case so:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case ro:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ao:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case oo:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case lo:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case co:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case uo:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Ar:
    case ho:
    case fo:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case qc:
    case po:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case mo:
    case go:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function Ug(i) {
  switch (i) {
    case Fn:
    case kc:
      return { byteLength: 1, components: 1 };
    case Ps:
    case Bc:
    case zs:
      return { byteLength: 2, components: 1 };
    case Do:
    case Lo:
      return { byteLength: 2, components: 4 };
    case xi:
    case Po:
    case Ln:
      return { byteLength: 4, components: 1 };
    case zc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function Ng(i, e, t, n, s, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Le(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const d = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(T, x) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, x)
    ) : Ls("canvas");
  }
  function g(T, x, k) {
    let K = 1;
    const ee = Se(T);
    if ((ee.width > k || ee.height > k) && (K = k / Math.max(ee.width, ee.height)), K < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const q = Math.floor(K * ee.width), Ce = Math.floor(K * ee.height);
        h === void 0 && (h = _(q, Ce));
        const de = x ? _(q, Ce) : h;
        return de.width = q, de.height = Ce, de.getContext("2d").drawImage(T, 0, 0, q, Ce), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + ee.width + "x" + ee.height + ") to (" + q + "x" + Ce + ")."), de;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + ee.width + "x" + ee.height + ")."), T;
    return T;
  }
  function m(T) {
    return T.generateMipmaps;
  }
  function f(T) {
    i.generateMipmap(T);
  }
  function E(T) {
    return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function M(T, x, k, K, ee = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let q = x;
    if (x === i.RED && (k === i.FLOAT && (q = i.R32F), k === i.HALF_FLOAT && (q = i.R16F), k === i.UNSIGNED_BYTE && (q = i.R8)), x === i.RED_INTEGER && (k === i.UNSIGNED_BYTE && (q = i.R8UI), k === i.UNSIGNED_SHORT && (q = i.R16UI), k === i.UNSIGNED_INT && (q = i.R32UI), k === i.BYTE && (q = i.R8I), k === i.SHORT && (q = i.R16I), k === i.INT && (q = i.R32I)), x === i.RG && (k === i.FLOAT && (q = i.RG32F), k === i.HALF_FLOAT && (q = i.RG16F), k === i.UNSIGNED_BYTE && (q = i.RG8)), x === i.RG_INTEGER && (k === i.UNSIGNED_BYTE && (q = i.RG8UI), k === i.UNSIGNED_SHORT && (q = i.RG16UI), k === i.UNSIGNED_INT && (q = i.RG32UI), k === i.BYTE && (q = i.RG8I), k === i.SHORT && (q = i.RG16I), k === i.INT && (q = i.RG32I)), x === i.RGB_INTEGER && (k === i.UNSIGNED_BYTE && (q = i.RGB8UI), k === i.UNSIGNED_SHORT && (q = i.RGB16UI), k === i.UNSIGNED_INT && (q = i.RGB32UI), k === i.BYTE && (q = i.RGB8I), k === i.SHORT && (q = i.RGB16I), k === i.INT && (q = i.RGB32I)), x === i.RGBA_INTEGER && (k === i.UNSIGNED_BYTE && (q = i.RGBA8UI), k === i.UNSIGNED_SHORT && (q = i.RGBA16UI), k === i.UNSIGNED_INT && (q = i.RGBA32UI), k === i.BYTE && (q = i.RGBA8I), k === i.SHORT && (q = i.RGBA16I), k === i.INT && (q = i.RGBA32I)), x === i.RGB && k === i.UNSIGNED_INT_5_9_9_9_REV && (q = i.RGB9_E5), x === i.RGBA) {
      const Ce = ee ? Xr : Qe.getTransfer(K);
      k === i.FLOAT && (q = i.RGBA32F), k === i.HALF_FLOAT && (q = i.RGBA16F), k === i.UNSIGNED_BYTE && (q = Ce === ot ? i.SRGB8_ALPHA8 : i.RGBA8), k === i.UNSIGNED_SHORT_4_4_4_4 && (q = i.RGBA4), k === i.UNSIGNED_SHORT_5_5_5_1 && (q = i.RGB5_A1);
    }
    return (q === i.R16F || q === i.R32F || q === i.RG16F || q === i.RG32F || q === i.RGBA16F || q === i.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function v(T, x) {
    let k;
    return T ? x === null || x === xi || x === is ? k = i.DEPTH24_STENCIL8 : x === Ln ? k = i.DEPTH32F_STENCIL8 : x === Ps && (k = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === xi || x === is ? k = i.DEPTH_COMPONENT24 : x === Ln ? k = i.DEPTH_COMPONENT32F : x === Ps && (k = i.DEPTH_COMPONENT16), k;
  }
  function N(T, x) {
    return m(T) === !0 || T.isFramebufferTexture && T.minFilter !== fn && T.minFilter !== yn ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1;
  }
  function w(T) {
    const x = T.target;
    x.removeEventListener("dispose", w), P(x), x.isVideoTexture && u.delete(x);
  }
  function A(T) {
    const x = T.target;
    x.removeEventListener("dispose", A), y(x);
  }
  function P(T) {
    const x = n.get(T);
    if (x.__webglInit === void 0) return;
    const k = T.source, K = d.get(k);
    if (K) {
      const ee = K[x.__cacheKey];
      ee.usedTimes--, ee.usedTimes === 0 && b(T), Object.keys(K).length === 0 && d.delete(k);
    }
    n.remove(T);
  }
  function b(T) {
    const x = n.get(T);
    i.deleteTexture(x.__webglTexture);
    const k = T.source, K = d.get(k);
    delete K[x.__cacheKey], a.memory.textures--;
  }
  function y(T) {
    const x = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(x.__webglFramebuffer[K]))
          for (let ee = 0; ee < x.__webglFramebuffer[K].length; ee++) i.deleteFramebuffer(x.__webglFramebuffer[K][ee]);
        else
          i.deleteFramebuffer(x.__webglFramebuffer[K]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let K = 0; K < x.__webglFramebuffer.length; K++) i.deleteFramebuffer(x.__webglFramebuffer[K]);
      else
        i.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let K = 0; K < x.__webglColorRenderbuffer.length; K++)
          x.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);
      x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const k = T.textures;
    for (let K = 0, ee = k.length; K < ee; K++) {
      const q = n.get(k[K]);
      q.__webglTexture && (i.deleteTexture(q.__webglTexture), a.memory.textures--), n.remove(k[K]);
    }
    n.remove(T);
  }
  let C = 0;
  function H() {
    C = 0;
  }
  function O() {
    const T = C;
    return T >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + s.maxTextures), C += 1, T;
  }
  function G(T) {
    const x = [];
    return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join();
  }
  function $(T, x) {
    const k = n.get(T);
    if (T.isVideoTexture && ge(T), T.isRenderTargetTexture === !1 && T.version > 0 && k.__version !== T.version) {
      const K = T.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        F(k, T, x);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, k.__webglTexture, i.TEXTURE0 + x);
  }
  function B(T, x) {
    const k = n.get(T);
    if (T.version > 0 && k.__version !== T.version) {
      F(k, T, x);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, k.__webglTexture, i.TEXTURE0 + x);
  }
  function te(T, x) {
    const k = n.get(T);
    if (T.version > 0 && k.__version !== T.version) {
      F(k, T, x);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, k.__webglTexture, i.TEXTURE0 + x);
  }
  function W(T, x) {
    const k = n.get(T);
    if (T.version > 0 && k.__version !== T.version) {
      j(k, T, x);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, k.__webglTexture, i.TEXTURE0 + x);
  }
  const re = {
    [Pr]: i.REPEAT,
    [Kn]: i.CLAMP_TO_EDGE,
    [Ga]: i.MIRRORED_REPEAT
  }, ce = {
    [fn]: i.NEAREST,
    [ru]: i.NEAREST_MIPMAP_NEAREST,
    [Ws]: i.NEAREST_MIPMAP_LINEAR,
    [yn]: i.LINEAR,
    [Zr]: i.LINEAR_MIPMAP_NEAREST,
    [_i]: i.LINEAR_MIPMAP_LINEAR
  }, Ee = {
    [du]: i.NEVER,
    [gu]: i.ALWAYS,
    [uu]: i.LESS,
    [Yc]: i.LEQUAL,
    [hu]: i.EQUAL,
    [mu]: i.GEQUAL,
    [fu]: i.GREATER,
    [pu]: i.NOTEQUAL
  };
  function Ne(T, x) {
    if (x.type === Ln && e.has("OES_texture_float_linear") === !1 && (x.magFilter === yn || x.magFilter === Zr || x.magFilter === Ws || x.magFilter === _i || x.minFilter === yn || x.minFilter === Zr || x.minFilter === Ws || x.minFilter === _i) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, re[x.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, re[x.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, re[x.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, ce[x.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, ce[x.minFilter]), x.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, Ee[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === fn || x.minFilter !== Ws && x.minFilter !== _i || x.type === Ln && e.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const k = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, k.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, s.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function Ze(T, x) {
    let k = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, x.addEventListener("dispose", w));
    const K = x.source;
    let ee = d.get(K);
    ee === void 0 && (ee = {}, d.set(K, ee));
    const q = G(x);
    if (q !== T.__cacheKey) {
      ee[q] === void 0 && (ee[q] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, k = !0), ee[q].usedTimes++;
      const Ce = ee[T.__cacheKey];
      Ce !== void 0 && (ee[T.__cacheKey].usedTimes--, Ce.usedTimes === 0 && b(x)), T.__cacheKey = q, T.__webglTexture = ee[q].texture;
    }
    return k;
  }
  function F(T, x, k) {
    let K = i.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (K = i.TEXTURE_2D_ARRAY), x.isData3DTexture && (K = i.TEXTURE_3D);
    const ee = Ze(T, x), q = x.source;
    t.bindTexture(K, T.__webglTexture, i.TEXTURE0 + k);
    const Ce = n.get(q);
    if (q.version !== Ce.__version || ee === !0) {
      t.activeTexture(i.TEXTURE0 + k);
      const de = Qe.getPrimaries(Qe.workingColorSpace), ve = x.colorSpace === Zn ? null : Qe.getPrimaries(x.colorSpace), Je = x.colorSpace === Zn || de === ve ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Je);
      let ie = g(x.image, !1, s.maxTextureSize);
      ie = $e(x, ie);
      const xe = r.convert(x.format, x.colorSpace), Ie = r.convert(x.type);
      let Ue = M(x.internalFormat, xe, Ie, x.colorSpace, x.isVideoTexture);
      Ne(K, x);
      let ye;
      const Ke = x.mipmaps, Ve = x.isVideoTexture !== !0, ct = Ce.__version === void 0 || ee === !0, D = q.dataReady, le = N(x, ie);
      if (x.isDepthTexture)
        Ue = v(x.format === ss, x.type), ct && (Ve ? t.texStorage2D(i.TEXTURE_2D, 1, Ue, ie.width, ie.height) : t.texImage2D(i.TEXTURE_2D, 0, Ue, ie.width, ie.height, 0, xe, Ie, null));
      else if (x.isDataTexture)
        if (Ke.length > 0) {
          Ve && ct && t.texStorage2D(i.TEXTURE_2D, le, Ue, Ke[0].width, Ke[0].height);
          for (let X = 0, J = Ke.length; X < J; X++)
            ye = Ke[X], Ve ? D && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, ye.width, ye.height, xe, Ie, ye.data) : t.texImage2D(i.TEXTURE_2D, X, Ue, ye.width, ye.height, 0, xe, Ie, ye.data);
          x.generateMipmaps = !1;
        } else
          Ve ? (ct && t.texStorage2D(i.TEXTURE_2D, le, Ue, ie.width, ie.height), D && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ie.width, ie.height, xe, Ie, ie.data)) : t.texImage2D(i.TEXTURE_2D, 0, Ue, ie.width, ie.height, 0, xe, Ie, ie.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Ve && ct && t.texStorage3D(i.TEXTURE_2D_ARRAY, le, Ue, Ke[0].width, Ke[0].height, ie.depth);
          for (let X = 0, J = Ke.length; X < J; X++)
            if (ye = Ke[X], x.format !== dn)
              if (xe !== null)
                if (Ve) {
                  if (D)
                    if (x.layerUpdates.size > 0) {
                      const pe = Zl(ye.width, ye.height, x.format, x.type);
                      for (const ue of x.layerUpdates) {
                        const Be = ye.data.subarray(
                          ue * pe / ye.data.BYTES_PER_ELEMENT,
                          (ue + 1) * pe / ye.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, ue, ye.width, ye.height, 1, xe, Be);
                      }
                      x.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, ye.width, ye.height, ie.depth, xe, ye.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, X, Ue, ye.width, ye.height, ie.depth, 0, ye.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ve ? D && t.texSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, ye.width, ye.height, ie.depth, xe, Ie, ye.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, X, Ue, ye.width, ye.height, ie.depth, 0, xe, Ie, ye.data);
        } else {
          Ve && ct && t.texStorage2D(i.TEXTURE_2D, le, Ue, Ke[0].width, Ke[0].height);
          for (let X = 0, J = Ke.length; X < J; X++)
            ye = Ke[X], x.format !== dn ? xe !== null ? Ve ? D && t.compressedTexSubImage2D(i.TEXTURE_2D, X, 0, 0, ye.width, ye.height, xe, ye.data) : t.compressedTexImage2D(i.TEXTURE_2D, X, Ue, ye.width, ye.height, 0, ye.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? D && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, ye.width, ye.height, xe, Ie, ye.data) : t.texImage2D(i.TEXTURE_2D, X, Ue, ye.width, ye.height, 0, xe, Ie, ye.data);
        }
      else if (x.isDataArrayTexture)
        if (Ve) {
          if (ct && t.texStorage3D(i.TEXTURE_2D_ARRAY, le, Ue, ie.width, ie.height, ie.depth), D)
            if (x.layerUpdates.size > 0) {
              const X = Zl(ie.width, ie.height, x.format, x.type);
              for (const J of x.layerUpdates) {
                const pe = ie.data.subarray(
                  J * X / ie.data.BYTES_PER_ELEMENT,
                  (J + 1) * X / ie.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, J, ie.width, ie.height, 1, xe, Ie, pe);
              }
              x.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ie.width, ie.height, ie.depth, xe, Ie, ie.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ue, ie.width, ie.height, ie.depth, 0, xe, Ie, ie.data);
      else if (x.isData3DTexture)
        Ve ? (ct && t.texStorage3D(i.TEXTURE_3D, le, Ue, ie.width, ie.height, ie.depth), D && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, ie.width, ie.height, ie.depth, xe, Ie, ie.data)) : t.texImage3D(i.TEXTURE_3D, 0, Ue, ie.width, ie.height, ie.depth, 0, xe, Ie, ie.data);
      else if (x.isFramebufferTexture) {
        if (ct)
          if (Ve)
            t.texStorage2D(i.TEXTURE_2D, le, Ue, ie.width, ie.height);
          else {
            let X = ie.width, J = ie.height;
            for (let pe = 0; pe < le; pe++)
              t.texImage2D(i.TEXTURE_2D, pe, Ue, X, J, 0, xe, Ie, null), X >>= 1, J >>= 1;
          }
      } else if (Ke.length > 0) {
        if (Ve && ct) {
          const X = Se(Ke[0]);
          t.texStorage2D(i.TEXTURE_2D, le, Ue, X.width, X.height);
        }
        for (let X = 0, J = Ke.length; X < J; X++)
          ye = Ke[X], Ve ? D && t.texSubImage2D(i.TEXTURE_2D, X, 0, 0, xe, Ie, ye) : t.texImage2D(i.TEXTURE_2D, X, Ue, xe, Ie, ye);
        x.generateMipmaps = !1;
      } else if (Ve) {
        if (ct) {
          const X = Se(ie);
          t.texStorage2D(i.TEXTURE_2D, le, Ue, X.width, X.height);
        }
        D && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, xe, Ie, ie);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Ue, xe, Ie, ie);
      m(x) && f(K), Ce.__version = q.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function j(T, x, k) {
    if (x.image.length !== 6) return;
    const K = Ze(T, x), ee = x.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + k);
    const q = n.get(ee);
    if (ee.version !== q.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + k);
      const Ce = Qe.getPrimaries(Qe.workingColorSpace), de = x.colorSpace === Zn ? null : Qe.getPrimaries(x.colorSpace), ve = x.colorSpace === Zn || Ce === de ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ve);
      const Je = x.isCompressedTexture || x.image[0].isCompressedTexture, ie = x.image[0] && x.image[0].isDataTexture, xe = [];
      for (let J = 0; J < 6; J++)
        !Je && !ie ? xe[J] = g(x.image[J], !0, s.maxCubemapSize) : xe[J] = ie ? x.image[J].image : x.image[J], xe[J] = $e(x, xe[J]);
      const Ie = xe[0], Ue = r.convert(x.format, x.colorSpace), ye = r.convert(x.type), Ke = M(x.internalFormat, Ue, ye, x.colorSpace), Ve = x.isVideoTexture !== !0, ct = q.__version === void 0 || K === !0, D = ee.dataReady;
      let le = N(x, Ie);
      Ne(i.TEXTURE_CUBE_MAP, x);
      let X;
      if (Je) {
        Ve && ct && t.texStorage2D(i.TEXTURE_CUBE_MAP, le, Ke, Ie.width, Ie.height);
        for (let J = 0; J < 6; J++) {
          X = xe[J].mipmaps;
          for (let pe = 0; pe < X.length; pe++) {
            const ue = X[pe];
            x.format !== dn ? Ue !== null ? Ve ? D && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, pe, 0, 0, ue.width, ue.height, Ue, ue.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, pe, Ke, ue.width, ue.height, 0, ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ve ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, pe, 0, 0, ue.width, ue.height, Ue, ye, ue.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, pe, Ke, ue.width, ue.height, 0, Ue, ye, ue.data);
          }
        }
      } else {
        if (X = x.mipmaps, Ve && ct) {
          X.length > 0 && le++;
          const J = Se(xe[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, le, Ke, J.width, J.height);
        }
        for (let J = 0; J < 6; J++)
          if (ie) {
            Ve ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, xe[J].width, xe[J].height, Ue, ye, xe[J].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, Ke, xe[J].width, xe[J].height, 0, Ue, ye, xe[J].data);
            for (let pe = 0; pe < X.length; pe++) {
              const Be = X[pe].image[J].image;
              Ve ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, pe + 1, 0, 0, Be.width, Be.height, Ue, ye, Be.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, pe + 1, Ke, Be.width, Be.height, 0, Ue, ye, Be.data);
            }
          } else {
            Ve ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, Ue, ye, xe[J]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, Ke, Ue, ye, xe[J]);
            for (let pe = 0; pe < X.length; pe++) {
              const ue = X[pe];
              Ve ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, pe + 1, 0, 0, Ue, ye, ue.image[J]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + J, pe + 1, Ke, Ue, ye, ue.image[J]);
            }
          }
      }
      m(x) && f(i.TEXTURE_CUBE_MAP), q.__version = ee.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function Y(T, x, k, K, ee, q) {
    const Ce = r.convert(k.format, k.colorSpace), de = r.convert(k.type), ve = M(k.internalFormat, Ce, de, k.colorSpace), Je = n.get(x), ie = n.get(k);
    if (ie.__renderTarget = x, !Je.__hasExternalTextures) {
      const xe = Math.max(1, x.width >> q), Ie = Math.max(1, x.height >> q);
      ee === i.TEXTURE_3D || ee === i.TEXTURE_2D_ARRAY ? t.texImage3D(ee, q, ve, xe, Ie, x.depth, 0, Ce, de, null) : t.texImage2D(ee, q, ve, xe, Ie, 0, Ce, de, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, T), De(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, ee, ie.__webglTexture, 0, me(x)) : (ee === i.TEXTURE_2D || ee >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ee <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, K, ee, ie.__webglTexture, q), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Q(T, x, k) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), x.depthBuffer) {
      const K = x.depthTexture, ee = K && K.isDepthTexture ? K.type : null, q = v(x.stencilBuffer, ee), Ce = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, de = me(x);
      De(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, de, q, x.width, x.height) : k ? i.renderbufferStorageMultisample(i.RENDERBUFFER, de, q, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, q, x.width, x.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Ce, i.RENDERBUFFER, T);
    } else {
      const K = x.textures;
      for (let ee = 0; ee < K.length; ee++) {
        const q = K[ee], Ce = r.convert(q.format, q.colorSpace), de = r.convert(q.type), ve = M(q.internalFormat, Ce, de, q.colorSpace), Je = me(x);
        k && De(x) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Je, ve, x.width, x.height) : De(x) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Je, ve, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, ve, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function oe(T, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const K = n.get(x.depthTexture);
    K.__renderTarget = x, (!K.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), $(x.depthTexture, 0);
    const ee = K.__webglTexture, q = me(x);
    if (x.depthTexture.format === Ki)
      De(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ee, 0, q) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ee, 0);
    else if (x.depthTexture.format === ss)
      De(x) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ee, 0, q) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ee, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function _e(T) {
    const x = n.get(T), k = T.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== T.depthTexture) {
      const K = T.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), K) {
        const ee = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, K.removeEventListener("dispose", ee);
        };
        K.addEventListener("dispose", ee), x.__depthDisposeCallback = ee;
      }
      x.__boundDepthTexture = K;
    }
    if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (k) throw new Error("target.depthTexture not supported in Cube render targets");
      oe(x.__webglFramebuffer, T);
    } else if (k) {
      x.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[K]), x.__webglDepthbuffer[K] === void 0)
          x.__webglDepthbuffer[K] = i.createRenderbuffer(), Q(x.__webglDepthbuffer[K], T, !1);
        else {
          const ee = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, q = x.__webglDepthbuffer[K];
          i.bindRenderbuffer(i.RENDERBUFFER, q), i.framebufferRenderbuffer(i.FRAMEBUFFER, ee, i.RENDERBUFFER, q);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
      x.__webglDepthbuffer = i.createRenderbuffer(), Q(x.__webglDepthbuffer, T, !1);
    else {
      const K = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ee = x.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, ee), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, ee);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Re(T, x, k) {
    const K = n.get(T);
    x !== void 0 && Y(K.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), k !== void 0 && _e(T);
  }
  function qe(T) {
    const x = T.texture, k = n.get(T), K = n.get(x);
    T.addEventListener("dispose", A);
    const ee = T.textures, q = T.isWebGLCubeRenderTarget === !0, Ce = ee.length > 1;
    if (Ce || (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()), K.__version = x.version, a.memory.textures++), q) {
      k.__webglFramebuffer = [];
      for (let de = 0; de < 6; de++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          k.__webglFramebuffer[de] = [];
          for (let ve = 0; ve < x.mipmaps.length; ve++)
            k.__webglFramebuffer[de][ve] = i.createFramebuffer();
        } else
          k.__webglFramebuffer[de] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        k.__webglFramebuffer = [];
        for (let de = 0; de < x.mipmaps.length; de++)
          k.__webglFramebuffer[de] = i.createFramebuffer();
      } else
        k.__webglFramebuffer = i.createFramebuffer();
      if (Ce)
        for (let de = 0, ve = ee.length; de < ve; de++) {
          const Je = n.get(ee[de]);
          Je.__webglTexture === void 0 && (Je.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (T.samples > 0 && De(T) === !1) {
        k.__webglMultisampledFramebuffer = i.createFramebuffer(), k.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, k.__webglMultisampledFramebuffer);
        for (let de = 0; de < ee.length; de++) {
          const ve = ee[de];
          k.__webglColorRenderbuffer[de] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, k.__webglColorRenderbuffer[de]);
          const Je = r.convert(ve.format, ve.colorSpace), ie = r.convert(ve.type), xe = M(ve.internalFormat, Je, ie, ve.colorSpace, T.isXRRenderTarget === !0), Ie = me(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ie, xe, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.RENDERBUFFER, k.__webglColorRenderbuffer[de]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (k.__webglDepthRenderbuffer = i.createRenderbuffer(), Q(k.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture), Ne(i.TEXTURE_CUBE_MAP, x);
      for (let de = 0; de < 6; de++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let ve = 0; ve < x.mipmaps.length; ve++)
            Y(k.__webglFramebuffer[de][ve], T, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + de, ve);
        else
          Y(k.__webglFramebuffer[de], T, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + de, 0);
      m(x) && f(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Ce) {
      for (let de = 0, ve = ee.length; de < ve; de++) {
        const Je = ee[de], ie = n.get(Je);
        t.bindTexture(i.TEXTURE_2D, ie.__webglTexture), Ne(i.TEXTURE_2D, Je), Y(k.__webglFramebuffer, T, Je, i.COLOR_ATTACHMENT0 + de, i.TEXTURE_2D, 0), m(Je) && f(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let de = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (de = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(de, K.__webglTexture), Ne(de, x), x.mipmaps && x.mipmaps.length > 0)
        for (let ve = 0; ve < x.mipmaps.length; ve++)
          Y(k.__webglFramebuffer[ve], T, x, i.COLOR_ATTACHMENT0, de, ve);
      else
        Y(k.__webglFramebuffer, T, x, i.COLOR_ATTACHMENT0, de, 0);
      m(x) && f(de), t.unbindTexture();
    }
    T.depthBuffer && _e(T);
  }
  function Ye(T) {
    const x = T.textures;
    for (let k = 0, K = x.length; k < K; k++) {
      const ee = x[k];
      if (m(ee)) {
        const q = E(T), Ce = n.get(ee).__webglTexture;
        t.bindTexture(q, Ce), f(q), t.unbindTexture();
      }
    }
  }
  const mt = [], U = [];
  function zt(T) {
    if (T.samples > 0) {
      if (De(T) === !1) {
        const x = T.textures, k = T.width, K = T.height;
        let ee = i.COLOR_BUFFER_BIT;
        const q = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Ce = n.get(T), de = x.length > 1;
        if (de)
          for (let ve = 0; ve < x.length; ve++)
            t.bindFramebuffer(i.FRAMEBUFFER, Ce.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ve, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, Ce.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ve, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, Ce.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ce.__webglFramebuffer);
        for (let ve = 0; ve < x.length; ve++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (ee |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (ee |= i.STENCIL_BUFFER_BIT)), de) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Ce.__webglColorRenderbuffer[ve]);
            const Je = n.get(x[ve]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Je, 0);
          }
          i.blitFramebuffer(0, 0, k, K, 0, 0, k, K, ee, i.NEAREST), l === !0 && (mt.length = 0, U.length = 0, mt.push(i.COLOR_ATTACHMENT0 + ve), T.depthBuffer && T.resolveDepthBuffer === !1 && (mt.push(q), U.push(q), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, U)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, mt));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), de)
          for (let ve = 0; ve < x.length; ve++) {
            t.bindFramebuffer(i.FRAMEBUFFER, Ce.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ve, i.RENDERBUFFER, Ce.__webglColorRenderbuffer[ve]);
            const Je = n.get(x[ve]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, Ce.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ve, i.TEXTURE_2D, Je, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ce.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && l) {
        const x = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function me(T) {
    return Math.min(s.maxSamples, T.samples);
  }
  function De(T) {
    const x = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function ge(T) {
    const x = a.render.frame;
    u.get(T) !== x && (u.set(T, x), T.update());
  }
  function $e(T, x) {
    const k = T.colorSpace, K = T.format, ee = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || k !== fs && k !== Zn && (Qe.getTransfer(k) === ot ? (K !== dn || ee !== Fn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", k)), x;
  }
  function Se(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = O, this.resetTextureUnits = H, this.setTexture2D = $, this.setTexture2DArray = B, this.setTexture3D = te, this.setTextureCube = W, this.rebindTextures = Re, this.setupRenderTarget = qe, this.updateRenderTargetMipmap = Ye, this.updateMultisampleRenderTarget = zt, this.setupDepthRenderbuffer = _e, this.setupFrameBufferTexture = Y, this.useMultisampledRTT = De;
}
function Og(i, e) {
  function t(n, s = Zn) {
    let r;
    const a = Qe.getTransfer(s);
    if (n === Fn) return i.UNSIGNED_BYTE;
    if (n === Do) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Lo) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === zc) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === kc) return i.BYTE;
    if (n === Bc) return i.SHORT;
    if (n === Ps) return i.UNSIGNED_SHORT;
    if (n === Po) return i.INT;
    if (n === xi) return i.UNSIGNED_INT;
    if (n === Ln) return i.FLOAT;
    if (n === zs) return i.HALF_FLOAT;
    if (n === Hc) return i.ALPHA;
    if (n === Vc) return i.RGB;
    if (n === dn) return i.RGBA;
    if (n === Gc) return i.LUMINANCE;
    if (n === Wc) return i.LUMINANCE_ALPHA;
    if (n === Ki) return i.DEPTH_COMPONENT;
    if (n === ss) return i.DEPTH_STENCIL;
    if (n === Xc) return i.RED;
    if (n === Io) return i.RED_INTEGER;
    if (n === $c) return i.RG;
    if (n === Uo) return i.RG_INTEGER;
    if (n === No) return i.RGBA_INTEGER;
    if (n === Mr || n === Er || n === Tr || n === wr)
      if (a === ot)
        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === Mr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Er) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Tr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === wr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === Mr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Er) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Tr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === wr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Wa || n === Xa || n === $a || n === qa)
      if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === Wa) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Xa) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === $a) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === qa) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Ya || n === ja || n === Za)
      if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === Ya || n === ja) return a === ot ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Za) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Ka || n === Ja || n === Qa || n === eo || n === to || n === no || n === io || n === so || n === ro || n === ao || n === oo || n === lo || n === co || n === uo)
      if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === Ka) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ja) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Qa) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === eo) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === to) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === no) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === io) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === so) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ro) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === ao) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === oo) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === lo) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === co) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === uo) return a === ot ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Ar || n === ho || n === fo)
      if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Ar) return a === ot ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === ho) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === fo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === qc || n === po || n === mo || n === go)
      if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Ar) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === po) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === mo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === go) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === is ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
class Fg extends Jt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class un extends Nt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const kg = { type: "move" };
class Ma {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new un(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new un(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new un(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let s = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const g of e.hand.values()) {
          const m = t.getJointPose(g, n), f = this._getHandJoint(c, g);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], d = u.position.distanceTo(h.position), p = 0.02, _ = 5e-3;
        c.inputState.pinching && d > p + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= p - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (s = t.getPose(e.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1, s.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(kg)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new un();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Bg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, zg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Hg {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const s = new Ut(), r = e.properties.get(s);
      r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = s;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new pn({
        vertexShader: Bg,
        fragmentShader: zg,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Wt(new qr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Vg extends Ei {
  constructor(e, t) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, u = null, h = null, d = null, p = null, _ = null;
    const g = new Hg(), m = t.getContextAttributes();
    let f = null, E = null;
    const M = [], v = [], N = new Le();
    let w = null;
    const A = new Jt();
    A.viewport = new ut();
    const P = new Jt();
    P.viewport = new ut();
    const b = [A, P], y = new Fg();
    let C = null, H = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(F) {
      let j = M[F];
      return j === void 0 && (j = new Ma(), M[F] = j), j.getTargetRaySpace();
    }, this.getControllerGrip = function(F) {
      let j = M[F];
      return j === void 0 && (j = new Ma(), M[F] = j), j.getGripSpace();
    }, this.getHand = function(F) {
      let j = M[F];
      return j === void 0 && (j = new Ma(), M[F] = j), j.getHandSpace();
    };
    function O(F) {
      const j = v.indexOf(F.inputSource);
      if (j === -1)
        return;
      const Y = M[j];
      Y !== void 0 && (Y.update(F.inputSource, F.frame, c || a), Y.dispatchEvent({ type: F.type, data: F.inputSource }));
    }
    function G() {
      s.removeEventListener("select", O), s.removeEventListener("selectstart", O), s.removeEventListener("selectend", O), s.removeEventListener("squeeze", O), s.removeEventListener("squeezestart", O), s.removeEventListener("squeezeend", O), s.removeEventListener("end", G), s.removeEventListener("inputsourceschange", $);
      for (let F = 0; F < M.length; F++) {
        const j = v[F];
        j !== null && (v[F] = null, M[F].disconnect(j));
      }
      C = null, H = null, g.reset(), e.setRenderTarget(f), p = null, d = null, h = null, s = null, E = null, Ze.stop(), n.isPresenting = !1, e.setPixelRatio(w), e.setSize(N.width, N.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(F) {
      r = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(F) {
      o = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(F) {
      c = F;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(F) {
      if (s = F, s !== null) {
        if (f = e.getRenderTarget(), s.addEventListener("select", O), s.addEventListener("selectstart", O), s.addEventListener("selectend", O), s.addEventListener("squeeze", O), s.addEventListener("squeezestart", O), s.addEventListener("squeezeend", O), s.addEventListener("end", G), s.addEventListener("inputsourceschange", $), m.xrCompatible !== !0 && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(N), s.renderState.layers === void 0) {
          const j = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: r
          };
          p = new XRWebGLLayer(s, t, j), s.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), E = new yi(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: dn,
              type: Fn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil
            }
          );
        } else {
          let j = null, Y = null, Q = null;
          m.depth && (Q = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, j = m.stencil ? ss : Ki, Y = m.stencil ? is : xi);
          const oe = {
            colorFormat: t.RGBA8,
            depthFormat: Q,
            scaleFactor: r
          };
          h = new XRWebGLBinding(s, t), d = h.createProjectionLayer(oe), s.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), E = new yi(
            d.textureWidth,
            d.textureHeight,
            {
              format: dn,
              type: Fn,
              depthTexture: new ld(d.textureWidth, d.textureHeight, Y, void 0, void 0, void 0, void 0, void 0, void 0, j),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        E.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), Ze.setContext(s), Ze.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function $(F) {
      for (let j = 0; j < F.removed.length; j++) {
        const Y = F.removed[j], Q = v.indexOf(Y);
        Q >= 0 && (v[Q] = null, M[Q].disconnect(Y));
      }
      for (let j = 0; j < F.added.length; j++) {
        const Y = F.added[j];
        let Q = v.indexOf(Y);
        if (Q === -1) {
          for (let _e = 0; _e < M.length; _e++)
            if (_e >= v.length) {
              v.push(Y), Q = _e;
              break;
            } else if (v[_e] === null) {
              v[_e] = Y, Q = _e;
              break;
            }
          if (Q === -1) break;
        }
        const oe = M[Q];
        oe && oe.connect(Y);
      }
    }
    const B = new R(), te = new R();
    function W(F, j, Y) {
      B.setFromMatrixPosition(j.matrixWorld), te.setFromMatrixPosition(Y.matrixWorld);
      const Q = B.distanceTo(te), oe = j.projectionMatrix.elements, _e = Y.projectionMatrix.elements, Re = oe[14] / (oe[10] - 1), qe = oe[14] / (oe[10] + 1), Ye = (oe[9] + 1) / oe[5], mt = (oe[9] - 1) / oe[5], U = (oe[8] - 1) / oe[0], zt = (_e[8] + 1) / _e[0], me = Re * U, De = Re * zt, ge = Q / (-U + zt), $e = ge * -U;
      if (j.matrixWorld.decompose(F.position, F.quaternion, F.scale), F.translateX($e), F.translateZ(ge), F.matrixWorld.compose(F.position, F.quaternion, F.scale), F.matrixWorldInverse.copy(F.matrixWorld).invert(), oe[10] === -1)
        F.projectionMatrix.copy(j.projectionMatrix), F.projectionMatrixInverse.copy(j.projectionMatrixInverse);
      else {
        const Se = Re + ge, T = qe + ge, x = me - $e, k = De + (Q - $e), K = Ye * qe / T * Se, ee = mt * qe / T * Se;
        F.projectionMatrix.makePerspective(x, k, K, ee, Se, T), F.projectionMatrixInverse.copy(F.projectionMatrix).invert();
      }
    }
    function re(F, j) {
      j === null ? F.matrixWorld.copy(F.matrix) : F.matrixWorld.multiplyMatrices(j.matrixWorld, F.matrix), F.matrixWorldInverse.copy(F.matrixWorld).invert();
    }
    this.updateCamera = function(F) {
      if (s === null) return;
      let j = F.near, Y = F.far;
      g.texture !== null && (g.depthNear > 0 && (j = g.depthNear), g.depthFar > 0 && (Y = g.depthFar)), y.near = P.near = A.near = j, y.far = P.far = A.far = Y, (C !== y.near || H !== y.far) && (s.updateRenderState({
        depthNear: y.near,
        depthFar: y.far
      }), C = y.near, H = y.far), A.layers.mask = F.layers.mask | 2, P.layers.mask = F.layers.mask | 4, y.layers.mask = A.layers.mask | P.layers.mask;
      const Q = F.parent, oe = y.cameras;
      re(y, Q);
      for (let _e = 0; _e < oe.length; _e++)
        re(oe[_e], Q);
      oe.length === 2 ? W(y, A, P) : y.projectionMatrix.copy(A.projectionMatrix), ce(F, y, Q);
    };
    function ce(F, j, Y) {
      Y === null ? F.matrix.copy(j.matrixWorld) : (F.matrix.copy(Y.matrixWorld), F.matrix.invert(), F.matrix.multiply(j.matrixWorld)), F.matrix.decompose(F.position, F.quaternion, F.scale), F.updateMatrixWorld(!0), F.projectionMatrix.copy(j.projectionMatrix), F.projectionMatrixInverse.copy(j.projectionMatrixInverse), F.isPerspectiveCamera && (F.fov = Ds * 2 * Math.atan(1 / F.projectionMatrix.elements[5]), F.zoom = 1);
    }
    this.getCamera = function() {
      return y;
    }, this.getFoveation = function() {
      if (!(d === null && p === null))
        return l;
    }, this.setFoveation = function(F) {
      l = F, d !== null && (d.fixedFoveation = F), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = F);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(y);
    };
    let Ee = null;
    function Ne(F, j) {
      if (u = j.getViewerPose(c || a), _ = j, u !== null) {
        const Y = u.views;
        p !== null && (e.setRenderTargetFramebuffer(E, p.framebuffer), e.setRenderTarget(E));
        let Q = !1;
        Y.length !== y.cameras.length && (y.cameras.length = 0, Q = !0);
        for (let _e = 0; _e < Y.length; _e++) {
          const Re = Y[_e];
          let qe = null;
          if (p !== null)
            qe = p.getViewport(Re);
          else {
            const mt = h.getViewSubImage(d, Re);
            qe = mt.viewport, _e === 0 && (e.setRenderTargetTextures(
              E,
              mt.colorTexture,
              d.ignoreDepthValues ? void 0 : mt.depthStencilTexture
            ), e.setRenderTarget(E));
          }
          let Ye = b[_e];
          Ye === void 0 && (Ye = new Jt(), Ye.layers.enable(_e), Ye.viewport = new ut(), b[_e] = Ye), Ye.matrix.fromArray(Re.transform.matrix), Ye.matrix.decompose(Ye.position, Ye.quaternion, Ye.scale), Ye.projectionMatrix.fromArray(Re.projectionMatrix), Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(), Ye.viewport.set(qe.x, qe.y, qe.width, qe.height), _e === 0 && (y.matrix.copy(Ye.matrix), y.matrix.decompose(y.position, y.quaternion, y.scale)), Q === !0 && y.cameras.push(Ye);
        }
        const oe = s.enabledFeatures;
        if (oe && oe.includes("depth-sensing")) {
          const _e = h.getDepthInformation(Y[0]);
          _e && _e.isValid && _e.texture && g.init(e, _e, s.renderState);
        }
      }
      for (let Y = 0; Y < M.length; Y++) {
        const Q = v[Y], oe = M[Y];
        Q !== null && oe !== void 0 && oe.update(Q, j, c || a);
      }
      Ee && Ee(F, j), j.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: j }), _ = null;
    }
    const Ze = new od();
    Ze.setAnimationLoop(Ne), this.setAnimationLoop = function(F) {
      Ee = F;
    }, this.dispose = function() {
    };
  }
}
const fi = /* @__PURE__ */ new kn(), Gg = /* @__PURE__ */ new pt();
function Wg(i, e) {
  function t(m, f) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, id(i)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function s(m, f, E, M, v) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(m, f) : f.isMeshToonMaterial ? (r(m, f), h(m, f)) : f.isMeshPhongMaterial ? (r(m, f), u(m, f)) : f.isMeshStandardMaterial ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, v)) : f.isMeshMatcapMaterial ? (r(m, f), _(m, f)) : f.isMeshDepthMaterial ? r(m, f) : f.isMeshDistanceMaterial ? (r(m, f), g(m, f)) : f.isMeshNormalMaterial ? r(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? l(m, f, E, M) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function r(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Bt && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Bt && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const E = e.get(f), M = E.envMap, v = E.envMapRotation;
    M && (m.envMap.value = M, fi.copy(v), fi.x *= -1, fi.y *= -1, fi.z *= -1, M.isCubeTexture && M.isRenderTargetTexture === !1 && (fi.y *= -1, fi.z *= -1), m.envMapRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(fi)), m.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function o(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function l(m, f, E, M) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * E, m.scale.value = M * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function c(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function u(m, f) {
    m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function d(m, f) {
    m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), f.envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function p(m, f, E) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Bt && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = E.texture, m.transmissionSamplerSize.value.set(E.width, E.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function g(m, f) {
    const E = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(E.matrixWorld), m.nearDistance.value = E.shadow.camera.near, m.farDistance.value = E.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function Xg(i, e, t, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(E, M) {
    const v = M.program;
    n.uniformBlockBinding(E, v);
  }
  function c(E, M) {
    let v = s[E.id];
    v === void 0 && (_(E), v = u(E), s[E.id] = v, E.addEventListener("dispose", m));
    const N = M.program;
    n.updateUBOMapping(E, N);
    const w = e.render.frame;
    r[E.id] !== w && (d(E), r[E.id] = w);
  }
  function u(E) {
    const M = h();
    E.__bindingPointIndex = M;
    const v = i.createBuffer(), N = E.__size, w = E.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, v), i.bufferData(i.UNIFORM_BUFFER, N, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, M, v), v;
  }
  function h() {
    for (let E = 0; E < o; E++)
      if (a.indexOf(E) === -1)
        return a.push(E), E;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(E) {
    const M = s[E.id], v = E.uniforms, N = E.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, M);
    for (let w = 0, A = v.length; w < A; w++) {
      const P = Array.isArray(v[w]) ? v[w] : [v[w]];
      for (let b = 0, y = P.length; b < y; b++) {
        const C = P[b];
        if (p(C, w, b, N) === !0) {
          const H = C.__offset, O = Array.isArray(C.value) ? C.value : [C.value];
          let G = 0;
          for (let $ = 0; $ < O.length; $++) {
            const B = O[$], te = g(B);
            typeof B == "number" || typeof B == "boolean" ? (C.__data[0] = B, i.bufferSubData(i.UNIFORM_BUFFER, H + G, C.__data)) : B.isMatrix3 ? (C.__data[0] = B.elements[0], C.__data[1] = B.elements[1], C.__data[2] = B.elements[2], C.__data[3] = 0, C.__data[4] = B.elements[3], C.__data[5] = B.elements[4], C.__data[6] = B.elements[5], C.__data[7] = 0, C.__data[8] = B.elements[6], C.__data[9] = B.elements[7], C.__data[10] = B.elements[8], C.__data[11] = 0) : (B.toArray(C.__data, G), G += te.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, H, C.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(E, M, v, N) {
    const w = E.value, A = M + "_" + v;
    if (N[A] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? N[A] = w : N[A] = w.clone(), !0;
    {
      const P = N[A];
      if (typeof w == "number" || typeof w == "boolean") {
        if (P !== w)
          return N[A] = w, !0;
      } else if (P.equals(w) === !1)
        return P.copy(w), !0;
    }
    return !1;
  }
  function _(E) {
    const M = E.uniforms;
    let v = 0;
    const N = 16;
    for (let A = 0, P = M.length; A < P; A++) {
      const b = Array.isArray(M[A]) ? M[A] : [M[A]];
      for (let y = 0, C = b.length; y < C; y++) {
        const H = b[y], O = Array.isArray(H.value) ? H.value : [H.value];
        for (let G = 0, $ = O.length; G < $; G++) {
          const B = O[G], te = g(B), W = v % N, re = W % te.boundary, ce = W + re;
          v += re, ce !== 0 && N - ce < te.storage && (v += N - ce), H.__data = new Float32Array(te.storage / Float32Array.BYTES_PER_ELEMENT), H.__offset = v, v += te.storage;
        }
      }
    }
    const w = v % N;
    return w > 0 && (v += N - w), E.__size = v, E.__cache = {}, this;
  }
  function g(E) {
    const M = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof E == "number" || typeof E == "boolean" ? (M.boundary = 4, M.storage = 4) : E.isVector2 ? (M.boundary = 8, M.storage = 8) : E.isVector3 || E.isColor ? (M.boundary = 16, M.storage = 12) : E.isVector4 ? (M.boundary = 16, M.storage = 16) : E.isMatrix3 ? (M.boundary = 48, M.storage = 48) : E.isMatrix4 ? (M.boundary = 64, M.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), M;
  }
  function m(E) {
    const M = E.target;
    M.removeEventListener("dispose", m);
    const v = a.indexOf(M.__bindingPointIndex);
    a.splice(v, 1), i.deleteBuffer(s[M.id]), delete s[M.id], delete r[M.id];
  }
  function f() {
    for (const E in s)
      i.deleteBuffer(s[E]);
    a = [], s = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: f
  };
}
class $g {
  constructor(e = {}) {
    const {
      canvas: t = Iu(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
      reverseDepthBuffer: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = a;
    const _ = new Uint32Array(4), g = new Int32Array(4);
    let m = null, f = null;
    const E = [], M = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = It, this.toneMapping = ei, this.toneMappingExposure = 1;
    const v = this;
    let N = !1, w = 0, A = 0, P = null, b = -1, y = null;
    const C = new ut(), H = new ut();
    let O = null;
    const G = new We(0);
    let $ = 0, B = t.width, te = t.height, W = 1, re = null, ce = null;
    const Ee = new ut(0, 0, B, te), Ne = new ut(0, 0, B, te);
    let Ze = !1;
    const F = new ad();
    let j = !1, Y = !1;
    const Q = new pt(), oe = new pt(), _e = new R(), Re = new ut(), qe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Ye = !1;
    function mt() {
      return P === null ? W : 1;
    }
    let U = n;
    function zt(S, L) {
      return t.getContext(S, L);
    }
    try {
      const S = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Co}`), t.addEventListener("webglcontextlost", J, !1), t.addEventListener("webglcontextrestored", pe, !1), t.addEventListener("webglcontextcreationerror", ue, !1), U === null) {
        const L = "webgl2";
        if (U = zt(L, S), U === null)
          throw zt(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let me, De, ge, $e, Se, T, x, k, K, ee, q, Ce, de, ve, Je, ie, xe, Ie, Ue, ye, Ke, Ve, ct, D;
    function le() {
      me = new Kp(U), me.init(), Ve = new Og(U, me), De = new Wp(U, me, e, Ve), ge = new Ig(U, me), De.reverseDepthBuffer && d && ge.buffers.depth.setReversed(!0), $e = new em(U), Se = new vg(), T = new Ng(U, me, ge, Se, De, Ve, $e), x = new $p(v), k = new Zp(v), K = new rh(U), ct = new Vp(U, K), ee = new Jp(U, K, $e, ct), q = new nm(U, ee, K, $e), Ue = new tm(U, De, T), ie = new Xp(Se), Ce = new _g(v, x, k, me, De, ct, ie), de = new Wg(v, Se), ve = new yg(), Je = new wg(me), Ie = new Hp(v, x, k, ge, q, p, l), xe = new Dg(v, q, De), D = new Xg(U, $e, De, ge), ye = new Gp(U, me, $e), Ke = new Qp(U, me, $e), $e.programs = Ce.programs, v.capabilities = De, v.extensions = me, v.properties = Se, v.renderLists = ve, v.shadowMap = xe, v.state = ge, v.info = $e;
    }
    le();
    const X = new Vg(v, U);
    this.xr = X, this.getContext = function() {
      return U;
    }, this.getContextAttributes = function() {
      return U.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = me.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = me.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return W;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (W = S, this.setSize(B, te, !1));
    }, this.getSize = function(S) {
      return S.set(B, te);
    }, this.setSize = function(S, L, z = !0) {
      if (X.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      B = S, te = L, t.width = Math.floor(S * W), t.height = Math.floor(L * W), z === !0 && (t.style.width = S + "px", t.style.height = L + "px"), this.setViewport(0, 0, S, L);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(B * W, te * W).floor();
    }, this.setDrawingBufferSize = function(S, L, z) {
      B = S, te = L, W = z, t.width = Math.floor(S * z), t.height = Math.floor(L * z), this.setViewport(0, 0, S, L);
    }, this.getCurrentViewport = function(S) {
      return S.copy(C);
    }, this.getViewport = function(S) {
      return S.copy(Ee);
    }, this.setViewport = function(S, L, z, V) {
      S.isVector4 ? Ee.set(S.x, S.y, S.z, S.w) : Ee.set(S, L, z, V), ge.viewport(C.copy(Ee).multiplyScalar(W).round());
    }, this.getScissor = function(S) {
      return S.copy(Ne);
    }, this.setScissor = function(S, L, z, V) {
      S.isVector4 ? Ne.set(S.x, S.y, S.z, S.w) : Ne.set(S, L, z, V), ge.scissor(H.copy(Ne).multiplyScalar(W).round());
    }, this.getScissorTest = function() {
      return Ze;
    }, this.setScissorTest = function(S) {
      ge.setScissorTest(Ze = S);
    }, this.setOpaqueSort = function(S) {
      re = S;
    }, this.setTransparentSort = function(S) {
      ce = S;
    }, this.getClearColor = function(S) {
      return S.copy(Ie.getClearColor());
    }, this.setClearColor = function() {
      Ie.setClearColor.apply(Ie, arguments);
    }, this.getClearAlpha = function() {
      return Ie.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ie.setClearAlpha.apply(Ie, arguments);
    }, this.clear = function(S = !0, L = !0, z = !0) {
      let V = 0;
      if (S) {
        let I = !1;
        if (P !== null) {
          const se = P.texture.format;
          I = se === No || se === Uo || se === Io;
        }
        if (I) {
          const se = P.texture.type, he = se === Fn || se === xi || se === Ps || se === is || se === Do || se === Lo, Te = Ie.getClearColor(), we = Ie.getClearAlpha(), Oe = Te.r, ze = Te.g, Ae = Te.b;
          he ? (_[0] = Oe, _[1] = ze, _[2] = Ae, _[3] = we, U.clearBufferuiv(U.COLOR, 0, _)) : (g[0] = Oe, g[1] = ze, g[2] = Ae, g[3] = we, U.clearBufferiv(U.COLOR, 0, g));
        } else
          V |= U.COLOR_BUFFER_BIT;
      }
      L && (V |= U.DEPTH_BUFFER_BIT), z && (V |= U.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), U.clear(V);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", J, !1), t.removeEventListener("webglcontextrestored", pe, !1), t.removeEventListener("webglcontextcreationerror", ue, !1), ve.dispose(), Je.dispose(), Se.dispose(), x.dispose(), k.dispose(), q.dispose(), ct.dispose(), D.dispose(), Ce.dispose(), X.dispose(), X.removeEventListener("sessionstart", $o), X.removeEventListener("sessionend", qo), oi.stop();
    };
    function J(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), N = !0;
    }
    function pe() {
      console.log("THREE.WebGLRenderer: Context Restored."), N = !1;
      const S = $e.autoReset, L = xe.enabled, z = xe.autoUpdate, V = xe.needsUpdate, I = xe.type;
      le(), $e.autoReset = S, xe.enabled = L, xe.autoUpdate = z, xe.needsUpdate = V, xe.type = I;
    }
    function ue(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function Be(S) {
      const L = S.target;
      L.removeEventListener("dispose", Be), gt(L);
    }
    function gt(S) {
      Pt(S), Se.remove(S);
    }
    function Pt(S) {
      const L = Se.get(S).programs;
      L !== void 0 && (L.forEach(function(z) {
        Ce.releaseProgram(z);
      }), S.isShaderMaterial && Ce.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, L, z, V, I, se) {
      L === null && (L = qe);
      const he = I.isMesh && I.matrixWorld.determinant() < 0, Te = Td(S, L, z, V, I);
      ge.setMaterial(V, he);
      let we = z.index, Oe = 1;
      if (V.wireframe === !0) {
        if (we = ee.getWireframeAttribute(z), we === void 0) return;
        Oe = 2;
      }
      const ze = z.drawRange, Ae = z.attributes.position;
      let tt = ze.start * Oe, dt = (ze.start + ze.count) * Oe;
      se !== null && (tt = Math.max(tt, se.start * Oe), dt = Math.min(dt, (se.start + se.count) * Oe)), we !== null ? (tt = Math.max(tt, 0), dt = Math.min(dt, we.count)) : Ae != null && (tt = Math.max(tt, 0), dt = Math.min(dt, Ae.count));
      const ht = dt - tt;
      if (ht < 0 || ht === 1 / 0) return;
      ct.setup(I, V, Te, z, we);
      let Ht, it = ye;
      if (we !== null && (Ht = K.get(we), it = Ke, it.setIndex(Ht)), I.isMesh)
        V.wireframe === !0 ? (ge.setLineWidth(V.wireframeLinewidth * mt()), it.setMode(U.LINES)) : it.setMode(U.TRIANGLES);
      else if (I.isLine) {
        let Pe = V.linewidth;
        Pe === void 0 && (Pe = 1), ge.setLineWidth(Pe * mt()), I.isLineSegments ? it.setMode(U.LINES) : I.isLineLoop ? it.setMode(U.LINE_LOOP) : it.setMode(U.LINE_STRIP);
      } else I.isPoints ? it.setMode(U.POINTS) : I.isSprite && it.setMode(U.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          it.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
        else if (me.get("WEBGL_multi_draw"))
          it.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
        else {
          const Pe = I._multiDrawStarts, En = I._multiDrawCounts, st = I._multiDrawCount, sn = we ? K.get(we).bytesPerElement : 1, Ai = Se.get(V).currentProgram.getUniforms();
          for (let Xt = 0; Xt < st; Xt++)
            Ai.setValue(U, "_gl_DrawID", Xt), it.render(Pe[Xt] / sn, En[Xt]);
        }
      else if (I.isInstancedMesh)
        it.renderInstances(tt, ht, I.count);
      else if (z.isInstancedBufferGeometry) {
        const Pe = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, En = Math.min(z.instanceCount, Pe);
        it.renderInstances(tt, ht, En);
      } else
        it.render(tt, ht);
    };
    function rt(S, L, z) {
      S.transparent === !0 && S.side === vn && S.forceSinglePass === !1 ? (S.side = Bt, S.needsUpdate = !0, Gs(S, L, z), S.side = ni, S.needsUpdate = !0, Gs(S, L, z), S.side = vn) : Gs(S, L, z);
    }
    this.compile = function(S, L, z = null) {
      z === null && (z = S), f = Je.get(z), f.init(L), M.push(f), z.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (f.pushLight(I), I.castShadow && f.pushShadow(I));
      }), S !== z && S.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (f.pushLight(I), I.castShadow && f.pushShadow(I));
      }), f.setupLights();
      const V = /* @__PURE__ */ new Set();
      return S.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite))
          return;
        const se = I.material;
        if (se)
          if (Array.isArray(se))
            for (let he = 0; he < se.length; he++) {
              const Te = se[he];
              rt(Te, z, I), V.add(Te);
            }
          else
            rt(se, z, I), V.add(se);
      }), M.pop(), f = null, V;
    }, this.compileAsync = function(S, L, z = null) {
      const V = this.compile(S, L, z);
      return new Promise((I) => {
        function se() {
          if (V.forEach(function(he) {
            Se.get(he).currentProgram.isReady() && V.delete(he);
          }), V.size === 0) {
            I(S);
            return;
          }
          setTimeout(se, 10);
        }
        me.get("KHR_parallel_shader_compile") !== null ? se() : setTimeout(se, 10);
      });
    };
    let nn = null;
    function Mn(S) {
      nn && nn(S);
    }
    function $o() {
      oi.stop();
    }
    function qo() {
      oi.start();
    }
    const oi = new od();
    oi.setAnimationLoop(Mn), typeof self < "u" && oi.setContext(self), this.setAnimationLoop = function(S) {
      nn = S, X.setAnimationLoop(S), S === null ? oi.stop() : oi.start();
    }, X.addEventListener("sessionstart", $o), X.addEventListener("sessionend", qo), this.render = function(S, L) {
      if (L !== void 0 && L.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (N === !0) return;
      if (S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(), X.enabled === !0 && X.isPresenting === !0 && (X.cameraAutoUpdate === !0 && X.updateCamera(L), L = X.getCamera()), S.isScene === !0 && S.onBeforeRender(v, S, L, P), f = Je.get(S, M.length), f.init(L), M.push(f), oe.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), F.setFromProjectionMatrix(oe), Y = this.localClippingEnabled, j = ie.init(this.clippingPlanes, Y), m = ve.get(S, E.length), m.init(), E.push(m), X.enabled === !0 && X.isPresenting === !0) {
        const se = v.xr.getDepthSensingMesh();
        se !== null && jr(se, L, -1 / 0, v.sortObjects);
      }
      jr(S, L, 0, v.sortObjects), m.finish(), v.sortObjects === !0 && m.sort(re, ce), Ye = X.enabled === !1 || X.isPresenting === !1 || X.hasDepthSensing() === !1, Ye && Ie.addToRenderList(m, S), this.info.render.frame++, j === !0 && ie.beginShadows();
      const z = f.state.shadowsArray;
      xe.render(z, S, L), j === !0 && ie.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const V = m.opaque, I = m.transmissive;
      if (f.setupLights(), L.isArrayCamera) {
        const se = L.cameras;
        if (I.length > 0)
          for (let he = 0, Te = se.length; he < Te; he++) {
            const we = se[he];
            jo(V, I, S, we);
          }
        Ye && Ie.render(S);
        for (let he = 0, Te = se.length; he < Te; he++) {
          const we = se[he];
          Yo(m, S, we, we.viewport);
        }
      } else
        I.length > 0 && jo(V, I, S, L), Ye && Ie.render(S), Yo(m, S, L);
      P !== null && (T.updateMultisampleRenderTarget(P), T.updateRenderTargetMipmap(P)), S.isScene === !0 && S.onAfterRender(v, S, L), ct.resetDefaultState(), b = -1, y = null, M.pop(), M.length > 0 ? (f = M[M.length - 1], j === !0 && ie.setGlobalState(v.clippingPlanes, f.state.camera)) : f = null, E.pop(), E.length > 0 ? m = E[E.length - 1] : m = null;
    };
    function jr(S, L, z, V) {
      if (S.visible === !1) return;
      if (S.layers.test(L.layers)) {
        if (S.isGroup)
          z = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(L);
        else if (S.isLight)
          f.pushLight(S), S.castShadow && f.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || F.intersectsSprite(S)) {
            V && Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);
            const he = q.update(S), Te = S.material;
            Te.visible && m.push(S, he, Te, z, Re.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || F.intersectsObject(S))) {
          const he = q.update(S), Te = S.material;
          if (V && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Re.copy(S.boundingSphere.center)) : (he.boundingSphere === null && he.computeBoundingSphere(), Re.copy(he.boundingSphere.center)), Re.applyMatrix4(S.matrixWorld).applyMatrix4(oe)), Array.isArray(Te)) {
            const we = he.groups;
            for (let Oe = 0, ze = we.length; Oe < ze; Oe++) {
              const Ae = we[Oe], tt = Te[Ae.materialIndex];
              tt && tt.visible && m.push(S, he, tt, z, Re.z, Ae);
            }
          } else Te.visible && m.push(S, he, Te, z, Re.z, null);
        }
      }
      const se = S.children;
      for (let he = 0, Te = se.length; he < Te; he++)
        jr(se[he], L, z, V);
    }
    function Yo(S, L, z, V) {
      const I = S.opaque, se = S.transmissive, he = S.transparent;
      f.setupLightsView(z), j === !0 && ie.setGlobalState(v.clippingPlanes, z), V && ge.viewport(C.copy(V)), I.length > 0 && Vs(I, L, z), se.length > 0 && Vs(se, L, z), he.length > 0 && Vs(he, L, z), ge.buffers.depth.setTest(!0), ge.buffers.depth.setMask(!0), ge.buffers.color.setMask(!0), ge.setPolygonOffset(!1);
    }
    function jo(S, L, z, V) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null)
        return;
      f.state.transmissionRenderTarget[V.id] === void 0 && (f.state.transmissionRenderTarget[V.id] = new yi(1, 1, {
        generateMipmaps: !0,
        type: me.has("EXT_color_buffer_half_float") || me.has("EXT_color_buffer_float") ? zs : Fn,
        minFilter: _i,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Qe.workingColorSpace
      }));
      const se = f.state.transmissionRenderTarget[V.id], he = V.viewport || C;
      se.setSize(he.z, he.w);
      const Te = v.getRenderTarget();
      v.setRenderTarget(se), v.getClearColor(G), $ = v.getClearAlpha(), $ < 1 && v.setClearColor(16777215, 0.5), v.clear(), Ye && Ie.render(z);
      const we = v.toneMapping;
      v.toneMapping = ei;
      const Oe = V.viewport;
      if (V.viewport !== void 0 && (V.viewport = void 0), f.setupLightsView(V), j === !0 && ie.setGlobalState(v.clippingPlanes, V), Vs(S, z, V), T.updateMultisampleRenderTarget(se), T.updateRenderTargetMipmap(se), me.has("WEBGL_multisampled_render_to_texture") === !1) {
        let ze = !1;
        for (let Ae = 0, tt = L.length; Ae < tt; Ae++) {
          const dt = L[Ae], ht = dt.object, Ht = dt.geometry, it = dt.material, Pe = dt.group;
          if (it.side === vn && ht.layers.test(V.layers)) {
            const En = it.side;
            it.side = Bt, it.needsUpdate = !0, Zo(ht, z, V, Ht, it, Pe), it.side = En, it.needsUpdate = !0, ze = !0;
          }
        }
        ze === !0 && (T.updateMultisampleRenderTarget(se), T.updateRenderTargetMipmap(se));
      }
      v.setRenderTarget(Te), v.setClearColor(G, $), Oe !== void 0 && (V.viewport = Oe), v.toneMapping = we;
    }
    function Vs(S, L, z) {
      const V = L.isScene === !0 ? L.overrideMaterial : null;
      for (let I = 0, se = S.length; I < se; I++) {
        const he = S[I], Te = he.object, we = he.geometry, Oe = V === null ? he.material : V, ze = he.group;
        Te.layers.test(z.layers) && Zo(Te, L, z, we, Oe, ze);
      }
    }
    function Zo(S, L, z, V, I, se) {
      S.onBeforeRender(v, L, z, V, I, se), S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), I.onBeforeRender(v, L, z, V, S, se), I.transparent === !0 && I.side === vn && I.forceSinglePass === !1 ? (I.side = Bt, I.needsUpdate = !0, v.renderBufferDirect(z, L, V, I, S, se), I.side = ni, I.needsUpdate = !0, v.renderBufferDirect(z, L, V, I, S, se), I.side = vn) : v.renderBufferDirect(z, L, V, I, S, se), S.onAfterRender(v, L, z, V, I, se);
    }
    function Gs(S, L, z) {
      L.isScene !== !0 && (L = qe);
      const V = Se.get(S), I = f.state.lights, se = f.state.shadowsArray, he = I.state.version, Te = Ce.getParameters(S, I.state, se, L, z), we = Ce.getProgramCacheKey(Te);
      let Oe = V.programs;
      V.environment = S.isMeshStandardMaterial ? L.environment : null, V.fog = L.fog, V.envMap = (S.isMeshStandardMaterial ? k : x).get(S.envMap || V.environment), V.envMapRotation = V.environment !== null && S.envMap === null ? L.environmentRotation : S.envMapRotation, Oe === void 0 && (S.addEventListener("dispose", Be), Oe = /* @__PURE__ */ new Map(), V.programs = Oe);
      let ze = Oe.get(we);
      if (ze !== void 0) {
        if (V.currentProgram === ze && V.lightsStateVersion === he)
          return Jo(S, Te), ze;
      } else
        Te.uniforms = Ce.getUniforms(S), S.onBeforeCompile(Te, v), ze = Ce.acquireProgram(Te, we), Oe.set(we, ze), V.uniforms = Te.uniforms;
      const Ae = V.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ae.clippingPlanes = ie.uniform), Jo(S, Te), V.needsLights = Ad(S), V.lightsStateVersion = he, V.needsLights && (Ae.ambientLightColor.value = I.state.ambient, Ae.lightProbe.value = I.state.probe, Ae.directionalLights.value = I.state.directional, Ae.directionalLightShadows.value = I.state.directionalShadow, Ae.spotLights.value = I.state.spot, Ae.spotLightShadows.value = I.state.spotShadow, Ae.rectAreaLights.value = I.state.rectArea, Ae.ltc_1.value = I.state.rectAreaLTC1, Ae.ltc_2.value = I.state.rectAreaLTC2, Ae.pointLights.value = I.state.point, Ae.pointLightShadows.value = I.state.pointShadow, Ae.hemisphereLights.value = I.state.hemi, Ae.directionalShadowMap.value = I.state.directionalShadowMap, Ae.directionalShadowMatrix.value = I.state.directionalShadowMatrix, Ae.spotShadowMap.value = I.state.spotShadowMap, Ae.spotLightMatrix.value = I.state.spotLightMatrix, Ae.spotLightMap.value = I.state.spotLightMap, Ae.pointShadowMap.value = I.state.pointShadowMap, Ae.pointShadowMatrix.value = I.state.pointShadowMatrix), V.currentProgram = ze, V.uniformsList = null, ze;
    }
    function Ko(S) {
      if (S.uniformsList === null) {
        const L = S.currentProgram.getUniforms();
        S.uniformsList = Rr.seqWithValue(L.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Jo(S, L) {
      const z = Se.get(S);
      z.outputColorSpace = L.outputColorSpace, z.batching = L.batching, z.batchingColor = L.batchingColor, z.instancing = L.instancing, z.instancingColor = L.instancingColor, z.instancingMorph = L.instancingMorph, z.skinning = L.skinning, z.morphTargets = L.morphTargets, z.morphNormals = L.morphNormals, z.morphColors = L.morphColors, z.morphTargetsCount = L.morphTargetsCount, z.numClippingPlanes = L.numClippingPlanes, z.numIntersection = L.numClipIntersection, z.vertexAlphas = L.vertexAlphas, z.vertexTangents = L.vertexTangents, z.toneMapping = L.toneMapping;
    }
    function Td(S, L, z, V, I) {
      L.isScene !== !0 && (L = qe), T.resetTextureUnits();
      const se = L.fog, he = V.isMeshStandardMaterial ? L.environment : null, Te = P === null ? v.outputColorSpace : P.isXRRenderTarget === !0 ? P.texture.colorSpace : fs, we = (V.isMeshStandardMaterial ? k : x).get(V.envMap || he), Oe = V.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, ze = !!z.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), Ae = !!z.morphAttributes.position, tt = !!z.morphAttributes.normal, dt = !!z.morphAttributes.color;
      let ht = ei;
      V.toneMapped && (P === null || P.isXRRenderTarget === !0) && (ht = v.toneMapping);
      const Ht = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, it = Ht !== void 0 ? Ht.length : 0, Pe = Se.get(V), En = f.state.lights;
      if (j === !0 && (Y === !0 || S !== y)) {
        const jt = S === y && V.id === b;
        ie.setState(V, S, jt);
      }
      let st = !1;
      V.version === Pe.__version ? (Pe.needsLights && Pe.lightsStateVersion !== En.state.version || Pe.outputColorSpace !== Te || I.isBatchedMesh && Pe.batching === !1 || !I.isBatchedMesh && Pe.batching === !0 || I.isBatchedMesh && Pe.batchingColor === !0 && I.colorTexture === null || I.isBatchedMesh && Pe.batchingColor === !1 && I.colorTexture !== null || I.isInstancedMesh && Pe.instancing === !1 || !I.isInstancedMesh && Pe.instancing === !0 || I.isSkinnedMesh && Pe.skinning === !1 || !I.isSkinnedMesh && Pe.skinning === !0 || I.isInstancedMesh && Pe.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && Pe.instancingColor === !1 && I.instanceColor !== null || I.isInstancedMesh && Pe.instancingMorph === !0 && I.morphTexture === null || I.isInstancedMesh && Pe.instancingMorph === !1 && I.morphTexture !== null || Pe.envMap !== we || V.fog === !0 && Pe.fog !== se || Pe.numClippingPlanes !== void 0 && (Pe.numClippingPlanes !== ie.numPlanes || Pe.numIntersection !== ie.numIntersection) || Pe.vertexAlphas !== Oe || Pe.vertexTangents !== ze || Pe.morphTargets !== Ae || Pe.morphNormals !== tt || Pe.morphColors !== dt || Pe.toneMapping !== ht || Pe.morphTargetsCount !== it) && (st = !0) : (st = !0, Pe.__version = V.version);
      let sn = Pe.currentProgram;
      st === !0 && (sn = Gs(V, L, I));
      let Ai = !1, Xt = !1, ms = !1;
      const ft = sn.getUniforms(), mn = Pe.uniforms;
      if (ge.useProgram(sn.program) && (Ai = !0, Xt = !0, ms = !0), V.id !== b && (b = V.id, Xt = !0), Ai || y !== S) {
        ge.buffers.depth.getReversed() ? (Q.copy(S.projectionMatrix), Nu(Q), Ou(Q), ft.setValue(U, "projectionMatrix", Q)) : ft.setValue(U, "projectionMatrix", S.projectionMatrix), ft.setValue(U, "viewMatrix", S.matrixWorldInverse);
        const zn = ft.map.cameraPosition;
        zn !== void 0 && zn.setValue(U, _e.setFromMatrixPosition(S.matrixWorld)), De.logarithmicDepthBuffer && ft.setValue(
          U,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && ft.setValue(U, "isOrthographic", S.isOrthographicCamera === !0), y !== S && (y = S, Xt = !0, ms = !0);
      }
      if (I.isSkinnedMesh) {
        ft.setOptional(U, I, "bindMatrix"), ft.setOptional(U, I, "bindMatrixInverse");
        const jt = I.skeleton;
        jt && (jt.boneTexture === null && jt.computeBoneTexture(), ft.setValue(U, "boneTexture", jt.boneTexture, T));
      }
      I.isBatchedMesh && (ft.setOptional(U, I, "batchingTexture"), ft.setValue(U, "batchingTexture", I._matricesTexture, T), ft.setOptional(U, I, "batchingIdTexture"), ft.setValue(U, "batchingIdTexture", I._indirectTexture, T), ft.setOptional(U, I, "batchingColorTexture"), I._colorsTexture !== null && ft.setValue(U, "batchingColorTexture", I._colorsTexture, T));
      const gs = z.morphAttributes;
      if ((gs.position !== void 0 || gs.normal !== void 0 || gs.color !== void 0) && Ue.update(I, z, sn), (Xt || Pe.receiveShadow !== I.receiveShadow) && (Pe.receiveShadow = I.receiveShadow, ft.setValue(U, "receiveShadow", I.receiveShadow)), V.isMeshGouraudMaterial && V.envMap !== null && (mn.envMap.value = we, mn.flipEnvMap.value = we.isCubeTexture && we.isRenderTargetTexture === !1 ? -1 : 1), V.isMeshStandardMaterial && V.envMap === null && L.environment !== null && (mn.envMapIntensity.value = L.environmentIntensity), Xt && (ft.setValue(U, "toneMappingExposure", v.toneMappingExposure), Pe.needsLights && wd(mn, ms), se && V.fog === !0 && de.refreshFogUniforms(mn, se), de.refreshMaterialUniforms(mn, V, W, te, f.state.transmissionRenderTarget[S.id]), Rr.upload(U, Ko(Pe), mn, T)), V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (Rr.upload(U, Ko(Pe), mn, T), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && ft.setValue(U, "center", I.center), ft.setValue(U, "modelViewMatrix", I.modelViewMatrix), ft.setValue(U, "normalMatrix", I.normalMatrix), ft.setValue(U, "modelMatrix", I.matrixWorld), V.isShaderMaterial || V.isRawShaderMaterial) {
        const jt = V.uniformsGroups;
        for (let zn = 0, Hn = jt.length; zn < Hn; zn++) {
          const Qo = jt[zn];
          D.update(Qo, sn), D.bind(Qo, sn);
        }
      }
      return sn;
    }
    function wd(S, L) {
      S.ambientLightColor.needsUpdate = L, S.lightProbe.needsUpdate = L, S.directionalLights.needsUpdate = L, S.directionalLightShadows.needsUpdate = L, S.pointLights.needsUpdate = L, S.pointLightShadows.needsUpdate = L, S.spotLights.needsUpdate = L, S.spotLightShadows.needsUpdate = L, S.rectAreaLights.needsUpdate = L, S.hemisphereLights.needsUpdate = L;
    }
    function Ad(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return P;
    }, this.setRenderTargetTextures = function(S, L, z) {
      Se.get(S.texture).__webglTexture = L, Se.get(S.depthTexture).__webglTexture = z;
      const V = Se.get(S);
      V.__hasExternalTextures = !0, V.__autoAllocateDepthBuffer = z === void 0, V.__autoAllocateDepthBuffer || me.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), V.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(S, L) {
      const z = Se.get(S);
      z.__webglFramebuffer = L, z.__useDefaultFramebuffer = L === void 0;
    }, this.setRenderTarget = function(S, L = 0, z = 0) {
      P = S, w = L, A = z;
      let V = !0, I = null, se = !1, he = !1;
      if (S) {
        const we = Se.get(S);
        if (we.__useDefaultFramebuffer !== void 0)
          ge.bindFramebuffer(U.FRAMEBUFFER, null), V = !1;
        else if (we.__webglFramebuffer === void 0)
          T.setupRenderTarget(S);
        else if (we.__hasExternalTextures)
          T.rebindTextures(S, Se.get(S.texture).__webglTexture, Se.get(S.depthTexture).__webglTexture);
        else if (S.depthBuffer) {
          const Ae = S.depthTexture;
          if (we.__boundDepthTexture !== Ae) {
            if (Ae !== null && Se.has(Ae) && (S.width !== Ae.image.width || S.height !== Ae.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            T.setupDepthRenderbuffer(S);
          }
        }
        const Oe = S.texture;
        (Oe.isData3DTexture || Oe.isDataArrayTexture || Oe.isCompressedArrayTexture) && (he = !0);
        const ze = Se.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(ze[L]) ? I = ze[L][z] : I = ze[L], se = !0) : S.samples > 0 && T.useMultisampledRTT(S) === !1 ? I = Se.get(S).__webglMultisampledFramebuffer : Array.isArray(ze) ? I = ze[z] : I = ze, C.copy(S.viewport), H.copy(S.scissor), O = S.scissorTest;
      } else
        C.copy(Ee).multiplyScalar(W).floor(), H.copy(Ne).multiplyScalar(W).floor(), O = Ze;
      if (ge.bindFramebuffer(U.FRAMEBUFFER, I) && V && ge.drawBuffers(S, I), ge.viewport(C), ge.scissor(H), ge.setScissorTest(O), se) {
        const we = Se.get(S.texture);
        U.framebufferTexture2D(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, U.TEXTURE_CUBE_MAP_POSITIVE_X + L, we.__webglTexture, z);
      } else if (he) {
        const we = Se.get(S.texture), Oe = L || 0;
        U.framebufferTextureLayer(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, we.__webglTexture, z || 0, Oe);
      }
      b = -1;
    }, this.readRenderTargetPixels = function(S, L, z, V, I, se, he) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Te = Se.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && he !== void 0 && (Te = Te[he]), Te) {
        ge.bindFramebuffer(U.FRAMEBUFFER, Te);
        try {
          const we = S.texture, Oe = we.format, ze = we.type;
          if (!De.textureFormatReadable(Oe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!De.textureTypeReadable(ze)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= S.width - V && z >= 0 && z <= S.height - I && U.readPixels(L, z, V, I, Ve.convert(Oe), Ve.convert(ze), se);
        } finally {
          const we = P !== null ? Se.get(P).__webglFramebuffer : null;
          ge.bindFramebuffer(U.FRAMEBUFFER, we);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(S, L, z, V, I, se, he) {
      if (!(S && S.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Te = Se.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && he !== void 0 && (Te = Te[he]), Te) {
        const we = S.texture, Oe = we.format, ze = we.type;
        if (!De.textureFormatReadable(Oe))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!De.textureTypeReadable(ze))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (L >= 0 && L <= S.width - V && z >= 0 && z <= S.height - I) {
          ge.bindFramebuffer(U.FRAMEBUFFER, Te);
          const Ae = U.createBuffer();
          U.bindBuffer(U.PIXEL_PACK_BUFFER, Ae), U.bufferData(U.PIXEL_PACK_BUFFER, se.byteLength, U.STREAM_READ), U.readPixels(L, z, V, I, Ve.convert(Oe), Ve.convert(ze), 0);
          const tt = P !== null ? Se.get(P).__webglFramebuffer : null;
          ge.bindFramebuffer(U.FRAMEBUFFER, tt);
          const dt = U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return U.flush(), await Uu(U, dt, 4), U.bindBuffer(U.PIXEL_PACK_BUFFER, Ae), U.getBufferSubData(U.PIXEL_PACK_BUFFER, 0, se), U.deleteBuffer(Ae), U.deleteSync(dt), se;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(S, L = null, z = 0) {
      S.isTexture !== !0 && (Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."), L = arguments[0] || null, S = arguments[1]);
      const V = Math.pow(2, -z), I = Math.floor(S.image.width * V), se = Math.floor(S.image.height * V), he = L !== null ? L.x : 0, Te = L !== null ? L.y : 0;
      T.setTexture2D(S, 0), U.copyTexSubImage2D(U.TEXTURE_2D, z, 0, 0, he, Te, I, se), ge.unbindTexture();
    }, this.copyTextureToTexture = function(S, L, z = null, V = null, I = 0) {
      S.isTexture !== !0 && (Ts("WebGLRenderer: copyTextureToTexture function signature has changed."), V = arguments[0] || null, S = arguments[1], L = arguments[2], I = arguments[3] || 0, z = null);
      let se, he, Te, we, Oe, ze, Ae, tt, dt;
      const ht = S.isCompressedTexture ? S.mipmaps[I] : S.image;
      z !== null ? (se = z.max.x - z.min.x, he = z.max.y - z.min.y, Te = z.isBox3 ? z.max.z - z.min.z : 1, we = z.min.x, Oe = z.min.y, ze = z.isBox3 ? z.min.z : 0) : (se = ht.width, he = ht.height, Te = ht.depth || 1, we = 0, Oe = 0, ze = 0), V !== null ? (Ae = V.x, tt = V.y, dt = V.z) : (Ae = 0, tt = 0, dt = 0);
      const Ht = Ve.convert(L.format), it = Ve.convert(L.type);
      let Pe;
      L.isData3DTexture ? (T.setTexture3D(L, 0), Pe = U.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (T.setTexture2DArray(L, 0), Pe = U.TEXTURE_2D_ARRAY) : (T.setTexture2D(L, 0), Pe = U.TEXTURE_2D), U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, L.flipY), U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), U.pixelStorei(U.UNPACK_ALIGNMENT, L.unpackAlignment);
      const En = U.getParameter(U.UNPACK_ROW_LENGTH), st = U.getParameter(U.UNPACK_IMAGE_HEIGHT), sn = U.getParameter(U.UNPACK_SKIP_PIXELS), Ai = U.getParameter(U.UNPACK_SKIP_ROWS), Xt = U.getParameter(U.UNPACK_SKIP_IMAGES);
      U.pixelStorei(U.UNPACK_ROW_LENGTH, ht.width), U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, ht.height), U.pixelStorei(U.UNPACK_SKIP_PIXELS, we), U.pixelStorei(U.UNPACK_SKIP_ROWS, Oe), U.pixelStorei(U.UNPACK_SKIP_IMAGES, ze);
      const ms = S.isDataArrayTexture || S.isData3DTexture, ft = L.isDataArrayTexture || L.isData3DTexture;
      if (S.isRenderTargetTexture || S.isDepthTexture) {
        const mn = Se.get(S), gs = Se.get(L), jt = Se.get(mn.__renderTarget), zn = Se.get(gs.__renderTarget);
        ge.bindFramebuffer(U.READ_FRAMEBUFFER, jt.__webglFramebuffer), ge.bindFramebuffer(U.DRAW_FRAMEBUFFER, zn.__webglFramebuffer);
        for (let Hn = 0; Hn < Te; Hn++)
          ms && U.framebufferTextureLayer(U.READ_FRAMEBUFFER, U.COLOR_ATTACHMENT0, Se.get(S).__webglTexture, I, ze + Hn), S.isDepthTexture ? (ft && U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER, U.COLOR_ATTACHMENT0, Se.get(L).__webglTexture, I, dt + Hn), U.blitFramebuffer(we, Oe, se, he, Ae, tt, se, he, U.DEPTH_BUFFER_BIT, U.NEAREST)) : ft ? U.copyTexSubImage3D(Pe, I, Ae, tt, dt + Hn, we, Oe, se, he) : U.copyTexSubImage2D(Pe, I, Ae, tt, dt + Hn, we, Oe, se, he);
        ge.bindFramebuffer(U.READ_FRAMEBUFFER, null), ge.bindFramebuffer(U.DRAW_FRAMEBUFFER, null);
      } else
        ft ? S.isDataTexture || S.isData3DTexture ? U.texSubImage3D(Pe, I, Ae, tt, dt, se, he, Te, Ht, it, ht.data) : L.isCompressedArrayTexture ? U.compressedTexSubImage3D(Pe, I, Ae, tt, dt, se, he, Te, Ht, ht.data) : U.texSubImage3D(Pe, I, Ae, tt, dt, se, he, Te, Ht, it, ht) : S.isDataTexture ? U.texSubImage2D(U.TEXTURE_2D, I, Ae, tt, se, he, Ht, it, ht.data) : S.isCompressedTexture ? U.compressedTexSubImage2D(U.TEXTURE_2D, I, Ae, tt, ht.width, ht.height, Ht, ht.data) : U.texSubImage2D(U.TEXTURE_2D, I, Ae, tt, se, he, Ht, it, ht);
      U.pixelStorei(U.UNPACK_ROW_LENGTH, En), U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, st), U.pixelStorei(U.UNPACK_SKIP_PIXELS, sn), U.pixelStorei(U.UNPACK_SKIP_ROWS, Ai), U.pixelStorei(U.UNPACK_SKIP_IMAGES, Xt), I === 0 && L.generateMipmaps && U.generateMipmap(Pe), ge.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, L, z = null, V = null, I = 0) {
      return S.isTexture !== !0 && (Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."), z = arguments[0] || null, V = arguments[1] || null, S = arguments[2], L = arguments[3], I = arguments[4] || 0), Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(S, L, z, V, I);
    }, this.initRenderTarget = function(S) {
      Se.get(S).__webglFramebuffer === void 0 && T.setupRenderTarget(S);
    }, this.initTexture = function(S) {
      S.isCubeTexture ? T.setTextureCube(S, 0) : S.isData3DTexture ? T.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? T.setTexture2DArray(S, 0) : T.setTexture2D(S, 0), ge.unbindTexture();
    }, this.resetState = function() {
      w = 0, A = 0, P = null, ge.reset(), ct.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return In;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = Qe._getDrawingBufferColorSpace(e), t.unpackColorSpace = Qe._getUnpackColorSpace();
  }
}
class qg extends Nt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new kn(), this.environmentIntensity = 1, this.environmentRotation = new kn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class fd {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = _o, this.updateRanges = [], this.version = 0, this.uuid = Un();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let s = 0, r = this.stride; s < r; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Ft = /* @__PURE__ */ new R();
class Sn {
  constructor(e, t, n, s = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = s;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Ft.fromBufferAttribute(this, t), Ft.applyMatrix4(e), this.setXYZ(t, Ft.x, Ft.y, Ft.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ft.fromBufferAttribute(this, t), Ft.applyNormalMatrix(e), this.setXYZ(t, Ft.x, Ft.y, Ft.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ft.fromBufferAttribute(this, t), Ft.transformDirection(e), this.setXYZ(t, Ft.x, Ft.y, Ft.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = cn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = at(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = at(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = at(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = at(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = at(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = cn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = cn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = cn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = cn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = at(t, this.array), n = at(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = at(t, this.array), n = at(n, this.array), s = at(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = at(t, this.array), n = at(n, this.array), s = at(s, this.array), r = at(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[s + r]);
      }
      return new en(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Sn(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[s + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class Us extends wi {
  static get type() {
    return "SpriteMaterial";
  }
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.color = new We(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let Vi;
const Ss = /* @__PURE__ */ new R(), Gi = /* @__PURE__ */ new R(), Wi = /* @__PURE__ */ new R(), Xi = /* @__PURE__ */ new Le(), bs = /* @__PURE__ */ new Le(), pd = /* @__PURE__ */ new pt(), ur = /* @__PURE__ */ new R(), Ms = /* @__PURE__ */ new R(), hr = /* @__PURE__ */ new R(), Kl = /* @__PURE__ */ new Le(), Ea = /* @__PURE__ */ new Le(), Jl = /* @__PURE__ */ new Le();
class Lr extends Nt {
  constructor(e = new Us()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", Vi === void 0) {
      Vi = new Ct();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new fd(t, 5);
      Vi.setIndex([0, 1, 2, 0, 2, 3]), Vi.setAttribute("position", new Sn(n, 3, 0, !1)), Vi.setAttribute("uv", new Sn(n, 2, 3, !1));
    }
    this.geometry = Vi, this.material = e, this.center = new Le(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Gi.setFromMatrixScale(this.matrixWorld), pd.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Wi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Gi.multiplyScalar(-Wi.z);
    const n = this.material.rotation;
    let s, r;
    n !== 0 && (r = Math.cos(n), s = Math.sin(n));
    const a = this.center;
    fr(ur.set(-0.5, -0.5, 0), Wi, a, Gi, s, r), fr(Ms.set(0.5, -0.5, 0), Wi, a, Gi, s, r), fr(hr.set(0.5, 0.5, 0), Wi, a, Gi, s, r), Kl.set(0, 0), Ea.set(1, 0), Jl.set(1, 1);
    let o = e.ray.intersectTriangle(ur, Ms, hr, !1, Ss);
    if (o === null && (fr(Ms.set(-0.5, 0.5, 0), Wi, a, Gi, s, r), Ea.set(0, 1), o = e.ray.intersectTriangle(ur, hr, Ms, !1, Ss), o === null))
      return;
    const l = e.ray.origin.distanceTo(Ss);
    l < e.near || l > e.far || t.push({
      distance: l,
      point: Ss.clone(),
      uv: Qt.getInterpolation(Ss, ur, Ms, hr, Kl, Ea, Jl, new Le()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function fr(i, e, t, n, s, r) {
  Xi.subVectors(i, t).addScalar(0.5).multiply(n), s !== void 0 ? (bs.x = r * Xi.x - s * Xi.y, bs.y = s * Xi.x + r * Xi.y) : bs.copy(Xi), i.copy(e), i.x += bs.x, i.y += bs.y, i.applyMatrix4(pd);
}
class Bo extends wi {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.color = new We(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Ir = /* @__PURE__ */ new R(), Ur = /* @__PURE__ */ new R(), Ql = /* @__PURE__ */ new pt(), Es = /* @__PURE__ */ new $r(), pr = /* @__PURE__ */ new Ti(), Ta = /* @__PURE__ */ new R(), ec = /* @__PURE__ */ new R();
class md extends Nt {
  constructor(e = new Ct(), t = new Bo()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let s = 1, r = t.count; s < r; s++)
        Ir.fromBufferAttribute(t, s - 1), Ur.fromBufferAttribute(t, s), n[s] = n[s - 1], n[s] += Ir.distanceTo(Ur);
      e.setAttribute("lineDistance", new Rt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), pr.copy(n.boundingSphere), pr.applyMatrix4(s), pr.radius += r, e.ray.intersectsSphere(pr) === !1) return;
    Ql.copy(s).invert(), Es.copy(e.ray).applyMatrix4(Ql);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, d = n.attributes.position;
    if (u !== null) {
      const p = Math.max(0, a.start), _ = Math.min(u.count, a.start + a.count);
      for (let g = p, m = _ - 1; g < m; g += c) {
        const f = u.getX(g), E = u.getX(g + 1), M = mr(this, e, Es, l, f, E);
        M && t.push(M);
      }
      if (this.isLineLoop) {
        const g = u.getX(_ - 1), m = u.getX(p), f = mr(this, e, Es, l, g, m);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, a.start), _ = Math.min(d.count, a.start + a.count);
      for (let g = p, m = _ - 1; g < m; g += c) {
        const f = mr(this, e, Es, l, g, g + 1);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const g = mr(this, e, Es, l, _ - 1, p);
        g && t.push(g);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function mr(i, e, t, n, s, r) {
  const a = i.geometry.attributes.position;
  if (Ir.fromBufferAttribute(a, s), Ur.fromBufferAttribute(a, r), t.distanceSqToSegment(Ir, Ur, Ta, ec) > n) return;
  Ta.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(Ta);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: ec.clone().applyMatrix4(i.matrixWorld),
      index: s,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
class gd extends wi {
  static get type() {
    return "PointsMaterial";
  }
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.color = new We(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const tc = /* @__PURE__ */ new pt(), xo = /* @__PURE__ */ new $r(), gr = /* @__PURE__ */ new Ti(), _r = /* @__PURE__ */ new R();
class Yg extends Nt {
  constructor(e = new Ct(), t = new gd()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), gr.copy(n.boundingSphere), gr.applyMatrix4(s), gr.radius += r, e.ray.intersectsSphere(gr) === !1) return;
    tc.copy(s).invert(), xo.copy(e.ray).applyMatrix4(tc);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let _ = d, g = p; _ < g; _++) {
        const m = c.getX(_);
        _r.fromBufferAttribute(h, m), nc(_r, m, l, s, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(h.count, a.start + a.count);
      for (let _ = d, g = p; _ < g; _++)
        _r.fromBufferAttribute(h, _), nc(_r, _, l, s, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function nc(i, e, t, n, s, r, a) {
  const o = xo.distanceSqToPoint(i);
  if (o < t) {
    const l = new R();
    xo.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class Ns extends Ut {
  constructor(e, t, n, s, r, a, o, l, c) {
    super(e, t, n, s, r, a, o, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class zo extends Ct {
  constructor(e = 0.5, t = 1, n = 32, s = 1, r = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: s,
      thetaStart: r,
      thetaLength: a
    }, n = Math.max(3, n), s = Math.max(1, s);
    const o = [], l = [], c = [], u = [];
    let h = e;
    const d = (t - e) / s, p = new R(), _ = new Le();
    for (let g = 0; g <= s; g++) {
      for (let m = 0; m <= n; m++) {
        const f = r + m / n * a;
        p.x = h * Math.cos(f), p.y = h * Math.sin(f), l.push(p.x, p.y, p.z), c.push(0, 0, 1), _.x = (p.x / t + 1) / 2, _.y = (p.y / t + 1) / 2, u.push(_.x, _.y);
      }
      h += d;
    }
    for (let g = 0; g < s; g++) {
      const m = g * (n + 1);
      for (let f = 0; f < n; f++) {
        const E = f + m, M = E, v = E + n + 1, N = E + n + 2, w = E + 1;
        o.push(M, v, w), o.push(v, N, w);
      }
    }
    this.setIndex(o), this.setAttribute("position", new Rt(l, 3)), this.setAttribute("normal", new Rt(c, 3)), this.setAttribute("uv", new Rt(u, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new zo(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class Os extends Ct {
  constructor(e = 1, t = 32, n = 16, s = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: s,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const u = [], h = new R(), d = new R(), p = [], _ = [], g = [], m = [];
    for (let f = 0; f <= n; f++) {
      const E = [], M = f / n;
      let v = 0;
      f === 0 && a === 0 ? v = 0.5 / t : f === n && l === Math.PI && (v = -0.5 / t);
      for (let N = 0; N <= t; N++) {
        const w = N / t;
        h.x = -e * Math.cos(s + w * r) * Math.sin(a + M * o), h.y = e * Math.cos(a + M * o), h.z = e * Math.sin(s + w * r) * Math.sin(a + M * o), _.push(h.x, h.y, h.z), d.copy(h).normalize(), g.push(d.x, d.y, d.z), m.push(w + v, 1 - M), E.push(c++);
      }
      u.push(E);
    }
    for (let f = 0; f < n; f++)
      for (let E = 0; E < t; E++) {
        const M = u[f][E + 1], v = u[f][E], N = u[f + 1][E], w = u[f + 1][E + 1];
        (f !== 0 || a > 0) && p.push(M, v, w), (f !== n - 1 || l < Math.PI) && p.push(v, N, w);
      }
    this.setIndex(p), this.setAttribute("position", new Rt(_, 3)), this.setAttribute("normal", new Rt(g, 3)), this.setAttribute("uv", new Rt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Os(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class jg extends Ct {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: e
    }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), s = new R(), r = new R();
      if (e.index !== null) {
        const a = e.attributes.position, o = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let c = 0, u = l.length; c < u; ++c) {
          const h = l[c], d = h.start, p = h.count;
          for (let _ = d, g = d + p; _ < g; _ += 3)
            for (let m = 0; m < 3; m++) {
              const f = o.getX(_ + m), E = o.getX(_ + (m + 1) % 3);
              s.fromBufferAttribute(a, f), r.fromBufferAttribute(a, E), ic(s, r, n) === !0 && (t.push(s.x, s.y, s.z), t.push(r.x, r.y, r.z));
            }
        }
      } else {
        const a = e.attributes.position;
        for (let o = 0, l = a.count / 3; o < l; o++)
          for (let c = 0; c < 3; c++) {
            const u = 3 * o + c, h = 3 * o + (c + 1) % 3;
            s.fromBufferAttribute(a, u), r.fromBufferAttribute(a, h), ic(s, r, n) === !0 && (t.push(s.x, s.y, s.z), t.push(r.x, r.y, r.z));
          }
      }
      this.setAttribute("position", new Rt(t, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
function ic(i, e, t) {
  const n = `${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`, s = `${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;
  return t.has(n) === !0 || t.has(s) === !0 ? !1 : (t.add(n), t.add(s), !0);
}
const sc = {
  enabled: !1,
  files: {},
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  remove: function(i) {
    delete this.files[i];
  },
  clear: function() {
    this.files = {};
  }
};
class Zg {
  constructor(e, t, n) {
    const s = this;
    let r = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      o++, r === !1 && s.onStart !== void 0 && s.onStart(u, a, o), r = !0;
    }, this.itemEnd = function(u) {
      a++, s.onProgress !== void 0 && s.onProgress(u, a, o), a === o && (r = !1, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(u) {
      s.onError !== void 0 && s.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, d = c.length; h < d; h += 2) {
        const p = c[h], _ = c[h + 1];
        if (p.global && (p.lastIndex = 0), p.test(u))
          return _;
      }
      return null;
    };
  }
}
const Kg = /* @__PURE__ */ new Zg();
class Ho {
  constructor(e) {
    this.manager = e !== void 0 ? e : Kg, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(s, r) {
      n.load(e, s, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Ho.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class Jg extends Ho {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = sc.get(e);
    if (a !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    const o = Ls("img");
    function l() {
      u(), sc.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(h) {
      u(), s && s(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class Qg extends Ho {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    const r = new Ut(), a = new Jg(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, s), r;
  }
}
class e_ extends Ct {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
class yo extends fd {
  constructor(e, t, n = 1) {
    super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  clone(e) {
    const t = super.clone(e);
    return t.meshPerAttribute = this.meshPerAttribute, t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
  }
}
class rc {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(At(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ac = /* @__PURE__ */ new R(), vr = /* @__PURE__ */ new R();
class t_ {
  constructor(e = new R(), t = new R()) {
    this.start = e, this.end = t;
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    ac.subVectors(e, this.start), vr.subVectors(this.end, this.start);
    const n = vr.dot(vr);
    let r = vr.dot(ac) / n;
    return t && (r = At(r, 0, 1)), r;
  }
  closestPointToPoint(e, t, n) {
    const s = this.closestPointToPointParameter(e, t);
    return this.delta(n).multiplyScalar(s).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class n_ extends Ei {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Co
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Co);
var nt;
(function(i) {
  i.assertEqual = (s) => {
  };
  function e(s) {
  }
  i.assertIs = e;
  function t(s) {
    throw new Error();
  }
  i.assertNever = t, i.arrayToEnum = (s) => {
    const r = {};
    for (const a of s)
      r[a] = a;
    return r;
  }, i.getValidEnumValues = (s) => {
    const r = i.objectKeys(s).filter((o) => typeof s[s[o]] != "number"), a = {};
    for (const o of r)
      a[o] = s[o];
    return i.objectValues(a);
  }, i.objectValues = (s) => i.objectKeys(s).map(function(r) {
    return s[r];
  }), i.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const r = [];
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && r.push(a);
    return r;
  }, i.find = (s, r) => {
    for (const a of s)
      if (r(a))
        return a;
  }, i.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function n(s, r = " | ") {
    return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(r);
  }
  i.joinValues = n, i.jsonStringifyReplacer = (s, r) => typeof r == "bigint" ? r.toString() : r;
})(nt || (nt = {}));
var oc;
(function(i) {
  i.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(oc || (oc = {}));
const be = nt.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), jn = (i) => {
  switch (typeof i) {
    case "undefined":
      return be.undefined;
    case "string":
      return be.string;
    case "number":
      return Number.isNaN(i) ? be.nan : be.number;
    case "boolean":
      return be.boolean;
    case "function":
      return be.function;
    case "bigint":
      return be.bigint;
    case "symbol":
      return be.symbol;
    case "object":
      return Array.isArray(i) ? be.array : i === null ? be.null : i.then && typeof i.then == "function" && i.catch && typeof i.catch == "function" ? be.promise : typeof Map < "u" && i instanceof Map ? be.map : typeof Set < "u" && i instanceof Set ? be.set : typeof Date < "u" && i instanceof Date ? be.date : be.object;
    default:
      return be.unknown;
  }
}, ne = nt.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class Bn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(r) {
      return r.message;
    }, n = { _errors: [] }, s = (r) => {
      for (const a of r.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(s);
        else if (a.code === "invalid_return_type")
          s(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          s(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(t(a));
        else {
          let o = n, l = 0;
          for (; l < a.path.length; ) {
            const c = a.path[l];
            l === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], l++;
          }
        }
    };
    return s(this), n;
  }
  static assert(e) {
    if (!(e instanceof Bn))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, nt.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, n = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const r = s.path[0];
        t[r] = t[r] || [], t[r].push(e(s));
      } else
        n.push(e(s));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
Bn.create = (i) => new Bn(i);
const So = (i, e) => {
  let t;
  switch (i.code) {
    case ne.invalid_type:
      i.received === be.undefined ? t = "Required" : t = `Expected ${i.expected}, received ${i.received}`;
      break;
    case ne.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(i.expected, nt.jsonStringifyReplacer)}`;
      break;
    case ne.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${nt.joinValues(i.keys, ", ")}`;
      break;
    case ne.invalid_union:
      t = "Invalid input";
      break;
    case ne.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${nt.joinValues(i.options)}`;
      break;
    case ne.invalid_enum_value:
      t = `Invalid enum value. Expected ${nt.joinValues(i.options)}, received '${i.received}'`;
      break;
    case ne.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case ne.invalid_return_type:
      t = "Invalid function return type";
      break;
    case ne.invalid_date:
      t = "Invalid date";
      break;
    case ne.invalid_string:
      typeof i.validation == "object" ? "includes" in i.validation ? (t = `Invalid input: must include "${i.validation.includes}"`, typeof i.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${i.validation.position}`)) : "startsWith" in i.validation ? t = `Invalid input: must start with "${i.validation.startsWith}"` : "endsWith" in i.validation ? t = `Invalid input: must end with "${i.validation.endsWith}"` : nt.assertNever(i.validation) : i.validation !== "regex" ? t = `Invalid ${i.validation}` : t = "Invalid";
      break;
    case ne.too_small:
      i.type === "array" ? t = `Array must contain ${i.exact ? "exactly" : i.inclusive ? "at least" : "more than"} ${i.minimum} element(s)` : i.type === "string" ? t = `String must contain ${i.exact ? "exactly" : i.inclusive ? "at least" : "over"} ${i.minimum} character(s)` : i.type === "number" ? t = `Number must be ${i.exact ? "exactly equal to " : i.inclusive ? "greater than or equal to " : "greater than "}${i.minimum}` : i.type === "bigint" ? t = `Number must be ${i.exact ? "exactly equal to " : i.inclusive ? "greater than or equal to " : "greater than "}${i.minimum}` : i.type === "date" ? t = `Date must be ${i.exact ? "exactly equal to " : i.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(i.minimum))}` : t = "Invalid input";
      break;
    case ne.too_big:
      i.type === "array" ? t = `Array must contain ${i.exact ? "exactly" : i.inclusive ? "at most" : "less than"} ${i.maximum} element(s)` : i.type === "string" ? t = `String must contain ${i.exact ? "exactly" : i.inclusive ? "at most" : "under"} ${i.maximum} character(s)` : i.type === "number" ? t = `Number must be ${i.exact ? "exactly" : i.inclusive ? "less than or equal to" : "less than"} ${i.maximum}` : i.type === "bigint" ? t = `BigInt must be ${i.exact ? "exactly" : i.inclusive ? "less than or equal to" : "less than"} ${i.maximum}` : i.type === "date" ? t = `Date must be ${i.exact ? "exactly" : i.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(i.maximum))}` : t = "Invalid input";
      break;
    case ne.custom:
      t = "Invalid input";
      break;
    case ne.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case ne.not_multiple_of:
      t = `Number must be a multiple of ${i.multipleOf}`;
      break;
    case ne.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, nt.assertNever(i);
  }
  return { message: t };
};
let i_ = So;
function s_() {
  return i_;
}
const r_ = (i) => {
  const { data: e, path: t, errorMaps: n, issueData: s } = i, r = [...t, ...s.path || []], a = {
    ...s,
    path: r
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: r,
      message: s.message
    };
  let o = "";
  const l = n.filter((c) => !!c).slice().reverse();
  for (const c of l)
    o = c(a, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: r,
    message: o
  };
};
function fe(i, e) {
  const t = s_(), n = r_({
    issueData: e,
    data: i.data,
    path: i.path,
    errorMaps: [
      i.common.contextualErrorMap,
      // contextual error map is first priority
      i.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === So ? void 0 : So
      // then global default map
    ].filter((s) => !!s)
  });
  i.common.issues.push(n);
}
class Yt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const n = [];
    for (const s of t) {
      if (s.status === "aborted")
        return Fe;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, t) {
    const n = [];
    for (const s of t) {
      const r = await s.key, a = await s.value;
      n.push({
        key: r,
        value: a
      });
    }
    return Yt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const s of t) {
      const { key: r, value: a } = s;
      if (r.status === "aborted" || a.status === "aborted")
        return Fe;
      r.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), r.value !== "__proto__" && (typeof a.value < "u" || s.alwaysSet) && (n[r.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const Fe = Object.freeze({
  status: "aborted"
}), As = (i) => ({ status: "dirty", value: i }), tn = (i) => ({ status: "valid", value: i }), lc = (i) => i.status === "aborted", cc = (i) => i.status === "dirty", as = (i) => i.status === "valid", Nr = (i) => typeof Promise < "u" && i instanceof Promise;
var Me;
(function(i) {
  i.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, i.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(Me || (Me = {}));
class ii {
  constructor(e, t, n, s) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const dc = (i, e) => {
  if (as(e))
    return { success: !0, data: e.value };
  if (!i.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new Bn(i.common.issues);
      return this._error = t, this._error;
    }
  };
};
function Xe(i) {
  if (!i)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: n, description: s } = i;
  if (e && (t || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (a, o) => {
    const { message: l } = i;
    return a.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: l ?? n ?? o.defaultError } : a.code !== "invalid_type" ? { message: o.defaultError } : { message: l ?? t ?? o.defaultError };
  }, description: s };
}
class et {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return jn(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: jn(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Yt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: jn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Nr(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const n = this.safeParse(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, t) {
    const n = {
      common: {
        issues: [],
        async: (t == null ? void 0 : t.async) ?? !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: jn(e)
    }, s = this._parseSync({ data: e, path: n.path, parent: n });
    return dc(n, s);
  }
  "~validate"(e) {
    var n, s;
    const t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: jn(e)
    };
    if (!this["~standard"].async)
      try {
        const r = this._parseSync({ data: e, path: [], parent: t });
        return as(r) ? {
          value: r.value
        } : {
          issues: t.common.issues
        };
      } catch (r) {
        (s = (n = r == null ? void 0 : r.message) == null ? void 0 : n.toLowerCase()) != null && s.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((r) => as(r) ? {
      value: r.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    const n = await this.safeParseAsync(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, t) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: jn(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), r = await (Nr(s) ? s : Promise.resolve(s));
    return dc(n, r);
  }
  refine(e, t) {
    const n = (s) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(s) : t;
    return this._refinement((s, r) => {
      const a = e(s), o = () => r.addIssue({
        code: ne.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof t == "function" ? t(n, s) : t), !1));
  }
  _refinement(e) {
    return new cs({
      schema: this,
      typeName: ke.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (t) => this["~validate"](t)
    };
  }
  optional() {
    return ti.create(this, this._def);
  }
  nullable() {
    return ds.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return bn.create(this);
  }
  promise() {
    return Br.create(this, this._def);
  }
  or(e) {
    return Fr.create([this, e], this._def);
  }
  and(e) {
    return kr.create(this, e, this._def);
  }
  transform(e) {
    return new cs({
      ...Xe(this._def),
      schema: this,
      typeName: ke.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Eo({
      ...Xe(this._def),
      innerType: this,
      defaultValue: t,
      typeName: ke.ZodDefault
    });
  }
  brand() {
    return new R_({
      typeName: ke.ZodBranded,
      type: this,
      ...Xe(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new To({
      ...Xe(this._def),
      innerType: this,
      catchValue: t,
      typeName: ke.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Vo.create(this, e);
  }
  readonly() {
    return wo.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const a_ = /^c[^\s-]{8,}$/i, o_ = /^[0-9a-z]+$/, l_ = /^[0-9A-HJKMNP-TV-Z]{26}$/i, c_ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, d_ = /^[a-z0-9_-]{21}$/i, u_ = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, h_ = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, f_ = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, p_ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let wa;
const m_ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, g_ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, __ = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, v_ = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, x_ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, y_ = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, _d = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", S_ = new RegExp(`^${_d}$`);
function vd(i) {
  let e = "[0-5]\\d";
  i.precision ? e = `${e}\\.\\d{${i.precision}}` : i.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = i.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function b_(i) {
  return new RegExp(`^${vd(i)}$`);
}
function M_(i) {
  let e = `${_d}T${vd(i)}`;
  const t = [];
  return t.push(i.local ? "Z?" : "Z"), i.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function E_(i, e) {
  return !!((e === "v4" || !e) && m_.test(i) || (e === "v6" || !e) && __.test(i));
}
function T_(i, e) {
  if (!u_.test(i))
    return !1;
  try {
    const [t] = i.split(".");
    if (!t)
      return !1;
    const n = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), s = JSON.parse(atob(n));
    return !(typeof s != "object" || s === null || "typ" in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg || e && s.alg !== e);
  } catch {
    return !1;
  }
}
function w_(i, e) {
  return !!((e === "v4" || !e) && g_.test(i) || (e === "v6" || !e) && v_.test(i));
}
class Jn extends et {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== be.string) {
      const r = this._getOrReturnCtx(e);
      return fe(r, {
        code: ne.invalid_type,
        expected: be.string,
        received: r.parsedType
      }), Fe;
    }
    const n = new Yt();
    let s;
    for (const r of this._def.checks)
      if (r.kind === "min")
        e.data.length < r.value && (s = this._getOrReturnCtx(e, s), fe(s, {
          code: ne.too_small,
          minimum: r.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: r.message
        }), n.dirty());
      else if (r.kind === "max")
        e.data.length > r.value && (s = this._getOrReturnCtx(e, s), fe(s, {
          code: ne.too_big,
          maximum: r.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: r.message
        }), n.dirty());
      else if (r.kind === "length") {
        const a = e.data.length > r.value, o = e.data.length < r.value;
        (a || o) && (s = this._getOrReturnCtx(e, s), a ? fe(s, {
          code: ne.too_big,
          maximum: r.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: r.message
        }) : o && fe(s, {
          code: ne.too_small,
          minimum: r.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: r.message
        }), n.dirty());
      } else if (r.kind === "email")
        f_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
          validation: "email",
          code: ne.invalid_string,
          message: r.message
        }), n.dirty());
      else if (r.kind === "emoji")
        wa || (wa = new RegExp(p_, "u")), wa.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
          validation: "emoji",
          code: ne.invalid_string,
          message: r.message
        }), n.dirty());
      else if (r.kind === "uuid")
        c_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
          validation: "uuid",
          code: ne.invalid_string,
          message: r.message
        }), n.dirty());
      else if (r.kind === "nanoid")
        d_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
          validation: "nanoid",
          code: ne.invalid_string,
          message: r.message
        }), n.dirty());
      else if (r.kind === "cuid")
        a_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
          validation: "cuid",
          code: ne.invalid_string,
          message: r.message
        }), n.dirty());
      else if (r.kind === "cuid2")
        o_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
          validation: "cuid2",
          code: ne.invalid_string,
          message: r.message
        }), n.dirty());
      else if (r.kind === "ulid")
        l_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
          validation: "ulid",
          code: ne.invalid_string,
          message: r.message
        }), n.dirty());
      else if (r.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), fe(s, {
            validation: "url",
            code: ne.invalid_string,
            message: r.message
          }), n.dirty();
        }
      else r.kind === "regex" ? (r.regex.lastIndex = 0, r.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
        validation: "regex",
        code: ne.invalid_string,
        message: r.message
      }), n.dirty())) : r.kind === "trim" ? e.data = e.data.trim() : r.kind === "includes" ? e.data.includes(r.value, r.position) || (s = this._getOrReturnCtx(e, s), fe(s, {
        code: ne.invalid_string,
        validation: { includes: r.value, position: r.position },
        message: r.message
      }), n.dirty()) : r.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : r.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : r.kind === "startsWith" ? e.data.startsWith(r.value) || (s = this._getOrReturnCtx(e, s), fe(s, {
        code: ne.invalid_string,
        validation: { startsWith: r.value },
        message: r.message
      }), n.dirty()) : r.kind === "endsWith" ? e.data.endsWith(r.value) || (s = this._getOrReturnCtx(e, s), fe(s, {
        code: ne.invalid_string,
        validation: { endsWith: r.value },
        message: r.message
      }), n.dirty()) : r.kind === "datetime" ? M_(r).test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
        code: ne.invalid_string,
        validation: "datetime",
        message: r.message
      }), n.dirty()) : r.kind === "date" ? S_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
        code: ne.invalid_string,
        validation: "date",
        message: r.message
      }), n.dirty()) : r.kind === "time" ? b_(r).test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
        code: ne.invalid_string,
        validation: "time",
        message: r.message
      }), n.dirty()) : r.kind === "duration" ? h_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
        validation: "duration",
        code: ne.invalid_string,
        message: r.message
      }), n.dirty()) : r.kind === "ip" ? E_(e.data, r.version) || (s = this._getOrReturnCtx(e, s), fe(s, {
        validation: "ip",
        code: ne.invalid_string,
        message: r.message
      }), n.dirty()) : r.kind === "jwt" ? T_(e.data, r.alg) || (s = this._getOrReturnCtx(e, s), fe(s, {
        validation: "jwt",
        code: ne.invalid_string,
        message: r.message
      }), n.dirty()) : r.kind === "cidr" ? w_(e.data, r.version) || (s = this._getOrReturnCtx(e, s), fe(s, {
        validation: "cidr",
        code: ne.invalid_string,
        message: r.message
      }), n.dirty()) : r.kind === "base64" ? x_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
        validation: "base64",
        code: ne.invalid_string,
        message: r.message
      }), n.dirty()) : r.kind === "base64url" ? y_.test(e.data) || (s = this._getOrReturnCtx(e, s), fe(s, {
        validation: "base64url",
        code: ne.invalid_string,
        message: r.message
      }), n.dirty()) : nt.assertNever(r);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((s) => e.test(s), {
      validation: t,
      code: ne.invalid_string,
      ...Me.errToObj(n)
    });
  }
  _addCheck(e) {
    return new Jn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...Me.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...Me.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...Me.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...Me.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...Me.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...Me.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...Me.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...Me.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...Me.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...Me.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...Me.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...Me.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...Me.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (e == null ? void 0 : e.offset) ?? !1,
      local: (e == null ? void 0 : e.local) ?? !1,
      ...Me.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...Me.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...Me.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...Me.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...Me.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...Me.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...Me.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...Me.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...Me.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...Me.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, Me.errToObj(e));
  }
  trim() {
    return new Jn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Jn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Jn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Jn.create = (i) => new Jn({
  checks: [],
  typeName: ke.ZodString,
  coerce: (i == null ? void 0 : i.coerce) ?? !1,
  ...Xe(i)
});
function A_(i, e) {
  const t = (i.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = t > n ? t : n, r = Number.parseInt(i.toFixed(s).replace(".", "")), a = Number.parseInt(e.toFixed(s).replace(".", ""));
  return r % a / 10 ** s;
}
class os extends et {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== be.number) {
      const r = this._getOrReturnCtx(e);
      return fe(r, {
        code: ne.invalid_type,
        expected: be.number,
        received: r.parsedType
      }), Fe;
    }
    let n;
    const s = new Yt();
    for (const r of this._def.checks)
      r.kind === "int" ? nt.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), fe(n, {
        code: ne.invalid_type,
        expected: "integer",
        received: "float",
        message: r.message
      }), s.dirty()) : r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (n = this._getOrReturnCtx(e, n), fe(n, {
        code: ne.too_small,
        minimum: r.value,
        type: "number",
        inclusive: r.inclusive,
        exact: !1,
        message: r.message
      }), s.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (n = this._getOrReturnCtx(e, n), fe(n, {
        code: ne.too_big,
        maximum: r.value,
        type: "number",
        inclusive: r.inclusive,
        exact: !1,
        message: r.message
      }), s.dirty()) : r.kind === "multipleOf" ? A_(e.data, r.value) !== 0 && (n = this._getOrReturnCtx(e, n), fe(n, {
        code: ne.not_multiple_of,
        multipleOf: r.value,
        message: r.message
      }), s.dirty()) : r.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), fe(n, {
        code: ne.not_finite,
        message: r.message
      }), s.dirty()) : nt.assertNever(r);
    return { status: s.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, Me.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, Me.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, Me.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, Me.toString(t));
  }
  setLimit(e, t, n, s) {
    return new os({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: Me.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new os({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: Me.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Me.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Me.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Me.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Me.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Me.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: Me.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Me.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Me.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && nt.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
os.create = (i) => new os({
  checks: [],
  typeName: ke.ZodNumber,
  coerce: (i == null ? void 0 : i.coerce) || !1,
  ...Xe(i)
});
class Fs extends et {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== be.bigint)
      return this._getInvalidInput(e);
    let n;
    const s = new Yt();
    for (const r of this._def.checks)
      r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (n = this._getOrReturnCtx(e, n), fe(n, {
        code: ne.too_small,
        type: "bigint",
        minimum: r.value,
        inclusive: r.inclusive,
        message: r.message
      }), s.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (n = this._getOrReturnCtx(e, n), fe(n, {
        code: ne.too_big,
        type: "bigint",
        maximum: r.value,
        inclusive: r.inclusive,
        message: r.message
      }), s.dirty()) : r.kind === "multipleOf" ? e.data % r.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), fe(n, {
        code: ne.not_multiple_of,
        multipleOf: r.value,
        message: r.message
      }), s.dirty()) : nt.assertNever(r);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return fe(t, {
      code: ne.invalid_type,
      expected: be.bigint,
      received: t.parsedType
    }), Fe;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, Me.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, Me.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, Me.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, Me.toString(t));
  }
  setLimit(e, t, n, s) {
    return new Fs({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: Me.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Fs({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Me.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Me.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Me.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Me.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Me.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Fs.create = (i) => new Fs({
  checks: [],
  typeName: ke.ZodBigInt,
  coerce: (i == null ? void 0 : i.coerce) ?? !1,
  ...Xe(i)
});
class bo extends et {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== be.boolean) {
      const n = this._getOrReturnCtx(e);
      return fe(n, {
        code: ne.invalid_type,
        expected: be.boolean,
        received: n.parsedType
      }), Fe;
    }
    return tn(e.data);
  }
}
bo.create = (i) => new bo({
  typeName: ke.ZodBoolean,
  coerce: (i == null ? void 0 : i.coerce) || !1,
  ...Xe(i)
});
class Or extends et {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== be.date) {
      const r = this._getOrReturnCtx(e);
      return fe(r, {
        code: ne.invalid_type,
        expected: be.date,
        received: r.parsedType
      }), Fe;
    }
    if (Number.isNaN(e.data.getTime())) {
      const r = this._getOrReturnCtx(e);
      return fe(r, {
        code: ne.invalid_date
      }), Fe;
    }
    const n = new Yt();
    let s;
    for (const r of this._def.checks)
      r.kind === "min" ? e.data.getTime() < r.value && (s = this._getOrReturnCtx(e, s), fe(s, {
        code: ne.too_small,
        message: r.message,
        inclusive: !0,
        exact: !1,
        minimum: r.value,
        type: "date"
      }), n.dirty()) : r.kind === "max" ? e.data.getTime() > r.value && (s = this._getOrReturnCtx(e, s), fe(s, {
        code: ne.too_big,
        message: r.message,
        inclusive: !0,
        exact: !1,
        maximum: r.value,
        type: "date"
      }), n.dirty()) : nt.assertNever(r);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Or({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: Me.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: Me.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
Or.create = (i) => new Or({
  checks: [],
  coerce: (i == null ? void 0 : i.coerce) || !1,
  typeName: ke.ZodDate,
  ...Xe(i)
});
class uc extends et {
  _parse(e) {
    if (this._getType(e) !== be.symbol) {
      const n = this._getOrReturnCtx(e);
      return fe(n, {
        code: ne.invalid_type,
        expected: be.symbol,
        received: n.parsedType
      }), Fe;
    }
    return tn(e.data);
  }
}
uc.create = (i) => new uc({
  typeName: ke.ZodSymbol,
  ...Xe(i)
});
class hc extends et {
  _parse(e) {
    if (this._getType(e) !== be.undefined) {
      const n = this._getOrReturnCtx(e);
      return fe(n, {
        code: ne.invalid_type,
        expected: be.undefined,
        received: n.parsedType
      }), Fe;
    }
    return tn(e.data);
  }
}
hc.create = (i) => new hc({
  typeName: ke.ZodUndefined,
  ...Xe(i)
});
class fc extends et {
  _parse(e) {
    if (this._getType(e) !== be.null) {
      const n = this._getOrReturnCtx(e);
      return fe(n, {
        code: ne.invalid_type,
        expected: be.null,
        received: n.parsedType
      }), Fe;
    }
    return tn(e.data);
  }
}
fc.create = (i) => new fc({
  typeName: ke.ZodNull,
  ...Xe(i)
});
class pc extends et {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return tn(e.data);
  }
}
pc.create = (i) => new pc({
  typeName: ke.ZodAny,
  ...Xe(i)
});
class mc extends et {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return tn(e.data);
  }
}
mc.create = (i) => new mc({
  typeName: ke.ZodUnknown,
  ...Xe(i)
});
class si extends et {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return fe(t, {
      code: ne.invalid_type,
      expected: be.never,
      received: t.parsedType
    }), Fe;
  }
}
si.create = (i) => new si({
  typeName: ke.ZodNever,
  ...Xe(i)
});
class gc extends et {
  _parse(e) {
    if (this._getType(e) !== be.undefined) {
      const n = this._getOrReturnCtx(e);
      return fe(n, {
        code: ne.invalid_type,
        expected: be.void,
        received: n.parsedType
      }), Fe;
    }
    return tn(e.data);
  }
}
gc.create = (i) => new gc({
  typeName: ke.ZodVoid,
  ...Xe(i)
});
class bn extends et {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), s = this._def;
    if (t.parsedType !== be.array)
      return fe(t, {
        code: ne.invalid_type,
        expected: be.array,
        received: t.parsedType
      }), Fe;
    if (s.exactLength !== null) {
      const a = t.data.length > s.exactLength.value, o = t.data.length < s.exactLength.value;
      (a || o) && (fe(t, {
        code: a ? ne.too_big : ne.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && t.data.length < s.minLength.value && (fe(t, {
      code: ne.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && t.data.length > s.maxLength.value && (fe(t, {
      code: ne.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((a, o) => s.type._parseAsync(new ii(t, a, t.path, o)))).then((a) => Yt.mergeArray(n, a));
    const r = [...t.data].map((a, o) => s.type._parseSync(new ii(t, a, t.path, o)));
    return Yt.mergeArray(n, r);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new bn({
      ...this._def,
      minLength: { value: e, message: Me.toString(t) }
    });
  }
  max(e, t) {
    return new bn({
      ...this._def,
      maxLength: { value: e, message: Me.toString(t) }
    });
  }
  length(e, t) {
    return new bn({
      ...this._def,
      exactLength: { value: e, message: Me.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
bn.create = (i, e) => new bn({
  type: i,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ke.ZodArray,
  ...Xe(e)
});
function $i(i) {
  if (i instanceof xt) {
    const e = {};
    for (const t in i.shape) {
      const n = i.shape[t];
      e[t] = ti.create($i(n));
    }
    return new xt({
      ...i._def,
      shape: () => e
    });
  } else return i instanceof bn ? new bn({
    ...i._def,
    type: $i(i.element)
  }) : i instanceof ti ? ti.create($i(i.unwrap())) : i instanceof ds ? ds.create($i(i.unwrap())) : i instanceof bi ? bi.create(i.items.map((e) => $i(e))) : i;
}
class xt extends et {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = nt.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== be.object) {
      const c = this._getOrReturnCtx(e);
      return fe(c, {
        code: ne.invalid_type,
        expected: be.object,
        received: c.parsedType
      }), Fe;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: r, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof si && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        a.includes(c) || o.push(c);
    const l = [];
    for (const c of a) {
      const u = r[c], h = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new ii(s, h, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof si) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of o)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (c === "strict")
        o.length > 0 && (fe(s, {
          code: ne.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of o) {
        const h = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new ii(s, h, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const h = await u.key, d = await u.value;
        c.push({
          key: h,
          value: d,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Yt.mergeObjectSync(n, c)) : Yt.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return Me.errToObj, new xt({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          var r, a;
          const s = ((a = (r = this._def).errorMap) == null ? void 0 : a.call(r, t, n).message) ?? n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: Me.errToObj(e).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new xt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new xt({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new xt({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new xt({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: ke.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new xt({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const n of nt.objectKeys(e))
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    return new xt({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const n of nt.objectKeys(this.shape))
      e[n] || (t[n] = this.shape[n]);
    return new xt({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return $i(this);
  }
  partial(e) {
    const t = {};
    for (const n of nt.objectKeys(this.shape)) {
      const s = this.shape[n];
      e && !e[n] ? t[n] = s : t[n] = s.optional();
    }
    return new xt({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const n of nt.objectKeys(this.shape))
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let r = this.shape[n];
        for (; r instanceof ti; )
          r = r._def.innerType;
        t[n] = r;
      }
    return new xt({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return xd(nt.objectKeys(this.shape));
  }
}
xt.create = (i, e) => new xt({
  shape: () => i,
  unknownKeys: "strip",
  catchall: si.create(),
  typeName: ke.ZodObject,
  ...Xe(e)
});
xt.strictCreate = (i, e) => new xt({
  shape: () => i,
  unknownKeys: "strict",
  catchall: si.create(),
  typeName: ke.ZodObject,
  ...Xe(e)
});
xt.lazycreate = (i, e) => new xt({
  shape: i,
  unknownKeys: "strip",
  catchall: si.create(),
  typeName: ke.ZodObject,
  ...Xe(e)
});
class Fr extends et {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function s(r) {
      for (const o of r)
        if (o.result.status === "valid")
          return o.result;
      for (const o of r)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const a = r.map((o) => new Bn(o.ctx.common.issues));
      return fe(t, {
        code: ne.invalid_union,
        unionErrors: a
      }), Fe;
    }
    if (t.common.async)
      return Promise.all(n.map(async (r) => {
        const a = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await r._parseAsync({
            data: t.data,
            path: t.path,
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    {
      let r;
      const a = [];
      for (const l of n) {
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !r && (r = { result: u, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (r)
        return t.common.issues.push(...r.ctx.common.issues), r.result;
      const o = a.map((l) => new Bn(l));
      return fe(t, {
        code: ne.invalid_union,
        unionErrors: o
      }), Fe;
    }
  }
  get options() {
    return this._def.options;
  }
}
Fr.create = (i, e) => new Fr({
  options: i,
  typeName: ke.ZodUnion,
  ...Xe(e)
});
function Mo(i, e) {
  const t = jn(i), n = jn(e);
  if (i === e)
    return { valid: !0, data: i };
  if (t === be.object && n === be.object) {
    const s = nt.objectKeys(e), r = nt.objectKeys(i).filter((o) => s.indexOf(o) !== -1), a = { ...i, ...e };
    for (const o of r) {
      const l = Mo(i[o], e[o]);
      if (!l.valid)
        return { valid: !1 };
      a[o] = l.data;
    }
    return { valid: !0, data: a };
  } else if (t === be.array && n === be.array) {
    if (i.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let r = 0; r < i.length; r++) {
      const a = i[r], o = e[r], l = Mo(a, o);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return t === be.date && n === be.date && +i == +e ? { valid: !0, data: i } : { valid: !1 };
}
class kr extends et {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), s = (r, a) => {
      if (lc(r) || lc(a))
        return Fe;
      const o = Mo(r.value, a.value);
      return o.valid ? ((cc(r) || cc(a)) && t.dirty(), { status: t.value, value: o.data }) : (fe(n, {
        code: ne.invalid_intersection_types
      }), Fe);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([r, a]) => s(r, a)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
kr.create = (i, e, t) => new kr({
  left: i,
  right: e,
  typeName: ke.ZodIntersection,
  ...Xe(t)
});
class bi extends et {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== be.array)
      return fe(n, {
        code: ne.invalid_type,
        expected: be.array,
        received: n.parsedType
      }), Fe;
    if (n.data.length < this._def.items.length)
      return fe(n, {
        code: ne.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Fe;
    !this._def.rest && n.data.length > this._def.items.length && (fe(n, {
      code: ne.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const r = [...n.data].map((a, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new ii(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(r).then((a) => Yt.mergeArray(t, a)) : Yt.mergeArray(t, r);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new bi({
      ...this._def,
      rest: e
    });
  }
}
bi.create = (i, e) => {
  if (!Array.isArray(i))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new bi({
    items: i,
    typeName: ke.ZodTuple,
    rest: null,
    ...Xe(e)
  });
};
class _c extends et {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== be.map)
      return fe(n, {
        code: ne.invalid_type,
        expected: be.map,
        received: n.parsedType
      }), Fe;
    const s = this._def.keyType, r = this._def.valueType, a = [...n.data.entries()].map(([o, l], c) => ({
      key: s._parse(new ii(n, o, n.path, [c, "key"])),
      value: r._parse(new ii(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return Fe;
          (c.status === "dirty" || u.status === "dirty") && t.dirty(), o.set(c.value, u.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return Fe;
        (c.status === "dirty" || u.status === "dirty") && t.dirty(), o.set(c.value, u.value);
      }
      return { status: t.value, value: o };
    }
  }
}
_c.create = (i, e, t) => new _c({
  valueType: e,
  keyType: i,
  typeName: ke.ZodMap,
  ...Xe(t)
});
class ks extends et {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== be.set)
      return fe(n, {
        code: ne.invalid_type,
        expected: be.set,
        received: n.parsedType
      }), Fe;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (fe(n, {
      code: ne.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), t.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (fe(n, {
      code: ne.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), t.dirty());
    const r = this._def.valueType;
    function a(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return Fe;
        u.status === "dirty" && t.dirty(), c.add(u.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...n.data.values()].map((l, c) => r._parse(new ii(n, l, n.path, c)));
    return n.common.async ? Promise.all(o).then((l) => a(l)) : a(o);
  }
  min(e, t) {
    return new ks({
      ...this._def,
      minSize: { value: e, message: Me.toString(t) }
    });
  }
  max(e, t) {
    return new ks({
      ...this._def,
      maxSize: { value: e, message: Me.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ks.create = (i, e) => new ks({
  valueType: i,
  minSize: null,
  maxSize: null,
  typeName: ke.ZodSet,
  ...Xe(e)
});
class vc extends et {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
vc.create = (i, e) => new vc({
  getter: i,
  typeName: ke.ZodLazy,
  ...Xe(e)
});
class xc extends et {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return fe(t, {
        received: t.data,
        code: ne.invalid_literal,
        expected: this._def.value
      }), Fe;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
xc.create = (i, e) => new xc({
  value: i,
  typeName: ke.ZodLiteral,
  ...Xe(e)
});
function xd(i, e) {
  return new ls({
    values: i,
    typeName: ke.ZodEnum,
    ...Xe(e)
  });
}
class ls extends et {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return fe(t, {
        expected: nt.joinValues(n),
        received: t.parsedType,
        code: ne.invalid_type
      }), Fe;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return fe(t, {
        received: t.data,
        code: ne.invalid_enum_value,
        options: n
      }), Fe;
    }
    return tn(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return ls.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return ls.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
ls.create = xd;
class yc extends et {
  _parse(e) {
    const t = nt.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== be.string && n.parsedType !== be.number) {
      const s = nt.objectValues(t);
      return fe(n, {
        expected: nt.joinValues(s),
        received: n.parsedType,
        code: ne.invalid_type
      }), Fe;
    }
    if (this._cache || (this._cache = new Set(nt.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const s = nt.objectValues(t);
      return fe(n, {
        received: n.data,
        code: ne.invalid_enum_value,
        options: s
      }), Fe;
    }
    return tn(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
yc.create = (i, e) => new yc({
  values: i,
  typeName: ke.ZodNativeEnum,
  ...Xe(e)
});
class Br extends et {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== be.promise && t.common.async === !1)
      return fe(t, {
        code: ne.invalid_type,
        expected: be.promise,
        received: t.parsedType
      }), Fe;
    const n = t.parsedType === be.promise ? t.data : Promise.resolve(t.data);
    return tn(n.then((s) => this._def.type.parseAsync(s, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Br.create = (i, e) => new Br({
  type: i,
  typeName: ke.ZodPromise,
  ...Xe(e)
});
class cs extends et {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ke.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), s = this._def.effect || null, r = {
      addIssue: (a) => {
        fe(n, a), a.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (r.addIssue = r.addIssue.bind(r), s.type === "preprocess") {
      const a = s.transform(n.data, r);
      if (n.common.async)
        return Promise.resolve(a).then(async (o) => {
          if (t.value === "aborted")
            return Fe;
          const l = await this._def.schema._parseAsync({
            data: o,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? Fe : l.status === "dirty" || t.value === "dirty" ? As(l.value) : l;
        });
      {
        if (t.value === "aborted")
          return Fe;
        const o = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? Fe : o.status === "dirty" || t.value === "dirty" ? As(o.value) : o;
      }
    }
    if (s.type === "refinement") {
      const a = (o) => {
        const l = s.refinement(o, r);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? Fe : (o.status === "dirty" && t.dirty(), a(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? Fe : (o.status === "dirty" && t.dirty(), a(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!as(a))
          return Fe;
        const o = s.transform(a.value, r);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => as(a) ? Promise.resolve(s.transform(a.value, r)).then((o) => ({
          status: t.value,
          value: o
        })) : Fe);
    nt.assertNever(s);
  }
}
cs.create = (i, e, t) => new cs({
  schema: i,
  typeName: ke.ZodEffects,
  effect: e,
  ...Xe(t)
});
cs.createWithPreprocess = (i, e, t) => new cs({
  schema: e,
  effect: { type: "preprocess", transform: i },
  typeName: ke.ZodEffects,
  ...Xe(t)
});
class ti extends et {
  _parse(e) {
    return this._getType(e) === be.undefined ? tn(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ti.create = (i, e) => new ti({
  innerType: i,
  typeName: ke.ZodOptional,
  ...Xe(e)
});
class ds extends et {
  _parse(e) {
    return this._getType(e) === be.null ? tn(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ds.create = (i, e) => new ds({
  innerType: i,
  typeName: ke.ZodNullable,
  ...Xe(e)
});
class Eo extends et {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === be.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Eo.create = (i, e) => new Eo({
  innerType: i,
  typeName: ke.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Xe(e)
});
class To extends et {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Nr(s) ? s.then((r) => ({
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Bn(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Bn(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
To.create = (i, e) => new To({
  innerType: i,
  typeName: ke.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Xe(e)
});
class Sc extends et {
  _parse(e) {
    if (this._getType(e) !== be.nan) {
      const n = this._getOrReturnCtx(e);
      return fe(n, {
        code: ne.invalid_type,
        expected: be.nan,
        received: n.parsedType
      }), Fe;
    }
    return { status: "valid", value: e.data };
  }
}
Sc.create = (i) => new Sc({
  typeName: ke.ZodNaN,
  ...Xe(i)
});
class R_ extends et {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = t.data;
    return this._def.type._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Vo extends et {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const r = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return r.status === "aborted" ? Fe : r.status === "dirty" ? (t.dirty(), As(r.value)) : this._def.out._parseAsync({
          data: r.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? Fe : s.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, t) {
    return new Vo({
      in: e,
      out: t,
      typeName: ke.ZodPipeline
    });
  }
}
class wo extends et {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (s) => (as(s) && (s.value = Object.freeze(s.value)), s);
    return Nr(t) ? t.then((s) => n(s)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
wo.create = (i, e) => new wo({
  innerType: i,
  typeName: ke.ZodReadonly,
  ...Xe(e)
});
var ke;
(function(i) {
  i.ZodString = "ZodString", i.ZodNumber = "ZodNumber", i.ZodNaN = "ZodNaN", i.ZodBigInt = "ZodBigInt", i.ZodBoolean = "ZodBoolean", i.ZodDate = "ZodDate", i.ZodSymbol = "ZodSymbol", i.ZodUndefined = "ZodUndefined", i.ZodNull = "ZodNull", i.ZodAny = "ZodAny", i.ZodUnknown = "ZodUnknown", i.ZodNever = "ZodNever", i.ZodVoid = "ZodVoid", i.ZodArray = "ZodArray", i.ZodObject = "ZodObject", i.ZodUnion = "ZodUnion", i.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", i.ZodIntersection = "ZodIntersection", i.ZodTuple = "ZodTuple", i.ZodRecord = "ZodRecord", i.ZodMap = "ZodMap", i.ZodSet = "ZodSet", i.ZodFunction = "ZodFunction", i.ZodLazy = "ZodLazy", i.ZodLiteral = "ZodLiteral", i.ZodEnum = "ZodEnum", i.ZodEffects = "ZodEffects", i.ZodNativeEnum = "ZodNativeEnum", i.ZodOptional = "ZodOptional", i.ZodNullable = "ZodNullable", i.ZodDefault = "ZodDefault", i.ZodCatch = "ZodCatch", i.ZodPromise = "ZodPromise", i.ZodBranded = "ZodBranded", i.ZodPipeline = "ZodPipeline", i.ZodReadonly = "ZodReadonly";
})(ke || (ke = {}));
const vt = Jn.create, je = os.create, Kt = bo.create;
si.create;
const Pn = bn.create, ln = xt.create;
Fr.create;
kr.create;
bi.create;
const bc = ls.create;
Br.create;
ti.create;
ds.create;
ln({
  sim: ln({
    windowHours: je().positive(),
    stepSeconds: je().positive(),
    epochUTC: vt(),
    speedPresets: Pn(je())
  }),
  links: ln({
    ground: ln({
      elevationMaskDeg: je(),
      maxRangeKm: je()
    }),
    customerToRelay: ln({
      maxRangeKm: je(),
      antennaHalfAngleDeg: je(),
      steerable: Kt(),
      slewRateDegPerSec: je(),
      handoverTimeSec: je()
    }),
    relayToRelay: ln({
      maxRangeKm: je(),
      antennaHalfAngleDeg: je(),
      steerable: Kt(),
      slewRateDegPerSec: je(),
      handoverTimeSec: je()
    }),
    earthGrazeMarginKm: je(),
    allowRelayToRelay: Kt(),
    maxHops: je().int().positive(),
    capacityModelEnabled: Kt().optional(),
    maxSimultaneousCustomerLinksPerRelay: je().optional(),
    relayDataRateMbps: je().optional(),
    eclipseLimitsRelay: Kt().optional()
  }),
  relayAltitudeKm: je().positive(),
  raanOffsetDeg: je().optional(),
  phaseOffsetDeg: je().optional(),
  customerLtanOffsetMinutes: je().optional(),
  relayPlanes: Pn(ln({
    id: vt(),
    name: vt(),
    enabled: Kt(),
    altitudeKm: je().optional(),
    sunSynchronous: Kt(),
    inclinationDeg: je().optional(),
    raanDeg: je().optional(),
    ltanHours: je().optional(),
    satsInPlane: je().int().positive(),
    phasingDeg: je(),
    color: vt()
  })),
  groundStations: Pn(ln({
    id: vt(),
    name: vt(),
    latDeg: je(),
    lonDeg: je(),
    minElevationDeg: je(),
    enabled: Kt(),
    isIndiaStation: Kt().optional(),
    isAlternateSite: Kt().optional(),
    country: vt().optional(),
    network: vt().optional()
  })),
  customerPresets: Pn(ln({
    id: vt(),
    label: vt(),
    satCount: je().int().positive(),
    altitudeKm: je().positive(),
    inclinationDeg: je(),
    planes: je().int().positive(),
    raanSpreadDeg: je(),
    sunSynchronous: Kt().optional(),
    tleList: Pn(vt()).optional()
  })),
  activeCustomerPresetId: vt(),
  rollout: Pn(ln({
    id: vt(),
    label: vt(),
    enabledRelayPlaneIds: Pn(vt())
  })),
  activeRolloutStageId: vt(),
  scenarios: Pn(ln({
    id: vt(),
    label: vt(),
    stationFilter: bc(["bengaluru_only", "all"]),
    ringEnabled: Kt(),
    relayPlaneIds: Pn(vt()).optional()
  })),
  activeScenarioId: vt(),
  activeAltitudeScenario: bc(["600km_baseline", "800km_compact"])
});
const yd = {
  showPresets: !1,
  showRollout: !1,
  showCustomOrbit: !1,
  showABCompare: !1,
  showGeoDebugBtn: !1,
  showParamsBtn: !1
}, Go = 398600.4418, Ot = 6378.137, Cr = 108263e-8, C_ = 7292115146706979e-20, P_ = 360 / 365.2422 / 86400 * (Math.PI / 180);
function Mi(i, e, t = 1) {
  const n = i * Math.PI / 180, s = e * Math.PI / 180, r = t * Math.cos(n) * Math.cos(s), a = t * Math.cos(n) * Math.sin(s), o = t * Math.sin(n);
  return new R(r, o, -a);
}
function On(i) {
  const e = i.x / Ot, t = i.y / Ot, n = i.z / Ot;
  return new R(e, n, -t);
}
function hn(i) {
  const e = Ot + i, t = Math.sqrt(Go / (e * e * e)), n = 1.5 * Cr * (Ot / e) * (Ot / e) * t, s = -P_ / n;
  if (s < -1 || s > 1)
    throw new Error(`Invalid SSO altitude ${i} km`);
  return Math.acos(s) * 180 / Math.PI;
}
function D_(i, e = "2026-09-21T00:00:00Z") {
  const t = Hr(0, e);
  return ((Math.atan2(t.y, t.x) + (i - 12) * (Math.PI / 12)) * 180 / Math.PI % 360 + 360) % 360;
}
function zr(i) {
  const e = Ot + i;
  return 2 * Math.PI * Math.sqrt(e * e * e / Go);
}
function L_(i, e) {
  const t = e * Math.PI / 180, n = Ot / (Ot + i) * Math.cos(t), s = Math.asin(n);
  return (Math.PI / 2 - t - s) * 180 / Math.PI;
}
function I_(i, e) {
  const t = e * Math.PI / 180, n = Ot;
  return Math.sqrt(n * n * Math.sin(t) * Math.sin(t) + 2 * n * i + i * i) - n * Math.sin(t);
}
class Wo {
  propagate(e, t, n) {
    const s = e.altitudeKm, r = Ot + s;
    let a = e.inclinationDeg;
    e.sunSynchronous && (a = hn(s));
    const o = a * Math.PI / 180, l = Math.sqrt(Go / (r * r * r)), c = Ot / r * (Ot / r), u = Math.sin(o), h = Math.cos(o), d = l * (1 + 1.5 * Cr * c * (1 - 1.5 * u * u)), p = -1.5 * Cr * c * d * h, _ = 1.5 * Cr * c * d * (2 - 2.5 * u * u), g = d + _;
    let m = 0;
    e.raanDeg !== void 0 ? m = e.raanDeg * Math.PI / 180 : e.ltanHours !== void 0 && (m = D_(e.ltanHours) * Math.PI / 180);
    const f = 360 / e.satsInPlane, E = e.phasingDeg ?? 0, v = (t * f + E) * Math.PI / 180, N = m + p * n, w = v + g * n, A = Math.cos(w), P = Math.sin(w), b = Math.cos(N), y = Math.sin(N), C = r * (A * b - P * y * h), H = r * (A * y + P * b * h), O = r * (P * u), G = r * g * (-P * b - A * y * h), $ = r * g * (-P * y + A * b * h), B = r * g * (A * u);
    return { x: C, y: H, z: O, vx: G, vy: $, vz: B };
  }
}
function us(i, e = "2026-09-21T00:00:00Z") {
  const a = (280.46061837 + 360.98564736629 * (new Date(e).getTime() / 1e3 / 86400 + 24405875e-1 - 2451545)) % 360, l = ((a < 0 ? a + 360 : a) * (Math.PI / 180) + C_ * i) % (2 * Math.PI);
  return l < 0 ? l + 2 * Math.PI : l;
}
function ri(i, e) {
  const t = Math.cos(e), n = Math.sin(e);
  return {
    x: i.x * t + i.y * n,
    y: -i.x * n + i.y * t,
    z: i.z
  };
}
function Mc(i) {
  const e = Math.sqrt(i.x * i.x + i.y * i.y + i.z * i.z), t = Math.asin(i.z / e), n = Math.atan2(i.y, i.x);
  return {
    latDeg: t * 180 / Math.PI,
    lonDeg: n * 180 / Math.PI,
    altKm: e - Ot
  };
}
function U_(i, e, t = 0) {
  const n = i * Math.PI / 180, s = e * Math.PI / 180, r = Ot + t;
  return {
    x: r * Math.cos(n) * Math.cos(s),
    y: r * Math.cos(n) * Math.sin(s),
    z: r * Math.sin(n)
  };
}
function Hr(i, e = "2026-09-21T00:00:00Z") {
  const r = (new Date(e).getTime() / 1e3 + i) / 86400 + 24405875e-1 - 2451545, a = (280.46 + 0.9856474 * r) % 360, o = (357.528 + 0.9856003 * r) % 360 * (Math.PI / 180), c = (a + 1.915 * Math.sin(o) + 0.02 * Math.sin(2 * o)) * Math.PI / 180, h = (23.439 - 4e-7 * r) * Math.PI / 180, d = 1495978707e-1, p = d * Math.cos(c), _ = d * Math.sin(c) * Math.cos(h), g = d * Math.sin(c) * Math.sin(h);
  return { x: p, y: _, z: g, vx: 0, vy: 0, vz: 0 };
}
const N_ = [
  {
    id: "bengaluru",
    name: "Bengaluru",
    latDeg: 13.03,
    lonDeg: 77.52,
    minElevationDeg: 5,
    enabled: !0,
    isIndiaStation: !0,
    country: "India",
    network: "ISTRAC"
  },
  {
    id: "delhi",
    name: "Delhi",
    latDeg: 28.61,
    lonDeg: 77.21,
    minElevationDeg: 5,
    enabled: !0,
    isIndiaStation: !0,
    country: "India",
    network: "SAC"
  },
  {
    id: "port_blair",
    name: "Port Blair",
    latDeg: 11.62,
    lonDeg: 92.73,
    minElevationDeg: 5,
    enabled: !0,
    isIndiaStation: !0,
    country: "India",
    network: "ISTRAC"
  },
  {
    id: "brunei",
    name: "Brunei ground station",
    latDeg: 4.9,
    lonDeg: 114.94,
    minElevationDeg: 5,
    enabled: !0,
    country: "Brunei",
    network: "ISTRAC"
  },
  {
    id: "biak",
    name: "Biak",
    latDeg: -1.19,
    lonDeg: 136.08,
    minElevationDeg: 5,
    enabled: !0,
    country: "Indonesia",
    network: "ISTRAC"
  },
  {
    id: "mauritius",
    name: "Mauritius ground station",
    latDeg: -20.35,
    lonDeg: 57.55,
    minElevationDeg: 5,
    enabled: !0,
    country: "Mauritius",
    network: "ISTRAC"
  },
  {
    id: "bharati",
    name: "Bharati (AGEOS)",
    latDeg: -69.41,
    lonDeg: 76.19,
    minElevationDeg: 5,
    enabled: !0,
    country: "Antarctica",
    network: "NRSC"
  }
], Sd = {
  sim: {
    windowHours: 24,
    stepSeconds: 30,
    epochUTC: "2026-09-21T00:00:00Z",
    speedPresets: [1, 60, 600, 3600]
  },
  links: {
    ground: {
      elevationMaskDeg: 5,
      maxRangeKm: 3e3
    },
    customerToRelay: {
      maxRangeKm: 2e3,
      antennaHalfAngleDeg: 60,
      steerable: !0,
      slewRateDegPerSec: 5,
      handoverTimeSec: 10
    },
    relayToRelay: {
      maxRangeKm: 6e3,
      backboneMaxRangeKm: 5e3,
      crossPlaneMaxRangeKm: 2e3,
      antennaHalfAngleDeg: 75,
      steerable: !0,
      slewRateDegPerSec: 5,
      handoverTimeSec: 10
    },
    earthGrazeMarginKm: 100,
    allowRelayToRelay: !0,
    maxHops: 20,
    capacityModelEnabled: !1,
    maxSimultaneousCustomerLinksPerRelay: 4,
    relayDataRateMbps: 1e3,
    eclipseLimitsRelay: !1
  },
  relayAltitudeKm: 800,
  // Default relay altitude per user directive
  raanOffsetDeg: 180,
  phaseOffsetDeg: 180,
  customerLtanOffsetMinutes: 45,
  relayPlanes: [
    {
      id: "p1",
      name: "OXG Ring (P1)",
      enabled: !0,
      altitudeKm: 800,
      sunSynchronous: !0,
      inclinationDeg: 98.6,
      // Derived SSO inclination at 800 km
      ltanHours: 10.5,
      satsInPlane: 14,
      phasingDeg: 25.7142857,
      color: "#B0BEC5"
    },
    {
      id: "p2",
      name: "P2 India Ring 1",
      enabled: !0,
      altitudeKm: 800,
      sunSynchronous: !1,
      inclinationDeg: 45,
      raanDeg: 0,
      satsInPlane: 14,
      phasingDeg: 0,
      color: "#B0BEC5"
    },
    {
      id: "p3",
      name: "P3 India Ring 2",
      enabled: !0,
      altitudeKm: 800,
      sunSynchronous: !1,
      inclinationDeg: 45,
      raanDeg: 180,
      satsInPlane: 14,
      phasingDeg: 180,
      color: "#B0BEC5"
    },
    {
      id: "p4",
      name: "OXG Ring 2 (P4 Dawn-Dusk)",
      enabled: !0,
      altitudeKm: 800,
      sunSynchronous: !0,
      inclinationDeg: hn(800),
      ltanHours: 6,
      satsInPlane: 14,
      phasingDeg: 0,
      color: "#B0BEC5"
    }
  ],
  groundStations: N_,
  customerPresets: [
    {
      id: "sso_optical",
      label: "Optical",
      satCount: 1,
      altitudeKm: 500,
      inclinationDeg: hn(500),
      planes: 1,
      raanSpreadDeg: 0,
      sunSynchronous: !0,
      ltanHours: 10
    },
    {
      id: "sar_iceye",
      label: "SAR",
      satCount: 1,
      altitudeKm: 500,
      inclinationDeg: hn(500),
      planes: 1,
      raanSpreadDeg: 0,
      sunSynchronous: !0,
      ltanHours: 6
    },
    {
      id: "sar_2am",
      label: "RF / SIGINT",
      satCount: 1,
      altitudeKm: 500,
      inclinationDeg: hn(500),
      planes: 1,
      raanSpreadDeg: 0,
      sunSynchronous: !0,
      ltanHours: 2
    },
    {
      id: "mid_inc_weather",
      label: "Weather",
      satCount: 1,
      altitudeKm: 500,
      inclinationDeg: 45,
      planes: 1,
      raanSpreadDeg: 0,
      sunSynchronous: !1
    }
  ],
  activeCustomerPresetId: "sso_optical",
  rollout: [
    {
      id: "ground_only",
      label: "Ground Only (No OXG)",
      enabledRelayPlaneIds: []
    },
    {
      id: "p1_only",
      label: "P1 Polar SSO Loop",
      enabledRelayPlaneIds: ["p1"]
    },
    {
      id: "p1_p2",
      label: "P1 + P2 (Polar + India Loop)",
      enabledRelayPlaneIds: ["p1", "p2"]
    },
    {
      id: "full_network",
      label: "P1 + P2 + P3 Full Network",
      enabledRelayPlaneIds: ["p1", "p2", "p3"]
    }
  ],
  activeRolloutStageId: "p1_only",
  scenarios: [
    {
      id: "bengaluru_only",
      label: "India only",
      stationFilter: "india_only",
      ringEnabled: !1,
      relayPlaneIds: []
    },
    {
      id: "all_ground",
      label: "India operated ground stations",
      stationFilter: "all",
      ringEnabled: !1,
      relayPlaneIds: []
    },
    {
      id: "ring_plus_ground",
      label: "OXG SSO Ring 1",
      stationFilter: "all",
      ringEnabled: !0,
      relayPlaneIds: ["p1"]
    },
    {
      id: "ring_2_sso",
      label: "OXG SSO Ring 2",
      stationFilter: "all",
      ringEnabled: !0,
      relayPlaneIds: ["p1", "p4"]
    },
    {
      id: "full_fleet",
      label: "OXG extended rings",
      stationFilter: "all",
      ringEnabled: !0,
      relayPlaneIds: ["p1", "p4", "p2", "p3"]
    },
    {
      id: "india_dual_ring",
      label: "India Dual-Ring (P2+P3)",
      stationFilter: "all",
      ringEnabled: !0,
      relayPlaneIds: ["p2", "p3"]
    }
  ],
  activeScenarioId: "bengaluru_only",
  activeAltitudeScenario: "800km_compact",
  orbitArc: {
    behindDeg: 40,
    aheadDeg: 15,
    color: "#FF1744",
    widthPx: 1.5,
    maxOpacity: 0.7
  },
  customerSat: {
    color: "#FF1744",
    sizePx: 6,
    glowSize: 1.5
  },
  relaySat: {
    color: "#B0BEC5",
    sizePx: 5,
    glowStrength: 1.2
  },
  relayLink: {
    color: "#B0BEC5",
    widthPx: 1.8,
    opacity: 0.6
  }
};
function O_(i) {
  const e = typeof window < "u" ? window.location.search : "", t = new URLSearchParams(e);
  return t.set("preset", i.activeCustomerPresetId), t.set("rollout", i.activeRolloutStageId), t.set("scenarioId", i.activeScenarioId), t.set("relayAlt", i.relayAltitudeKm.toString()), t.set("scenario", i.activeAltitudeScenario), i.raanOffsetDeg !== void 0 && t.set("raanOffset", i.raanOffsetDeg.toString()), i.phaseOffsetDeg !== void 0 && t.set("phaseOffset", i.phaseOffsetDeg.toString()), i.customerLtanOffsetMinutes !== void 0 && t.set("custLtanOffset", i.customerLtanOffsetMinutes.toString()), t.toString();
}
function F_(i, e) {
  const t = new URLSearchParams(e), n = JSON.parse(JSON.stringify(i)), s = t.get("preset");
  s && n.customerPresets.some((d) => d.id === s) && (n.activeCustomerPresetId = s);
  const r = t.get("rollout");
  r && n.rollout.some((d) => d.id === r) && (n.activeRolloutStageId = r);
  const a = t.get("scenarioId");
  a && n.scenarios.some((d) => d.id === a) && (n.activeScenarioId = a);
  const o = t.get("raanOffset");
  o && !isNaN(Number(o)) && (n.raanOffsetDeg = Number(o));
  const l = t.get("phaseOffset");
  l && !isNaN(Number(l)) && (n.phaseOffsetDeg = Number(l));
  const c = t.get("custLtanOffset");
  c && !isNaN(Number(c)) && (n.customerLtanOffsetMinutes = Number(c));
  const u = t.get("relayAlt");
  if (u && !isNaN(Number(u))) {
    const d = Number(u);
    n.relayAltitudeKm = d, n.relayPlanes.forEach((p) => {
      p.altitudeKm = d;
    });
  }
  const h = t.get("scenario");
  return (h === "600km_baseline" || h === "800km_compact") && (n.activeAltitudeScenario = h), n;
}
function Vr(i) {
  const e = i.relayPlanes.find((s) => s.id === "p2"), t = (e == null ? void 0 : e.raanDeg) ?? 0, n = (e == null ? void 0 : e.phasingDeg) ?? 0;
  return i.relayPlanes.map((s) => {
    const r = s.altitudeKm ?? i.relayAltitudeKm, a = s.sunSynchronous ? hn(r) : s.inclinationDeg ?? 98.6;
    let o = s.raanDeg, l = s.phasingDeg ?? 0;
    if (s.id === "p3") {
      const c = i.raanOffsetDeg ?? 180, u = i.phaseOffsetDeg ?? 180;
      o = (t + c) % 360, l = (n + u) % 360;
    }
    return {
      id: s.id,
      name: s.name,
      altitudeKm: r,
      inclinationDeg: a,
      sunSynchronous: s.sunSynchronous,
      raanDeg: o,
      ltanHours: s.ltanHours,
      satsInPlane: s.satsInPlane,
      phasingDeg: l,
      color: s.color
    };
  });
}
function k_(i, e) {
  const t = e.x - i.x, n = e.y - i.y, s = e.z - i.z;
  return Math.sqrt(t * t + n * n + s * s);
}
function B_(i, e) {
  const t = i * Math.PI / 180, n = e * Math.PI / 180;
  return {
    x: Math.cos(t) * Math.cos(n),
    y: Math.cos(t) * Math.sin(n),
    z: Math.sin(t)
  };
}
function z_(i, e) {
  const t = U_(e.latDeg, e.lonDeg, 0), n = B_(e.latDeg, e.lonDeg), s = i.x - t.x, r = i.y - t.y, a = i.z - t.z, o = Math.sqrt(s * s + r * r + a * a);
  if (o === 0)
    return { elevationDeg: 90, slantRangeKm: 0 };
  const l = (s * n.x + r * n.y + a * n.z) / o, c = Math.max(-1, Math.min(1, l));
  return { elevationDeg: Math.asin(c) * 180 / Math.PI, slantRangeKm: o };
}
function Qi(i, e, t, n) {
  if (!e.enabled) return !1;
  const { elevationDeg: s, slantRangeKm: r } = z_(i, e), a = n !== void 0 ? n : e.minElevationDeg;
  return s >= a && r <= t;
}
function H_(i, e, t = 100) {
  const n = Ot + t, s = e.x - i.x, r = e.y - i.y, a = e.z - i.z, o = s * s + r * r + a * a;
  if (o === 0) return !0;
  const l = -(i.x * s + i.y * r + i.z * a) / o, c = Math.max(0, Math.min(1, l)), u = i.x + c * s, h = i.y + c * r, d = i.z + c * a;
  return u * u + h * h + d * d >= n * n;
}
function Ao(i, e, t, n, s = 100, r = !0) {
  const a = k_(i, e);
  if (a > t || a === 0) return !1;
  if (!r) {
    const o = e.x - i.x, l = e.y - i.y, c = e.z - i.z, u = Math.sqrt(i.x * i.x + i.y * i.y + i.z * i.z), h = (i.x * o + i.y * l + i.z * c) / (u * a), d = Math.acos(Math.max(-1, Math.min(1, h))) * 180 / Math.PI;
    if (d > n && 180 - d > n)
      return !1;
  }
  return H_(i, e, s);
}
function V_(i, e, t, n) {
  const s = t.filter((d) => d.enabled), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = [];
  for (const d of i)
    for (const p of s)
      Qi(d.ecef, p, n.ground.maxRangeKm, n.ground.elevationMaskDeg) && (a.has(d.id) || a.set(d.id, {
        customerSatId: d.id,
        groundStationId: p.id,
        pathNodeIds: [d.id, p.id],
        hops: 1
      }));
  if (e.length === 0)
    return { withOXGPaths: a, groundOnlyPaths: a, activeLinkEdges: o };
  const l = /* @__PURE__ */ new Map();
  i.forEach((d) => l.set(d.id, { id: d.id, type: "customer", sat: d })), e.forEach((d) => l.set(d.id, { id: d.id, type: "relay", sat: d })), s.forEach((d) => l.set(d.id, { id: d.id, type: "ground", gs: d }));
  const c = /* @__PURE__ */ new Map();
  l.forEach((d, p) => c.set(p, []));
  const u = (d, p, _) => {
    c.get(d).push(p), c.get(p).push(d), o.push({ fromId: d, toId: p, distanceKm: _ });
  };
  for (const d of i)
    for (const p of s)
      Qi(d.ecef, p, n.ground.maxRangeKm, n.ground.elevationMaskDeg) && u(d.id, p.id, 0);
  for (const d of i)
    for (const p of e)
      Ao(
        d.eci,
        p.eci,
        n.customerToRelay.maxRangeKm,
        n.customerToRelay.antennaHalfAngleDeg,
        n.earthGrazeMarginKm,
        n.customerToRelay.steerable
      ) && u(d.id, p.id, 0);
  if (n.allowRelayToRelay)
    for (let d = 0; d < e.length; d++)
      for (let p = d + 1; p < e.length; p++) {
        const _ = e[d], g = e[p], m = _.planeId ?? _.id.split("-")[1], f = g.planeId ?? g.id.split("-")[1], M = m === f ? n.relayToRelay.backboneMaxRangeKm ?? 5e3 : n.relayToRelay.crossPlaneMaxRangeKm ?? 1500;
        Ao(
          _.eci,
          g.eci,
          M,
          n.relayToRelay.antennaHalfAngleDeg,
          n.earthGrazeMarginKm,
          n.relayToRelay.steerable
        ) && u(_.id, g.id, 0);
      }
  for (const d of e)
    for (const p of s)
      Qi(d.ecef, p, n.ground.maxRangeKm, n.ground.elevationMaskDeg) && u(d.id, p.id, 0);
  const h = new Set(s.map((d) => d.id));
  for (const d of i) {
    const p = [{ nodeId: d.id, path: [d.id] }], _ = /* @__PURE__ */ new Set([d.id]);
    let g = null;
    for (; p.length > 0; ) {
      const { nodeId: m, path: f } = p.shift(), E = f.length - 1;
      if (E > n.maxHops) continue;
      if (h.has(m) && E >= 1) {
        g = {
          customerSatId: d.id,
          groundStationId: m,
          pathNodeIds: f,
          hops: E
        };
        break;
      }
      const M = c.get(m) ?? [];
      for (const v of M)
        _.has(v) || (_.add(v), p.push({ nodeId: v, path: [...f, v] }));
    }
    g && r.set(d.id, g);
  }
  return { withOXGPaths: r, groundOnlyPaths: a, activeLinkEdges: o };
}
function Ec(i, e, t, n, s) {
  if (i.length === 0 || t === 0)
    return {
      inContactPercent: 0,
      averageSessionSec: 0,
      worstWaitSec: 0,
      averageWaitSec: 0,
      orbitStatesPropagated: 0,
      linkPairsEvaluated: 0,
      contactWindowsCount: 0,
      totalContactTimeSec: 0
    };
  let r = 0, a = 0, o = 0, l = 0;
  for (const _ of i) {
    const g = e.filter((v) => v.customerSatId === _).sort((v, N) => v.startTimeSec - N.startTimeSec), m = [];
    for (const v of g)
      if (m.length === 0)
        m.push({ start: v.startTimeSec, end: v.endTimeSec });
      else {
        const N = m[m.length - 1];
        v.startTimeSec <= N.end ? N.end = Math.max(N.end, v.endTimeSec) : m.push({ start: v.startTimeSec, end: v.endTimeSec });
      }
    let f = 0;
    m.forEach((v) => {
      f += Math.min(t, v.end) - Math.max(0, v.start);
    }), r += f, a += m.length;
    const E = [];
    let M = 0;
    for (const v of m)
      v.start > M && E.push(v.start - M), M = Math.max(M, v.end);
    M < t && E.push(t - M);
    for (const v of E)
      v > o && (o = v), l += v * v;
  }
  const c = i.length * t, u = r / c * 100, h = a > 0 ? r / a : 0, d = o, p = l / (2 * c);
  return {
    inContactPercent: Math.min(100, Math.max(0, u)),
    averageSessionSec: h,
    worstWaitSec: d,
    averageWaitSec: p,
    orbitStatesPropagated: n,
    linkPairsEvaluated: s,
    contactWindowsCount: e.length,
    totalContactTimeSec: r
  };
}
function Tc(i, e) {
  var re, ce, Ee, Ne, Ze;
  const t = new Wo(), n = i.sim.windowHours * 3600, s = i.sim.stepSeconds, r = Math.floor(n / s), a = i.customerPresets.find((F) => F.id === i.activeCustomerPresetId) ?? i.customerPresets[0], o = i.rollout.find((F) => F.id === i.activeRolloutStageId) ?? i.rollout[0], l = ((re = i.scenarios) == null ? void 0 : re.find((F) => F.id === i.activeScenarioId)) ?? ((ce = i.scenarios) == null ? void 0 : ce[0]), c = l != null && l.ringEnabled ? l.relayPlaneIds ?? ["p1"] : [], u = i.relayPlanes.filter((F) => F.enabled ? l ? c.includes(F.id) : o.enabledRelayPlaneIds.includes(F.id) : !1), h = [], d = Math.ceil(a.satCount / a.planes), p = ((Ee = i.relayPlanes.find((F) => F.id === "p1")) == null ? void 0 : Ee.ltanHours) ?? 10.5, _ = (i.customerLtanOffsetMinutes ?? 45) / 60, g = a.ltanHours ?? p + _;
  for (let F = 0; F < a.planes; F++) {
    const j = F * a.raanSpreadDeg / a.planes, Y = a.sunSynchronous ? hn(a.altitudeKm) : a.inclinationDeg;
    h.push({
      id: `cust-plane-${F}`,
      name: `${a.label} Plane ${F + 1}`,
      altitudeKm: a.altitudeKm,
      inclinationDeg: Y,
      sunSynchronous: a.sunSynchronous,
      raanDeg: a.raanSpreadDeg > 0 ? j : void 0,
      ltanHours: a.sunSynchronous ? (g + F * 24 / a.planes) % 24 : void 0,
      satsInPlane: d
    });
  }
  const m = Vr(i), f = new Set(u.map((F) => F.id)), E = m.filter((F) => f.has(F.id)), M = [], v = [], N = [], w = [], A = [];
  let P = 0;
  for (let F = 0; F < a.planes; F++)
    for (let j = 0; j < d; j++)
      P < a.satCount && (A.push(`cust-sat-${P}`), P++);
  const b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), O = [], G = [];
  let $ = 0, B = 0;
  for (let F = 0; F <= r; F++) {
    const j = F * s;
    M.push(j);
    const Y = us(j, i.sim.epochUTC), Q = [];
    let oe = 0;
    for (let me = 0; me < h.length; me++) {
      const De = h[me];
      for (let ge = 0; ge < De.satsInPlane && !(oe >= a.satCount); ge++) {
        const $e = t.propagate(De, ge, j), Se = ri($e, Y), T = Mc(Se);
        Q.push({
          id: A[oe],
          name: `Customer Sat ${oe + 1}`,
          type: "customer",
          planeId: De.id,
          indexInPlane: ge,
          eci: $e,
          ecef: Se,
          latLonAlt: T
        }), oe++;
      }
    }
    v.push(Q);
    const _e = [];
    for (let me = 0; me < E.length; me++) {
      const De = E[me];
      for (let ge = 0; ge < De.satsInPlane; ge++) {
        const $e = t.propagate(De, ge, j), Se = ri($e, Y), T = Mc(Se);
        _e.push({
          id: `relay-${De.id}-${ge}`,
          name: `${De.name} #${ge + 1}`,
          type: "relay",
          planeId: De.id,
          indexInPlane: ge,
          eci: $e,
          ecef: Se,
          latLonAlt: T
        });
      }
    }
    N.push(_e), $ += Q.length + _e.length, B += Q.length * _e.length + Q.length * i.groundStations.length;
    const Re = ((Ne = i.scenarios) == null ? void 0 : Ne.find((me) => me.id === i.activeScenarioId)) ?? ((Ze = i.scenarios) == null ? void 0 : Ze[0]) ?? {
      stationFilter: "bengaluru_only",
      ringEnabled: !1
    }, qe = i.groundStations.filter((me) => me.enabled ? Re.stationFilter === "india_only" || Re.stationFilter === "bengaluru_only" ? me.isIndiaStation === !0 || me.country === "India" || me.id === "bengaluru" || me.id === "delhi" || me.id === "port_blair" : !0 : !1), Ye = Re.ringEnabled ? _e : [], { withOXGPaths: mt, groundOnlyPaths: U, activeLinkEdges: zt } = V_(
      Q,
      Ye,
      qe,
      i.links
    );
    w.push(zt);
    for (const me of A) {
      const De = mt.get(me), ge = De !== void 0, $e = b.get(me) ?? !1;
      if (ge && !$e)
        b.set(me, !0), y.set(me, j);
      else if (!ge && $e) {
        b.set(me, !1);
        const Se = y.get(me) ?? j;
        O.push({
          customerSatId: me,
          targetId: De ? De.groundStationId : "oxg-network",
          targetType: "relay",
          startTimeSec: Se,
          endTimeSec: j,
          durationSec: j - Se,
          isDirectGround: !1
        });
      }
    }
    for (const me of A) {
      const De = U.get(me), ge = De !== void 0, $e = C.get(me) ?? !1;
      if (ge && !$e)
        C.set(me, !0), H.set(me, j);
      else if (!ge && $e) {
        C.set(me, !1);
        const Se = H.get(me) ?? j;
        G.push({
          customerSatId: me,
          targetId: De ? De.groundStationId : "ground-network",
          targetType: "ground",
          startTimeSec: Se,
          endTimeSec: j,
          durationSec: j - Se,
          isDirectGround: !0
        });
      }
    }
  }
  for (const F of A) {
    if (b.get(F)) {
      const j = y.get(F) ?? 0;
      O.push({
        customerSatId: F,
        targetId: "oxg-network",
        targetType: "relay",
        startTimeSec: j,
        endTimeSec: n,
        durationSec: n - j,
        isDirectGround: !1
      });
    }
    if (C.get(F)) {
      const j = H.get(F) ?? 0;
      G.push({
        customerSatId: F,
        targetId: "ground-network",
        targetType: "ground",
        startTimeSec: j,
        endTimeSec: n,
        durationSec: n - j,
        isDirectGround: !0
      });
    }
  }
  const te = Ec(
    A,
    O,
    n,
    $,
    B
  ), W = Ec(
    A,
    G,
    n,
    $,
    B
  );
  return {
    config: i,
    timestampsSec: M,
    customerSats: v,
    relaySats: N,
    activeLinkEdgesTrajectory: w,
    contactWindowsWithOXG: O,
    contactWindowsGroundOnly: G,
    metricsWithOXG: te,
    metricsGroundOnly: W
  };
}
const wc = { type: "change" }, Xo = { type: "start" }, bd = { type: "end" }, xr = new $r(), Ac = new Yn(), G_ = Math.cos(70 * jc.DEG2RAD), yt = new R(), Vt = 2 * Math.PI, lt = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, Aa = 1e-6;
class W_ extends n_ {
  constructor(e, t = null) {
    super(e, t), this.state = lt.NONE, this.enabled = !0, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ji.ROTATE, MIDDLE: ji.DOLLY, RIGHT: ji.PAN }, this.touches = { ONE: qi.ROTATE, TWO: qi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new R(), this._lastQuaternion = new Si(), this._lastTargetPosition = new R(), this._quat = new Si().setFromUnitVectors(e.up, new R(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new rc(), this._sphericalDelta = new rc(), this._scale = 1, this._panOffset = new R(), this._rotateStart = new Le(), this._rotateEnd = new Le(), this._rotateDelta = new Le(), this._panStart = new Le(), this._panEnd = new Le(), this._panDelta = new Le(), this._dollyStart = new Le(), this._dollyEnd = new Le(), this._dollyDelta = new Le(), this._dollyDirection = new R(), this._mouse = new Le(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = $_.bind(this), this._onPointerDown = X_.bind(this), this._onPointerUp = q_.bind(this), this._onContextMenu = ev.bind(this), this._onMouseWheel = Z_.bind(this), this._onKeyDown = K_.bind(this), this._onTouchStart = J_.bind(this), this._onTouchMove = Q_.bind(this), this._onMouseDown = Y_.bind(this), this._onMouseMove = j_.bind(this), this._interceptControlDown = tv.bind(this), this._interceptControlUp = nv.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(wc), this.update(), this.state = lt.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    yt.copy(t).sub(this.target), yt.applyQuaternion(this._quat), this._spherical.setFromVector3(yt), this.autoRotate && this.state === lt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Vt : n > Math.PI && (n -= Vt), s < -Math.PI ? s += Vt : s > Math.PI && (s -= Vt), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (yt.setFromSpherical(this._spherical), yt.applyQuaternion(this._quatInverse), t.copy(this.target).add(yt), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = yt.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new R(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new R(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = yt.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (xr.origin.copy(this.object.position), xr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(xr.direction)) < G_ ? this.object.lookAt(this.target) : (Ac.setFromNormalAndCoplanarPoint(this.object.up, this.target), xr.intersectPlane(Ac, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > Aa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Aa || this._lastTargetPosition.distanceToSquared(this.target) > Aa ? (this.dispatchEvent(wc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Vt / 60 * this.autoRotateSpeed * e : Vt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    yt.setFromMatrixColumn(t, 0), yt.multiplyScalar(-e), this._panOffset.add(yt);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? yt.setFromMatrixColumn(t, 1) : (yt.setFromMatrixColumn(t, 0), yt.crossVectors(this.object.up, yt)), yt.multiplyScalar(e), this._panOffset.add(yt);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      yt.copy(s).sub(this.target);
      let r = yt.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), s = e - n.left, r = t - n.top, a = n.width, o = n.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Vt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Vt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(Vt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-Vt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(Vt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-Vt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Vt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Vt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  // pointers
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new Le(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  //
  _customWheelEvent(e) {
    const t = e.deltaMode, n = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function X_(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function $_(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function q_(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(bd), this.state = lt.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function Y_(i) {
  let e;
  switch (i.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case ji.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = lt.DOLLY;
      break;
    case ji.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = lt.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = lt.ROTATE;
      }
      break;
    case ji.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = lt.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = lt.PAN;
      }
      break;
    default:
      this.state = lt.NONE;
  }
  this.state !== lt.NONE && this.dispatchEvent(Xo);
}
function j_(i) {
  switch (this.state) {
    case lt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case lt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case lt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function Z_(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== lt.NONE || (i.preventDefault(), this.dispatchEvent(Xo), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(bd));
}
function K_(i) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(i);
}
function J_(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case qi.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = lt.TOUCH_ROTATE;
          break;
        case qi.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = lt.TOUCH_PAN;
          break;
        default:
          this.state = lt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case qi.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = lt.TOUCH_DOLLY_PAN;
          break;
        case qi.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = lt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = lt.NONE;
      }
      break;
    default:
      this.state = lt.NONE;
  }
  this.state !== lt.NONE && this.dispatchEvent(Xo);
}
function Q_(i) {
  switch (this._trackPointer(i), this.state) {
    case lt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case lt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case lt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case lt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = lt.NONE;
  }
}
function ev(i) {
  this.enabled !== !1 && i.preventDefault();
}
function tv(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function nv(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const iv = [
  { latDeg: 0, lonDeg: 0, label: "(0°N, 0°E) Gulf of Guinea", color: 16711765 },
  { latDeg: 0, lonDeg: 90, label: "(0°N, 90°E) Indian Ocean", color: 58879 },
  { latDeg: 0, lonDeg: 180, label: "(0°N, 180°) Pacific Ocean", color: 7798531 },
  { latDeg: 90, lonDeg: 0, label: "(90°N) North Pole", color: 16771584 },
  { latDeg: 12.97, lonDeg: 77.59, label: "Bengaluru (12.97°N, 77.59°E)", color: 16748800 },
  { latDeg: 28.61, lonDeg: 77.21, label: "Delhi (28.61°N, 77.21°E)", color: 16748800 },
  { latDeg: 51.48, lonDeg: 0, label: "Greenwich (51.48°N, 0°E)", color: 14696699 },
  { latDeg: 78.2, lonDeg: 15.4, label: "Svalbard (78.2°N, 15.4°E)", color: 58879 }
];
class sv {
  constructor(e) {
    Z(this, "group");
    this.group = new un(), e.add(this.group), this.buildMarkers(), this.setVisible(!1);
  }
  buildMarkers() {
    for (const t of iv) {
      const n = Mi(t.latDeg, t.lonDeg, 1.008), s = n.clone().normalize(), r = new Os(0.018, 16, 16), a = new Is({ color: t.color }), o = new Wt(r, a);
      o.position.copy(n), this.group.add(o);
      const l = new zo(0.025, 0.032, 32), c = new Is({
        color: t.color,
        side: vn,
        transparent: !0,
        opacity: 0.85
      }), u = new Wt(l, c);
      u.position.copy(n), u.quaternion.setFromUnitVectors(new R(0, 0, 1), s), this.group.add(u);
      const h = n.clone().add(s.clone().multiplyScalar(0.08)), d = new Ct().setFromPoints([n, h]), p = new Bo({ color: t.color, linewidth: 3 }), _ = new md(d, p);
      this.group.add(_);
    }
  }
  setVisible(e) {
    this.group.visible = e;
  }
}
const rv = {
  stations: !0,
  stationLabels: !1,
  orbitLines: !1,
  relaySatellites: !0,
  relayLinks: !0,
  customerSatellites: !0,
  links: !1,
  groundLinks: !0,
  geoDebugMarkers: !1
}, Ro = {
  earthDim: 0,
  nightAmbient: 0.2,
  nightBoost: 0.9,
  earthBrightness: 1.65,
  earthSaturation: 0.7,
  earthContrast: 0.82,
  oceanLift: 0.2,
  glintStrength: 0,
  surfaceHaze: 1,
  showOceanMask: !1,
  lightingMode: "sun",
  azimuthDeg: 55,
  elevationDeg: 20,
  terminatorWidth: 1.9,
  terminatorPower: 3,
  terminatorTint: 0.05,
  terminatorTintColor: "#5a8fe0",
  autoRotateSpeed: 0.3,
  idleResumeSec: 5,
  layers: { ...rv },
  orbitArc: {
    behindDeg: 40,
    aheadDeg: 15,
    color: "#FF1744",
    widthPx: 1.5,
    maxOpacity: 0.7
  },
  customerSat: {
    color: "#FF1744",
    sizePx: 6,
    glowSize: 1.5
  },
  relaySat: {
    color: "#B0BEC5",
    sizePx: 5,
    glowStrength: 1.2
  },
  relayLink: {
    color: "#B0BEC5",
    widthPx: 1.8,
    opacity: 0.6
  }
};
function av(i, e, t = Ro) {
  return new pn({
    toneMapped: !1,
    uniforms: {
      dayTexture: { value: i },
      nightTexture: { value: e },
      sunDirection: { value: new R(1, 0, 0) },
      cameraDirection: { value: new R(0, 0, 1) },
      earthDim: { value: t.earthDim },
      nightAmbient: { value: t.nightAmbient },
      nightBoost: { value: t.nightBoost },
      earthBrightness: { value: t.earthBrightness },
      earthSaturation: { value: t.earthSaturation },
      earthContrast: { value: t.earthContrast },
      oceanLift: { value: t.oceanLift },
      glintStrength: { value: t.glintStrength },
      surfaceHaze: { value: t.surfaceHaze },
      showOceanMask: { value: t.showOceanMask ? 1 : 0 },
      terminatorWidth: { value: t.terminatorWidth },
      terminatorPower: { value: t.terminatorPower },
      terminatorTint: { value: t.terminatorTint },
      terminatorTintColor: { value: new We(t.terminatorTintColor) }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform sampler2D dayTexture;
      uniform sampler2D nightTexture;
      uniform vec3 sunDirection;
      uniform vec3 cameraDirection;

      uniform float earthDim;
      uniform float nightAmbient;
      uniform float nightBoost;
      uniform float earthBrightness;
      uniform float earthSaturation;
      uniform float earthContrast;

      uniform float oceanLift;
      uniform float glintStrength;
      uniform float surfaceHaze;
      uniform float showOceanMask;

      uniform float terminatorWidth;
      uniform float terminatorPower;
      uniform float terminatorTint;
      uniform vec3 terminatorTintColor;

      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      vec3 applySaturation(vec3 color, float sat) {
        float gray = dot(color, vec3(0.299, 0.587, 0.114));
        return mix(vec3(gray), color, sat);
      }

      vec3 applyContrast(vec3 color, float contrast) {
        return clamp((color - 0.5) * contrast + 0.5, 0.0, 1.0);
      }

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(sunDirection);
        vec3 viewDir = normalize(cameraDirection);

        float L = dot(normal, lightDir);
        
        // Wide, smooth terminator
        float low = -0.35 * max(0.1, terminatorWidth);
        float high = 0.45 * max(0.1, terminatorWidth);
        float rawLit = smoothstep(low, high, L);
        float lit = pow(rawLit, max(0.1, terminatorPower));

        vec4 dayTexColor = texture2D(dayTexture, vUv);
        vec4 nightTexColor = texture2D(nightTexture, vUv);

        // Ocean Mask Detection (blue dominant, low red)
        float blueDominance = dayTexColor.b - max(dayTexColor.r, dayTexColor.g * 0.85);
        float oceanMask = clamp(blueDominance * 4.5, 0.0, 1.0);

        if (showOceanMask > 0.5) {
          gl_FragColor = vec4(vec3(oceanMask), 1.0);
          return;
        }

        // Base Day Color
        vec3 dayColor = dayTexColor.rgb;

        // Ocean Lift towards deep vibrant blue (#1f5fa8 = vec3(0.12, 0.37, 0.66))
        vec3 targetOceanBlue = vec3(0.12, 0.37, 0.66);
        dayColor = mix(dayColor, targetOceanBlue, oceanMask * oceanLift);

        // Soft Ocean Sun Glint
        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(0.0, dot(reflectDir, viewDir)), 12.0);
        vec3 glintColor = vec3(0.85, 0.95, 1.0) * spec * oceanMask * glintStrength;
        dayColor += glintColor;

        // Color adjustments (Saturation, Contrast, Brightness & Dimming)
        dayColor = applySaturation(dayColor, earthSaturation);
        dayColor = applyContrast(dayColor, earthContrast);
        dayColor *= earthBrightness * (1.0 - earthDim * 0.7);

        // Cool Twilight Tint (#5a8fe0) mixed into day color between lit 0.1 and 0.5
        float tintBand = smoothstep(0.1, 0.3, lit) * (1.0 - smoothstep(0.3, 0.5, lit));
        dayColor = mix(dayColor, terminatorTintColor, tintBand * terminatorTint);

        // Surface Fresnel Blue Haze on lit limb (#5aa2ff = vec3(0.35, 0.64, 1.0)), scaled by lit
        float viewDotNormal = max(0.0, dot(viewDir, normal));
        float surfaceFresnel = pow(1.0 - viewDotNormal, 3.0);
        vec3 hazeColor = vec3(0.35, 0.64, 1.0) * surfaceFresnel * surfaceHaze * lit;
        dayColor += hazeColor;

        // Day Lit by smooth lighting (darken day side by lighting, no texture crossfade)
        vec3 dayLit = dayColor * mix(nightAmbient, 1.0, lit);

        // Night lights fade in separately once actually dark
        float nightLightsFactor = 1.0 - smoothstep(0.05, 0.45, lit);
        vec3 nightLights = nightTexColor.rgb * nightBoost * nightLightsFactor;

        // Final additive combination (linear blend)
        vec3 finalRGB = dayLit + nightLights;
        gl_FragColor = vec4(finalRGB, 1.0);
      }
    `
  });
}
function ov() {
  return new pn({
    uniforms: {
      sunDirection: { value: new R(1, 0, 0) },
      cameraDirection: { value: new R(0, 0, 1) },
      surfaceHaze: { value: 0.5 }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        vNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      uniform vec3 sunDirection;
      uniform vec3 cameraDirection;
      uniform float surfaceHaze;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(sunDirection);
        vec3 viewDir = normalize(cameraDirection);

        // Fresnel glow around limb
        float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 2.5);

        // Brighter on lit limb, nearly invisible on dark limb
        float litFactor = clamp(dot(normal, lightDir) + 0.3, 0.0, 1.0);

        vec3 atmosphereColor = vec3(0.35, 0.68, 1.0);
        float alpha = fresnel * litFactor * 0.7 * surfaceHaze;
        gl_FragColor = vec4(atmosphereColor, alpha);
      }
    `,
    blending: Da,
    side: Bt,
    transparent: !0,
    depthWrite: !1
  });
}
class lv {
  constructor(e, t = Ro) {
    Z(this, "scene");
    Z(this, "camera");
    Z(this, "renderer");
    Z(this, "controls");
    Z(this, "earthGroup");
    Z(this, "earthMesh");
    Z(this, "earthMat", null);
    Z(this, "atmosphereMesh");
    Z(this, "atmosphereMat");
    Z(this, "geoDebug");
    Z(this, "config");
    Z(this, "container");
    Z(this, "animationFrameId", null);
    Z(this, "onRenderCallbacks", []);
    Z(this, "tSec", 0);
    Z(this, "isUserInteracting", !1);
    Z(this, "lastInteractionTime", 0);
    Z(this, "autoRotateEnabled", !0);
    // Camera Fly-to animation state
    Z(this, "isFlyingTo", !1);
    Z(this, "flyStartCamPos", new R());
    Z(this, "flyTargetCamPos", new R());
    Z(this, "flyStartTime", 0);
    Z(this, "flyDurationMs", 1500);
    this.container = e, this.config = { ...Ro, ...t }, this.scene = new qg(), this.scene.background = new We(131848);
    const n = e.clientWidth || window.innerWidth, s = e.clientHeight || window.innerHeight;
    this.camera = new Jt(45, n / s, 0.01, 100);
    const r = Mi(20, 78, 3.9);
    this.camera.position.copy(r), this.renderer = new $g({ antialias: !0, alpha: !0, preserveDrawingBuffer: !0 }), this.renderer.setSize(n, s), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.outputColorSpace = It, this.renderer.toneMapping = Oc, this.renderer.toneMappingExposure = 1, e.appendChild(this.renderer.domElement), this.controls = new W_(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.05, this.controls.minDistance = 1.1, this.controls.maxDistance = 25, this.controls.addEventListener("start", () => {
      this.isUserInteracting = !0;
    }), this.controls.addEventListener("end", () => {
      this.isUserInteracting = !1, this.lastInteractionTime = performance.now();
    }), this.earthGroup = new un(), this.scene.add(this.earthGroup);
    const a = new Os(1, 128, 64), o = new Is({ color: 660520, wireframe: !0 });
    this.earthMesh = new Wt(a, o), this.earthGroup.add(this.earthMesh);
    const l = new Os(1.02, 64, 64);
    this.atmosphereMat = ov(), this.atmosphereMesh = new Wt(l, this.atmosphereMat), this.scene.add(this.atmosphereMesh), this.addStarsBackground(), this.geoDebug = new sv(this.earthMesh), this.loadEarthTextures(), window.addEventListener("resize", this.onWindowResize.bind(this)), document.addEventListener("visibilitychange", this.onVisibilityChange.bind(this)), this.animate();
  }
  loadEarthTextures() {
    const e = new Qg(), t = this.renderer.capabilities.getMaxAnisotropy(), n = (h) => {
      h.colorSpace = It, h.anisotropy = t, h.generateMipmaps = !0, h.wrapS = Pr, h.wrapT = Kn;
    }, s = (h) => {
      const d = document.createElement("canvas");
      d.width = 4, d.height = 4;
      const p = d.getContext("2d");
      p && (p.fillStyle = `#${h.toString(16).padStart(6, "0")}`, p.fillRect(0, 0, 4, 4));
      const _ = new Ns(d);
      return n(_), _;
    };
    let r = null, a = null;
    const o = "textures/earth_day_2048.webp", l = "textures/earth_night_2048.webp";
    let c = 0;
    const u = () => {
      c++, c === 2 && (r || (r = s(1715020)), a || (a = s(330260)), this.earthMat = av(r, a, this.config), this.earthMesh.material = this.earthMat, console.log("Earth 2048 textures / shader active."), window.innerWidth >= 768 && (e.load("textures/earth_day_4096.webp", (h) => {
        n(h), this.earthMat && (this.earthMat.uniforms.dayTexture.value = h, this.earthMat.uniformsNeedUpdate = !0);
      }), e.load("textures/earth_night_4096.webp", (h) => {
        n(h), this.earthMat && (this.earthMat.uniforms.nightTexture.value = h, this.earthMat.uniformsNeedUpdate = !0);
      })));
    };
    e.load(
      o,
      (h) => {
        n(h), r = h, u();
      },
      void 0,
      (h) => {
        console.warn(`Failed loading day texture: ${o}, activating procedural fallback`, h), r = s(1715020), u();
      }
    ), e.load(
      l,
      (h) => {
        n(h), a = h, u();
      },
      void 0,
      (h) => {
        console.warn(`Failed loading night texture: ${l}, activating procedural fallback`, h), a = s(330260), u();
      }
    );
  }
  addStarsBackground() {
    const t = new Float32Array(45e3);
    for (let a = 0; a < 15e3 * 3; a += 3) {
      const o = 80 + Math.random() * 20, l = Math.random() * Math.PI * 2, c = Math.acos(2 * Math.random() - 1);
      t[a] = o * Math.sin(c) * Math.cos(l), t[a + 1] = o * Math.sin(c) * Math.sin(l), t[a + 2] = o * Math.cos(c);
    }
    const n = new Ct();
    n.setAttribute("position", new en(t, 3));
    const s = new gd({
      color: 16777215,
      size: 0.08,
      transparent: !0,
      opacity: 0.75,
      depthWrite: !1
    }), r = new Yg(n, s);
    this.scene.add(r);
  }
  setFrontView() {
    this.camera.position.set(2.5, 0, 0), this.controls.target.set(0, 0, 0), this.controls.update();
  }
  setTopView() {
    this.camera.position.set(0, 3.2, 0), this.controls.target.set(0, 0, 0), this.controls.update();
  }
  resetView() {
    this.focusIndia();
  }
  focusIndia() {
    const e = Mi(20, 78, 3.9);
    this.flyToPosition(e);
  }
  focusSatellite(e) {
    const t = new R(e.x, e.y, e.z), s = t.clone().normalize().clone().multiplyScalar(1.45);
    this.camera.position.copy(s), this.controls.target.copy(t), this.controls.update();
  }
  focusSatelliteLimb(e) {
    const t = new R(e.x, e.y, e.z), n = t.clone().normalize(), s = new R(-n.z, 0.2, n.x).normalize(), r = t.clone().add(s.clone().multiplyScalar(0.75)).add(n.clone().multiplyScalar(0.25));
    this.camera.position.copy(r), this.controls.target.copy(t), this.controls.update();
  }
  flyToPosition(e) {
    this.isFlyingTo = !0, this.flyStartCamPos.copy(this.camera.position), this.flyTargetCamPos.copy(e), this.flyStartTime = performance.now();
  }
  updateUniforms() {
    if (!this.earthMat) return;
    const e = this.earthMat.uniforms;
    e.earthDim.value = this.config.earthDim, e.nightAmbient.value = this.config.nightAmbient, e.nightBoost.value = this.config.nightBoost, e.earthBrightness.value = this.config.earthBrightness, e.earthSaturation.value = this.config.earthSaturation, e.earthContrast.value = this.config.earthContrast, e.oceanLift.value = this.config.oceanLift, e.glintStrength.value = this.config.glintStrength, e.surfaceHaze.value = this.config.surfaceHaze, e.showOceanMask.value = this.config.showOceanMask ? 1 : 0, e.terminatorWidth.value = this.config.terminatorWidth, e.terminatorPower.value = this.config.terminatorPower, e.terminatorTint.value = this.config.terminatorTint, e.terminatorTintColor.value.set(this.config.terminatorTintColor), this.atmosphereMat && (this.atmosphereMat.uniforms.surfaceHaze.value = this.config.surfaceHaze);
  }
  setSunView() {
    const e = us(this.tSec), t = Hr(this.tSec), n = ri(t, e), s = Math.hypot(n.x, n.y, n.z), r = new R(n.x / s, n.z / s, -n.y / s).normalize();
    this.flyToPosition(r.clone().multiplyScalar(3.2));
  }
  updateTime(e) {
    this.tSec = e, this.tSec < 0 && (this.tSec = 0), this.earthMesh.rotation.y = 0;
    const t = this.camera.position.clone().normalize();
    let n;
    if (this.config.lightingMode === "sun") {
      const s = us(e), r = Hr(e), a = ri(r, s), o = Math.hypot(a.x, a.y, a.z);
      n = new R(a.x / o, a.z / o, -a.y / o).normalize();
    } else {
      const s = this.config.azimuthDeg * Math.PI / 180, r = this.config.elevationDeg * Math.PI / 180, a = Math.sin(s) * Math.cos(r), o = Math.sin(r), l = Math.cos(s) * Math.cos(r);
      n = new R(a, o, l).normalize().applyQuaternion(this.camera.quaternion).normalize();
    }
    this.earthMat && (this.earthMat.uniforms.sunDirection.value.copy(n), this.earthMat.uniforms.cameraDirection.value.copy(t), this.updateUniforms()), this.atmosphereMat && (this.atmosphereMat.uniforms.sunDirection.value.copy(n), this.atmosphereMat.uniforms.cameraDirection.value.copy(t));
  }
  addRenderCallback(e) {
    this.onRenderCallbacks.push(e);
  }
  animate() {
    if (document.hidden) return;
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    const e = performance.now();
    if (!this.isUserInteracting && e - this.lastInteractionTime > 5e3 && this.autoRotateEnabled && !this.isFlyingTo ? (this.controls.autoRotate = !0, this.controls.autoRotateSpeed = 0.3) : this.controls.autoRotate = !1, this.isFlyingTo) {
      const t = e - this.flyStartTime, n = Math.min(1, t / this.flyDurationMs), s = 0.5 - Math.cos(n * Math.PI) / 2;
      this.camera.position.lerpVectors(this.flyStartCamPos, this.flyTargetCamPos, s), this.controls.target.set(0, 0, 0), n >= 1 && (this.isFlyingTo = !1);
    }
    this.controls.update();
    for (const t of this.onRenderCallbacks)
      t();
    this.renderer.render(this.scene, this.camera);
  }
  onVisibilityChange() {
    !document.hidden && this.animationFrameId === null && this.animate();
  }
  onWindowResize() {
    const e = this.container.clientWidth || window.innerWidth, t = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  dispose() {
    this.animationFrameId !== null && cancelAnimationFrame(this.animationFrameId), window.removeEventListener("resize", this.onWindowResize.bind(this)), document.removeEventListener("visibilitychange", this.onVisibilityChange.bind(this)), this.renderer.dispose();
  }
}
const Rc = new ai(), yr = new R();
class Md extends e_ {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const e = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], t = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new Rt(e, 3)), this.setAttribute("uv", new Rt(t, 2));
  }
  applyMatrix4(e) {
    const t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new yo(t, 6, 1);
    return this.setAttribute("instanceStart", new Sn(n, 3, 0)), this.setAttribute("instanceEnd", new Sn(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new yo(t, 6, 1);
    return this.setAttribute("instanceColorStart", new Sn(n, 3, 0)), this.setAttribute("instanceColorEnd", new Sn(n, 3, 3)), this;
  }
  fromWireframeGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromEdgesGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromMesh(e) {
    return this.fromWireframeGeometry(new jg(e.geometry)), this;
  }
  fromLineSegments(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ai());
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), Rc.setFromBufferAttribute(t), this.boundingBox.union(Rc));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ti()), this.boundingBox === null && this.computeBoundingBox();
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    if (e !== void 0 && t !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++)
        yr.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(yr)), yr.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(yr));
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
  applyMatrix(e) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(e);
  }
}
ae.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new Le(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
Gt.line = {
  uniforms: Fo.merge([
    ae.common,
    ae.fog,
    ae.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
class hs extends pn {
  static get type() {
    return "LineMaterial";
  }
  constructor(e) {
    super({
      uniforms: Fo.clone(Gt.line.uniforms),
      vertexShader: Gt.line.vertexShader,
      fragmentShader: Gt.line.fragmentShader,
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.setValues(e);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(e) {
    this.uniforms.diffuse.value = e;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(e) {
    e === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(e) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(e) {
    e === !0 !== this.dashed && (this.needsUpdate = !0), e === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(e) {
    this.uniforms.dashScale.value = e;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(e) {
    this.uniforms.dashSize.value = e;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(e) {
    this.uniforms.dashOffset.value = e;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(e) {
    this.uniforms.gapSize.value = e;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(e) {
    this.uniforms && (this.uniforms.opacity.value = e);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(e) {
    this.uniforms.resolution.value.copy(e);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(e) {
    this.defines && (e === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), e === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
}
const Ra = new ut(), Cc = new R(), Pc = new R(), Et = new ut(), Tt = new ut(), gn = new ut(), Ca = new R(), Pa = new pt(), wt = new t_(), Dc = new R(), Sr = new ai(), br = new Ti(), _n = new ut();
let xn, vi;
function Lc(i, e, t) {
  return _n.set(0, 0, -e, 1).applyMatrix4(i.projectionMatrix), _n.multiplyScalar(1 / _n.w), _n.x = vi / t.width, _n.y = vi / t.height, _n.applyMatrix4(i.projectionMatrixInverse), _n.multiplyScalar(1 / _n.w), Math.abs(Math.max(_n.x, _n.y));
}
function cv(i, e) {
  const t = i.matrixWorld, n = i.geometry, s = n.attributes.instanceStart, r = n.attributes.instanceEnd, a = Math.min(n.instanceCount, s.count);
  for (let o = 0, l = a; o < l; o++) {
    wt.start.fromBufferAttribute(s, o), wt.end.fromBufferAttribute(r, o), wt.applyMatrix4(t);
    const c = new R(), u = new R();
    xn.distanceSqToSegment(wt.start, wt.end, u, c), u.distanceTo(c) < vi * 0.5 && e.push({
      point: u,
      pointOnLine: c,
      distance: xn.origin.distanceTo(u),
      object: i,
      face: null,
      faceIndex: o,
      uv: null,
      uv1: null
    });
  }
}
function dv(i, e, t) {
  const n = e.projectionMatrix, r = i.material.resolution, a = i.matrixWorld, o = i.geometry, l = o.attributes.instanceStart, c = o.attributes.instanceEnd, u = Math.min(o.instanceCount, l.count), h = -e.near;
  xn.at(1, gn), gn.w = 1, gn.applyMatrix4(e.matrixWorldInverse), gn.applyMatrix4(n), gn.multiplyScalar(1 / gn.w), gn.x *= r.x / 2, gn.y *= r.y / 2, gn.z = 0, Ca.copy(gn), Pa.multiplyMatrices(e.matrixWorldInverse, a);
  for (let d = 0, p = u; d < p; d++) {
    if (Et.fromBufferAttribute(l, d), Tt.fromBufferAttribute(c, d), Et.w = 1, Tt.w = 1, Et.applyMatrix4(Pa), Tt.applyMatrix4(Pa), Et.z > h && Tt.z > h)
      continue;
    if (Et.z > h) {
      const M = Et.z - Tt.z, v = (Et.z - h) / M;
      Et.lerp(Tt, v);
    } else if (Tt.z > h) {
      const M = Tt.z - Et.z, v = (Tt.z - h) / M;
      Tt.lerp(Et, v);
    }
    Et.applyMatrix4(n), Tt.applyMatrix4(n), Et.multiplyScalar(1 / Et.w), Tt.multiplyScalar(1 / Tt.w), Et.x *= r.x / 2, Et.y *= r.y / 2, Tt.x *= r.x / 2, Tt.y *= r.y / 2, wt.start.copy(Et), wt.start.z = 0, wt.end.copy(Tt), wt.end.z = 0;
    const g = wt.closestPointToPointParameter(Ca, !0);
    wt.at(g, Dc);
    const m = jc.lerp(Et.z, Tt.z, g), f = m >= -1 && m <= 1, E = Ca.distanceTo(Dc) < vi * 0.5;
    if (f && E) {
      wt.start.fromBufferAttribute(l, d), wt.end.fromBufferAttribute(c, d), wt.start.applyMatrix4(a), wt.end.applyMatrix4(a);
      const M = new R(), v = new R();
      xn.distanceSqToSegment(wt.start, wt.end, v, M), t.push({
        point: v,
        pointOnLine: M,
        distance: xn.origin.distanceTo(v),
        object: i,
        face: null,
        faceIndex: d,
        uv: null,
        uv1: null
      });
    }
  }
}
class uv extends Wt {
  constructor(e = new Md(), t = new hs({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, s = new Float32Array(2 * t.count);
    for (let a = 0, o = 0, l = t.count; a < l; a++, o += 2)
      Cc.fromBufferAttribute(t, a), Pc.fromBufferAttribute(n, a), s[o] = o === 0 ? 0 : s[o - 1], s[o + 1] = s[o] + Cc.distanceTo(Pc);
    const r = new yo(s, 2, 1);
    return e.setAttribute("instanceDistanceStart", new Sn(r, 1, 0)), e.setAttribute("instanceDistanceEnd", new Sn(r, 1, 1)), this;
  }
  raycast(e, t) {
    const n = this.material.worldUnits, s = e.camera;
    s === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const r = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
    xn = e.ray;
    const a = this.matrixWorld, o = this.geometry, l = this.material;
    vi = l.linewidth + r, o.boundingSphere === null && o.computeBoundingSphere(), br.copy(o.boundingSphere).applyMatrix4(a);
    let c;
    if (n)
      c = vi * 0.5;
    else {
      const h = Math.max(s.near, br.distanceToPoint(xn.origin));
      c = Lc(s, h, l.resolution);
    }
    if (br.radius += c, xn.intersectsSphere(br) === !1)
      return;
    o.boundingBox === null && o.computeBoundingBox(), Sr.copy(o.boundingBox).applyMatrix4(a);
    let u;
    if (n)
      u = vi * 0.5;
    else {
      const h = Math.max(s.near, Sr.distanceToPoint(xn.origin));
      u = Lc(s, h, l.resolution);
    }
    Sr.expandByScalar(u), xn.intersectsBox(Sr) !== !1 && (n ? cv(this, t) : dv(this, s, t));
  }
  onBeforeRender(e) {
    const t = this.material.uniforms;
    t && t.resolution && (e.getViewport(Ra), this.material.uniforms.resolution.value.set(Ra.z, Ra.w));
  }
}
class Bs extends Md {
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  setPositions(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let s = 0; s < t; s += 3)
      n[2 * s] = e[s], n[2 * s + 1] = e[s + 1], n[2 * s + 2] = e[s + 2], n[2 * s + 3] = e[s + 3], n[2 * s + 4] = e[s + 4], n[2 * s + 5] = e[s + 5];
    return super.setPositions(n), this;
  }
  setColors(e) {
    const t = e.length - 3, n = new Float32Array(2 * t);
    for (let s = 0; s < t; s += 3)
      n[2 * s] = e[s], n[2 * s + 1] = e[s + 1], n[2 * s + 2] = e[s + 2], n[2 * s + 3] = e[s + 3], n[2 * s + 4] = e[s + 4], n[2 * s + 5] = e[s + 5];
    return super.setColors(n), this;
  }
  fromLine(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
}
class Gr extends uv {
  constructor(e = new Bs(), t = new hs({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLine2 = !0, this.type = "Line2";
  }
}
class hv {
  constructor(e) {
    Z(this, "group");
    Z(this, "arcLines", /* @__PURE__ */ new Map());
    Z(this, "fullOrbitLines", []);
    Z(this, "propagator");
    Z(this, "relayRingSegmentLines", []);
    this.group = new un(), e.add(this.group), this.propagator = new Wo(), typeof window < "u" && window.addEventListener("resize", () => this.onResize());
  }
  onResize() {
    if (typeof window > "u") return;
    const e = window.innerWidth, t = window.innerHeight;
    for (const n of this.arcLines.values())
      n.material.resolution.set(e, t);
    for (const n of this.relayRingSegmentLines)
      n.material.resolution.set(e, t);
  }
  /**
   * Update dynamic trailing/leading orbit arcs for customer satellites
   */
  updateCustomerArc(e, t, n, s = !0) {
    const r = n ?? {
      behindDeg: 40,
      aheadDeg: 15,
      color: "#FF1744",
      widthPx: 1.5,
      maxOpacity: 0.7
    };
    if (!s || e.length === 0) {
      for (const h of this.arcLines.values())
        h.visible = !1;
      return;
    }
    const a = new Set(e.map((h) => h.id));
    for (const [h, d] of this.arcLines.entries())
      a.has(h) || (d.visible = !1);
    const o = 80, l = new We(r.color), c = typeof window < "u" ? window.innerWidth : 1920, u = typeof window < "u" ? window.innerHeight : 1080;
    for (const h of e) {
      let d = this.arcLines.get(h.id);
      if (!d) {
        const v = new Bs(), N = new hs({
          color: l,
          linewidth: r.widthPx,
          resolution: new Le(c, u),
          transparent: !0,
          opacity: r.maxOpacity,
          depthTest: !0,
          depthWrite: !1
        });
        d = new Gr(v, N), this.group.add(d), this.arcLines.set(h.id, d);
      }
      d.visible = !0, d.material.color.copy(l), d.material.linewidth = r.widthPx, d.material.opacity = r.maxOpacity, d.material.resolution.set(c, u);
      const p = zr(h.altitudeKm), _ = r.behindDeg / 360 * p, g = r.aheadDeg / 360 * p, m = t - _, E = t + g - m, M = [];
      for (let v = 0; v < o; v++) {
        const N = m + v / (o - 1) * E, w = this.propagator.propagate(h, 0, N), A = us(N), P = ri(w, A), b = On(P);
        M.push(b.x, b.y, b.z);
      }
      d.geometry.setPositions(M), d.computeLineDistances();
    }
  }
  /**
   * Update 3D intra-plane ring links for active relay satellites (P1, P2, P3)
   */
  updateRelayRingLinks(e, t, n = !0, s = 1) {
    const r = t ?? {
      color: "#B0BEC5",
      widthPx: 1.2,
      opacity: 0.6
    };
    if (!n || e.length === 0) {
      for (const d of this.relayRingSegmentLines)
        d.visible = !1;
      return;
    }
    const a = {
      p1: "#B0BEC5",
      p2: "#B0BEC5",
      p3: "#B0BEC5",
      p4: "#B0BEC5"
    }, o = /* @__PURE__ */ new Map();
    for (const d of e) {
      let p = d.planeId;
      p || (d.id.startsWith("relay-p1-") ? p = "p1" : d.id.startsWith("relay-p2-") ? p = "p2" : d.id.startsWith("relay-p3-") ? p = "p3" : d.id.startsWith("relay-p4-") ? p = "p4" : p = "p1"), o.has(p) || o.set(p, []), o.get(p).push(d);
    }
    const l = [];
    for (const [d, p] of o.entries()) {
      let _ = [...p];
      if (p.length >= 3) {
        const M = new R(p[0].eci.x, p[0].eci.y, p[0].eci.z).normalize();
        let v = new R();
        for (let P = 1; P < p.length; P++) {
          const b = new R(p[P].eci.x, p[P].eci.y, p[P].eci.z).normalize();
          if (Math.abs(M.dot(b)) < 0.99) {
            v.copy(b);
            break;
          }
        }
        const N = M.clone().cross(v).normalize(), w = M.clone(), A = N.clone().cross(w).normalize();
        _.sort((P, b) => {
          const y = new R(P.eci.x, P.eci.y, P.eci.z), C = new R(b.eci.x, b.eci.y, b.eci.z), H = Math.atan2(y.dot(A), y.dot(w)), O = Math.atan2(C.dot(A), C.dot(w)), G = H < 0 ? H + 2 * Math.PI : H, $ = O < 0 ? O + 2 * Math.PI : O;
          return G - $;
        });
      } else
        _.sort((M, v) => (M.indexInPlane ?? 0) - (v.indexInPlane ?? 0));
      const g = a[d] ?? r.color, m = new We(g), f = _.map((M) => On(M.ecef)), E = f.length;
      for (let M = 0; M < E; M++)
        l.push({
          a: f[M],
          b: f[(M + 1) % E],
          color: m
        });
    }
    const c = l.length, u = typeof window < "u" ? window.innerWidth : 1920, h = typeof window < "u" ? window.innerHeight : 1080;
    for (; this.relayRingSegmentLines.length < c; ) {
      const d = new Bs(), p = new hs({
        color: new We(16777215),
        linewidth: r.widthPx,
        resolution: new Le(u, h),
        transparent: !0,
        opacity: r.opacity,
        depthTest: !0,
        depthWrite: !1
      }), _ = new Gr(d, p);
      this.group.add(_), this.relayRingSegmentLines.push(_);
    }
    for (let d = c; d < this.relayRingSegmentLines.length; d++)
      this.relayRingSegmentLines[d].visible = !1;
    for (let d = 0; d < c; d++) {
      const p = l[d], _ = this.relayRingSegmentLines[d];
      _.visible = !0, _.geometry.setPositions([p.a.x, p.a.y, p.a.z, p.b.x, p.b.y, p.b.z]), _.computeLineDistances();
      const g = p.b.clone().sub(p.a), m = g.lengthSq();
      let f = 0;
      if (m > 0) {
        const w = -p.a.dot(g) / m;
        f = Math.max(0, Math.min(1, w));
      }
      const N = (p.a.clone().add(g.multiplyScalar(f)).length() < 1.005 ? 0.15 : r.opacity) * s;
      _.material.color.copy(p.color), _.material.linewidth = r.widthPx, _.material.opacity = N, _.material.resolution.set(u, h);
    }
  }
  /**
   * Update full 360° orbit lines (used when orbitLines layer is enabled)
   */
  updateOrbits(e, t, n = 0) {
    for (const o of this.fullOrbitLines)
      o.geometry.dispose(), o.material.dispose(), this.group.remove(o);
    this.fullOrbitLines = [];
    const s = 180, r = us(n), a = (o, l) => {
      const c = [], u = { ...o, satsInPlane: 1, phasingDeg: 0 };
      for (let g = 0; g <= s; g++) {
        const m = g / s, f = this.propagator.propagate(u, m, n), E = ri(f, r);
        c.push(On(E));
      }
      const h = new Ct().setFromPoints(c), d = o.color ?? l, p = new Bo({
        color: new We(d),
        transparent: !0,
        opacity: 0.6
      }), _ = new md(h, p);
      this.group.add(_), this.fullOrbitLines.push(_);
    };
    t.forEach((o) => a(o, "#00e5ff"));
  }
  setVisible(e) {
    for (const t of this.fullOrbitLines)
      t.visible = e;
  }
  clear() {
    for (const e of this.arcLines.values())
      e.visible = !1;
    for (const e of this.relayRingSegmentLines)
      e.visible = !1;
    for (const e of this.fullOrbitLines)
      e.geometry.dispose(), e.material.dispose(), this.group.remove(e);
    this.fullOrbitLines = [];
  }
}
class fv {
  constructor(e) {
    Z(this, "group");
    Z(this, "customerSprites", []);
    Z(this, "relaySprites", []);
    Z(this, "relayMesh", null);
    Z(this, "planeColorMap", /* @__PURE__ */ new Map());
    Z(this, "glowTexture");
    Z(this, "tooltipElem", null);
    Z(this, "currentHoveredSat", null);
    this.group = new un(), e.add(this.group), this.glowTexture = this.createGlowTexture(), this.initTooltip();
  }
  getCurrentHoveredSat() {
    return this.currentHoveredSat;
  }
  /**
   * Radial gradient canvas texture generating solid core dot + soft halo glow
   */
  createGlowTexture() {
    if (typeof document > "u")
      return new Ns(null);
    const e = document.createElement("canvas");
    e.width = 64, e.height = 64;
    const t = e.getContext("2d"), n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    n.addColorStop(0, "rgba(255, 255, 255, 1.0)"), n.addColorStop(0.2, "rgba(255, 255, 255, 0.95)"), n.addColorStop(0.4, "rgba(255, 255, 255, 0.6)"), n.addColorStop(0.7, "rgba(255, 255, 255, 0.2)"), n.addColorStop(1, "rgba(255, 255, 255, 0.0)"), t.fillStyle = n, t.beginPath(), t.arc(32, 32, 32, 0, Math.PI * 2), t.fill();
    const s = new Ns(e);
    return s.needsUpdate = !0, s;
  }
  initTooltip() {
    typeof document > "u" || (this.tooltipElem = document.createElement("div"), this.tooltipElem.className = "oxg-sat-tooltip hidden", document.body.appendChild(this.tooltipElem));
  }
  setPlaneColors(e) {
    this.planeColorMap.clear();
    for (const [t, n] of Object.entries(e))
      this.planeColorMap.set(t, new We(n));
  }
  setLayers(e, t) {
    for (const n of this.customerSprites)
      n.visible = e;
    for (const n of this.relaySprites)
      n.visible = t;
    this.relayMesh && (this.relayMesh.visible = t), e || this.hideTooltip();
  }
  updateSatellites(e, t, n, s, r = 1, a = 1) {
    const o = n ?? {
      color: "#FF1744",
      sizePx: 6,
      glowSize: 1.5
    }, l = new We(o.color), u = o.sizePx * o.glowSize / window.innerHeight;
    for (; this.customerSprites.length < e.length; ) {
      const g = new Us({
        map: this.glowTexture,
        color: l,
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        sizeAttenuation: !1,
        toneMapped: !1
      }), m = new Lr(g);
      this.group.add(m), this.customerSprites.push(m);
    }
    for (; this.customerSprites.length > e.length; ) {
      const g = this.customerSprites.pop();
      g.material.dispose(), this.group.remove(g);
    }
    for (let g = 0; g < e.length; g++) {
      const m = e[g], f = On(m.ecef), E = this.customerSprites[g];
      E.position.copy(f), E.scale.set(u, u, 1), E.material.color.copy(l);
    }
    const h = s ?? {
      color: "#B0BEC5",
      sizePx: 5,
      glowStrength: 1.2
    }, d = new We(h.color), _ = h.sizePx * h.glowStrength / window.innerHeight * a;
    for (; this.relaySprites.length < t.length; ) {
      const g = new Us({
        map: this.glowTexture,
        color: d,
        transparent: !0,
        depthTest: !0,
        depthWrite: !1,
        sizeAttenuation: !1,
        toneMapped: !1
      }), m = new Lr(g);
      this.group.add(m), this.relaySprites.push(m);
    }
    for (; this.relaySprites.length > t.length; ) {
      const g = this.relaySprites.pop();
      g.material.dispose(), this.group.remove(g);
    }
    for (let g = 0; g < t.length; g++) {
      const m = t[g], f = On(m.ecef), E = this.relaySprites[g];
      E.position.copy(f), E.scale.set(_, _, 1);
      const M = this.planeColorMap.get(m.planeId) ?? d, v = E.material;
      v.color.copy(M), v.opacity = r;
    }
  }
  /**
   * Handle mouse hover and tooltip display for customer satellites
   */
  handleMouseMove(e, t, n, s) {
    if (this.customerSprites.length === 0 || n.length === 0) {
      this.hideTooltip();
      return;
    }
    const r = e.clientX, a = e.clientY;
    let o = null, c = "ontouchstart" in window || navigator.maxTouchPoints > 0 ? 36 : 20;
    const u = new R();
    for (let h = 0; h < n.length; h++) {
      const d = n[h], p = On(d.ecef);
      if (u.copy(p).project(t), u.z >= 1) continue;
      const _ = (u.x * 0.5 + 0.5) * window.innerWidth, g = (-(u.y * 0.5) + 0.5) * window.innerHeight, m = Math.hypot(_ - r, g - a);
      m < c && (c = m, o = d);
    }
    if (o && this.tooltipElem) {
      this.currentHoveredSat = o;
      const h = s ? `${s.altitudeKm} km` : `${o.latLonAlt.altKm.toFixed(0)} km`, d = s ? `${s.inclinationDeg.toFixed(1)}° SSPO` : "SSPO";
      this.tooltipElem.innerHTML = `
        <div class="oxg-tooltip-title">Customer Satellite (${o.id})</div>
        <div class="oxg-tooltip-detail">${h} • ${d}</div>
      `, this.tooltipElem.style.left = `${r + 12}px`, this.tooltipElem.style.top = `${a - 12}px`, this.tooltipElem.classList.remove("hidden");
    } else
      this.hideTooltip();
  }
  hideTooltip() {
    this.tooltipElem && this.tooltipElem.classList.add("hidden"), this.currentHoveredSat = null;
  }
  clear() {
    for (; this.customerSprites.length > 0; ) {
      const e = this.customerSprites.pop();
      e.material.dispose(), this.group.remove(e);
    }
    for (; this.relaySprites.length > 0; ) {
      const e = this.relaySprites.pop();
      e.material.dispose(), this.group.remove(e);
    }
    this.hideTooltip();
  }
}
function pv(i) {
  const e = document.createElement("canvas");
  e.width = 384, e.height = 80;
  const t = e.getContext("2d");
  if (t) {
    t.clearRect(0, 0, 384, 80), t.fillStyle = "rgba(2, 6, 18, 0.85)", t.strokeStyle = "rgba(255, 255, 255, 0.4)", t.lineWidth = 3;
    const a = 8, o = 8, l = 368, c = 64, u = 16;
    t.beginPath(), t.moveTo(a + u, o), t.arcTo(a + l, o, a + l, o + c, u), t.arcTo(a + l, o + c, a, o + c, u), t.arcTo(a, o + c, a, o, u), t.arcTo(a, o, a + l, o, u), t.closePath(), t.fill(), t.stroke(), t.fillStyle = "#ffffff", t.font = "Bold 28px system-ui, -apple-system, sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(i, 192, 40);
  }
  const n = new Ns(e);
  n.colorSpace = It;
  const s = new Us({
    map: n,
    transparent: !0,
    depthTest: !1
  }), r = new Lr(s);
  return r.scale.set(0.18, 0.038, 1), r;
}
class mv {
  constructor(e) {
    Z(this, "group");
    Z(this, "stationItems", []);
    Z(this, "stationTexture");
    Z(this, "tooltipElem", null);
    Z(this, "showStations", !1);
    Z(this, "showLabels", !1);
    this.group = new un(), e.add(this.group), this.stationTexture = this.createCircleInSquareTexture(), this.tooltipElem = document.createElement("div"), this.tooltipElem.className = "oxg-sat-tooltip hidden", document.body.appendChild(this.tooltipElem);
  }
  /**
   * Canvas texture generating crisp circle-within-square shape for ground station markers
   */
  createCircleInSquareTexture() {
    const e = document.createElement("canvas");
    e.width = 64, e.height = 64;
    const t = e.getContext("2d");
    t.clearRect(0, 0, 64, 64), t.strokeStyle = "#ffffff", t.fillStyle = "#ffffff", t.lineWidth = 5, t.strokeRect(8, 8, 48, 48), t.beginPath(), t.arc(32, 32, 11, 0, Math.PI * 2), t.closePath(), t.fill();
    const n = new Ns(e);
    return n.colorSpace = It, n.needsUpdate = !0, n;
  }
  updateGroundStations(e) {
    for (; this.group.children.length > 0; ) {
      const t = this.group.children[0];
      this.group.remove(t);
    }
    this.stationItems = [];
    for (const t of e) {
      if (!t.enabled) continue;
      const n = Mi(t.latDeg, t.lonDeg, 1.002), s = new Us({
        map: this.stationTexture,
        color: 16777215,
        transparent: !0,
        opacity: 0.95,
        depthTest: !0,
        depthWrite: !1,
        sizeAttenuation: !1,
        toneMapped: !1
      }), r = new Lr(s);
      r.position.copy(n);
      const a = 5.5 / window.innerHeight;
      r.scale.set(a, a, 1), this.group.add(r);
      const o = t.name.split("(")[0].trim(), l = pv(o), c = Mi(t.latDeg, t.lonDeg, 1.035);
      l.position.copy(c), this.group.add(l), this.stationItems.push({ id: t.id, config: t, markerSprite: r, labelSprite: l });
    }
  }
  setLayers(e, t) {
    this.showStations = e, this.showLabels = t;
  }
  /**
   * Per-frame update to compute horizon dot product and fade/hide markers & labels on far side or near limb.
   * dot(stationWorldNormal, toCamera) < 0.1 -> hidden, 0.1..0.3 -> fade in opacity.
   */
  update(e) {
    const t = new R(), n = e.position.clone(), s = 5.5 / window.innerHeight;
    for (const r of this.stationItems) {
      r.markerSprite.scale.set(s, s, 1), r.markerSprite.getWorldPosition(t);
      const a = t.clone().normalize(), o = n.clone().sub(t).normalize(), l = a.dot(o);
      let c = 0;
      if (l >= 0.3 ? c = 1 : l > 0.1 && (c = (l - 0.1) / 0.2), !this.showStations || c <= 1e-3 ? r.markerSprite.visible = !1 : (r.markerSprite.visible = !0, r.markerSprite.material.opacity = 0.9 * c), !this.showLabels || c <= 1e-3)
        r.labelSprite.visible = !1;
      else {
        r.labelSprite.visible = !0;
        const u = r.labelSprite.material;
        u.opacity = c;
      }
    }
  }
  /**
   * Handle mouse hover / tap for ground station tooltip displaying Name & Country
   */
  handleMouseMove(e, t) {
    if (!this.showStations || this.stationItems.length === 0) {
      this.hideTooltip();
      return;
    }
    const n = e.clientX, s = e.clientY;
    let r = null, o = "ontouchstart" in window || navigator.maxTouchPoints > 0 ? 36 : 20;
    const l = new R(), c = new R();
    for (const u of this.stationItems) {
      if (!u.markerSprite.visible || (u.markerSprite.getWorldPosition(c), l.copy(c).project(t), l.z >= 1)) continue;
      const h = (l.x * 0.5 + 0.5) * window.innerWidth, d = (-(l.y * 0.5) + 0.5) * window.innerHeight, p = Math.hypot(h - n, d - s);
      p < o && (o = p, r = u);
    }
    if (r && this.tooltipElem) {
      const u = r.config, h = u.name.split("(")[0].trim(), d = u.country ?? (u.isIndiaStation ? "India" : "Ground Station");
      this.tooltipElem.innerHTML = `
        <div class="oxg-tooltip-title">${h}</div>
        <div class="oxg-tooltip-detail">${d}</div>
      `, this.tooltipElem.style.left = `${n + 12}px`, this.tooltipElem.style.top = `${s - 12}px`, this.tooltipElem.classList.remove("hidden");
    } else
      this.hideTooltip();
  }
  hideTooltip() {
    this.tooltipElem && this.tooltipElem.classList.add("hidden");
  }
}
class gv {
  constructor(e) {
    Z(this, "group");
    Z(this, "linkPairs", /* @__PURE__ */ new Map());
    this.group = new un(), e.add(this.group), typeof window < "u" && window.addEventListener("resize", () => this.onResize());
  }
  onResize() {
    if (typeof window > "u") return;
    const e = window.innerWidth, t = window.innerHeight;
    for (const n of this.linkPairs.values())
      n.line.material.resolution.set(e, t);
  }
  updateActiveLinks(e, t, n, s, r, a = 0.016) {
    const o = /* @__PURE__ */ new Map();
    t.forEach((h) => o.set(h.id, On(h.ecef))), n.forEach((h) => o.set(h.id, On(h.ecef))), s.forEach((h) => {
      const d = Mi(h.latDeg, h.lonDeg, 1.002);
      o.set(h.id, d);
    });
    const l = /* @__PURE__ */ new Set(), c = 0.6, u = a / 0.2;
    for (const h of e) {
      const d = o.get(h.fromId), p = o.get(h.toId);
      if (!d || !p) continue;
      const _ = `${h.fromId}_${h.toId}`, g = `${h.toId}_${h.fromId}`, m = h.fromId < h.toId ? _ : g, f = h.fromId.startsWith("cust-") || h.toId.startsWith("cust-"), E = h.fromId.startsWith("relay-") && h.toId.startsWith("relay-");
      let M = !1, v = f ? 16717636 : 11583173, N = 1;
      if (E) {
        const A = h.fromId.split("-"), P = h.toId.split("-");
        if (M = A[1] !== P[1], M)
          v = 11583173, N = 1.5;
        else
          continue;
      }
      l.add(m);
      let w = this.linkPairs.get(m);
      if (w)
        w.line.material.color.setHex(v), w.line.material.linewidth = N;
      else {
        const A = new Bs(), P = new hs({
          color: v,
          linewidth: N,
          resolution: new Le(window.innerWidth, window.innerHeight),
          transparent: !0,
          opacity: c,
          depthTest: !0,
          depthWrite: !1
        }), b = new Gr(A, P);
        this.group.add(b), w = {
          key: m,
          fromId: h.fromId,
          toId: h.toId,
          line: b,
          currentOpacity: c,
          isRelayToRelay: E
        }, this.linkPairs.set(m, w);
      }
    }
    for (const [h, d] of this.linkPairs.entries()) {
      const _ = l.has(h) ? c : 0;
      if (d.currentOpacity < _ ? d.currentOpacity = Math.min(_, d.currentOpacity + c * u) : d.currentOpacity > _ && (d.currentOpacity = Math.max(_, d.currentOpacity - c * u)), d.currentOpacity <= 1e-3)
        d.line.visible = !1;
      else {
        const g = o.get(d.fromId), m = o.get(d.toId);
        if (g && m) {
          d.line.visible = !0, d.line.geometry.setPositions([g.x, g.y, g.z, m.x, m.y, m.z]), d.line.computeLineDistances();
          const f = typeof window < "u" ? window.innerWidth : 1920, E = typeof window < "u" ? window.innerHeight : 1080;
          d.line.material.opacity = d.currentOpacity, d.line.material.resolution.set(f, E);
        } else
          d.line.visible = !1;
      }
    }
  }
  setVisible(e) {
    this.group.visible = e;
  }
  clear() {
    for (const e of this.linkPairs.values())
      e.line.geometry.dispose(), e.line.material.dispose(), this.group.remove(e.line);
    this.linkPairs.clear();
  }
}
class _v {
  constructor(e) {
    Z(this, "group");
    Z(this, "linkPairs", /* @__PURE__ */ new Map());
    this.group = new un(), e.add(this.group), typeof window < "u" && window.addEventListener("resize", () => this.onResize());
  }
  onResize() {
    if (!(typeof window > "u"))
      for (const e of this.linkPairs.values())
        e.line.material.resolution.set(window.innerWidth, window.innerHeight);
  }
  /**
   * Per-frame update for direct ground-to-satellite link lines (Customer and Relay satellites).
   * Renders a thin white line (#FFFFFF, opacity ~0.6, width 1px) between satellite
   * and any enabled ground station where elevation >= links.elevationMaskDeg.
   * Smoothly fades in/out over ~0.2s when feasibility changes.
   */
  updateGroundLinks(e, t, n, s = 0.016, r = !0, a = []) {
    const o = t.filter((_) => _.enabled), l = a ?? [], c = 0.6, u = s / 0.2, h = [...e, ...l], d = /* @__PURE__ */ new Map();
    h.forEach((_) => d.set(_.id, On(_.ecef))), o.forEach((_) => d.set(_.id, Mi(_.latDeg, _.lonDeg, 1.002)));
    const p = /* @__PURE__ */ new Set();
    if (r) {
      for (const _ of h)
        for (const g of o) {
          const m = `${_.id}_${g.id}`;
          Qi(
            _.ecef,
            g,
            n.ground.maxRangeKm,
            n.ground.elevationMaskDeg
          ) && (p.add(m), this.ensureLinkPair(m, _.id, g.id));
        }
      for (const _ of e)
        for (const g of l) {
          const m = `${_.id}_${g.id}`;
          Ao(
            _.ecef,
            g.ecef,
            n.customerToRelay.maxRangeKm,
            n.customerToRelay.antennaHalfAngleDeg,
            n.earthGrazeMarginKm,
            n.customerToRelay.steerable
          ) && (p.add(m), this.ensureLinkPair(m, _.id, g.id));
        }
    }
    for (const [_, g] of this.linkPairs.entries()) {
      const f = p.has(_) ? c : 0;
      if (g.currentOpacity < f ? g.currentOpacity = Math.min(f, g.currentOpacity + c * u) : g.currentOpacity > f && (g.currentOpacity = Math.max(f, g.currentOpacity - c * u)), g.currentOpacity <= 1e-3)
        g.line.visible = !1;
      else {
        const E = d.get(g.satId), M = d.get(g.targetId);
        if (E && M) {
          g.line.visible = !0, g.line.geometry.setPositions([
            E.x,
            E.y,
            E.z,
            M.x,
            M.y,
            M.z
          ]), g.line.computeLineDistances();
          const v = typeof window < "u" ? window.innerWidth : 1920, N = typeof window < "u" ? window.innerHeight : 1080;
          g.line.material.opacity = g.currentOpacity, g.line.material.resolution.set(v, N);
        } else
          g.line.visible = !1;
      }
    }
  }
  ensureLinkPair(e, t, n) {
    if (!this.linkPairs.has(e)) {
      const r = t.startsWith("cust-") || n.startsWith("cust-") ? 16717636 : 11583173, a = typeof window < "u" ? window.innerWidth : 1920, o = typeof window < "u" ? window.innerHeight : 1080, l = new Bs(), c = new hs({
        color: r,
        linewidth: 1,
        // Thin 1px line
        resolution: new Le(a, o),
        transparent: !0,
        opacity: 0,
        depthTest: !0,
        depthWrite: !1
      }), u = new Gr(l, c);
      this.group.add(u), this.linkPairs.set(e, {
        key: e,
        satId: t,
        targetId: n,
        line: u,
        currentOpacity: 0
      });
    }
  }
  setVisible(e) {
    this.group.visible = e;
  }
  clear() {
    for (const e of this.linkPairs.values())
      e.line.geometry.dispose(), e.line.material.dispose(), this.group.remove(e.line);
    this.linkPairs.clear();
  }
}
function vv(i) {
  i.innerHTML = "";
}
class xv {
  constructor(e) {
    Z(this, "element");
    this.element = document.createElement("div"), this.element.className = "oxg-metrics-dock", e.appendChild(this.element);
  }
  updateMetrics(e, t) {
    const n = (s) => {
      if (s < 60) return `${Math.round(s)}s`;
      const r = s / 60;
      return r < 60 ? `${r.toFixed(1)}m` : `${(r / 60).toFixed(1)}h`;
    };
    this.element.innerHTML = `
      <div class="oxg-kpi-bar">
        <!-- Metric 1: % In Contact -->
        <div class="oxg-kpi-card">
          <span class="oxg-kpi-label">IN CONTACT</span>
          <div class="oxg-kpi-main">
            <span class="oxg-kpi-val">${e.inContactPercent.toFixed(1)}%</span>
            <span class="oxg-kpi-sub">${t.inContactPercent.toFixed(1)}% ground</span>
          </div>
        </div>

        <!-- Metric 2: Average Wait -->
        <div class="oxg-kpi-card" title="Expected wait time = Σ(gap²)/(2T)">
          <span class="oxg-kpi-label">AVG WAIT</span>
          <div class="oxg-kpi-main">
            <span class="oxg-kpi-val">${n(e.averageWaitSec)}</span>
            <span class="oxg-kpi-sub">${n(t.averageWaitSec)} ground</span>
          </div>
        </div>

        <!-- Metric 3: Average Session -->
        <div class="oxg-kpi-card">
          <span class="oxg-kpi-label">AVG SESSION</span>
          <div class="oxg-kpi-main">
            <span class="oxg-kpi-val">${n(e.averageSessionSec)}</span>
            <span class="oxg-kpi-sub">${n(t.averageSessionSec)} ground</span>
          </div>
        </div>

        <!-- Metric 4: Worst Wait -->
        <div class="oxg-kpi-card">
          <span class="oxg-kpi-label">WORST WAIT</span>
          <div class="oxg-kpi-main">
            <span class="oxg-kpi-val">${n(e.worstWaitSec)}</span>
            <span class="oxg-kpi-sub">${n(t.worstWaitSec)} ground</span>
          </div>
        </div>
      </div>
    `;
  }
}
class yv {
  constructor(e, t, n, s = yd) {
    Z(this, "element");
    Z(this, "config");
    Z(this, "uiFlags");
    Z(this, "isPlaying", !0);
    Z(this, "speedMultiplier", 600);
    // 600x default
    Z(this, "currentTSec", 0);
    Z(this, "isMobileExpanded", !1);
    Z(this, "onConfigChangeCb");
    Z(this, "onPlaybackChangeCb");
    Z(this, "onScrubCb");
    Z(this, "onResetViewCb");
    this.config = t, this.uiFlags = s, this.onConfigChangeCb = n.onConfigChange, this.onPlaybackChangeCb = n.onPlaybackChange, this.onScrubCb = n.onScrub, this.onResetViewCb = n.onResetView, this.element = document.createElement("div"), this.element.className = "oxg-controls-dock", e.appendChild(this.element), this.render();
  }
  setConfig(e) {
    this.config = e, this.render();
  }
  updateTime(e) {
    this.currentTSec = e;
    const t = this.element.querySelector("#oxg-scrubber"), n = this.element.querySelector("#oxg-time-display");
    if (t && (t.value = e.toString()), n) {
      const s = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60);
      n.textContent = `${String(s).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
    }
  }
  render() {
    this.element.innerHTML = `
      <div class="oxg-dock-wrapper oxg-vertical-cluster ${this.isMobileExpanded ? "mobile-expanded" : ""}">
        <!-- Play / Pause Button (Top of Vertical Cluster) -->
        <button id="oxg-play-btn" class="oxg-icon-play-btn" title="Play / Pause (Spacebar)">
          ${this.isPlaying ? "⏸" : "▶"}
        </button>

        <!-- Speed Select Dropdown -->
        <select id="oxg-speed-select" class="oxg-pill-select oxg-cluster-item" title="Simulation Speed">
          ${this.config.sim.speedPresets.map(
      (e) => `<option value="${e}" ${e === this.speedMultiplier ? "selected" : ""}>${e === 600 ? "10m/s (600x)" : `${e}x`}</option>`
    ).join("")}
        </select>

        <!-- Timeline Scrubber -->
        <div class="oxg-scrubber-box oxg-cluster-item">
          <input type="range" id="oxg-scrubber" min="0" max="${this.config.sim.windowHours * 3600}" value="${this.currentTSec}" step="30" class="oxg-timeline-input" title="Time Scrubber" />
        </div>

        <!-- Time Readout Display -->
        <span id="oxg-time-display" class="oxg-time-str oxg-cluster-item">00:00</span>

        <!-- Reset View Icon Button (Below Playback Controls) -->
        <button id="btn-focus-india" class="oxg-icon-play-btn oxg-cluster-item oxg-reset-icon-btn" title="Reset Globe View">
          ↺
        </button>

        <!-- Mobile Expand Toggle (Visible on <768px only) -->
        <button id="oxg-mobile-expand-btn" class="oxg-mobile-expand-trigger" title="Toggle Playback Options">
          ${this.isMobileExpanded ? "✕" : "⚙"}
        </button>
      </div>
    `, this.bindEvents();
  }
  bindEvents() {
    const e = this.element.querySelector("#oxg-play-btn");
    e && e.addEventListener("click", () => {
      this.isPlaying = !this.isPlaying, e.textContent = this.isPlaying ? "⏸" : "▶", this.onPlaybackChangeCb && this.onPlaybackChangeCb(this.isPlaying, this.speedMultiplier);
    });
    const t = this.element.querySelector("#oxg-speed-select");
    t && t.addEventListener("change", () => {
      this.speedMultiplier = Number(t.value), this.onPlaybackChangeCb && this.onPlaybackChangeCb(this.isPlaying, this.speedMultiplier);
    });
    const n = this.element.querySelector("#oxg-scrubber");
    n && n.addEventListener("input", () => {
      const a = Number(n.value);
      this.currentTSec = a, this.onScrubCb && this.onScrubCb(a);
    });
    const s = this.element.querySelector("#btn-focus-india");
    s && s.addEventListener("click", () => {
      this.onResetViewCb && this.onResetViewCb();
    });
    const r = this.element.querySelector("#oxg-mobile-expand-btn");
    r && r.addEventListener("click", () => {
      this.isMobileExpanded = !this.isMobileExpanded, this.render();
    });
  }
}
class Sv {
  constructor(e) {
    Z(this, "element");
    Z(this, "isVisible", !1);
    this.element = document.createElement("div"), this.element.className = "oxg-drawer-panel hidden", e.appendChild(this.element);
  }
  toggle() {
    this.isVisible = !this.isVisible, this.isVisible ? this.element.classList.remove("hidden") : this.element.classList.add("hidden");
  }
  hide() {
    this.isVisible = !1, this.element.classList.add("hidden");
  }
  updateParameters(e, t) {
    const n = e.customerPresets.find((l) => l.id === e.activeCustomerPresetId) ?? e.customerPresets[0], s = e.rollout.find((l) => l.id === e.activeRolloutStageId) ?? e.rollout[0], r = e.relayPlanes.filter(
      (l) => s.enabledRelayPlaneIds.includes(l.id)
    );
    let a = "";
    for (const l of r) {
      const c = l.altitudeKm ?? e.relayAltitudeKm, u = (zr(c) / 60).toFixed(1), h = l.sunSynchronous ? hn(c).toFixed(1) : (l.inclinationDeg ?? 20).toFixed(1), d = L_(c, 5).toFixed(1), p = I_(c, 5).toFixed(0);
      a += `
        <div class="oxg-drawer-plane-item" style="border-left: 3px solid ${l.color}">
          <div class="oxg-plane-head">${l.name} (${l.satsInPlane} sats @ ${c}km)</div>
          <div class="oxg-plane-stats">
            <span>Period: ${u}m | Inc: ${h}° | Range: ${p}km | Footprint: ${d}°</span>
          </div>
        </div>
      `;
    }
    this.element.innerHTML = `
      <div class="oxg-drawer-card">
        <div class="oxg-drawer-header">
          <h3>SIMULATION PARAMETERS</h3>
          <button id="oxg-drawer-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-drawer-body">
          <div class="oxg-drawer-sec">
            <span class="oxg-sec-label">CUSTOMER MISSION</span>
            <p>${n.label} (${n.satCount} sats @ ${n.altitudeKm}km, ${n.planes} planes)</p>
          </div>

          <div class="oxg-drawer-sec">
            <span class="oxg-sec-label">OXG RELAY NETWORK</span>
            ${a}
          </div>

          <div class="oxg-drawer-sec">
            <span class="oxg-sec-label">GROUND STATIONS</span>
            <p>${e.groundStations.filter((l) => l.enabled).map((l) => l.name).join(", ")}</p>
          </div>

          ${t ? `
            <div class="oxg-drawer-sec">
              <span class="oxg-sec-label">PROPAGATION STATS</span>
              <p>States Propagated: ${t.orbitStatesPropagated.toLocaleString()}</p>
            </div>
          ` : ""}
        </div>
      </div>
    `;
    const o = this.element.querySelector("#oxg-drawer-close");
    o && o.addEventListener("click", () => this.hide());
  }
}
class bv {
  constructor(e) {
    Z(this, "modalOverlay");
    this.modalOverlay = document.createElement("div"), this.modalOverlay.className = "oxg-modal-overlay hidden", this.modalOverlay.innerHTML = `
      <div class="oxg-modal-card">
        <div class="oxg-modal-header">
          <h2>MODEL ASSUMPTIONS & PHYSICS SPECIFICATION</h2>
          <button id="oxg-modal-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-modal-body">
          <div class="oxg-assumption-block">
            <h3>1. Astrodynamics & Orbit Propagation</h3>
            <p><strong>Primary Propagator:</strong> Analytical Circular Keplerian model with J2 secular perturbations (WGS84 Earth radius (R_E = 6378.137	ext{ km}), (J_2 = 1.08263 	imes 10^{-3})).</p>
            <p><strong>Sun-Synchronous Orbits (SSO):</strong> SSO inclination is derived dynamically from altitude using first-order J2 nodal precession balance ((sim 97.8^circ) at 600 km, (sim 98.6^circ) at 800 km). Never hardcoded.</p>
            <p><strong>TLE Support:</strong> SGP4 propagation model integrated via <code>satellite.js</code> for TLE input strings.</p>
          </div>

          <div class="oxg-assumption-block">
            <h3>2. Link Feasibility & Line-of-Sight</h3>
            <p><strong>Ground Links:</strong> Feasible if satellite elevation (ge 5^circ) mask and range (le 3000	ext{ km}).</p>
            <p><strong>Cross-Links (Customer-to-Relay & Relay-to-Relay):</strong> Feasible if range (le) maxRangeKm, antenna steerability constraints met, and line-of-sight ray clears Earth's surface by at least <code>earthGrazeMarginKm = 100 km</code>.</p>
          </div>

          <div class="oxg-assumption-block">
            <h3>3. Time-Step Bisection Refinement</h3>
            <p>Base propagation step size is 30 seconds. Link visibility transitions detected between discrete steps are refined using bisection root-finding to (sim 1	ext{s}) accuracy to eliminate time-step aliasing.</p>
          </div>

          <div class="oxg-assumption-block">
            <h3>4. Headline Metrics Formulas</h3>
            <p><strong>In Contact %:</strong> (\frac{T_{	ext{contact}}}{T_{	ext{total}}} 	imes 100%)</p>
            <p><strong>Average Session:</strong> Mean duration of contiguous contact intervals.</p>
            <p><strong>Worst Wait Gap:</strong> Longest contiguous gap with no contact over the simulation window.</p>
            <p><strong>Average Wait (Expected Wait):</strong> Expected wait time until next contact from a random instant in time, calculated as:
               $$	ext{Average Wait} = \frac{sum_i 	ext{gap}_i^2}{2 T_{	ext{total}}}$$
            </p>
          </div>
        </div>
      </div>
    `, e.appendChild(this.modalOverlay);
    const t = this.modalOverlay.querySelector("#oxg-modal-close");
    t && t.addEventListener("click", () => this.hide()), this.modalOverlay.addEventListener("click", (n) => {
      n.target === this.modalOverlay && this.hide();
    });
  }
  show() {
    this.modalOverlay.classList.remove("hidden");
  }
  hide() {
    this.modalOverlay.classList.add("hidden");
  }
}
class Mv {
  constructor(e) {
    Z(this, "element");
    Z(this, "resultA", null);
    Z(this, "resultB", null);
    this.element = document.createElement("div"), this.element.className = "oxg-ab-compare-container hidden", e.appendChild(this.element);
  }
  setResults(e, t) {
    this.resultA = e, this.resultB = t, this.render();
  }
  show() {
    this.element.classList.remove("hidden");
  }
  hide() {
    this.element.classList.add("hidden");
  }
  render() {
    if (!this.resultA || !this.resultB) return;
    const e = this.resultA.metricsWithOXG, t = this.resultB.metricsWithOXG, n = (r) => r < 60 ? `${r.toFixed(0)}s` : `${(r / 60).toFixed(1)}m`;
    this.element.innerHTML = `
      <div class="oxg-ab-card">
        <div class="oxg-ab-header">
          <h3>A/B SCENARIO COMPARISON PANEL</h3>
          <button id="oxg-ab-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-ab-grid">
          <!-- Column A -->
          <div class="oxg-ab-col col-a">
            <h4>SCENARIO A: ${this.resultA.config.activeAltitudeScenario.toUpperCase()}</h4>
            <div class="oxg-ab-stat"><span>% In Contact:</span> <strong>${e.inContactPercent.toFixed(1)}%</strong></div>
            <div class="oxg-ab-stat"><span>Average Session:</span> <strong>${n(e.averageSessionSec)}</strong></div>
            <div class="oxg-ab-stat"><span>Worst Wait Gap:</span> <strong>${n(e.worstWaitSec)}</strong></div>
            <div class="oxg-ab-stat"><span>Average Wait:</span> <strong>${n(e.averageWaitSec)}</strong></div>
          </div>

          <!-- Column B -->
          <div class="oxg-ab-col col-b">
            <h4>SCENARIO B: ${this.resultB.config.activeAltitudeScenario.toUpperCase()}</h4>
            <div class="oxg-ab-stat"><span>% In Contact:</span> <strong>${t.inContactPercent.toFixed(1)}%</strong></div>
            <div class="oxg-ab-stat"><span>Average Session:</span> <strong>${n(t.averageSessionSec)}</strong></div>
            <div class="oxg-ab-stat"><span>Worst Wait Gap:</span> <strong>${n(t.worstWaitSec)}</strong></div>
            <div class="oxg-ab-stat"><span>Average Wait:</span> <strong>${n(t.averageWaitSec)}</strong></div>
          </div>
        </div>
      </div>
    `;
    const s = this.element.querySelector("#oxg-ab-close");
    s && s.addEventListener("click", () => this.hide());
  }
}
class Ev {
  constructor(e, t = "/api/request-simulation") {
    Z(this, "element");
    this.element = document.createElement("div"), this.element.className = "oxg-modal-overlay hidden", this.element.innerHTML = `
      <div class="oxg-modal-card oxg-cta-card">
        <div class="oxg-modal-header">
          <h2>RUN THIS FOR YOUR CONSTELLATION</h2>
          <button id="oxg-cta-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-modal-body">
          <p class="oxg-cta-intro">Request a custom OXG relay network latency and contact time analysis tailored to your satellite constellation parameters.</p>
          <form id="oxg-cta-form" class="oxg-cta-form">
            <div class="oxg-form-group">
              <label>Work Email *</label>
              <input type="email" required placeholder="operator@satellite.com" class="oxg-input" />
            </div>
            <div class="oxg-form-group">
              <label>Constellation Name / Operator</label>
              <input type="text" placeholder="e.g. EarthSat Constellation" class="oxg-input" />
            </div>
            <div class="oxg-form-row">
              <div class="oxg-form-group">
                <label>Number of Spacecraft</label>
                <input type="number" min="1" max="1000" value="12" class="oxg-input" />
              </div>
              <div class="oxg-form-group">
                <label>Target Altitude (km)</label>
                <input type="number" min="300" max="2000" value="550" class="oxg-input" />
              </div>
            </div>
            <div class="oxg-form-group">
              <label>Primary Operational Objectives</label>
              <textarea placeholder="e.g. In-orbit compute downlink, persistent SAR monitoring..." class="oxg-textarea"></textarea>
            </div>
            <button type="submit" class="oxg-btn-primary oxg-btn-submit">SUBMIT SIMULATION REQUEST 🚀</button>
          </form>
          <div id="oxg-cta-success" class="oxg-cta-success hidden">
            ✅ Thank you! Our orbital network team will contact you shortly with a tailored simulation report.
          </div>
        </div>
      </div>
    `, e.appendChild(this.element);
    const n = this.element.querySelector("#oxg-cta-close");
    n && n.addEventListener("click", () => this.hide());
    const s = this.element.querySelector("#oxg-cta-form");
    s && s.addEventListener("submit", (r) => {
      r.preventDefault();
      const a = this.element.querySelector("#oxg-cta-success");
      a && (s.classList.add("hidden"), a.classList.remove("hidden"));
    }), this.element.addEventListener("click", (r) => {
      r.target === this.element && this.hide();
    });
  }
  show() {
    this.element.classList.remove("hidden");
  }
  hide() {
    this.element.classList.add("hidden");
  }
}
class Tv {
  constructor(e, t, n) {
    Z(this, "element");
    Z(this, "onCustomOrbitAdd");
    this.onCustomOrbitAdd = n, this.element = document.createElement("div"), this.element.className = "oxg-modal-overlay hidden", this.element.innerHTML = `
      <div class="oxg-modal-card oxg-custom-orbit-card">
        <div class="oxg-modal-header">
          <h2>CUSTOM ORBIT & TLE INPUT (PHASE 2)</h2>
          <button id="oxg-custom-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-modal-body">
          <div class="oxg-tabs">
            <button id="tab-btn-params" class="oxg-tab-btn active">ORBIT PARAMETERS</button>
            <button id="tab-btn-tle" class="oxg-tab-btn">TLE PASTE</button>
            <button id="tab-btn-inorbit" class="oxg-tab-btn">IN-ORBIT COMPUTE</button>
          </div>

          <!-- Tab 1: Parameters Form -->
          <form id="oxg-custom-params-form" class="oxg-tab-content">
            <div class="oxg-form-group">
              <label>Constellation Label</label>
              <input type="text" id="cust-label" value="My Custom Fleet" class="oxg-input" />
            </div>
            <div class="oxg-form-row">
              <div class="oxg-form-group">
                <label>Number of Spacecraft</label>
                <input type="number" id="cust-sats" min="1" max="200" value="8" class="oxg-input" />
              </div>
              <div class="oxg-form-group">
                <label>Altitude (km)</label>
                <input type="number" id="cust-alt" min="300" max="2000" value="550" class="oxg-input" />
              </div>
            </div>
            <div class="oxg-form-row">
              <div class="oxg-form-group">
                <label>Inclination (deg)</label>
                <input type="number" id="cust-inc" min="0" max="180" step="0.1" value="53.0" class="oxg-input" />
              </div>
              <div class="oxg-form-group">
                <label>Number of Planes</label>
                <input type="number" id="cust-planes" min="1" max="20" value="2" class="oxg-input" />
              </div>
            </div>
            <button type="submit" class="oxg-btn-primary">APPLY CUSTOM CONSTELLATION 🛰️</button>
          </form>

          <!-- Tab 2: TLE Paste -->
          <div id="oxg-tab-tle-content" class="oxg-tab-content hidden">
            <div class="oxg-form-group">
              <label>Paste Two-Line Element (TLE) Set</label>
              <textarea id="tle-input" placeholder="1 25544U 98067A   24001.50000000 ...&#10;2 25544  51.6416 280.1234 ..." class="oxg-textarea tle-area"></textarea>
            </div>
            <div id="tle-error" class="oxg-error-msg hidden"></div>
            <button id="btn-parse-tle" class="oxg-btn-primary">LOAD TLE ORBIT 🚀</button>
          </div>

          <!-- Tab 3: In-Orbit Compute View -->
          <div id="oxg-tab-inorbit-content" class="oxg-tab-content hidden">
            <div class="oxg-inorbit-box">
              <h3>IN-ORBIT COMPUTE REDUCTION MODEL</h3>
              <p>Simulate onboard AI processing data reduction before RF downlink.</p>
              <div class="oxg-form-row">
                <div class="oxg-form-group">
                  <label>Raw Capture Rate (GB/orbit)</label>
                  <input type="number" value="100" class="oxg-input" />
                </div>
                <div class="oxg-form-group">
                  <label>Onboard AI Reduction (%)</label>
                  <input type="number" value="90" class="oxg-input" />
                </div>
              </div>
              <div class="oxg-compute-summary">
                <span>Net Downlink Requirement: <strong>10 GB/orbit</strong> (90% Bandwidth Savings)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `, e.appendChild(this.element), this.bindEvents();
  }
  show() {
    this.element.classList.remove("hidden");
  }
  hide() {
    this.element.classList.add("hidden");
  }
  bindEvents() {
    const e = this.element.querySelector("#oxg-custom-close");
    e && e.addEventListener("click", () => this.hide());
    const t = this.element.querySelector("#tab-btn-params"), n = this.element.querySelector("#tab-btn-tle"), s = this.element.querySelector("#tab-btn-inorbit"), r = this.element.querySelector("#oxg-custom-params-form"), a = this.element.querySelector("#oxg-tab-tle-content"), o = this.element.querySelector("#oxg-tab-inorbit-content"), l = (u, h) => {
      [t, n, s].forEach((d) => d == null ? void 0 : d.classList.remove("active")), [r, a, o].forEach((d) => d == null ? void 0 : d.classList.add("hidden")), u.classList.add("active"), h.classList.remove("hidden");
    };
    t && r && t.addEventListener("click", () => l(t, r)), n && a && n.addEventListener("click", () => l(n, a)), s && o && s.addEventListener("click", () => l(s, o));
    const c = this.element.querySelector("#oxg-custom-params-form");
    c && c.addEventListener("submit", (u) => {
      u.preventDefault();
      const h = this.element.querySelector("#cust-label").value, d = Number(this.element.querySelector("#cust-sats").value), p = Number(this.element.querySelector("#cust-alt").value), _ = Number(this.element.querySelector("#cust-inc").value), g = Number(this.element.querySelector("#cust-planes").value), m = {
        id: `custom_${Date.now()}`,
        label: h,
        satCount: d,
        altitudeKm: p,
        inclinationDeg: _,
        planes: g,
        raanSpreadDeg: 360
      };
      this.onCustomOrbitAdd && this.onCustomOrbitAdd(m), this.hide();
    });
  }
}
function Ic(i, e, t) {
  var v, N, w, A, P, b, y, C;
  const n = new Wo(), s = (((v = i.sim) == null ? void 0 : v.windowHours) ?? 24) * 3600, r = ((N = i.sim) == null ? void 0 : N.stepSeconds) ?? 30, a = Math.floor(s / r), o = JSON.parse(JSON.stringify(i));
  e !== void 0 && (o.raanOffsetDeg = e), t !== void 0 && (o.phaseOffsetDeg = t);
  const l = Vr(o), c = l.find((H) => H.id === "p2"), u = l.find((H) => H.id === "p3"), h = ((w = i.groundStations) == null ? void 0 : w.find((H) => H.id === "bengaluru")) ?? {
    latDeg: 13.03,
    lonDeg: 77.52,
    minElevationDeg: 5,
    enabled: !0
  }, d = ((P = (A = i.links) == null ? void 0 : A.ground) == null ? void 0 : P.elevationMaskDeg) ?? 5, p = ((y = (b = i.links) == null ? void 0 : b.ground) == null ? void 0 : y.maxRangeKm) ?? 3e3;
  let _ = 0, g = 0, m = 0;
  for (let H = 0; H <= a; H++) {
    const O = H * r, G = us(O, (C = i.sim) == null ? void 0 : C.epochUTC);
    let $ = !1;
    for (let B = 0; B < c.satsInPlane; B++) {
      const te = n.propagate(c, B, O), W = ri(te, G);
      if (Qi(W, h, p, d)) {
        $ = !0;
        break;
      }
    }
    if (!$)
      for (let B = 0; B < u.satsInPlane; B++) {
        const te = n.propagate(u, B, O), W = ri(te, G);
        if (Qi(W, h, p, d)) {
          $ = !0;
          break;
        }
      }
    $ ? (_++, g > m && (m = g), g = 0) : g++;
  }
  g > m && (m = g);
  const f = a + 1, E = _ / f * 100, M = m * r / 60;
  return {
    coveragePercent: E,
    longestGapMinutes: M,
    totalSteps: f,
    coveredSteps: _
  };
}
class wv {
  constructor(e, t) {
    Z(this, "container");
    Z(this, "globeView");
    Z(this, "isVisible", !1);
    this.globeView = t;
    const n = new URLSearchParams(window.location.search);
    this.isVisible = n.has("debug") && n.get("debug") === "1", this.container = document.createElement("div"), this.container.className = "oxg-debug-panel", this.isVisible || (this.container.style.display = "none"), e.appendChild(this.container), this.render();
  }
  render() {
    var h, d, p, _;
    const e = this.globeView.config, t = e.layers, n = (h = window.app) == null ? void 0 : h.config, s = ((p = (d = n == null ? void 0 : n.links) == null ? void 0 : d.ground) == null ? void 0 : p.elevationMaskDeg) ?? 5, r = (n == null ? void 0 : n.raanOffsetDeg) ?? 30, a = (n == null ? void 0 : n.phaseOffsetDeg) ?? 90, o = n ? Ic(n, r, a) : { coveragePercent: 65.9, longestGapMinutes: 392.5 }, l = ((_ = n == null ? void 0 : n.relayPlanes) == null ? void 0 : _[0]) ?? {
      altitudeKm: 800,
      satsInPlane: 14,
      ltanHours: 6
    }, c = hn(l.altitudeKm), u = zr(l.altitudeKm) / 60;
    this.container.innerHTML = `
      <div class="oxg-debug-header">
        <span>🛠️ Globe Shader & Layer Debug</span>
        <button id="oxg-debug-close" class="oxg-debug-close-btn">&times;</button>
      </div>

      <div class="oxg-debug-body">
        <div class="oxg-debug-section-title">Overlay Layers</div>
        
        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-stations">Ground Stations</label>
          <input type="checkbox" id="lyr-stations" ${t.stations ? "checked" : ""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-station-labels">Station Labels</label>
          <input type="checkbox" id="lyr-station-labels" ${t.stationLabels ? "checked" : ""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-orbit-lines">Orbit Lines</label>
          <input type="checkbox" id="lyr-orbit-lines" ${t.orbitLines ? "checked" : ""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-relay-sats">Relay Satellites</label>
          <input type="checkbox" id="lyr-relay-sats" ${t.relaySatellites ? "checked" : ""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-relay-links">Relay Ring Links</label>
          <input type="checkbox" id="lyr-relay-links" ${t.relayLinks ? "checked" : ""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-customer-sats">Customer Satellites</label>
          <input type="checkbox" id="lyr-customer-sats" ${t.customerSatellites ? "checked" : ""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-links">Link Beams</label>
          <input type="checkbox" id="lyr-links" ${t.links ? "checked" : ""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-ground-links">Direct Ground Links</label>
          <input type="checkbox" id="lyr-ground-links" ${t.groundLinks ? "checked" : ""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-geo-debug">Geo Debug Markers</label>
          <input type="checkbox" id="lyr-geo-debug" ${t.geoDebugMarkers ? "checked" : ""}>
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">OXG Ring (P1)</div>

        <div class="oxg-debug-row">
          <label>Altitude (km): <span id="val-p1-alt">${l.altitudeKm}</span></label>
          <input type="range" id="dbg-p1-alt" min="500" max="1000" step="10" value="${l.altitudeKm}">
        </div>

        <div class="oxg-debug-row">
          <label>Satellites in Plane: <span id="val-p1-sats">${l.satsInPlane}</span></label>
          <input type="range" id="dbg-p1-sats" min="4" max="30" step="1" value="${l.satsInPlane}">
        </div>

        <div class="oxg-debug-row">
          <label>Orbit LTAN</label>
          <select id="dbg-p1-ltan">
            <option value="6.0" ${l.ltanHours === 6 ? "selected" : ""}>Dawn (06:00)</option>
            <option value="18.0" ${l.ltanHours === 18 ? "selected" : ""}>Dusk (18:00)</option>
            <option value="12.0" ${l.ltanHours === 12 ? "selected" : ""}>Noon (12:00)</option>
            <option value="0.0" ${l.ltanHours === 0 ? "selected" : ""}>Midnight (00:00)</option>
          </select>
        </div>

        <div class="oxg-debug-row oxg-debug-color-row">
          <label>Marker Color</label>
          <input type="color" id="dbg-p1-color" value="${e.relaySat.color}">
        </div>

        <div class="oxg-debug-row">
          <label>Marker Size (px): <span id="val-p1-satsize">${e.relaySat.sizePx}</span></label>
          <input type="range" id="dbg-p1-satsize" min="2" max="15" step="0.5" value="${e.relaySat.sizePx}">
        </div>

        <div class="oxg-debug-row">
          <label>Glow Strength: <span id="val-p1-glow">${e.relaySat.glowStrength}</span></label>
          <input type="range" id="dbg-p1-glow" min="0.5" max="3.0" step="0.1" value="${e.relaySat.glowStrength}">
        </div>

        <div class="oxg-debug-row">
          <label>Link Width (px): <span id="val-p1-linkwidth">${e.relayLink.widthPx}</span></label>
          <input type="range" id="dbg-p1-linkwidth" min="0.5" max="5.0" step="0.1" value="${e.relayLink.widthPx}">
        </div>

        <div class="oxg-debug-row">
          <label>Link Opacity: <span id="val-p1-linkopacity">${e.relayLink.opacity}</span></label>
          <input type="range" id="dbg-p1-linkopacity" min="0.1" max="1.0" step="0.05" value="${e.relayLink.opacity}">
        </div>

        <div class="oxg-debug-row">
          <label>Computed Inclination:</label>
          <span id="val-p1-inc" style="font-weight: 600; color: #B0BEC5;">${c.toFixed(1)}°</span>
        </div>

        <div class="oxg-debug-row">
          <label>Orbital Period:</label>
          <span id="val-p1-period" style="font-weight: 600; color: #B0BEC5;">${u.toFixed(1)} min</span>
        </div>

        <div class="oxg-debug-row">
          <label>Normal vs Sun Angle:</label>
          <span id="val-p1-sun-angle" style="font-weight: 600; color: #B0BEC5;">90.0°</span>
        </div>

        <div class="oxg-debug-row">
          <button id="btn-sun-view" class="oxg-debug-btn-primary" style="margin-top: 4px; width: 100%;">☀️ Sun View Camera</button>
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">Customer Orbit Arc & Marker</div>

        <div class="oxg-debug-row">
          <label>Trail Behind (°): <span id="val-behind">${e.orbitArc.behindDeg}</span></label>
          <input type="range" id="dbg-behind" min="0" max="180" step="1" value="${e.orbitArc.behindDeg}">
        </div>

        <div class="oxg-debug-row">
          <label>Lead Ahead (°): <span id="val-ahead">${e.orbitArc.aheadDeg}</span></label>
          <input type="range" id="dbg-ahead" min="0" max="90" step="1" value="${e.orbitArc.aheadDeg}">
        </div>

        <div class="oxg-debug-row oxg-debug-color-row">
          <label>Arc Color</label>
          <input type="color" id="dbg-arccolor" value="${e.orbitArc.color}">
        </div>

        <div class="oxg-debug-row">
          <label>Arc Width (px): <span id="val-arcwidth">${e.orbitArc.widthPx}</span></label>
          <input type="range" id="dbg-arcwidth" min="0.5" max="5.0" step="0.5" value="${e.orbitArc.widthPx}">
        </div>

        <div class="oxg-debug-row">
          <label>Arc Max Opacity: <span id="val-arcopacity">${e.orbitArc.maxOpacity}</span></label>
          <input type="range" id="dbg-arcopacity" min="0.1" max="1.0" step="0.05" value="${e.orbitArc.maxOpacity}">
        </div>

        <div class="oxg-debug-row oxg-debug-color-row">
          <label>Marker Color</label>
          <input type="color" id="dbg-satcolor" value="${e.customerSat.color}">
        </div>

        <div class="oxg-debug-row">
          <label>Marker Size (px): <span id="val-satsize">${e.customerSat.sizePx}</span></label>
          <input type="range" id="dbg-satsize" min="2" max="20" step="1" value="${e.customerSat.sizePx}">
        </div>

        <div class="oxg-debug-row">
          <label>Glow Scale: <span id="val-glowsize">${e.customerSat.glowSize}</span></label>
          <input type="range" id="dbg-glowsize" min="0.5" max="4.0" step="0.1" value="${e.customerSat.glowSize}">
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">Ground Link Feasibility</div>

        <div class="oxg-debug-row">
          <label>Elevation Mask (°): <span id="val-elev-mask">${s}</span></label>
          <input type="range" id="dbg-elev-mask" min="3" max="15" step="0.5" value="${s}">
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">India Dual-Ring Coverage (P2+P3)</div>

        <div class="oxg-debug-row">
          <label>RAAN Offset (°): <span id="val-raan-offset">${r}</span></label>
          <input type="range" id="dbg-raan-offset" min="0" max="60" step="1" value="${r}">
        </div>

        <div class="oxg-debug-row">
          <label>Phase Offset (°): <span id="val-phase-offset">${a}</span></label>
          <input type="range" id="dbg-phase-offset" min="0" max="180" step="1" value="${a}">
        </div>

        <div class="oxg-debug-row">
          <label>Bengaluru Coverage:</label>
          <span id="val-bengaluru-cov" style="font-weight: 600; color: #FF1744;">${o.coveragePercent.toFixed(1)}%</span>
        </div>

        <div class="oxg-debug-row">
          <label>Longest Gap:</label>
          <span id="val-bengaluru-gap" style="font-weight: 600; color: #FF6B35;">${o.longestGapMinutes.toFixed(1)} min</span>
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">Shader & Lighting</div>

        <div class="oxg-debug-row">
          <label>Lighting Mode</label>
          <select id="dbg-mode">
            <option value="sun" ${e.lightingMode === "sun" ? "selected" : ""}>sun (physical)</option>
            <option value="viewRelative" ${e.lightingMode === "viewRelative" ? "selected" : ""}>viewRelative</option>
          </select>
        </div>

        <div class="oxg-debug-row">
          <label>Azimuth (°): <span id="val-az">${e.azimuthDeg}</span></label>
          <input type="range" id="dbg-az" min="-180" max="180" step="1" value="${e.azimuthDeg}">
        </div>

        <div class="oxg-debug-row">
          <label>Elevation (°): <span id="val-el">${e.elevationDeg}</span></label>
          <input type="range" id="dbg-el" min="-90" max="90" step="1" value="${e.elevationDeg}">
        </div>

        <div class="oxg-debug-row">
          <label>Terminator Width: <span id="val-twidth">${e.terminatorWidth}</span></label>
          <input type="range" id="dbg-twidth" min="0.2" max="3.0" step="0.1" value="${e.terminatorWidth}">
        </div>

        <div class="oxg-debug-row">
          <label>Terminator Power: <span id="val-tpow">${e.terminatorPower}</span></label>
          <input type="range" id="dbg-tpow" min="0.5" max="3.0" step="0.1" value="${e.terminatorPower}">
        </div>

        <div class="oxg-debug-row">
          <label>Terminator Tint Str: <span id="val-ttint">${e.terminatorTint}</span></label>
          <input type="range" id="dbg-ttint" min="0.0" max="1.0" step="0.05" value="${e.terminatorTint}">
        </div>

        <div class="oxg-debug-row oxg-debug-color-row">
          <label>Terminator Tint Color</label>
          <input type="color" id="dbg-ttintcolor" value="${e.terminatorTintColor}">
        </div>

        <div class="oxg-debug-row">
          <label>Brightness: <span id="val-bright">${e.earthBrightness}</span></label>
          <input type="range" id="dbg-bright" min="0.5" max="2.5" step="0.05" value="${e.earthBrightness}">
        </div>

        <div class="oxg-debug-row">
          <label>Saturation: <span id="val-sat">${e.earthSaturation}</span></label>
          <input type="range" id="dbg-sat" min="0.1" max="2.0" step="0.05" value="${e.earthSaturation}">
        </div>

        <div class="oxg-debug-row">
          <label>Contrast: <span id="val-contrast">${e.earthContrast}</span></label>
          <input type="range" id="dbg-contrast" min="0.5" max="1.5" step="0.02" value="${e.earthContrast}">
        </div>

        <div class="oxg-debug-row">
          <label>Ocean Lift: <span id="val-lift">${e.oceanLift}</span></label>
          <input type="range" id="dbg-lift" min="0.0" max="1.0" step="0.05" value="${e.oceanLift}">
        </div>

        <div class="oxg-debug-row">
          <label>Glint Strength: <span id="val-glint">${e.glintStrength}</span></label>
          <input type="range" id="dbg-glint" min="0.0" max="1.0" step="0.05" value="${e.glintStrength}">
        </div>

        <div class="oxg-debug-row">
          <label>Surface Haze: <span id="val-haze">${e.surfaceHaze}</span></label>
          <input type="range" id="dbg-haze" min="0.0" max="1.0" step="0.05" value="${e.surfaceHaze}">
        </div>

        <div class="oxg-debug-row">
          <label>Night Boost: <span id="val-nboost">${e.nightBoost}</span></label>
          <input type="range" id="dbg-nboost" min="0.1" max="3.0" step="0.1" value="${e.nightBoost}">
        </div>

        <div class="oxg-debug-row">
          <label>Night Ambient: <span id="val-namb">${e.nightAmbient}</span></label>
          <input type="range" id="dbg-namb" min="0.0" max="1.0" step="0.05" value="${e.nightAmbient}">
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="dbg-mask">Show Ocean Mask Debug</label>
          <input type="checkbox" id="dbg-mask" ${e.showOceanMask ? "checked" : ""}>
        </div>

        <div class="oxg-debug-actions">
          <button id="oxg-debug-copy-btn" class="oxg-debug-btn-primary">📋 Copy Config (JSON)</button>
        </div>
      </div>
    `, this.bindEvents();
  }
  bindEvents() {
    const e = this.container.querySelector("#oxg-debug-close");
    e && e.addEventListener("click", () => {
      this.container.style.display = "none";
    });
    const t = this.globeView.config, n = t.layers, s = (Y, Q) => {
      const oe = this.container.querySelector(`#${Y}`);
      oe && oe.addEventListener("change", () => {
        n[Q] = oe.checked;
      });
    };
    s("lyr-stations", "stations"), s("lyr-station-labels", "stationLabels"), s("lyr-orbit-lines", "orbitLines"), s("lyr-relay-sats", "relaySatellites"), s("lyr-relay-links", "relayLinks"), s("lyr-customer-sats", "customerSatellites"), s("lyr-links", "links"), s("lyr-ground-links", "groundLinks"), s("lyr-geo-debug", "geoDebugMarkers");
    const r = this.container.querySelector("#dbg-elev-mask"), a = this.container.querySelector("#val-elev-mask");
    r && a && r.addEventListener("input", () => {
      a.textContent = r.value;
      const Y = window.app;
      Y && Y.config && Y.config.links && Y.config.links.ground && (Y.config.links.ground.elevationMaskDeg = Number(r.value), Y.onConfigChange(Y.config), p());
    });
    const o = this.container.querySelector("#dbg-raan-offset"), l = this.container.querySelector("#val-raan-offset"), c = this.container.querySelector("#dbg-phase-offset"), u = this.container.querySelector("#val-phase-offset"), h = this.container.querySelector("#val-bengaluru-cov"), d = this.container.querySelector("#val-bengaluru-gap"), p = () => {
      const Y = window.app;
      if (!(Y != null && Y.config)) return;
      const Q = o ? Number(o.value) : Y.config.raanOffsetDeg ?? 30, oe = c ? Number(c.value) : Y.config.phaseOffsetDeg ?? 90;
      if (Y.config.raanOffsetDeg = Q, Y.config.phaseOffsetDeg = oe, Y.config.relayPlanes) {
        const Re = Y.config.relayPlanes.find((qe) => qe.id === "p3");
        Re && (Re.raanDeg = Q, Re.phasingDeg = oe);
      }
      const _e = Ic(Y.config, Q, oe);
      l && (l.textContent = Q.toString()), u && (u.textContent = oe.toString()), h && (h.textContent = `${_e.coveragePercent.toFixed(1)}%`), d && (d.textContent = `${_e.longestGapMinutes.toFixed(1)} min`), Y.onConfigChange(Y.config);
    };
    o && o.addEventListener("input", p), c && c.addEventListener("input", p);
    const _ = this.container.querySelector("#dbg-p1-alt"), g = this.container.querySelector("#val-p1-alt"), m = this.container.querySelector("#dbg-p1-sats"), f = this.container.querySelector("#val-p1-sats"), E = this.container.querySelector("#dbg-p1-ltan"), M = this.container.querySelector("#val-p1-inc"), v = this.container.querySelector("#val-p1-period"), N = (Y) => {
      M && (M.textContent = `${hn(Y).toFixed(1)}°`), v && (v.textContent = `${(zr(Y) / 60).toFixed(1)} min`);
    }, w = () => {
      const Y = window.app;
      if (Y && Y.config && Y.config.relayPlanes && Y.config.relayPlanes[0]) {
        const Q = Y.config.relayPlanes[0];
        _ && (Q.altitudeKm = Number(_.value)), m && (Q.satsInPlane = Number(m.value), Q.phasingDeg = 360 / Q.satsInPlane), E && (Q.ltanHours = Number(E.value)), Q.inclinationDeg = hn(Q.altitudeKm), N(Q.altitudeKm), Y.onConfigChange(Y.config);
      }
    };
    _ && g && _.addEventListener("input", () => {
      g.textContent = _.value, w();
    }), m && f && m.addEventListener("input", () => {
      f.textContent = m.value, w();
    }), E && E.addEventListener("change", () => {
      w();
    });
    const A = this.container.querySelector("#dbg-p1-color");
    A && A.addEventListener("input", () => {
      var Q, oe;
      t.relaySat.color = A.value, t.relayLink.color = A.value;
      const Y = window.app;
      (oe = (Q = Y == null ? void 0 : Y.config) == null ? void 0 : Q.relayPlanes) != null && oe[0] && (Y.config.relayPlanes[0].color = A.value);
    });
    const P = this.container.querySelector("#dbg-p1-satsize"), b = this.container.querySelector("#val-p1-satsize");
    P && b && P.addEventListener("input", () => {
      b.textContent = P.value, t.relaySat.sizePx = Number(P.value);
    });
    const y = this.container.querySelector("#dbg-p1-glow"), C = this.container.querySelector("#val-p1-glow");
    y && C && y.addEventListener("input", () => {
      C.textContent = y.value, t.relaySat.glowStrength = Number(y.value);
    });
    const H = this.container.querySelector("#dbg-p1-linkwidth"), O = this.container.querySelector("#val-p1-linkwidth");
    H && O && H.addEventListener("input", () => {
      O.textContent = H.value, t.relayLink.widthPx = Number(H.value);
    });
    const G = this.container.querySelector("#dbg-p1-linkopacity"), $ = this.container.querySelector("#val-p1-linkopacity");
    G && $ && G.addEventListener("input", () => {
      $.textContent = G.value, t.relayLink.opacity = Number(G.value);
    });
    const B = (Y, Q, oe) => {
      const _e = this.container.querySelector(`#${Y}`), Re = this.container.querySelector(`#${Q}`);
      _e && Re && _e.addEventListener("input", () => {
        const qe = Number(_e.value);
        Re.textContent = qe.toString(), t[oe] = qe, this.globeView.updateUniforms();
      });
    }, te = this.container.querySelector("#dbg-mode");
    te && te.addEventListener("change", () => {
      t.lightingMode = te.value;
    }), B("dbg-az", "val-az", "azimuthDeg"), B("dbg-el", "val-el", "elevationDeg"), B("dbg-twidth", "val-twidth", "terminatorWidth"), B("dbg-tpow", "val-tpow", "terminatorPower"), B("dbg-ttint", "val-ttint", "terminatorTint");
    const W = this.container.querySelector("#dbg-ttintcolor");
    W && W.addEventListener("input", () => {
      t.terminatorTintColor = W.value, this.globeView.updateUniforms();
    }), B("dbg-bright", "val-bright", "earthBrightness"), B("dbg-sat", "val-sat", "earthSaturation"), B("dbg-contrast", "val-contrast", "earthContrast"), B("dbg-lift", "val-lift", "oceanLift"), B("dbg-glint", "val-glint", "glintStrength"), B("dbg-haze", "val-haze", "surfaceHaze"), B("dbg-nboost", "val-nboost", "nightBoost"), B("dbg-namb", "val-namb", "nightAmbient");
    const re = (Y, Q, oe) => {
      const _e = this.container.querySelector(`#${Y}`), Re = this.container.querySelector(`#${Q}`);
      _e && Re && _e.addEventListener("input", () => {
        const qe = Number(_e.value);
        Re.textContent = qe.toString(), t.orbitArc[oe] = qe;
      });
    };
    re("dbg-behind", "val-behind", "behindDeg"), re("dbg-ahead", "val-ahead", "aheadDeg"), re("dbg-arcwidth", "val-arcwidth", "widthPx"), re("dbg-arcopacity", "val-arcopacity", "maxOpacity");
    const ce = this.container.querySelector("#dbg-arccolor");
    ce && ce.addEventListener("input", () => {
      t.orbitArc.color = ce.value;
    });
    const Ee = (Y, Q, oe) => {
      const _e = this.container.querySelector(`#${Y}`), Re = this.container.querySelector(`#${Q}`);
      _e && Re && _e.addEventListener("input", () => {
        const qe = Number(_e.value);
        Re.textContent = qe.toString(), t.customerSat[oe] = qe;
      });
    };
    Ee("dbg-satsize", "val-satsize", "sizePx"), Ee("dbg-glowsize", "val-glowsize", "glowSize");
    const Ne = this.container.querySelector("#dbg-satcolor");
    Ne && Ne.addEventListener("input", () => {
      t.customerSat.color = Ne.value;
    });
    const Ze = this.container.querySelector("#dbg-mask");
    Ze && Ze.addEventListener("change", () => {
      t.showOceanMask = Ze.checked, this.globeView.updateUniforms();
    });
    const F = this.container.querySelector("#oxg-debug-copy-btn");
    F && F.addEventListener("click", () => {
      var _e, Re;
      const Y = window.app, Q = {
        lightingMode: t.lightingMode,
        azimuthDeg: t.azimuthDeg,
        elevationDeg: t.elevationDeg,
        terminatorWidth: t.terminatorWidth,
        terminatorPower: t.terminatorPower,
        terminatorTint: t.terminatorTint,
        terminatorTintColor: t.terminatorTintColor,
        earthBrightness: t.earthBrightness,
        earthSaturation: t.earthSaturation,
        earthContrast: t.earthContrast,
        oceanLift: t.oceanLift,
        glintStrength: t.glintStrength,
        surfaceHaze: t.surfaceHaze,
        nightBoost: t.nightBoost,
        nightAmbient: t.nightAmbient,
        layers: t.layers,
        orbitArc: t.orbitArc,
        customerSat: t.customerSat,
        relaySat: t.relaySat,
        relayLink: t.relayLink,
        oxgRingP1: ((Re = (_e = Y == null ? void 0 : Y.config) == null ? void 0 : _e.relayPlanes) == null ? void 0 : Re[0]) ?? null
      }, oe = JSON.stringify(Q, null, 2);
      console.log(`Shader & Layer Config Export:
`, oe), navigator.clipboard.writeText(oe).then(() => {
        F.textContent = "✅ Copied to Clipboard!", setTimeout(() => {
          F.textContent = "📋 Copy Config (JSON)";
        }, 2e3);
      });
    });
    const j = this.container.querySelector("#btn-sun-view");
    j && j.addEventListener("click", () => {
      this.globeView.setSunView();
    });
  }
  updateSunAngle(e) {
    const t = this.container.querySelector("#val-p1-sun-angle");
    t && (t.textContent = `${e.toFixed(1)}°`);
  }
}
class Av {
  constructor(e, t, n, s) {
    Z(this, "element");
    Z(this, "presets");
    Z(this, "activePresetId");
    Z(this, "onSelect");
    Z(this, "isOpen", !1);
    Z(this, "documentClickHandler");
    this.presets = t, this.activePresetId = n, this.onSelect = s, this.element = document.createElement("div"), this.element.className = "oxg-preset-selector-container", e.appendChild(this.element), this.documentClickHandler = (r) => {
      this.isOpen && !this.element.contains(r.target) && (this.isOpen = !1, this.render());
    }, document.addEventListener("click", this.documentClickHandler), this.render();
  }
  updatePresets(e, t) {
    this.presets = e, this.activePresetId = t, this.render();
  }
  setActivePreset(e) {
    this.activePresetId = e, this.render();
  }
  destroy() {
    document.removeEventListener("click", this.documentClickHandler);
  }
  formatOrbitSubtext(e) {
    const t = `${e.altitudeKm}km`;
    if (e.sunSynchronous) {
      const n = e.ltanHours !== void 0 ? `${String(Math.floor(e.ltanHours)).padStart(2, "0")}:00 LTAN` : "SSO";
      return `${t} SSO ${n}`;
    } else
      return `${t} ${e.inclinationDeg}° INC`;
  }
  render() {
    this.element.innerHTML = `
      <!-- Desktop Header Label (Visible on wide screens) -->
      <div class="oxg-scenario-header">MISSION PRESETS</div>

      <!-- Mobile/Narrow Screen Toggle Button (Visible on narrow screens) -->
      <button type="button" class="oxg-preset-toggle-btn" id="btn-toggle-presets" title="Toggle Mission Presets">
        <span>MISSION PRESETS ▾</span>
      </button>

      <!-- Mission Options List / Dropdown -->
      <div class="oxg-preset-dropdown ${this.isOpen ? "open" : ""}">
        ${this.presets.map((n) => `
              <div class="oxg-scenario-option ${n.id === this.activePresetId ? "selected" : ""}" data-id="${n.id}">
                <div class="oxg-scenario-text-wrap">
                  <span class="oxg-scenario-label">${n.label}</span>
                  <span class="oxg-scenario-subtext">${this.formatOrbitSubtext(n)}</span>
                </div>
              </div>
            `).join("")}
      </div>
    `;
    const e = this.element.querySelector("#btn-toggle-presets");
    e && e.addEventListener("click", (n) => {
      n.stopPropagation(), this.isOpen = !this.isOpen, this.render();
    }), this.element.querySelectorAll(".oxg-scenario-option").forEach((n) => {
      n.addEventListener("click", (s) => {
        s.stopPropagation();
        const r = n.getAttribute("data-id");
        r && (this.activePresetId = r, this.isOpen = !1, this.render(), this.onSelect(r));
      });
    });
  }
}
class Rv {
  constructor(e, t, n, s) {
    Z(this, "element");
    Z(this, "steps");
    Z(this, "activeStepIndex", 0);
    Z(this, "onSelectStep");
    this.steps = t, this.onSelectStep = s;
    const r = this.steps.findIndex((a) => a.id === n);
    this.activeStepIndex = r >= 0 ? r : 0, this.element = document.createElement("div"), this.element.className = "oxg-rollout-timeline-container", e.appendChild(this.element), this.render(), this.bindEvents();
  }
  setActiveStep(e) {
    const t = this.steps.findIndex((n) => n.id === e);
    t >= 0 && t !== this.activeStepIndex && (t > this.activeStepIndex, this.activeStepIndex = t, this.render());
  }
  getActiveStepIndex() {
    return this.activeStepIndex;
  }
  bindEvents() {
    window.addEventListener("keydown", (e) => {
      e.key === "ArrowLeft" ? this.stepPrev() : e.key === "ArrowRight" && this.stepNext();
    }), window.addEventListener("resize", () => {
      this.scrollToActiveStep();
    });
  }
  stepPrev() {
    if (this.activeStepIndex > 0) {
      this.activeStepIndex--;
      const e = this.steps[this.activeStepIndex];
      this.render(), this.onSelectStep(e.id, !1);
    }
  }
  stepNext() {
    if (this.activeStepIndex < this.steps.length - 1) {
      this.activeStepIndex++;
      const e = this.steps[this.activeStepIndex];
      this.render(), this.onSelectStep(e.id, !0);
    }
  }
  scrollToActiveStep() {
    const e = this.element.querySelector(".oxg-timeline-scroll-container"), t = this.element.querySelector(".oxg-timeline-slot.active");
    if (e && t) {
      const n = e.clientWidth, s = t.offsetLeft, r = t.clientWidth, a = s + r / 2 - n / 2;
      e.scrollTo({ left: Math.max(0, a), behavior: "smooth" });
    }
  }
  render() {
    const e = this.steps.length, t = [
      {
        type: "step",
        step: this.steps[0],
        titleLines: ["INDIA", "ONLY"],
        idx: 0,
        posPct: 8.333,
        year: "TODAY"
      },
      {
        type: "step",
        step: this.steps[1],
        titleLines: ["INDIA OPERATED", "GROUND STATIONS"],
        idx: 1,
        posPct: 25,
        year: "TODAY"
      },
      {
        type: "synapse",
        titleLines: ["MISSION", "SYNAPSE"],
        posPct: 41.666,
        year: "2027"
      },
      {
        type: "step",
        step: this.steps[2],
        titleLines: ["OXG SSO", "RING 1"],
        idx: 2,
        posPct: 58.333,
        year: "TBD"
      },
      {
        type: "step",
        step: this.steps[3],
        titleLines: ["OXG SSO", "RING 2"],
        idx: 3,
        posPct: 75,
        year: "TBD"
      },
      {
        type: "step",
        step: this.steps[4],
        titleLines: ["OXG EXTENDED", "RINGS"],
        idx: 4,
        posPct: 91.666,
        year: "TBD"
      }
    ], n = { x: 83.33, y: 55 }, s = { x: 500, y: 11 }, r = { x: 916.67, y: 55 }, a = `M ${n.x.toFixed(2)},${n.y.toFixed(2)} Q ${s.x.toFixed(2)},${s.y.toFixed(2)} ${r.x.toFixed(2)},${r.y.toFixed(2)}`, o = t.map((g, m) => {
      const f = m / 5, E = 1 - f, M = E * E * n.x + 2 * E * f * s.x + f * f * r.x, v = E * E * n.y + 2 * E * f * s.y + f * f * r.y;
      return { x: M, y: v, t: f, item: g, itemIndex: m };
    }), u = ({ 0: 0, 1: 1, 2: 3, 3: 4, 4: 5 }[this.activeStepIndex] ?? 0) / 5;
    let h = "";
    if (u > 0) {
      const g = 1 - u, m = g * n.x + u * s.x, f = g * n.y + u * s.y, E = g * g * n.x + 2 * g * u * s.x + u * u * r.x, M = g * g * n.y + 2 * g * u * s.y + u * u * r.y;
      h = `M ${n.x.toFixed(2)},${n.y.toFixed(2)} Q ${m.toFixed(2)},${f.toFixed(2)} ${E.toFixed(2)},${M.toFixed(2)}`;
    }
    this.element.innerHTML = `
      <div class="oxg-stepper-dock">
        <div class="oxg-timeline-controls-row">
          <button id="oxg-step-prev" class="oxg-stepper-nav" title="Previous Step (Left Arrow)" ${this.activeStepIndex === 0 ? "disabled" : ""}>‹</button>

          <div class="oxg-timeline-scroll-container">
            <div class="oxg-stepper-track-wrapper">
              <!-- Single Smooth Master Arc Curve SVG -->
              <svg class="oxg-timeline-curve-svg" viewBox="0 0 1000 90" preserveAspectRatio="none">
                <path class="oxg-curve-baseline" d="${a}" />
                ${h ? `<path class="oxg-curve-progress" d="${h}" />` : ""}
              </svg>

              <!-- 6 Equal Horizontal Slots (16.666% each) -->
              <div class="oxg-stepper-slots">
                ${o.map(({ item: g, y: m, itemIndex: f }) => {
      if (g.type === "synapse")
        return `
                        <div class="oxg-timeline-slot synapse-slot" style="left: ${f * 100 / 6}%; width: ${100 / 6}%;">
                          <div class="oxg-step-title-box top-label-row">
                            <span class="oxg-step-title-line">${g.titleLines[0]}</span>
                            <span class="oxg-step-title-line synapse-sub">${g.titleLines[1]}</span>
                          </div>

                          <div class="oxg-node-wrapper" style="top: ${m}px;">
                            <div class="oxg-synapse-node" title="OXG Pathfinder Mission">◆</div>
                          </div>

                          <div class="oxg-step-year-box bottom-label-row">
                            <span class="oxg-step-year synapse-year">${g.year}</span>
                          </div>
                        </div>
                      `;
      const E = g.step, M = g.idx, v = M === this.activeStepIndex, N = M < this.activeStepIndex;
      return `
                      <div class="oxg-timeline-slot ${v ? "active" : ""} ${N ? "completed" : ""}" data-index="${M}" data-id="${E.id}" style="left: ${f * 100 / 6}%; width: ${100 / 6}%;">
                        <div class="oxg-step-title-box top-label-row">
                          <span class="oxg-step-title-line">${g.titleLines[0]}</span>
                          <span class="oxg-step-title-line">${g.titleLines[1]}</span>
                        </div>

                        <div class="oxg-node-wrapper" style="top: ${m}px;">
                          <div class="oxg-step-node"></div>
                        </div>

                        <div class="oxg-step-year-box bottom-label-row">
                          <span class="oxg-step-year">${g.year}</span>
                        </div>
                      </div>
                    `;
    }).join("")}
              </div>
            </div>
          </div>

          <button id="oxg-step-next" class="oxg-stepper-nav" title="Next Step (Right Arrow)" ${this.activeStepIndex === e - 1 ? "disabled" : ""}>›</button>
        </div>
      </div>
    `;
    const d = this.element.querySelector("#oxg-step-prev");
    d && d.addEventListener("click", () => this.stepPrev());
    const p = this.element.querySelector("#oxg-step-next");
    p && p.addEventListener("click", () => this.stepNext()), this.element.querySelectorAll(".oxg-timeline-slot:not(.synapse-slot)").forEach((g) => {
      g.addEventListener("click", () => {
        const m = g.getAttribute("data-index"), f = g.getAttribute("data-id");
        if (m !== null && f) {
          const E = parseInt(m, 10);
          if (E !== this.activeStepIndex) {
            const M = E > this.activeStepIndex;
            this.activeStepIndex = E, this.render(), this.onSelectStep(f, M);
          }
        }
      });
    }), setTimeout(() => this.scrollToActiveStep(), 30);
  }
}
class Cv {
  constructor(e, t, n) {
    Z(this, "container");
    Z(this, "config");
    Z(this, "uiFlags");
    Z(this, "simResult", null);
    Z(this, "globeView");
    Z(this, "orbitsMesh");
    Z(this, "satellitesMesh");
    Z(this, "groundStationsMesh");
    Z(this, "linksMesh");
    Z(this, "groundLinksMesh");
    Z(this, "headlineMetricsPanel");
    Z(this, "presetSelectorPanel");
    Z(this, "rolloutTimeline");
    Z(this, "controlsBar");
    Z(this, "parametersPanel");
    Z(this, "assumptionsModal");
    Z(this, "abComparePanel");
    Z(this, "ctaModal");
    Z(this, "customOrbitForm");
    Z(this, "debugPanel");
    Z(this, "currentStepIndex", 0);
    Z(this, "isPlaying", !0);
    Z(this, "speedMultiplier", 600);
    Z(this, "lastFrameTimestamp", 0);
    Z(this, "isGeoDebugActive", !1);
    Z(this, "isRingTransitioning", !1);
    Z(this, "ringTransitionStartTime", 0);
    this.container = e, this.container.className = "oxg-mission-console", this.uiFlags = n ?? yd;
    const s = t ?? Sd;
    if (this.config = F_(s, window.location.search), window.location.search !== "" && !window.location.search.includes("debug=1")) {
      const _ = window.location.pathname + window.location.hash;
      window.history.replaceState(null, "", _);
    }
    this.container.innerHTML = `
      <!-- SpaceX-Style Minimalist Orbital Loader -->
      <div id="oxg-demo-loader" class="oxg-demo-loader-overlay">
        <div class="oxg-loader-spinner"></div>
        <div class="oxg-loader-text">INITIALIZING ORBITAL SIMULATION...</div>
      </div>

      <div id="oxg-globe-container" class="oxg-globe-container"></div>
      <div id="oxg-header-mount"></div>
      <div id="oxg-metrics-mount"></div>
      <div id="oxg-preset-mount"></div>
      <div id="oxg-controls-mount"></div>
      <div id="oxg-timeline-mount"></div>
      <div id="oxg-parameters-mount"></div>
      <div id="oxg-modals-mount"></div>

      <!-- Action & View Controls Bar (Bottom Right Debug Tools) -->
      <div class="oxg-action-pill-bar">
        ${this.uiFlags.showGeoDebugBtn ? '<button id="btn-geo-debug" class="oxg-pill-btn-subtle" title="Toggle Geo-Registration Debug Mode">GEO DEBUG</button>' : ""}
        ${this.uiFlags.showParamsBtn ? '<button id="btn-toggle-params" class="oxg-pill-btn-subtle">⚙️ Params</button>' : ""}
        ${this.uiFlags.showCustomOrbit ? '<button id="fab-custom-orbit" class="oxg-pill-btn-subtle">🛰️ Custom Orbit</button>' : ""}
        ${this.uiFlags.showABCompare ? '<button id="fab-ab-compare" class="oxg-pill-btn-subtle">⚖️ A/B Compare</button>' : ""}
      </div>

      <!-- Mandatory Credit Footer -->
      <div class="oxg-credit-footer">
        Earth imagery: NASA Earth Observatory
      </div>
    `;
    const r = this.container.querySelector("#oxg-globe-container");
    this.globeView = new lv(r), window.globeView = this.globeView, this.orbitsMesh = new hv(this.globeView.scene), this.satellitesMesh = new fv(this.globeView.scene), this.groundStationsMesh = new mv(this.globeView.earthMesh), this.groundLinksMesh = new _v(this.globeView.earthMesh), this.linksMesh = new gv(this.globeView.scene);
    const a = this.container.querySelector("#oxg-header-mount");
    vv(a);
    const o = this.container.querySelector("#oxg-metrics-mount");
    this.headlineMetricsPanel = new xv(o);
    const l = this.container.querySelector("#oxg-preset-mount");
    this.presetSelectorPanel = new Av(
      l,
      this.config.customerPresets,
      this.config.activeCustomerPresetId,
      (_) => {
        this.config.activeCustomerPresetId = _, this.onConfigChange(this.config);
      }
    );
    const c = this.container.querySelector("#oxg-timeline-mount"), u = (this.config.scenarios ?? []).filter((_) => _.id !== "india_dual_ring");
    this.rolloutTimeline = new Rv(
      c,
      u,
      this.config.activeScenarioId,
      (_) => {
        this.startRingTransition(), this.config.activeScenarioId = _, this.onConfigChange(this.config);
      }
    );
    const h = this.container.querySelector("#oxg-controls-mount");
    this.controlsBar = new yv(
      h,
      this.config,
      {
        onConfigChange: (_) => this.onConfigChange(_),
        onPlaybackChange: (_, g) => {
          this.isPlaying = _, this.speedMultiplier = g;
        },
        onScrub: (_) => {
          var m;
          const g = Math.min(
            (((m = this.simResult) == null ? void 0 : m.timestampsSec.length) ?? 1) - 1,
            Math.floor(_ / (this.config.sim.stepSeconds ?? 30))
          );
          this.currentStepIndex = g;
        },
        onResetView: () => {
          this.globeView.focusIndia();
        }
      },
      this.uiFlags
    );
    const d = this.container.querySelector("#oxg-parameters-mount");
    this.parametersPanel = new Sv(d);
    const p = this.container.querySelector("#oxg-modals-mount");
    this.assumptionsModal = new bv(p), this.abComparePanel = new Mv(p), this.ctaModal = new Ev(p), this.customOrbitForm = new Tv(p, this.config, (_) => {
      this.config.customerPresets.push(_), this.config.activeCustomerPresetId = _.id, this.presetSelectorPanel.updatePresets(this.config.customerPresets, this.config.activeCustomerPresetId), this.onConfigChange(this.config);
    }), this.debugPanel = new wv(this.container, this.globeView), this.bindEvents(), this.recomputeSimulation(), this.globeView.addRenderCallback(this.updatePlaybackLoop.bind(this)), requestAnimationFrame(() => {
      setTimeout(() => {
        const _ = this.container.querySelector("#oxg-demo-loader");
        _ && (_.style.opacity = "0", setTimeout(() => _.remove(), 500));
      }, 250);
    }), window.app = this, window.globeView = this.globeView, window.debugPanel = this.debugPanel;
  }
  bindEvents() {
    const e = this.container.querySelectorAll("#btn-toggle-presets, #btn-toggle-presets-mobile"), t = this.container.querySelector(".oxg-preset-selector");
    t && e.forEach((h) => {
      h.addEventListener("click", (d) => {
        d.stopPropagation(), t.classList.toggle("open"), e.forEach((p) => p.classList.toggle("active", t.classList.contains("open")));
      });
    });
    const n = this.container.querySelector("#btn-focus-india");
    n && n.addEventListener("click", () => this.globeView.focusIndia());
    const s = this.container.querySelector("#btn-geo-debug");
    s && s.addEventListener("click", () => {
      this.isGeoDebugActive = !this.isGeoDebugActive, s.classList.toggle("active", this.isGeoDebugActive), this.globeView.geoDebug.setVisible(this.isGeoDebugActive);
    });
    const r = this.container.querySelector("#btn-toggle-params");
    r && r.addEventListener("click", () => this.parametersPanel.toggle());
    const a = this.container.querySelector("#btn-toggle-assumptions");
    a && a.addEventListener("click", () => this.assumptionsModal.show());
    const o = this.container.querySelector("#fab-cta");
    o && o.addEventListener("click", () => this.ctaModal.show());
    const l = this.container.querySelector("#fab-custom-orbit");
    l && l.addEventListener("click", () => this.customOrbitForm.show());
    const c = this.container.querySelector("#fab-ab-compare");
    c && c.addEventListener("click", () => {
      const h = JSON.parse(JSON.stringify(this.config));
      h.activeAltitudeScenario = this.config.activeAltitudeScenario === "800km_compact" ? "600km_baseline" : "800km_compact", h.relayAltitudeKm = h.activeAltitudeScenario === "600km_baseline" ? 600 : 800, h.relayPlanes.forEach((p) => p.altitudeKm = h.relayAltitudeKm);
      const d = Tc(h);
      this.simResult && (this.abComparePanel.setResults(this.simResult, d), this.abComparePanel.show());
    });
    const u = (h) => {
      var f;
      let d = 0, p = 0;
      if ("touches" in h && h.touches && h.touches.length > 0)
        d = h.touches[0].clientX, p = h.touches[0].clientY;
      else if ("changedTouches" in h && h.changedTouches && h.changedTouches.length > 0)
        d = h.changedTouches[0].clientX, p = h.changedTouches[0].clientY;
      else if ("clientX" in h)
        d = h.clientX, p = h.clientY;
      else
        return;
      const _ = this.config.customerPresets.find((E) => E.id === this.config.activeCustomerPresetId) ?? this.config.customerPresets[0], g = ((f = this.simResult) == null ? void 0 : f.customerSats[Math.floor(this.currentStepIndex)]) ?? [], m = { clientX: d, clientY: p };
      this.satellitesMesh.handleMouseMove(m, this.globeView.camera, g, {
        altitudeKm: _.altitudeKm,
        inclinationDeg: _.inclinationDeg
      }), this.groundStationsMesh.handleMouseMove(m, this.globeView.camera);
    };
    this.container.addEventListener("mousemove", u), this.container.addEventListener("pointerdown", u), this.container.addEventListener("click", u);
  }
  onConfigChange(e) {
    if (this.config = e, window.location.search.includes("debug=1")) {
      const t = O_(this.config);
      window.history.replaceState(null, "", `?${t}&debug=1`);
    } else if (window.location.search !== "") {
      const t = window.location.pathname + window.location.hash;
      window.history.replaceState(null, "", t);
    }
    this.recomputeSimulation();
  }
  startRingTransition() {
    this.isRingTransitioning = !0, this.ringTransitionStartTime = performance.now();
  }
  recomputeSimulation() {
    var d, p, _;
    this.orbitsMesh.clear(), this.satellitesMesh.clear(), this.linksMesh.clear(), this.groundLinksMesh.clear(), this.simResult = Tc(this.config), window.simResult = this.simResult, this.currentStepIndex = 0, this.headlineMetricsPanel.updateMetrics(
      this.simResult.metricsWithOXG,
      this.simResult.metricsGroundOnly
    ), this.presetSelectorPanel.setActivePreset(this.config.activeCustomerPresetId), this.rolloutTimeline.setActiveStep(this.config.activeScenarioId), this.parametersPanel.updateParameters(this.config, this.simResult.metricsWithOXG);
    const e = this.config.customerPresets.find((g) => g.id === this.config.activeCustomerPresetId) ?? this.config.customerPresets[0], t = this.config.rollout.find((g) => g.id === this.config.activeRolloutStageId) ?? this.config.rollout[0], n = ((d = this.config.relayPlanes.find((g) => g.id === "p1")) == null ? void 0 : d.ltanHours) ?? 10.5, s = (this.config.customerLtanOffsetMinutes ?? 45) / 60, r = e.ltanHours ?? n + s, a = [
      {
        id: e.id,
        name: e.label,
        altitudeKm: e.altitudeKm,
        inclinationDeg: e.inclinationDeg,
        sunSynchronous: e.sunSynchronous,
        ltanHours: e.sunSynchronous ? r : void 0,
        satsInPlane: e.satCount,
        color: "#FF1744"
      }
    ], o = ((p = this.config.scenarios) == null ? void 0 : p.find((g) => g.id === this.config.activeScenarioId)) ?? ((_ = this.config.scenarios) == null ? void 0 : _[0]), l = o != null && o.ringEnabled ? o.relayPlaneIds ?? ["p1"] : [], u = Vr(this.config).filter((g) => {
      const m = this.config.relayPlanes.find((f) => f.id === g.id);
      return m != null && m.enabled ? o ? l.includes(g.id) : t.enabledRelayPlaneIds.includes(g.id) : !1;
    });
    this.orbitsMesh.updateOrbits(a, u);
    const h = {};
    a.forEach((g) => h[g.id] = g.color), u.forEach((g) => h[g.id] = g.color), this.satellitesMesh.setPlaneColors(h), this.groundStationsMesh.updateGroundStations(this.config.groundStations);
  }
  updatePlaybackLoop() {
    var N, w, A, P;
    if (!this.simResult) return;
    const e = performance.now();
    this.lastFrameTimestamp === 0 && (this.lastFrameTimestamp = e);
    const t = e - this.lastFrameTimestamp;
    if (this.lastFrameTimestamp = e, this.isPlaying) {
      const y = t / 1e3 * this.speedMultiplier / this.config.sim.stepSeconds;
      this.currentStepIndex = (this.currentStepIndex + y) % this.simResult.timestampsSec.length;
    }
    const n = Math.floor(this.currentStepIndex), s = this.simResult.timestampsSec[n] ?? 0;
    this.globeView.updateTime(s), this.controlsBar.updateTime(s);
    const r = this.simResult.customerSats[n] ?? [], a = this.simResult.relaySats[n] ?? [], o = ((N = this.config.scenarios) == null ? void 0 : N.find((b) => b.id === this.config.activeScenarioId)) ?? ((w = this.config.scenarios) == null ? void 0 : w[0]) ?? {
      stationFilter: "bengaluru_only",
      ringEnabled: !1
    }, l = this.config.groundStations.filter((b) => b.enabled ? o.stationFilter === "bengaluru_only" ? b.id === "bengaluru" : !0 : !1), c = this.globeView.config.layers, u = c.relaySatellites && o.ringEnabled;
    this.orbitsMesh.setVisible(c.orbitLines), this.satellitesMesh.setLayers(c.customerSatellites, u), this.groundStationsMesh.setLayers(c.stations, c.stationLabels), this.linksMesh.setVisible(c.links || u && c.relayLinks), this.globeView.geoDebug.setVisible(c.geoDebugMarkers);
    const h = this.config.customerPresets.find((b) => b.id === this.config.activeCustomerPresetId) ?? this.config.customerPresets[0], d = ((A = this.config.relayPlanes.find((b) => b.id === "p1")) == null ? void 0 : A.ltanHours) ?? 10.5, p = (this.config.customerLtanOffsetMinutes ?? 45) / 60, _ = h.ltanHours ?? d + p, g = [
      {
        id: h.id,
        name: h.label,
        altitudeKm: h.altitudeKm,
        inclinationDeg: h.inclinationDeg,
        sunSynchronous: h.sunSynchronous,
        ltanHours: h.sunSynchronous ? _ : void 0,
        satsInPlane: h.satCount,
        color: "#FF1744"
      }
    ];
    if (this.orbitsMesh.updateCustomerArc(
      g,
      s,
      this.globeView.config.orbitArc,
      c.customerSatellites
    ), c.orbitLines) {
      const b = o != null && o.ringEnabled ? o.relayPlaneIds ?? ["p1"] : [], y = this.config.rollout.find((O) => O.id === this.config.activeRolloutStageId) ?? this.config.rollout[0], H = Vr(this.config).filter((O) => {
        const G = this.config.relayPlanes.find(($) => $.id === O.id);
        return G != null && G.enabled ? o ? b.includes(O.id) : y.enabledRelayPlaneIds.includes(O.id) : !1;
      });
      this.orbitsMesh.updateOrbits(g, H, s);
    }
    let m = 1, f = 1;
    if (this.isRingTransitioning) {
      const b = (e - this.ringTransitionStartTime) / 1e3, y = Math.min(1, b / 0.6), C = y * (2 - y);
      m = C, f = 0.5 + 0.5 * C, y >= 1 && (this.isRingTransitioning = !1);
    }
    this.orbitsMesh.updateRelayRingLinks(
      a,
      this.globeView.config.relayLink,
      u && c.relayLinks,
      m
    ), this.satellitesMesh.updateSatellites(
      r,
      o.ringEnabled ? a : [],
      this.globeView.config.customerSat,
      this.globeView.config.relaySat,
      m,
      f
    ), this.groundStationsMesh.update(this.globeView.camera);
    const E = Math.min(0.1, Math.max(1e-3, t / 1e3));
    this.groundLinksMesh.updateGroundLinks(
      r,
      l,
      this.config.links,
      E,
      c.groundLinks,
      o.ringEnabled ? a : []
    );
    const M = ((P = this.simResult.activeLinkEdgesTrajectory) == null ? void 0 : P[n]) ?? [];
    this.linksMesh.updateActiveLinks(
      M,
      r,
      a,
      l,
      s,
      E
    );
    const v = a.filter((b) => b.planeId === "p1" || b.id.startsWith("relay-p1-"));
    if (v.length >= 2) {
      const b = new R(v[0].eci.x, v[0].eci.y, v[0].eci.z), y = new R(
        v[Math.floor(v.length / 4)].eci.x,
        v[Math.floor(v.length / 4)].eci.y,
        v[Math.floor(v.length / 4)].eci.z
      ), C = b.clone().cross(y).normalize(), H = Hr(s), O = new R(H.x, H.y, H.z).normalize(), G = Math.abs(C.dot(O)), $ = Math.acos(Math.min(1, G)) * 180 / Math.PI;
      this.debugPanel.updateSunAngle($);
    }
  }
}
const Pv = {
  mount: (i, e) => new Cv(i, e ?? Sd)
};
function Ed() {
  if (typeof document > "u") return;
  const i = document.getElementById("oxg-sim-app") || document.getElementById("app");
  if (i && !i.__oxg_mounted__) {
    i.__oxg_mounted__ = !0;
    const e = Pv.mount(i);
    window.app = e, window.mainApp = e;
  }
}
Ed();
typeof document < "u" && document.readyState === "loading" && document.addEventListener("DOMContentLoaded", Ed);
export {
  Pv as OXGSim,
  Ed as autoMount
};
