'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

function cn(...classes) {
    return clsx(classes.filter(Boolean));
}

const sizeClasses$4 = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    circle: 'w-16 h-16 text-xl',
    'circle-lg': 'w-20 h-20 text-2xl',
    'circle-xl': 'w-24 h-24 text-3xl',
};
function Avatar({ src, alt, size = 'md', fallback, className, ...props }) {
    const [imageError, setImageError] = React.useState(false);
    const handleImageError = () => {
        setImageError(true);
    };
    const getInitials = (name) => {
        return name
            .split(' ')
            .map((word) => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };
    const fallbackText = fallback ? getInitials(fallback) : '?';
    return (jsxRuntime.jsx("div", { className: cn('inline-flex items-center justify-center rounded-full bg-neumorphism-background text-gray-600 font-medium overflow-hidden shadow-neumorphism', sizeClasses$4[size], className), ...props, children: src && !imageError ? (jsxRuntime.jsx("img", { src: src, alt: alt, onError: handleImageError, className: "w-full h-full object-cover" })) : (jsxRuntime.jsx("span", { className: "flex items-center justify-center w-full h-full", children: fallbackText })) }));
}

const sizeClasses$3 = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
};
const variantClasses$3 = {
    primary: 'bg-neumorphism-background text-gray-700 shadow-neumorphism-card hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white transition-all duration-200',
    ghost: 'bg-transparent text-gray-600 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white transition-all duration-200',
    concave: 'bg-neumorphism-classic text-gray-700 shadow-neumorphism-concave hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white hover:shadow-[inset_-6px_-6px_4px_#d8b4fe,inset_6px_6px_4px_#ffffff] transition-all duration-200',
    gradient: 'cssbuttons-io',
};
function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick, type = 'button', className, ...props }) {
    const isGradient = variant === 'gradient';
    if (isGradient) {
        return (jsxRuntime.jsx("button", { type: type, disabled: disabled, onClick: onClick, className: cn(variantClasses$3[variant], disabled && 'opacity-50 cursor-not-allowed', className), ...props, children: jsxRuntime.jsx("span", { children: children }) }));
    }
    return (jsxRuntime.jsx("button", { type: type, disabled: disabled, onClick: onClick, className: cn('inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed', sizeClasses$3[size], disabled ? 'opacity-50 cursor-not-allowed' : variantClasses$3[variant], className), ...props, children: children }));
}

const variantClasses$2 = {
    default: 'bg-neumorphism-background shadow-neumorphism-card',
    outlined: 'bg-neumorphism-background shadow-neumorphism-inset',
};
const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    circle: 'p-4',
    'circle-lg': 'p-4',
    'circle-xl': 'p-4',
};
function Card({ children, variant = 'default', padding = 'md', rounded = false, className, ...props }) {
    return (jsxRuntime.jsx("div", { className: cn('transition-all duration-200', rounded ? 'rounded-full' : 'rounded-2xl', variantClasses$2[variant], paddingClasses[padding], className), ...props, children: children }));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]});

	append(root, root.siblings);
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings)
}

