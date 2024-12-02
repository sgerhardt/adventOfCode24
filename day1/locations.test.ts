import { describe, it, expect } from "vitest";
import {calc} from "./locations";

describe("Part 1", () => {
    it("Subtract and sum lists", () => {
        let l1 = [1, 2];
        let l2 = [3, 4];
        const res = calc(l1, l2);
        expect(res).toEqual(4);
    });
});