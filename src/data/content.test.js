import test from "node:test";
import assert from "node:assert/strict";
import {
  PHONE,
  PHONE_TEL,
  WA_NUMBER,
  EMAIL,
  waLink,
  NAV_LINKS,
  SERVICES,
  ART_BOARDS,
  MATERIALS,
  MATERIAL_TABS,
  MORE_PRODUCTS,
  WHY_POINTS,
  PROCESS_STEPS,
  GALLERY_CATS,
  GALLERY,
} from "./content.js";

test("contact constants and waLink formatting", () => {
  assert.equal(PHONE, "+91 98430 43213");
  assert.equal(PHONE_TEL, "tel:+919843043213");
  assert.equal(WA_NUMBER, "919843043213");
  assert.equal(EMAIL, "3starflex.cbe@gmail.com");
  const url = waLink("Hello 3STAR! I need 300 GSM Art Board.");
  assert.equal(
    url,
    "https://wa.me/919843043213?text=Hello%203STAR!%20I%20need%20300%20GSM%20Art%20Board."
  );
});

test("navigation and service catalogue integrity", () => {
  assert.equal(NAV_LINKS.length, 5);
  assert.equal(SERVICES.length, 10);
  for (const s of SERVICES) {
    assert.ok(s.id && s.title && s.icon && s.img && s.desc);
    assert.ok(Array.isArray(s.points) && s.points.length === 3);
  }
});

test("art boards and flex materials catalogue integrity", () => {
  assert.deepEqual(
    ART_BOARDS.map((b) => b.gsm),
    [90, 100, 130, 170, 250, 300, 350]
  );
  assert.equal(MATERIALS.length, 10);
  assert.deepEqual(MATERIAL_TABS, ["All", "Flex & Banner", "Vinyl & Film", "Fabric"]);
  for (const m of MATERIALS) {
    assert.ok(MATERIAL_TABS.includes(m.cat));
  }
});

test("additional products, why choose, process steps, and gallery items", () => {
  assert.equal(MORE_PRODUCTS.length, 16);
  assert.equal(WHY_POINTS.length, 5);
  assert.equal(PROCESS_STEPS.length, 4);
  assert.equal(GALLERY.length, 14);
  for (const item of GALLERY) {
    assert.ok(GALLERY_CATS.includes(item.cat));
  }
});