/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return WEBKIT + value + value
		// tab-size
		case 4789:
			return MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// writing-mode
		case 5936:
			switch (charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/g, '') + (!match(value, /flex-|baseline/) ? MS + 'grid-row-' + replace(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value
		// justify-self
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + 'grid-column-align' + substr(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return MS + replace(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, match(element.props, /grid-\w+-end/) })) {
				return ~indexof(value + (children = children[length].value), 'span', 0) ? value : (MS + replace(value, '-start', '') + value + MS + 'grid-row-span:' + (~indexof(children, 'span', 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ';')
			}
			return MS + replace(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return match(element.props, /grid-\w+-start/) })) ? value : MS + replace(replace(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (strlen(value) - 1 - length > 6)
				switch (charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch', 0) ? prefix(replace(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (MS + a + ':' + b + f) + (c ? (MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if (charat(value, length + 6) === 121)
				return replace(value, ':', ':' + WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return replace(value, ':', ':' + MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return replace(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: if (!strlen(element.value = element.props.join(','))) return ''
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children);
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(children = element.props, function (value) {
							switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									lift(copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
								// :placeholder
								case '::placeholder':
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
							}

							return ''
						})
			}
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var f="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",m="active",y="data-styled-version",v="6.1.19",g="/*!sc*/\n",S="undefined"!=typeof window&&"undefined"!=typeof document,w=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),b={},E=/invalid hook call/i,N=new Set,P=function(t,n){if("production"!==process.env.NODE_ENV){var o=n?' with the id of "'.concat(n,'"'):"",s="The component ".concat(t).concat(o," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];E.test(t)?(a=!1,N.delete(s)):i.apply(void 0,__spreadArray([t],n,!1));},React.useRef(),a&&!N.has(s)&&(console.warn(s),N.add(s));}catch(e){E.test(e.message)&&N.delete(s);}finally{console.error=i;}}},_=Object.freeze([]),C=Object.freeze({});function I(e,t,n){return void 0===n&&(n=C),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D=/(^-|-$)/g;function R(e){return e.replace(O,"-").replace(D,"")}var T=/(a)(d)/gi,k=52,j=function(e){return String.fromCharCode(e+(e>25?39:97))};function x(e){var t,n="";for(t=Math.abs(e);t>k;t=t/k|0)n=j(t%k)+n;return (j(t%k)+n).replace(T,"$1-$2")}var V,F=5381,z=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},M=function(e){return z(F,e)};function $(e){return x(M(e)>>>0)}function B(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function G(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var L="function"==typeof Symbol&&Symbol.for,Y=L?Symbol.for("react.memo"):60115,q=L?Symbol.for("react.forward_ref"):60112,W={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J=((V={})[q]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[Y]=U,V);function X(e){return ("type"in(t=e)&&t.type.$$typeof)===Y?U:"$$typeof"in e?J[e.$$typeof]:W;var t;}var Z=Object.defineProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;function oe(e,t,n){if("string"!=typeof t){if(ne){var o=te(t);o&&o!==ne&&oe(e,o,n);}var r=K(t);Q&&(r=r.concat(Q(t)));for(var s=X(e),i=X(t),a=0;a<r.length;++a){var c=r[a];if(!(c in H||n&&n[c]||i&&c in i||s&&c in s)){var l=ee(t,c);try{Z(e,c,l);}catch(e){}}}}return e}function re(e){return "function"==typeof e}function se(e){return "object"==typeof e&&"styledComponentId"in e}function ie(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ae(e,t){if(0===e.length)return "";for(var n=e[0],o=1;o<e.length;o++)n+=t?t+e[o]:e[o];return n}function ce(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function le(e,t,n){if(void 0===n&&(n=!1),!n&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=le(e[o],t[o]);else if(ce(t))for(var o in t)e[o]=le(e[o],t[o]);return e}function ue(e,t){Object.defineProperty(e,"toString",{value:t});}var pe="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function de(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],o=[],r=1,s=e.length;r<s;r+=1)o.push(e[r]);return o.forEach(function(e){n=n.replace(/%[a-z]/,e);}),n}function he(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return "production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):"")):new Error(de.apply(void 0,__spreadArray([pe[t]],n,!1)).trim())}var fe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)if((r<<=1)<0)throw he(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var s=o;s<r;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++);},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n);}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,s=o;s<r;s++)t+="".concat(this.tag.getRule(s)).concat(g);return t},e}(),me=1<<30,ye=new Map,ve=new Map,ge=1,Se=function(e){if(ye.has(e))return ye.get(e);for(;ve.has(ge);)ge++;var t=ge++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>me))throw he(16,"".concat(t));return ye.set(e,t),ve.set(t,e),t},we=function(e,t){ge=t+1,ye.set(e,t),ve.set(t,e);},be="style[".concat(f,"][").concat(y,'="').concat(v,'"]'),Ee=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ne=function(e,t,n){for(var o,r=n.split(","),s=0,i=r.length;s<i;s++)(o=r[s])&&e.registerName(t,o);},Pe=function(e,t){for(var n,o=(null!==(n=t.textContent)&&void 0!==n?n:"").split(g),r=[],s=0,i=o.length;s<i;s++){var a=o[s].trim();if(a){var c=a.match(Ee);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(we(u,l),Ne(e,u,c[3]),e.getTag().insertRules(l,r)),r.length=0;}else r.push(a);}}},_e=function(e){for(var t=document.querySelectorAll(be),n=0,o=t.length;n<o;n++){var r=t[n];r&&r.getAttribute(f)!==m&&(Pe(e,r),r.parentNode&&r.parentNode.removeChild(r));}};function Ce(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var Ie=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(f,"]")));return t[t.length-1]}(n),s=void 0!==r?r.nextSibling:null;o.setAttribute(f,m),o.setAttribute(y,v);var i=Ce();return i&&o.setAttribute("nonce",i),n.insertBefore(o,s),o},Ae=function(){function e(e){this.element=Ie(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}throw he(17)}(this.element),this.length=0;}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Oe=function(){function e(e){this.element=Ie(e),this.nodes=this.element.childNodes,this.length=0;}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return !1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),De=function(){function e(e){this.rules=[],this.length=0;}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Re=S,Te={isServer:!S,useCSSOMInjection:!w},ke=function(){function e(e,n,o){void 0===e&&(e=C),void 0===n&&(n={});var r=this;this.options=__assign(__assign({},Te),e),this.gs=n,this.names=new Map(o),this.server=!!e.isServer,!this.server&&S&&Re&&(Re=!1,_e(this)),ue(this,function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=function(n){var r=function(e){return ve.get(e)}(n);if(void 0===r)return "continue";var s=e.names.get(r),i=t.getGroup(n);if(void 0===s||!s.size||0===i.length)return "continue";var a="".concat(f,".g").concat(n,'[id="').concat(r,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","));}),o+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(g);},s=0;s<n;s++)r(s);return o}(r)});}return e.registerId=function(e){return Se(e)},e.prototype.rehydrate=function(){!this.server&&S&&_e(this);},e.prototype.reconstructWithOptions=function(n,o){return void 0===o&&(o=!0),new e(__assign(__assign({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new De(n):t?new Ae(n):new Oe(n)}(this.options),new fe(e)));var e;},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Se(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Se(e),n);},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},e.prototype.clearRules=function(e){this.getTag().clearGroup(Se(e)),this.clearNames(e);},e.prototype.clearTag=function(){this.tag=void 0;},e}(),je=/&/g,xe=/^\s*\/\/.*$/gm;function Ve(e,t){return e.map(function(e){return "rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return "".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ve(e.children,t)),e})}function Fe(e){var t,n,o,r=void 0===e?C:e,s=r.options,i=void 0===s?C:s,a=r.plugins,c=void 0===a?_:a,l=function(e,o,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(je,n).replace(o,l));}),i.prefix&&u.push(prefixer),u.push(stringify);var p=function(e,r,s,a){void 0===r&&(r=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=r,o=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(xe,""),l=compile(s||r?"".concat(s," ").concat(r," { ").concat(c," }"):c);i.namespace&&(l=Ve(l,i.namespace));var p=[];return serialize(l,middleware(u.concat(rulesheet(function(e){return p.push(e)})))),p};return p.hash=c.length?c.reduce(function(e,t){return t.name||he(15),z(e,t.name)},F).toString():"",p}var ze=new ke,Me=Fe(),$e=React.createContext({shouldForwardProp:void 0,styleSheet:ze,stylis:Me});$e.Consumer;React.createContext(void 0);function Le(){return React.useContext($e)}var qe=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Me);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"));},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ue(this,function(){throw he(12,String(n.name))});}return e.prototype.getName=function(e){return void 0===e&&(e=Me),this.name+e.hash},e}(),We=function(e){return e>="A"&&e<="Z"};function He(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;We(o)?t+="-"+o.toLowerCase():t+=o;}return t.startsWith("ms-")?"-"+t:t}var Ue=function(e){return null==e||!1===e||""===e},Je=function(t){var n,o,r=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!Ue(i)&&(Array.isArray(i)&&i.isCss||re(i)?r.push("".concat(He(s),":"),i,";"):ce(i)?r.push.apply(r,__spreadArray(__spreadArray(["".concat(s," {")],Je(i),!1),["}"],!1)):r.push("".concat(He(s),": ").concat((n=s,null==(o=i)||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in unitlessKeys||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")));}return r};function Xe(e,t,n,o){if(Ue(e))return [];if(se(e))return [".".concat(e.styledComponentId)];if(re(e)){if(!re(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return [e];var r=e(t);return "production"===process.env.NODE_ENV||"object"!=typeof r||Array.isArray(r)||r instanceof qe||ce(r)||null===r||console.error("".concat(B(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Xe(r,t,n,o)}var s;return e instanceof qe?n?(e.inject(n,o),[e.getName(o)]):[e]:ce(e)?Je(e):Array.isArray(e)?Array.prototype.concat.apply(_,e.map(function(e){return Xe(e,t,n,o)})):[e.toString()]}function Ze(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!se(n))return !1}return !0}var Ke=M(v),Qe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&Ze(e),this.componentId=t,this.baseHash=z(Ke,t),this.baseStyle=n,ke.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ie(o,this.staticRulesId);else {var r=ae(Xe(this.rules,e,t,n)),s=x(z(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(r,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i);}o=ie(o,s),this.staticRulesId=s;}else {for(var a=z(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u,"production"!==process.env.NODE_ENV&&(a=z(a,u));else if(u){var p=ae(Xe(u,e,t,n));a=z(a,p+l),c+=p;}}if(c){var d=x(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),o=ie(o,d);}}return o},e}(),et=React.createContext(void 0);et.Consumer;var rt={},st=new Set;function it(e,r,s){var i=se(e),a=e,c=!G(e),p=r.attrs,d=void 0===p?_:p,h=r.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":R(e);rt[n]=(rt[n]||0)+1;var o="".concat(n,"-").concat($(v+n+rt[n]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):h,m=r.displayName,y=void 0===m?function(e){return G(e)?"styled.".concat(e):"Styled(".concat(B(e),")")}(e):m,g=r.displayName&&r.componentId?"".concat(R(r.displayName),"-").concat(r.componentId):r.componentId||f,S=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,w=r.shouldForwardProp;if(i&&a.shouldForwardProp){var b=a.shouldForwardProp;if(r.shouldForwardProp){var E=r.shouldForwardProp;w=function(e,t){return b(e,t)&&E(e,t)};}else w=b;}var N=new Qe(s,g,i?a.componentStyle:void 0);function O(e,r){return function(e,r,s){var i=e.attrs,a=e.componentStyle,c=e.defaultProps,p=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=React.useContext(et),m=Le(),y=e.shouldForwardProp||m.shouldForwardProp;"production"!==process.env.NODE_ENV&&React.useDebugValue(d);var v=I(r,f,c)||C,g=function(e,n,o){for(var r,s=__assign(__assign({},n),{className:void 0,theme:o}),i=0;i<e.length;i+=1){var a=re(r=e[i])?r(s):r;for(var c in a)s[c]="className"===c?ie(s[c],a[c]):"style"===c?__assign(__assign({},s[c]),a[c]):a[c];}return n.className&&(s.className=ie(s.className,n.className)),s}(i,r,v),S=g.as||h,w={};for(var b in g)void 0===g[b]||"$"===b[0]||"as"===b||"theme"===b&&g.theme===v||("forwardedAs"===b?w.as=g.forwardedAs:y&&!y(b,S)||(w[b]=g[b],y||"development"!==process.env.NODE_ENV||isPropValid(b)||st.has(b)||!A.has(S)||(st.add(b),console.warn('styled-components: it looks like an unknown prop "'.concat(b,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var E=function(e,t){var n=Le(),o=e.generateAndInjectStyles(t,n.styleSheet,n.stylis);return "production"!==process.env.NODE_ENV&&React.useDebugValue(o),o}(a,g);"production"!==process.env.NODE_ENV&&e.warnTooManyClasses&&e.warnTooManyClasses(E);var N=ie(p,d);return E&&(N+=" "+E),g.className&&(N+=" "+g.className),w[G(S)&&!A.has(S)?"class":"className"]=N,s&&(w.ref=s),React.createElement(S,w)}(D,e,r)}O.displayName=y;var D=React.forwardRef(O);return D.attrs=S,D.componentStyle=N,D.displayName=y,D.shouldForwardProp=w,D.foldedComponentIds=i?ie(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=g,D.target=i?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=0,r=t;o<r.length;o++)le(e,r[o],!0);return e}({},a.defaultProps,e):e;}}),"production"!==process.env.NODE_ENV&&(P(y,g),D.warnTooManyClasses=function(e,t){var n={},o=!1;return function(r){if(!o&&(n[r]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),o=!0,n={};}}}(y,g)),ue(D,function(){return ".".concat(D.styledComponentId)}),c&&oe(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function at(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var ct=function(e){return Object.assign(e,{isCss:!0})};function lt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(re(t)||ce(t))return ct(Xe(at(_,__spreadArray([t],n,!0))));var r=t;return 0===n.length&&1===r.length&&"string"==typeof r[0]?Xe(r):ct(Xe(at(r,n)))}function ut(n,o,r){if(void 0===r&&(r=C),!o)throw he(1,o);var s=function(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return n(o,r,lt.apply(void 0,__spreadArray([t],s,!1)))};return s.attrs=function(e){return ut(n,o,__assign(__assign({},r),{attrs:Array.prototype.concat(r.attrs,e).filter(Boolean)}))},s.withConfig=function(e){return ut(n,o,__assign(__assign({},r),e))},s}var pt=function(e){return ut(it,e)},dt=pt;A.forEach(function(e){dt[e]=pt(e);});var ht=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ze(e),ke.registerId(this.componentId+1);}return e.prototype.createStyles=function(e,t,n,o){var r=o(ae(Xe(this.rules,t,n,o)),""),s=this.componentId+e;n.insertRules(s,s,r);},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e);},e.prototype.renderStyles=function(e,t,n,o){e>2&&ke.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,o);},e}();function ft(n){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];var i=lt.apply(void 0,__spreadArray([n],r,!1)),a="sc-global-".concat($(JSON.stringify(i))),c=new ht(i,a);"production"!==process.env.NODE_ENV&&P(a);var l=function(e){var n=Le(),r=React.useContext(et),s=React.useRef(n.styleSheet.allocateGSInstance(a)).current;return "production"!==process.env.NODE_ENV&&React.Children.count(e.children)&&console.warn("The global style component ".concat(a," was given child JSX. createGlobalStyle does not render children.")),"production"!==process.env.NODE_ENV&&i.some(function(e){return "string"==typeof e&&-1!==e.indexOf("@import")})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),n.styleSheet.server&&function(e,n,o,r,s){if(c.isStatic)c.renderStyles(e,b,o,s);else {var i=__assign(__assign({},n),{theme:I(n,r,l.defaultProps)});c.renderStyles(e,i,o,s);}}(s,e,n.styleSheet,r,n.stylis),null};return React.memo(l)}"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var wt="__sc-".concat(f,"__");"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window[wt]||(window[wt]=0),1===window[wt]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[wt]+=1);

const StyledInput = dt.input `
  width: 100%;
  background: rgb(236 240 243);
  color: #374151;
  transition: all 0.2s;
  outline: none;
  box-shadow: ${props => props.$error
    ? 'inset 6px 6px 4px #ffebee, inset -6px -6px 4px #ffffff'
    : 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff'};
  border: none;
  border-radius: ${props => props.$rounded ? '9999px' : '0.75rem'};
  
  ${props => {
    switch (props.$size) {
        case 'sm': return 'padding: 0.375rem 0.75rem; font-size: 0.875rem;';
        case 'md': return 'padding: 0.5rem 1rem; font-size: 1rem;';
        case 'lg': return 'padding: 0.75rem 1.5rem; font-size: 1.125rem;';
        case 'xl': return 'padding: 1rem 2rem; font-size: 1.25rem;';
        default: return 'padding: 0.5rem 1rem; font-size: 1rem;';
    }
}}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #6b7280;
  }

  ${props => props.$neumorphic && `
    max-width: 200px;
    min-height: 40px;
    padding: 10px;
    box-shadow: 6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff;
    border-radius: 10px;

    &:focus {
      box-shadow: inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff;
    }
  `}
`;
const Input = React.forwardRef(({ type = 'text', placeholder, value, onChange, disabled = false, error = false, size = 'md', rounded = false, neumorphic = false, className, ...props }, ref) => {
    const handleChange = (e) => {
        if (onChange) {
            // Pass event directly - React Hook Form will handle it
            onChange(e);
        }
    };
    return (jsxRuntime.jsx(StyledInput, { ref: ref, type: type, placeholder: placeholder, value: value, onChange: handleChange, disabled: disabled, "$size": size, "$rounded": rounded, "$neumorphic": neumorphic, "$error": error, className: className, ...props }));
});
Input.displayName = 'Input';

const sizeClasses$2 = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
};
function Modal({ children, isOpen, onClose, title, size = 'md', className, ...props }) {
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return (jsxRuntime.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [jsxRuntime.jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50 transition-opacity", onClick: onClose }), jsxRuntime.jsxs("div", { className: cn('relative bg-neumorphism-background rounded-2xl w-full mx-4 max-h-[90vh] overflow-y-auto', sizeClasses$2[size], className), ...props, children: [title && (jsxRuntime.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [jsxRuntime.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: title }), jsxRuntime.jsx("button", { onClick: onClose, className: "p-1 text-gray-400 hover:text-gray-600 transition-colors", children: jsxRuntime.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })] })), jsxRuntime.jsx("div", { className: "p-6", children: children })] })] }));
}

function Navbar({ logo, links = [], actions, className, ...props }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    return (jsxRuntime.jsxs("nav", { className: cn('bg-neumorphism-background shadow-neumorphism-card sticky top-0 z-40', className), ...props, children: [jsxRuntime.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: jsxRuntime.jsxs("div", { className: "flex justify-between items-center h-16", children: [jsxRuntime.jsx("div", { className: "flex-shrink-0", children: logo }), jsxRuntime.jsx("div", { className: "hidden md:block", children: jsxRuntime.jsx("div", { className: "ml-10 flex items-baseline space-x-4", children: links.map((link, index) => (jsxRuntime.jsx("a", { href: link.href, className: cn('px-3 py-2 rounded-md text-sm font-medium transition-all duration-200', link.active
                                        ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white'
                                        : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white'), children: link.label }, index))) }) }), jsxRuntime.jsx("div", { className: "hidden md:block", children: jsxRuntime.jsx("div", { className: "ml-4 flex items-center space-x-4", children: actions }) }), jsxRuntime.jsx("div", { className: "md:hidden", children: jsxRuntime.jsxs("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500", children: [jsxRuntime.jsx("span", { className: "sr-only", children: "Open main menu" }), isMobileMenuOpen ? (jsxRuntime.jsx("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })) : (jsxRuntime.jsx("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) }))] }) })] }) }), isMobileMenuOpen && (jsxRuntime.jsx("div", { className: "md:hidden", children: jsxRuntime.jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neumorphism-background border-t border-gray-200", children: [links.map((link, index) => (jsxRuntime.jsx("a", { href: link.href, className: cn('block px-3 py-2 rounded-md text-base font-medium transition-all duration-200', link.active
                                ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white'
                                : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white'), onClick: () => setIsMobileMenuOpen(false), children: link.label }, index))), actions && (jsxRuntime.jsx("div", { className: "pt-4 pb-3 border-t border-gray-200", children: jsxRuntime.jsx("div", { className: "flex items-center space-x-4", children: actions }) }))] }) }))] }));
}

const Switch = React.forwardRef(({ checked = false, onChange, disabled = false, className = '', id, ...props }, ref) => {
    const handleChange = (e) => {
        onChange?.(e.target.checked);
    };
    const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    return (jsxRuntime.jsxs("div", { className: cn('relative w-[150px] h-[60px] bg-[rgb(236_240_243)] rounded-[50px]', 'shadow-[inset_6px_6px_4px_#d1d9e6,inset_-6px_-6px_4px_#ffffff]', className), ...props, children: [jsxRuntime.jsx("input", { ref: ref, id: inputId, type: "checkbox", className: "hidden", checked: checked, onChange: handleChange, disabled: disabled }), jsxRuntime.jsx("label", { htmlFor: inputId, className: "absolute top-1/2 left-0 w-full h-full -translate-y-1/2 rounded-[50px] overflow-hidden cursor-pointer", children: jsxRuntime.jsx("div", { className: cn('absolute w-[80px] h-[50px] rounded-[50px] top-[5px] left-[5px]', 'bg-gradient-to-br from-[#d2d2d2] to-[#ffffff]', 'shadow-[-3px_-3px_4px_#ffffff,3px_3px_4px_#c8c8c8]', 'transition-all duration-300 ease-in-out', 'flex items-center justify-start pl-[10px]', checked && 'left-[65px] bg-gradient-to-tl from-[#ffffff] to-[#d2d2d2]'), children: jsxRuntime.jsx("div", { className: cn('w-[10px] h-[10px] rounded-full transition-all duration-300 ease-in-out', disabled
                            ? 'bg-[#808080]'
                            : checked
                                ? 'bg-[#a855f7] shadow-[0_0_15px_4px_#a855f7]'
                                : 'bg-[#808080]') }) }) })] }));
});
Switch.displayName = 'Switch';

const sizeClasses$1 = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
};
const variantClasses$1 = {
    primary: 'bg-neumorphism-background shadow-neumorphism-card transition-all duration-200',
    concave: 'bg-neumorphism-classic shadow-neumorphism-concave transition-all duration-200',
};
function CirclePlate({ children, variant = 'primary', size = 'md', className, ...props }) {
    return (jsxRuntime.jsx("div", { className: cn('inline-flex items-center justify-center font-medium rounded-full transition-all duration-200', sizeClasses$1[size], variantClasses$1[variant], className), ...props, children: children }));
}

const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
    circle: 'px-4 py-2 text-base',
    'circle-lg': 'px-4 py-2 text-base',
    'circle-xl': 'px-4 py-2 text-base',
};
const Textarea = React.forwardRef(({ placeholder, value, onChange, disabled = false, error = false, rows = 4, size = 'md', className, ...props }, ref) => {
    const handleChange = (e) => {
        if (onChange) {
            // Pass event directly - React Hook Form will handle it
            onChange(e);
        }
    };
    return (jsxRuntime.jsx("textarea", { ref: ref, placeholder: placeholder, value: value, onChange: handleChange, disabled: disabled, rows: rows, className: cn('w-full rounded-xl bg-neumorphism-background text-gray-700 placeholder-gray-500 transition-all duration-200 focus:outline-none shadow-neumorphism-input disabled:opacity-50 disabled:cursor-not-allowed', sizeClasses[size], error && 'shadow-[inset_6px_6px_4px_#ffebee,inset_-6px_-6px_4px_#ffffff]', className), ...props }));
});
Textarea.displayName = 'Textarea';

const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    subtitle: 'text-lg text-gray-600',
    body: 'text-base',
    caption: 'text-sm text-gray-500',
};
const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    accent: 'text-accent-600',
    gray: 'text-gray-500',
};
const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};
const variantElements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle: 'p',
    body: 'p',
    caption: 'span',
};
function Typography({ children, variant = 'body', color = 'primary', weight, className, ...props }) {
    const Element = variantElements[variant];
    return (jsxRuntime.jsx(Element, { className: cn(variantClasses[variant], colorClasses[color], weight && weightClasses[weight], className), ...props, children: children }));
}

const FormField = React.forwardRef(({ label, error, required = false, className, children, htmlFor }, ref) => {
    // Генерируем id если не предоставлен
    const fieldId = htmlFor || `field-${Math.random().toString(36).substr(2, 9)}`;
    // Клонируем children и добавляем id к первому input/textarea элементу
    const enhancedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            // Проверяем, является ли это input или textarea
            if (child.type === 'input' || child.type === 'textarea' ||
                (typeof child.type === 'function' &&
                    (child.type.displayName === 'Input' || child.type.displayName === 'Textarea'))) {
                return React.cloneElement(child, {
                    id: fieldId,
                    ...child.props,
                });
            }
        }
        return child;
    });
    return (jsxRuntime.jsxs("div", { ref: ref, className: cn('space-y-2', className), children: [label && (jsxRuntime.jsxs("label", { htmlFor: fieldId, className: "block text-sm font-medium text-gray-700", children: [label, required && jsxRuntime.jsx("span", { className: "text-red-500 ml-1", children: "*" })] })), enhancedChildren, error && (jsxRuntime.jsx("p", { className: "text-sm text-red-600", children: error }))] }));
});
FormField.displayName = 'FormField';

// Global styles for neumorphic design
const NeumorphicGlobalStyle = ft `
  * {
    font-family: 'Courier New', Courier, monospace;
  }
`;
// Neumorphic background colors
dt.div `
  background: rgb(236 240 243);
`;
dt.div `
  background: #f0f0f3;
`;
// Neumorphic shadow styles
dt.div `
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
`;
dt.div `
  box-shadow: inset 18px 18px 30px #d1d9e6, inset -18px -18px 30px #ffffff;
`;
dt.div `
  box-shadow: inset 18px 18px 30px #c7ccd3, inset -18px -18px 30px #ffffff;
`;
dt.div `
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff;
`;
dt.div `
  box-shadow: inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff;
`;
dt.div `
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px #aeaece 40%;
`;
dt.div `
  box-shadow: inset -10px -10px 10px #aeaece 25%, inset 10px 10px 10px #ffffff;
`;
// Custom Input Styles
dt.input `
  max-width: 200px;
  min-height: 40px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  background: rgb(236 240 243);
  box-shadow: 6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff;
  border: none;
  border-radius: 10px;
  transition: all 0.5s;

  &:focus {
    background: rgb(236 240 243);
    box-shadow: inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff;
  }
`;
// Custom Card Styles
dt.div `
  width: 190px;
  height: 254px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 6px 6px 5px #bebebe, -6px -6px 5px #ffffff;
`;
// Switch Component Styles
dt.div `
  position: relative;
  width: 150px;
  height: 60px;
  background: rgb(236 240 243);
  border-radius: 50px;
  box-shadow: inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff;
`;
dt.input `
  display: none;
`;
dt.label `
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
`;
dt.div `
  position: absolute;
  width: 80px;
  height: 50px;
  background: ${props => props.checked
    ? 'linear-gradient(308deg, #ffffff, #d2d2d2)'
    : 'linear-gradient(145deg, #d2d2d2, #ffffff)'};
  border-radius: 50px;
  top: 5px;
  left: ${props => props.checked ? '65px' : '5px'};
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px #c8c8c8;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;

  &:hover {
    box-shadow: -4px -4px 12px #ffffff, 4px 4px 12px #c8c8c8;
  }
`;
dt.div `
  width: 10px;
  height: 10px;
  background: ${props => {
    if (props.disabled)
        return '#808080';
    if (props.checked)
        return '#a855f7';
    return '#808080';
}};
  border-radius: 50%;
  box-shadow: ${props => props.checked
    ? '0 0 15px 4px #a855f7'
    : '0 0 10px 2px rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease-in-out;
`;
// Gradient button styles
dt.button `
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.05em;
  border-radius: 0.8em;
  cursor: pointer;
  border: none;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: ghostwhite;
  overflow: hidden;

  svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
  }

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.2em 0.8em 1.05em;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  &:active {
    transform: scale(0.95);
  }
`;
// Utility styled components
dt.div `
  background-color: #ffffff;
`;
dt.div `
  background-color: #d1d9e6;
`;

function NeumorphicProvider({ children }) {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(NeumorphicGlobalStyle, {}), children] }));
}

// Function to get component examples
function getButtonExample() {
    return React.createElement('div', { className: 'p-8 space-y-8' }, React.createElement('div', null, React.createElement('h2', { className: 'text-2xl font-bold mb-4' }, 'Button Variants'), React.createElement('div', { className: 'flex flex-wrap gap-4' }, React.createElement('button', {
        className: 'px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600',
    }, 'Primary'), React.createElement('button', {
        className: 'px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200',
    }, 'Secondary'), React.createElement('button', {
        className: 'px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50',
    }, 'Outline'), React.createElement('button', {
        className: 'px-4 py-2 bg-transparent text-gray-700 rounded-lg hover:bg-gray-100',
    }, 'Ghost'))));
}
// Component documentation registry
const componentDocs = [
    {
        name: 'Button',
        description: 'A versatile button component with multiple variants, sizes, and states for user interactions.',
        examples: getButtonExample(),
        props: [
            {
                name: 'variant',
                type: "'primary' | 'secondary' | 'outline' | 'ghost'",
                required: false,
                defaultValue: "'primary'",
                description: 'The visual style variant of the button',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the button',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the button is disabled',
            },
            {
                name: 'onClick',
                type: '() => void',
                required: false,
                description: 'Callback function when button is clicked',
            },
            {
                name: 'type',
                type: "'button' | 'submit' | 'reset'",
                required: false,
                defaultValue: "'button'",
                description: 'The HTML button type',
            },
            {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: 'The content to display inside the button',
            },
        ],
    },
    {
        name: 'Input',
        description: 'A flexible input component supporting various types, sizes, and states with built-in error handling.',
        examples: React.createElement('div', { className: 'p-8 space-y-4 max-w-md' }, React.createElement('input', {
            type: 'text',
            placeholder: 'Enter your name',
            className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
        }), React.createElement('input', {
            type: 'email',
            placeholder: 'Enter your email',
            className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
        }), React.createElement('input', {
            type: 'password',
            placeholder: 'Enter your password',
            className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
        })),
        props: [
            {
                name: 'type',
                type: "'text' | 'password' | 'email' | 'search'",
                required: false,
                defaultValue: "'text'",
                description: 'The HTML input type',
            },
            {
                name: 'placeholder',
                type: 'string',
                required: false,
                description: 'Placeholder text for the input',
            },
            {
                name: 'value',
                type: 'string',
                required: false,
                description: 'The current value of the input',
            },
            {
                name: 'onChange',
                type: '(value: string) => void',
                required: false,
                description: 'Callback function when input value changes',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the input is disabled',
            },
            {
                name: 'error',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether to show error styling',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the input',
            },
        ],
    },
    {
        name: 'Textarea',
        description: 'A multi-line text input component with configurable rows, sizes, and error states.',
        examples: React.createElement('div', { className: 'p-8 space-y-4 max-w-md' }, React.createElement('textarea', {
            placeholder: 'Write your message here...',
            rows: 4,
            className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 resize-vertical',
        })),
        props: [
            {
                name: 'placeholder',
                type: 'string',
                required: false,
                description: 'Placeholder text for the textarea',
            },
            {
                name: 'value',
                type: 'string',
                required: false,
                description: 'The current value of the textarea',
            },
            {
                name: 'onChange',
                type: '(value: string) => void',
                required: false,
                description: 'Callback function when textarea value changes',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the textarea is disabled',
            },
            {
                name: 'error',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether to show error styling',
            },
            {
                name: 'rows',
                type: 'number',
                required: false,
                defaultValue: '4',
                description: 'Number of visible text lines',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the textarea',
            },
        ],
    },
    {
        name: 'Card',
        description: 'A container component for content with different styling variants and padding options.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('div', { className: 'bg-white border border-gray-200 rounded-xl p-4' }, React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Card Title'), React.createElement('p', { className: 'text-gray-600' }, 'This is a card with content.')), React.createElement('div', { className: 'bg-white shadow-soft rounded-xl p-4' }, React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Elevated Card'), React.createElement('p', { className: 'text-gray-600' }, 'This card has a shadow.'))),
        props: [
            {
                name: 'variant',
                type: "'default' | 'elevated' | 'outlined'",
                required: false,
                defaultValue: "'default'",
                description: 'The visual style variant of the card',
            },
            {
                name: 'padding',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The padding size inside the card',
            },
            {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: 'The content to display inside the card',
            },
        ],
    },
    {
        name: 'Avatar',
        description: 'A circular image component with fallback support for user profiles and avatars.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('div', { className: 'flex items-center space-x-4' }, React.createElement('div', {
            className: 'w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center',
        }, React.createElement('span', { className: 'text-gray-600 font-medium' }, 'JD')), React.createElement('div', {
            className: 'w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center',
        }, React.createElement('span', { className: 'text-gray-600 font-medium' }, 'JS')), React.createElement('div', {
            className: 'w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center',
        }, React.createElement('span', { className: 'text-gray-600 font-medium' }, 'MJ')))),
        props: [
            {
                name: 'src',
                type: 'string',
                required: false,
                description: 'URL of the avatar image',
            },
            {
                name: 'alt',
                type: 'string',
                required: false,
                description: 'Alt text for the avatar image',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the avatar',
            },
            {
                name: 'fallback',
                type: 'string',
                required: false,
                description: 'Text to display when image fails to load (usually initials)',
            },
        ],
    },
    {
        name: 'Typography',
        description: 'A comprehensive text component with various styles, colors, and weights for consistent typography.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('h1', { className: 'text-4xl font-bold text-gray-900' }, 'Heading 1'), React.createElement('h2', { className: 'text-3xl font-bold text-gray-900' }, 'Heading 2'), React.createElement('h3', { className: 'text-2xl font-semibold text-gray-900' }, 'Heading 3'), React.createElement('p', { className: 'text-lg text-gray-600' }, 'Subtitle text'), React.createElement('p', { className: 'text-base text-gray-900' }, 'Body text'), React.createElement('span', { className: 'text-sm text-gray-500' }, 'Caption text')),
        props: [
            {
                name: 'variant',
                type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption'",
                required: false,
                defaultValue: "'body'",
                description: 'The typography variant to use',
            },
            {
                name: 'color',
                type: "'primary' | 'secondary' | 'accent' | 'gray'",
                required: false,
                defaultValue: "'primary'",
                description: 'The color of the text',
            },
            {
                name: 'weight',
                type: "'normal' | 'medium' | 'semibold' | 'bold'",
                required: false,
                description: 'The font weight of the text',
            },
            {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: 'The text content to display',
            },
        ],
    },
    {
        name: 'Modal',
        description: 'A modal dialog component with backdrop, keyboard support, and multiple sizes for overlays.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('div', {
            className: 'bg-white border border-gray-200 rounded-xl p-6 max-w-md',
        }, React.createElement('h3', { className: 'text-xl font-semibold mb-4' }, 'Modal Example'), React.createElement('p', { className: 'text-gray-600 mb-4' }, 'This is an example of a modal dialog.'), React.createElement('div', { className: 'flex justify-end space-x-3' }, React.createElement('button', {
            className: 'px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50',
        }, 'Cancel'), React.createElement('button', {
            className: 'px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600',
        }, 'Confirm')))),
        props: [
            {
                name: 'isOpen',
                type: 'boolean',
                required: true,
                description: 'Whether the modal is currently open',
            },
            {
                name: 'onClose',
                type: '() => void',
                required: true,
                description: 'Callback function to close the modal',
            },
            {
                name: 'title',
                type: 'string',
                required: false,
                description: 'The title displayed in the modal header',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the modal',
            },
            {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: 'The content to display inside the modal',
            },
        ],
    },
    {
        name: 'Navbar',
        description: 'A responsive navigation bar component with mobile menu, logo, navigation links, and actions.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('nav', { className: 'bg-white border-b border-gray-200 px-4 py-3' }, React.createElement('div', { className: 'flex items-center justify-between' }, React.createElement('div', { className: 'flex items-center' }, React.createElement('span', { className: 'text-xl font-bold' }, 'Logo')), React.createElement('div', { className: 'hidden md:flex space-x-4' }, React.createElement('a', { href: '#', className: 'text-gray-600 hover:text-gray-900' }, 'Home'), React.createElement('a', { href: '#', className: 'text-gray-600 hover:text-gray-900' }, 'About'), React.createElement('a', { href: '#', className: 'text-gray-600 hover:text-gray-900' }, 'Contact')), React.createElement('button', { className: 'md:hidden' }, '☰')))),
        props: [
            {
                name: 'logo',
                type: 'ReactNode',
                required: false,
                description: 'The logo or brand element to display',
            },
            {
                name: 'links',
                type: 'Array<{ label: string; href: string; active?: boolean }>',
                required: false,
                defaultValue: '[]',
                description: 'Array of navigation links to display',
            },
            {
                name: 'actions',
                type: 'ReactNode',
                required: false,
                description: 'Action elements to display on the right side (buttons, avatars, etc.)',
            },
        ],
    },
    {
        name: 'Switch',
        description: 'A toggle switch component with neumorphic design, supporting controlled and uncontrolled states.',
        examples: React.createElement('div', { className: 'p-8 space-y-6' }, React.createElement('div', { className: 'flex items-center space-x-8' }, React.createElement('div', { className: 'text-center' }, React.createElement('div', {
            className: 'relative w-[150px] h-[60px] bg-[rgb(236_240_243)] rounded-[50px] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]',
        }, React.createElement('input', {
            type: 'checkbox',
            className: 'hidden',
            defaultChecked: false,
        }), React.createElement('label', { className: 'absolute top-1/2 left-0 w-full h-full -translate-y-1/2 rounded-[50px] overflow-hidden cursor-pointer' }, React.createElement('div', {
            className: 'absolute w-[80px] h-[50px] rounded-[50px] top-[5px] left-[5px] bg-gradient-to-br from-[#d2d2d2] to-[#ffffff] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#c8c8c8] transition-all duration-300 ease-in-out flex items-center justify-start pl-[10px]',
        }, React.createElement('div', { className: 'w-[10px] h-[10px] rounded-full bg-gray-500 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out' })))), React.createElement('span', { className: 'block mt-2 text-sm text-gray-600' }, 'OFF')), React.createElement('div', { className: 'text-center' }, React.createElement('div', {
            className: 'relative w-[150px] h-[60px] bg-[rgb(236_240_243)] rounded-[50px] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]',
        }, React.createElement('input', {
            type: 'checkbox',
            className: 'hidden',
            defaultChecked: true,
        }), React.createElement('label', { className: 'absolute top-1/2 left-0 w-full h-full -translate-y-1/2 rounded-[50px] overflow-hidden cursor-pointer' }, React.createElement('div', {
            className: 'absolute w-[80px] h-[50px] rounded-[50px] top-[5px] left-[65px] bg-gradient-to-tl from-[#ffffff] to-[#d2d2d2] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#c8c8c8] transition-all duration-300 ease-in-out flex items-center justify-start pl-[10px]',
        }, React.createElement('div', { className: 'w-[10px] h-[10px] rounded-full bg-[#ffff00] shadow-[0_0_15px_4px_#ffff00] transition-all duration-300 ease-in-out' })))), React.createElement('span', { className: 'block mt-2 text-sm text-gray-600' }, 'ON')))),
        props: [
            {
                name: 'checked',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the switch is in the ON position',
            },
            {
                name: 'onChange',
                type: '(checked: boolean) => void',
                required: false,
                description: 'Callback function when switch state changes',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the switch is disabled',
            },
        ],
    },
];
// Function to add new components to the registry
function registerComponent(componentDoc) {
    componentDocs.push(componentDoc);
}
// Function to get all components
function getAllComponents() {
    return componentDocs;
}
// Function to get a specific component by name
function getComponent(name) {
    return componentDocs.find((comp) => comp.name.toLowerCase() === name.toLowerCase());
}

function DocGenerator({ components, title = '@clear/ui Documentation', description = 'Complete component library documentation', }) {
    return (jsxRuntime.jsxs("div", { className: "min-h-screen bg-gray-50", children: [jsxRuntime.jsx("div", { className: "bg-white border-b border-gray-200 sticky top-0 z-50", children: jsxRuntime.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: jsxRuntime.jsxs("div", { className: "py-6", children: [jsxRuntime.jsx(Typography, { variant: "h1", className: "text-3xl font-bold text-gray-900", children: title }), jsxRuntime.jsx(Typography, { variant: "subtitle", color: "secondary", className: "mt-2", children: description })] }) }) }), jsxRuntime.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: jsxRuntime.jsx("div", { className: "space-y-12", children: components.map((component) => (jsxRuntime.jsxs("section", { id: component.name.toLowerCase(), children: [jsxRuntime.jsxs("div", { className: "mb-8", children: [jsxRuntime.jsx(Typography, { variant: "h2", className: "text-2xl font-bold text-gray-900 mb-2", children: component.name }), jsxRuntime.jsx(Typography, { variant: "body", color: "secondary", children: component.description })] }), jsxRuntime.jsxs(Card, { variant: "default", padding: "lg", className: "mb-8", children: [jsxRuntime.jsx(Typography, { variant: "h4", className: "mb-4", children: "Examples" }), component.examples] }), component.props && component.props.length > 0 && (jsxRuntime.jsxs(Card, { variant: "outlined", padding: "lg", children: [jsxRuntime.jsx(Typography, { variant: "h4", className: "mb-4", children: "Props" }), jsxRuntime.jsx("div", { className: "overflow-x-auto", children: jsxRuntime.jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [jsxRuntime.jsx("thead", { className: "bg-gray-50", children: jsxRuntime.jsxs("tr", { children: [jsxRuntime.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Prop" }), jsxRuntime.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Type" }), jsxRuntime.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Required" }), jsxRuntime.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Default" }), jsxRuntime.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Description" })] }) }), jsxRuntime.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: component.props.map((prop) => (jsxRuntime.jsxs("tr", { children: [jsxRuntime.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: prop.name }), jsxRuntime.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono", children: prop.type }), jsxRuntime.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: prop.required ? (jsxRuntime.jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800", children: "Required" })) : (jsxRuntime.jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800", children: "Optional" })) }), jsxRuntime.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono", children: prop.defaultValue || '-' }), jsxRuntime.jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: prop.description })] }, prop.name))) })] }) })] }))] }, component.name))) }) })] }));
}

const defaultTheme = {
    accentColor: '#a855f7', // purple-500
    accentColorLight: '#d8b4fe', // purple-300
    accentColorDark: '#7c3aed', // purple-700
};
const ThemeContext = React.createContext(undefined);
function ThemeProvider({ children, initialTheme = {} }) {
    const [theme, setThemeState] = React.useState({
        ...defaultTheme,
        ...initialTheme,
    });
    const setTheme = React.useCallback((newTheme) => {
        setThemeState(prev => ({ ...prev, ...newTheme }));
    }, []);
    return (jsxRuntime.jsx(ThemeContext.Provider, { value: { theme, setTheme }, children: children }));
}
function useTheme() {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

exports.Avatar = Avatar;
exports.Button = Button;
exports.Card = Card;
exports.CirclePlate = CirclePlate;
exports.DocGenerator = DocGenerator;
exports.FormField = FormField;
exports.Input = Input;
exports.Modal = Modal;
exports.Navbar = Navbar;
exports.NeumorphicProvider = NeumorphicProvider;
exports.Switch = Switch;
exports.Textarea = Textarea;
exports.ThemeProvider = ThemeProvider;
exports.Typography = Typography;
exports.cn = cn;
exports.componentDocs = componentDocs;
exports.defaultTheme = defaultTheme;
exports.getAllComponents = getAllComponents;
exports.getComponent = getComponent;
exports.registerComponent = registerComponent;
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map
