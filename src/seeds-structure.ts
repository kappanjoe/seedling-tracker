// Generated with app.quicktype.io
// To parse this data:
//
//   import { Convert, UserMem } from "./file";
//
//   const userMem = Convert.toUserMem(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface UserMem {
    categories:  Category[];
    colors:      string[];
    decorations: Decoration[];
    groups:      Groups;
    info:        Info;
}

export interface Category {
    isOpen: boolean;
    name:   string;
    values: number[];
}

export interface Decoration {
    catInd: number;
    colors: Colors;
    group:  null | string;
    name:   string;
}

export interface Colors {
    red:    Color;
    yellow: Color;
    blue:   Color;
    white:  Color;
    purple: Color;
    grey:   Color;
    pink:   Color;
}

export enum Color {
    Nil = "nil",
    Off = "off",
    On = "on",
}

export interface Groups {
    chef:      Colors;
    hanafuda:  Colors;
    sticker:   Colors;
    themepark: Colors;
}

export interface Info {
    appVersion:   number;
    seedsVersion: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toUserMem(json: string): UserMem {
        return cast(JSON.parse(json), r("UserMem"));
    }

    public static userMemToJson(value: UserMem): string {
        return JSON.stringify(uncast(value, r("UserMem")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

// function m(additional: any) {
//     return { props: [], additional };
// }

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "UserMem": o([
        { json: "categories", js: "categories", typ: a(r("Category")) },
        { json: "colors", js: "colors", typ: a("") },
        { json: "decorations", js: "decorations", typ: a(r("Decoration")) },
        { json: "groups", js: "groups", typ: r("Groups") },
        { json: "info", js: "info", typ: r("Info") },
    ], "any"),
    "Category": o([
        { json: "isOpen", js: "isOpen", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "values", js: "values", typ: a(0) },
    ], "any"),
    "Decoration": o([
        { json: "catInd", js: "catInd", typ: 0 },
        { json: "colors", js: "colors", typ: r("Colors") },
        { json: "group", js: "group", typ: u(null, "") },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "Colors": o([
        { json: "red", js: "red", typ: r("Color") },
        { json: "yellow", js: "yellow", typ: r("Color") },
        { json: "blue", js: "blue", typ: r("Color") },
        { json: "white", js: "white", typ: r("Color") },
        { json: "purple", js: "purple", typ: r("Color") },
        { json: "grey", js: "grey", typ: r("Color") },
        { json: "pink", js: "pink", typ: r("Color") },
    ], "any"),
    "Groups": o([
        { json: "chef", js: "chef", typ: r("Colors") },
        { json: "hanafuda", js: "hanafuda", typ: r("Colors") },
        { json: "sticker", js: "sticker", typ: r("Colors") },
        { json: "themepark", js: "themepark", typ: r("Colors") },
    ], "any"),
    "Info": o([
        { json: "appVersion", js: "appVersion", typ: 3.14 },
        { json: "seedsVersion", js: "seedsVersion", typ: 3.14 },
    ], "any"),
    "Color": [
        "nil",
        "off",
        "on",
    ],
};