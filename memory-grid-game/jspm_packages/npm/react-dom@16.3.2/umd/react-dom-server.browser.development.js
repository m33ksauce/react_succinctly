/* */ 
"format cjs";
(function(process) {
  'use strict';
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) : typeof define === 'function' && define.amd ? define(['react'], factory) : (global.ReactDOMServer = factory(global.React));
  }(this, (function(React) {
    'use strict';
    var validateFormat = function validateFormat(format) {};
    {
      validateFormat = function validateFormat(format) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      };
    }
    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);
      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }
        error.framesToPop = 1;
        throw error;
      }
    }
    var invariant_1 = invariant;
    var ReactVersion = '16.3.2';
    var ReactInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var _assign = ReactInternals.assign;
    function makeEmptyFunction(arg) {
      return function() {
        return arg;
      };
    }
    var emptyFunction = function emptyFunction() {};
    emptyFunction.thatReturns = makeEmptyFunction;
    emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction.thatReturnsThis = function() {
      return this;
    };
    emptyFunction.thatReturnsArgument = function(arg) {
      return arg;
    };
    var emptyFunction_1 = emptyFunction;
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    var emptyObject_1 = emptyObject;
    var _uppercasePattern = /([A-Z])/g;
    function hyphenate(string) {
      return string.replace(_uppercasePattern, '-$1').toLowerCase();
    }
    var hyphenate_1 = hyphenate;
    var msPattern = /^ms-/;
    function hyphenateStyleName(string) {
      return hyphenate_1(string).replace(msPattern, '-ms-');
    }
    var hyphenateStyleName_1 = hyphenateStyleName;
    var lowPriorityWarning = function() {};
    {
      var printWarning = function(format) {
        for (var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.warn(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
      lowPriorityWarning = function(condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
          for (var _len2 = arguments.length,
              args = Array(_len2 > 2 ? _len2 - 2 : 0),
              _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;
    function memoizeStringOnly(callback) {
      var cache = {};
      return function(string) {
        if (!cache.hasOwnProperty(string)) {
          cache[string] = callback.call(this, string);
        }
        return cache[string];
      };
    }
    var memoizeStringOnly_1 = memoizeStringOnly;
    var warning = emptyFunction_1;
    {
      var printWarning$1 = function printWarning(format) {
        for (var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
      warning = function warning(condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.indexOf('Failed Composite propType: ') === 0) {
          return;
        }
        if (!condition) {
          for (var _len2 = arguments.length,
              args = Array(_len2 > 2 ? _len2 - 2 : 0),
              _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          printWarning$1.apply(undefined, [format].concat(args));
        }
      };
    }
    var warning_1 = warning;
    var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
    {
      var invariant$2 = invariant_1;
      var warning$2 = warning_1;
      var ReactPropTypesSecret = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};
    }
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      {
        for (var typeSpecName in typeSpecs) {
          if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            try {
              invariant$2(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            warning$2(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : '';
              warning$2(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
            }
          }
        }
      }
    }
    var checkPropTypes_1 = checkPropTypes;
    var describeComponentFrame = function(name, source, ownerName) {
      return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
    };
    var ReactInternals$1 = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var ReactCurrentOwner = ReactInternals$1.ReactCurrentOwner;
    var ReactDebugCurrentFrame = ReactInternals$1.ReactDebugCurrentFrame;
    var warnAboutDeprecatedLifecycles = false;
    var hasSymbol = typeof Symbol === 'function' && Symbol['for'];
    var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
    var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol['for']('react.strict_mode') : 0xeacc;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol['for']('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol['for']('react.context') : 0xeace;
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol['for']('react.async_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol['for']('react.forward_ref') : 0xead0;
    var RESERVED = 0;
    var STRING = 1;
    var BOOLEANISH_STRING = 2;
    var BOOLEAN = 3;
    var OVERLOADED_BOOLEAN = 4;
    var NUMERIC = 5;
    var POSITIVE_NUMERIC = 6;
    var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
    var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
    var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
    var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
        return true;
      }
      if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
        return false;
      }
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
        validatedAttributeNameCache[attributeName] = true;
        return true;
      }
      illegalAttributeNameCache[attributeName] = true;
      {
        warning_1(false, 'Invalid attribute name: `%s`', attributeName);
      }
      return false;
    }
    function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
      if (propertyInfo !== null) {
        return propertyInfo.type === RESERVED;
      }
      if (isCustomComponentTag) {
        return false;
      }
      if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
        return true;
      }
      return false;
    }
    function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
      if (propertyInfo !== null && propertyInfo.type === RESERVED) {
        return false;
      }
      switch (typeof value) {
        case 'function':
        case 'symbol':
          return true;
        case 'boolean':
          {
            if (isCustomComponentTag) {
              return false;
            }
            if (propertyInfo !== null) {
              return !propertyInfo.acceptsBooleans;
            } else {
              var prefix = name.toLowerCase().slice(0, 5);
              return prefix !== 'data-' && prefix !== 'aria-';
            }
          }
        default:
          return false;
      }
    }
    function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
      if (value === null || typeof value === 'undefined') {
        return true;
      }
      if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
        return true;
      }
      if (propertyInfo !== null) {
        switch (propertyInfo.type) {
          case BOOLEAN:
            return !value;
          case OVERLOADED_BOOLEAN:
            return value === false;
          case NUMERIC:
            return isNaN(value);
          case POSITIVE_NUMERIC:
            return isNaN(value) || value < 1;
        }
      }
      return false;
    }
    function getPropertyInfo(name) {
      return properties.hasOwnProperty(name) ? properties[name] : null;
    }
    function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
      this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
      this.attributeName = attributeName;
      this.attributeNamespace = attributeNamespace;
      this.mustUseProperty = mustUseProperty;
      this.propertyName = name;
      this.type = type;
    }
    var properties = {};
    ['children', 'dangerouslySetInnerHTML', 'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null);
    });
    [['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function(_ref) {
      var name = _ref[0],
          attributeName = _ref[1];
      properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null);
    });
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null);
    });
    ['autoReverse', 'externalResourcesRequired', 'preserveAlpha'].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null);
    });
    ['allowFullScreen', 'async', 'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', 'itemScope'].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null);
    });
    ['checked', 'multiple', 'muted', 'selected'].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name.toLowerCase(), null);
    });
    ['capture', 'download'].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name.toLowerCase(), null);
    });
    ['cols', 'rows', 'size', 'span'].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name.toLowerCase(), null);
    });
    ['rowSpan', 'start'].forEach(function(name) {
      properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null);
    });
    var CAMELIZE = /[\-\:]([a-z])/g;
    var capitalize = function(token) {
      return token[1].toUpperCase();
    };
    ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function(attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null);
    });
    ['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function(attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/1999/xlink');
    });
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function(attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/XML/1998/namespace');
    });
    properties.tabIndex = new PropertyInfoRecord('tabIndex', STRING, false, 'tabindex', null);
    var matchHtmlRegExp = /["'&<>]/;
    function escapeHtml(string) {
      var str = '' + string;
      var match = matchHtmlRegExp.exec(str);
      if (!match) {
        return str;
      }
      var escape = void 0;
      var html = '';
      var index = 0;
      var lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escape = '&quot;';
            break;
          case 38:
            escape = '&amp;';
            break;
          case 39:
            escape = '&#x27;';
            break;
          case 60:
            escape = '&lt;';
            break;
          case 62:
            escape = '&gt;';
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escape;
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
    function escapeTextForBrowser(text) {
      if (typeof text === 'boolean' || typeof text === 'number') {
        return '' + text;
      }
      return escapeHtml(text);
    }
    function quoteAttributeValueForBrowser(value) {
      return '"' + escapeTextForBrowser(value) + '"';
    }
    function createMarkupForRoot() {
      return ROOT_ATTRIBUTE_NAME + '=""';
    }
    function createMarkupForProperty(name, value) {
      var propertyInfo = getPropertyInfo(name);
      if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
        return '';
      }
      if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
        return '';
      }
      if (propertyInfo !== null) {
        var attributeName = propertyInfo.attributeName;
        var type = propertyInfo.type;
        if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
          return attributeName + '=""';
        } else {
          return attributeName + '=' + quoteAttributeValueForBrowser(value);
        }
      } else {
        return name + '=' + quoteAttributeValueForBrowser(value);
      }
    }
    function createMarkupForCustomAttribute(name, value) {
      if (!isAttributeNameSafe(name) || value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser(value);
    }
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var Namespaces = {
      html: HTML_NAMESPACE,
      mathml: MATH_NAMESPACE,
      svg: SVG_NAMESPACE
    };
    function getIntrinsicNamespace(type) {
      switch (type) {
        case 'svg':
          return SVG_NAMESPACE;
        case 'math':
          return MATH_NAMESPACE;
        default:
          return HTML_NAMESPACE;
      }
    }
    function getChildNamespace(parentNamespace, type) {
      if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
        return getIntrinsicNamespace(type);
      }
      if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
        return HTML_NAMESPACE;
      }
      return parentNamespace;
    }
    var ReactControlledValuePropTypes = {checkPropTypes: null};
    {
      var hasReadOnlyValue = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
      };
      var propTypes = {
        value: function(props, propName, componentName) {
          if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
            return null;
          }
          return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
        },
        checked: function(props, propName, componentName) {
          if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
            return null;
          }
          return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
        }
      };
      ReactControlledValuePropTypes.checkPropTypes = function(tagName, props, getStack) {
        checkPropTypes_1(propTypes, props, 'prop', tagName, getStack);
      };
    }
    var omittedCloseTags = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    var voidElementTags = _assign({menuitem: true}, omittedCloseTags);
    var HTML = '__html';
    function assertValidProps(tag, props, getStack) {
      if (!props) {
        return;
      }
      if (voidElementTags[tag]) {
        !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant_1(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, getStack()) : void 0;
      }
      if (props.dangerouslySetInnerHTML != null) {
        !(props.children == null) ? invariant_1(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
        !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant_1(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
      }
      {
        !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning_1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.%s', getStack()) : void 0;
      }
      !(props.style == null || typeof props.style === 'object') ? invariant_1(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getStack()) : void 0;
    }
    var isUnitlessNumber = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    function prefixKey(prefix, key) {
      return prefix + key.charAt(0).toUpperCase() + key.substring(1);
    }
    var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(isUnitlessNumber).forEach(function(prop) {
      prefixes.forEach(function(prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
      });
    });
    function dangerousStyleValue(name, value, isCustomProperty) {
      var isEmpty = value == null || typeof value === 'boolean' || value === '';
      if (isEmpty) {
        return '';
      }
      if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
        return value + 'px';
      }
      return ('' + value).trim();
    }
    function isCustomComponent(tagName, props) {
      if (tagName.indexOf('-') === -1) {
        return typeof props.is === 'string';
      }
      switch (tagName) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return false;
        default:
          return true;
      }
    }
    var _hyphenPattern = /-(.)/g;
    function camelize(string) {
      return string.replace(_hyphenPattern, function(_, character) {
        return character.toUpperCase();
      });
    }
    var camelize_1 = camelize;
    var msPattern$1 = /^-ms-/;
    function camelizeStyleName(string) {
      return camelize_1(string.replace(msPattern$1, 'ms-'));
    }
    var camelizeStyleName_1 = camelizeStyleName;
    var warnValidStyle = emptyFunction_1;
    {
      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
      var badStyleValueWithSemicolonPattern = /;\s*$/;
      var warnedStyleNames = {};
      var warnedStyleValues = {};
      var warnedForNaNValue = false;
      var warnedForInfinityValue = false;
      var warnHyphenatedStyleName = function(name, getStack) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }
        warnedStyleNames[name] = true;
        warning_1(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName_1(name), getStack());
      };
      var warnBadVendoredStyleName = function(name, getStack) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }
        warnedStyleNames[name] = true;
        warning_1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), getStack());
      };
      var warnStyleValueWithSemicolon = function(name, value, getStack) {
        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
          return;
        }
        warnedStyleValues[value] = true;
        warning_1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.%s', name, value.replace(badStyleValueWithSemicolonPattern, ''), getStack());
      };
      var warnStyleValueIsNaN = function(name, value, getStack) {
        if (warnedForNaNValue) {
          return;
        }
        warnedForNaNValue = true;
        warning_1(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, getStack());
      };
      var warnStyleValueIsInfinity = function(name, value, getStack) {
        if (warnedForInfinityValue) {
          return;
        }
        warnedForInfinityValue = true;
        warning_1(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, getStack());
      };
      warnValidStyle = function(name, value, getStack) {
        if (name.indexOf('-') > -1) {
          warnHyphenatedStyleName(name, getStack);
        } else if (badVendoredStyleNamePattern.test(name)) {
          warnBadVendoredStyleName(name, getStack);
        } else if (badStyleValueWithSemicolonPattern.test(value)) {
          warnStyleValueWithSemicolon(name, value, getStack);
        }
        if (typeof value === 'number') {
          if (isNaN(value)) {
            warnStyleValueIsNaN(name, value, getStack);
          } else if (!isFinite(value)) {
            warnStyleValueIsInfinity(name, value, getStack);
          }
        }
      };
    }
    var warnValidStyle$1 = warnValidStyle;
    var ariaProperties = {
      'aria-current': 0,
      'aria-details': 0,
      'aria-disabled': 0,
      'aria-hidden': 0,
      'aria-invalid': 0,
      'aria-keyshortcuts': 0,
      'aria-label': 0,
      'aria-roledescription': 0,
      'aria-autocomplete': 0,
      'aria-checked': 0,
      'aria-expanded': 0,
      'aria-haspopup': 0,
      'aria-level': 0,
      'aria-modal': 0,
      'aria-multiline': 0,
      'aria-multiselectable': 0,
      'aria-orientation': 0,
      'aria-placeholder': 0,
      'aria-pressed': 0,
      'aria-readonly': 0,
      'aria-required': 0,
      'aria-selected': 0,
      'aria-sort': 0,
      'aria-valuemax': 0,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      'aria-valuetext': 0,
      'aria-atomic': 0,
      'aria-busy': 0,
      'aria-live': 0,
      'aria-relevant': 0,
      'aria-dropeffect': 0,
      'aria-grabbed': 0,
      'aria-activedescendant': 0,
      'aria-colcount': 0,
      'aria-colindex': 0,
      'aria-colspan': 0,
      'aria-controls': 0,
      'aria-describedby': 0,
      'aria-errormessage': 0,
      'aria-flowto': 0,
      'aria-labelledby': 0,
      'aria-owns': 0,
      'aria-posinset': 0,
      'aria-rowcount': 0,
      'aria-rowindex': 0,
      'aria-rowspan': 0,
      'aria-setsize': 0
    };
    var warnedProperties = {};
    var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
    var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function getStackAddendum$1() {
      var stack = ReactDebugCurrentFrame.getStackAddendum();
      return stack != null ? stack : '';
    }
    function validateProperty(tagName, name) {
      if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
        return true;
      }
      if (rARIACamel.test(name)) {
        var ariaName = 'aria-' + name.slice(4).toLowerCase();
        var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
        if (correctName == null) {
          warning_1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum$1());
          warnedProperties[name] = true;
          return true;
        }
        if (name !== correctName) {
          warning_1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum$1());
          warnedProperties[name] = true;
          return true;
        }
      }
      if (rARIA.test(name)) {
        var lowerCasedName = name.toLowerCase();
        var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
        if (standardName == null) {
          warnedProperties[name] = true;
          return false;
        }
        if (name !== standardName) {
          warning_1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$1());
          warnedProperties[name] = true;
          return true;
        }
      }
      return true;
    }
    function warnInvalidARIAProps(type, props) {
      var invalidProps = [];
      for (var key in props) {
        var isValid = validateProperty(type, key);
        if (!isValid) {
          invalidProps.push(key);
        }
      }
      var unknownPropString = invalidProps.map(function(prop) {
        return '`' + prop + '`';
      }).join(', ');
      if (invalidProps.length === 1) {
        warning_1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1());
      } else if (invalidProps.length > 1) {
        warning_1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum$1());
      }
    }
    function validateProperties(type, props) {
      if (isCustomComponent(type, props)) {
        return;
      }
      warnInvalidARIAProps(type, props);
    }
    var didWarnValueNull = false;
    function getStackAddendum$2() {
      var stack = ReactDebugCurrentFrame.getStackAddendum();
      return stack != null ? stack : '';
    }
    function validateProperties$1(type, props) {
      if (type !== 'input' && type !== 'textarea' && type !== 'select') {
        return;
      }
      if (props != null && props.value === null && !didWarnValueNull) {
        didWarnValueNull = true;
        if (type === 'select' && props.multiple) {
          warning_1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.%s', type, getStackAddendum$2());
        } else {
          warning_1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum$2());
        }
      }
    }
    var registrationNameModules = {};
    var possibleRegistrationNames = {};
    var possibleStandardNames = {
      accept: 'accept',
      acceptcharset: 'acceptCharset',
      'accept-charset': 'acceptCharset',
      accesskey: 'accessKey',
      action: 'action',
      allowfullscreen: 'allowFullScreen',
      alt: 'alt',
      as: 'as',
      async: 'async',
      autocapitalize: 'autoCapitalize',
      autocomplete: 'autoComplete',
      autocorrect: 'autoCorrect',
      autofocus: 'autoFocus',
      autoplay: 'autoPlay',
      autosave: 'autoSave',
      capture: 'capture',
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      challenge: 'challenge',
      charset: 'charSet',
      checked: 'checked',
      children: 'children',
      cite: 'cite',
      'class': 'className',
      classid: 'classID',
      classname: 'className',
      cols: 'cols',
      colspan: 'colSpan',
      content: 'content',
      contenteditable: 'contentEditable',
      contextmenu: 'contextMenu',
      controls: 'controls',
      controlslist: 'controlsList',
      coords: 'coords',
      crossorigin: 'crossOrigin',
      dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
      data: 'data',
      datetime: 'dateTime',
      'default': 'default',
      defaultchecked: 'defaultChecked',
      defaultvalue: 'defaultValue',
      defer: 'defer',
      dir: 'dir',
      disabled: 'disabled',
      download: 'download',
      draggable: 'draggable',
      enctype: 'encType',
      'for': 'htmlFor',
      form: 'form',
      formmethod: 'formMethod',
      formaction: 'formAction',
      formenctype: 'formEncType',
      formnovalidate: 'formNoValidate',
      formtarget: 'formTarget',
      frameborder: 'frameBorder',
      headers: 'headers',
      height: 'height',
      hidden: 'hidden',
      high: 'high',
      href: 'href',
      hreflang: 'hrefLang',
      htmlfor: 'htmlFor',
      httpequiv: 'httpEquiv',
      'http-equiv': 'httpEquiv',
      icon: 'icon',
      id: 'id',
      innerhtml: 'innerHTML',
      inputmode: 'inputMode',
      integrity: 'integrity',
      is: 'is',
      itemid: 'itemID',
      itemprop: 'itemProp',
      itemref: 'itemRef',
      itemscope: 'itemScope',
      itemtype: 'itemType',
      keyparams: 'keyParams',
      keytype: 'keyType',
      kind: 'kind',
      label: 'label',
      lang: 'lang',
      list: 'list',
      loop: 'loop',
      low: 'low',
      manifest: 'manifest',
      marginwidth: 'marginWidth',
      marginheight: 'marginHeight',
      max: 'max',
      maxlength: 'maxLength',
      media: 'media',
      mediagroup: 'mediaGroup',
      method: 'method',
      min: 'min',
      minlength: 'minLength',
      multiple: 'multiple',
      muted: 'muted',
      name: 'name',
      nomodule: 'noModule',
      nonce: 'nonce',
      novalidate: 'noValidate',
      open: 'open',
      optimum: 'optimum',
      pattern: 'pattern',
      placeholder: 'placeholder',
      playsinline: 'playsInline',
      poster: 'poster',
      preload: 'preload',
      profile: 'profile',
      radiogroup: 'radioGroup',
      readonly: 'readOnly',
      referrerpolicy: 'referrerPolicy',
      rel: 'rel',
      required: 'required',
      reversed: 'reversed',
      role: 'role',
      rows: 'rows',
      rowspan: 'rowSpan',
      sandbox: 'sandbox',
      scope: 'scope',
      scoped: 'scoped',
      scrolling: 'scrolling',
      seamless: 'seamless',
      selected: 'selected',
      shape: 'shape',
      size: 'size',
      sizes: 'sizes',
      span: 'span',
      spellcheck: 'spellCheck',
      src: 'src',
      srcdoc: 'srcDoc',
      srclang: 'srcLang',
      srcset: 'srcSet',
      start: 'start',
      step: 'step',
      style: 'style',
      summary: 'summary',
      tabindex: 'tabIndex',
      target: 'target',
      title: 'title',
      type: 'type',
      usemap: 'useMap',
      value: 'value',
      width: 'width',
      wmode: 'wmode',
      wrap: 'wrap',
      about: 'about',
      accentheight: 'accentHeight',
      'accent-height': 'accentHeight',
      accumulate: 'accumulate',
      additive: 'additive',
      alignmentbaseline: 'alignmentBaseline',
      'alignment-baseline': 'alignmentBaseline',
      allowreorder: 'allowReorder',
      alphabetic: 'alphabetic',
      amplitude: 'amplitude',
      arabicform: 'arabicForm',
      'arabic-form': 'arabicForm',
      ascent: 'ascent',
      attributename: 'attributeName',
      attributetype: 'attributeType',
      autoreverse: 'autoReverse',
      azimuth: 'azimuth',
      basefrequency: 'baseFrequency',
      baselineshift: 'baselineShift',
      'baseline-shift': 'baselineShift',
      baseprofile: 'baseProfile',
      bbox: 'bbox',
      begin: 'begin',
      bias: 'bias',
      by: 'by',
      calcmode: 'calcMode',
      capheight: 'capHeight',
      'cap-height': 'capHeight',
      clip: 'clip',
      clippath: 'clipPath',
      'clip-path': 'clipPath',
      clippathunits: 'clipPathUnits',
      cliprule: 'clipRule',
      'clip-rule': 'clipRule',
      color: 'color',
      colorinterpolation: 'colorInterpolation',
      'color-interpolation': 'colorInterpolation',
      colorinterpolationfilters: 'colorInterpolationFilters',
      'color-interpolation-filters': 'colorInterpolationFilters',
      colorprofile: 'colorProfile',
      'color-profile': 'colorProfile',
      colorrendering: 'colorRendering',
      'color-rendering': 'colorRendering',
      contentscripttype: 'contentScriptType',
      contentstyletype: 'contentStyleType',
      cursor: 'cursor',
      cx: 'cx',
      cy: 'cy',
      d: 'd',
      datatype: 'datatype',
      decelerate: 'decelerate',
      descent: 'descent',
      diffuseconstant: 'diffuseConstant',
      direction: 'direction',
      display: 'display',
      divisor: 'divisor',
      dominantbaseline: 'dominantBaseline',
      'dominant-baseline': 'dominantBaseline',
      dur: 'dur',
      dx: 'dx',
      dy: 'dy',
      edgemode: 'edgeMode',
      elevation: 'elevation',
      enablebackground: 'enableBackground',
      'enable-background': 'enableBackground',
      end: 'end',
      exponent: 'exponent',
      externalresourcesrequired: 'externalResourcesRequired',
      fill: 'fill',
      fillopacity: 'fillOpacity',
      'fill-opacity': 'fillOpacity',
      fillrule: 'fillRule',
      'fill-rule': 'fillRule',
      filter: 'filter',
      filterres: 'filterRes',
      filterunits: 'filterUnits',
      floodopacity: 'floodOpacity',
      'flood-opacity': 'floodOpacity',
      floodcolor: 'floodColor',
      'flood-color': 'floodColor',
      focusable: 'focusable',
      fontfamily: 'fontFamily',
      'font-family': 'fontFamily',
      fontsize: 'fontSize',
      'font-size': 'fontSize',
      fontsizeadjust: 'fontSizeAdjust',
      'font-size-adjust': 'fontSizeAdjust',
      fontstretch: 'fontStretch',
      'font-stretch': 'fontStretch',
      fontstyle: 'fontStyle',
      'font-style': 'fontStyle',
      fontvariant: 'fontVariant',
      'font-variant': 'fontVariant',
      fontweight: 'fontWeight',
      'font-weight': 'fontWeight',
      format: 'format',
      from: 'from',
      fx: 'fx',
      fy: 'fy',
      g1: 'g1',
      g2: 'g2',
      glyphname: 'glyphName',
      'glyph-name': 'glyphName',
      glyphorientationhorizontal: 'glyphOrientationHorizontal',
      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
      glyphorientationvertical: 'glyphOrientationVertical',
      'glyph-orientation-vertical': 'glyphOrientationVertical',
      glyphref: 'glyphRef',
      gradienttransform: 'gradientTransform',
      gradientunits: 'gradientUnits',
      hanging: 'hanging',
      horizadvx: 'horizAdvX',
      'horiz-adv-x': 'horizAdvX',
      horizoriginx: 'horizOriginX',
      'horiz-origin-x': 'horizOriginX',
      ideographic: 'ideographic',
      imagerendering: 'imageRendering',
      'image-rendering': 'imageRendering',
      in2: 'in2',
      'in': 'in',
      inlist: 'inlist',
      intercept: 'intercept',
      k1: 'k1',
      k2: 'k2',
      k3: 'k3',
      k4: 'k4',
      k: 'k',
      kernelmatrix: 'kernelMatrix',
      kernelunitlength: 'kernelUnitLength',
      kerning: 'kerning',
      keypoints: 'keyPoints',
      keysplines: 'keySplines',
      keytimes: 'keyTimes',
      lengthadjust: 'lengthAdjust',
      letterspacing: 'letterSpacing',
      'letter-spacing': 'letterSpacing',
      lightingcolor: 'lightingColor',
      'lighting-color': 'lightingColor',
      limitingconeangle: 'limitingConeAngle',
      local: 'local',
      markerend: 'markerEnd',
      'marker-end': 'markerEnd',
      markerheight: 'markerHeight',
      markermid: 'markerMid',
      'marker-mid': 'markerMid',
      markerstart: 'markerStart',
      'marker-start': 'markerStart',
      markerunits: 'markerUnits',
      markerwidth: 'markerWidth',
      mask: 'mask',
      maskcontentunits: 'maskContentUnits',
      maskunits: 'maskUnits',
      mathematical: 'mathematical',
      mode: 'mode',
      numoctaves: 'numOctaves',
      offset: 'offset',
      opacity: 'opacity',
      operator: 'operator',
      order: 'order',
      orient: 'orient',
      orientation: 'orientation',
      origin: 'origin',
      overflow: 'overflow',
      overlineposition: 'overlinePosition',
      'overline-position': 'overlinePosition',
      overlinethickness: 'overlineThickness',
      'overline-thickness': 'overlineThickness',
      paintorder: 'paintOrder',
      'paint-order': 'paintOrder',
      panose1: 'panose1',
      'panose-1': 'panose1',
      pathlength: 'pathLength',
      patterncontentunits: 'patternContentUnits',
      patterntransform: 'patternTransform',
      patternunits: 'patternUnits',
      pointerevents: 'pointerEvents',
      'pointer-events': 'pointerEvents',
      points: 'points',
      pointsatx: 'pointsAtX',
      pointsaty: 'pointsAtY',
      pointsatz: 'pointsAtZ',
      prefix: 'prefix',
      preservealpha: 'preserveAlpha',
      preserveaspectratio: 'preserveAspectRatio',
      primitiveunits: 'primitiveUnits',
      property: 'property',
      r: 'r',
      radius: 'radius',
      refx: 'refX',
      refy: 'refY',
      renderingintent: 'renderingIntent',
      'rendering-intent': 'renderingIntent',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur',
      requiredextensions: 'requiredExtensions',
      requiredfeatures: 'requiredFeatures',
      resource: 'resource',
      restart: 'restart',
      result: 'result',
      results: 'results',
      rotate: 'rotate',
      rx: 'rx',
      ry: 'ry',
      scale: 'scale',
      security: 'security',
      seed: 'seed',
      shaperendering: 'shapeRendering',
      'shape-rendering': 'shapeRendering',
      slope: 'slope',
      spacing: 'spacing',
      specularconstant: 'specularConstant',
      specularexponent: 'specularExponent',
      speed: 'speed',
      spreadmethod: 'spreadMethod',
      startoffset: 'startOffset',
      stddeviation: 'stdDeviation',
      stemh: 'stemh',
      stemv: 'stemv',
      stitchtiles: 'stitchTiles',
      stopcolor: 'stopColor',
      'stop-color': 'stopColor',
      stopopacity: 'stopOpacity',
      'stop-opacity': 'stopOpacity',
      strikethroughposition: 'strikethroughPosition',
      'strikethrough-position': 'strikethroughPosition',
      strikethroughthickness: 'strikethroughThickness',
      'strikethrough-thickness': 'strikethroughThickness',
      string: 'string',
      stroke: 'stroke',
      strokedasharray: 'strokeDasharray',
      'stroke-dasharray': 'strokeDasharray',
      strokedashoffset: 'strokeDashoffset',
      'stroke-dashoffset': 'strokeDashoffset',
      strokelinecap: 'strokeLinecap',
      'stroke-linecap': 'strokeLinecap',
      strokelinejoin: 'strokeLinejoin',
      'stroke-linejoin': 'strokeLinejoin',
      strokemiterlimit: 'strokeMiterlimit',
      'stroke-miterlimit': 'strokeMiterlimit',
      strokewidth: 'strokeWidth',
      'stroke-width': 'strokeWidth',
      strokeopacity: 'strokeOpacity',
      'stroke-opacity': 'strokeOpacity',
      suppresscontenteditablewarning: 'suppressContentEditableWarning',
      suppresshydrationwarning: 'suppressHydrationWarning',
      surfacescale: 'surfaceScale',
      systemlanguage: 'systemLanguage',
      tablevalues: 'tableValues',
      targetx: 'targetX',
      targety: 'targetY',
      textanchor: 'textAnchor',
      'text-anchor': 'textAnchor',
      textdecoration: 'textDecoration',
      'text-decoration': 'textDecoration',
      textlength: 'textLength',
      textrendering: 'textRendering',
      'text-rendering': 'textRendering',
      to: 'to',
      transform: 'transform',
      'typeof': 'typeof',
      u1: 'u1',
      u2: 'u2',
      underlineposition: 'underlinePosition',
      'underline-position': 'underlinePosition',
      underlinethickness: 'underlineThickness',
      'underline-thickness': 'underlineThickness',
      unicode: 'unicode',
      unicodebidi: 'unicodeBidi',
      'unicode-bidi': 'unicodeBidi',
      unicoderange: 'unicodeRange',
      'unicode-range': 'unicodeRange',
      unitsperem: 'unitsPerEm',
      'units-per-em': 'unitsPerEm',
      unselectable: 'unselectable',
      valphabetic: 'vAlphabetic',
      'v-alphabetic': 'vAlphabetic',
      values: 'values',
      vectoreffect: 'vectorEffect',
      'vector-effect': 'vectorEffect',
      version: 'version',
      vertadvy: 'vertAdvY',
      'vert-adv-y': 'vertAdvY',
      vertoriginx: 'vertOriginX',
      'vert-origin-x': 'vertOriginX',
      vertoriginy: 'vertOriginY',
      'vert-origin-y': 'vertOriginY',
      vhanging: 'vHanging',
      'v-hanging': 'vHanging',
      videographic: 'vIdeographic',
      'v-ideographic': 'vIdeographic',
      viewbox: 'viewBox',
      viewtarget: 'viewTarget',
      visibility: 'visibility',
      vmathematical: 'vMathematical',
      'v-mathematical': 'vMathematical',
      vocab: 'vocab',
      widths: 'widths',
      wordspacing: 'wordSpacing',
      'word-spacing': 'wordSpacing',
      writingmode: 'writingMode',
      'writing-mode': 'writingMode',
      x1: 'x1',
      x2: 'x2',
      x: 'x',
      xchannelselector: 'xChannelSelector',
      xheight: 'xHeight',
      'x-height': 'xHeight',
      xlinkactuate: 'xlinkActuate',
      'xlink:actuate': 'xlinkActuate',
      xlinkarcrole: 'xlinkArcrole',
      'xlink:arcrole': 'xlinkArcrole',
      xlinkhref: 'xlinkHref',
      'xlink:href': 'xlinkHref',
      xlinkrole: 'xlinkRole',
      'xlink:role': 'xlinkRole',
      xlinkshow: 'xlinkShow',
      'xlink:show': 'xlinkShow',
      xlinktitle: 'xlinkTitle',
      'xlink:title': 'xlinkTitle',
      xlinktype: 'xlinkType',
      'xlink:type': 'xlinkType',
      xmlbase: 'xmlBase',
      'xml:base': 'xmlBase',
      xmllang: 'xmlLang',
      'xml:lang': 'xmlLang',
      xmlns: 'xmlns',
      'xml:space': 'xmlSpace',
      xmlnsxlink: 'xmlnsXlink',
      'xmlns:xlink': 'xmlnsXlink',
      xmlspace: 'xmlSpace',
      y1: 'y1',
      y2: 'y2',
      y: 'y',
      ychannelselector: 'yChannelSelector',
      z: 'z',
      zoomandpan: 'zoomAndPan'
    };
    function getStackAddendum$3() {
      var stack = ReactDebugCurrentFrame.getStackAddendum();
      return stack != null ? stack : '';
    }
    var validateProperty$1 = function() {};
    {
      var warnedProperties$1 = {};
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      var EVENT_NAME_REGEX = /^on./;
      var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
      var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
      var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
      validateProperty$1 = function(tagName, name, value, canUseEventSystem) {
        if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
          return true;
        }
        var lowerCasedName = name.toLowerCase();
        if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
          warning_1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
          warnedProperties$1[name] = true;
          return true;
        }
        if (canUseEventSystem) {
          if (registrationNameModules.hasOwnProperty(name)) {
            return true;
          }
          var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
          if (registrationName != null) {
            warning_1(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum$3());
            warnedProperties$1[name] = true;
            return true;
          }
          if (EVENT_NAME_REGEX.test(name)) {
            warning_1(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum$3());
            warnedProperties$1[name] = true;
            return true;
          }
        } else if (EVENT_NAME_REGEX.test(name)) {
          if (INVALID_EVENT_NAME_REGEX.test(name)) {
            warning_1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.%s', name, getStackAddendum$3());
          }
          warnedProperties$1[name] = true;
          return true;
        }
        if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
          return true;
        }
        if (lowerCasedName === 'innerhtml') {
          warning_1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
          warnedProperties$1[name] = true;
          return true;
        }
        if (lowerCasedName === 'aria') {
          warning_1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
          warnedProperties$1[name] = true;
          return true;
        }
        if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
          warning_1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum$3());
          warnedProperties$1[name] = true;
          return true;
        }
        if (typeof value === 'number' && isNaN(value)) {
          warning_1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum$3());
          warnedProperties$1[name] = true;
          return true;
        }
        var propertyInfo = getPropertyInfo(name);
        var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
          var standardName = possibleStandardNames[lowerCasedName];
          if (standardName !== name) {
            warning_1(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum$3());
            warnedProperties$1[name] = true;
            return true;
          }
        } else if (!isReserved && name !== lowerCasedName) {
          warning_1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum$3());
          warnedProperties$1[name] = true;
          return true;
        }
        if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
          if (value) {
            warning_1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.%s', value, name, name, value, name, getStackAddendum$3());
          } else {
            warning_1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', value, name, name, value, name, name, name, getStackAddendum$3());
          }
          warnedProperties$1[name] = true;
          return true;
        }
        if (isReserved) {
          return true;
        }
        if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
          warnedProperties$1[name] = true;
          return false;
        }
        return true;
      };
    }
    var warnUnknownProperties = function(type, props, canUseEventSystem) {
      var unknownProps = [];
      for (var key in props) {
        var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
        if (!isValid) {
          unknownProps.push(key);
        }
      }
      var unknownPropString = unknownProps.map(function(prop) {
        return '`' + prop + '`';
      }).join(', ');
      if (unknownProps.length === 1) {
        warning_1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3());
      } else if (unknownProps.length > 1) {
        warning_1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum$3());
      }
    };
    function validateProperties$2(type, props, canUseEventSystem) {
      if (isCustomComponent(type, props)) {
        return;
      }
      warnUnknownProperties(type, props, canUseEventSystem);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var toArray = React.Children.toArray;
    var currentDebugStack = void 0;
    var currentDebugElementStack = void 0;
    var getStackAddendum = emptyFunction_1.thatReturns('');
    var describeStackFrame = emptyFunction_1.thatReturns('');
    var validatePropertiesInDevelopment = function(type, props) {};
    var setCurrentDebugStack = function(stack) {};
    var pushElementToDebugStack = function(element) {};
    var resetCurrentDebugStack = function() {};
    {
      validatePropertiesInDevelopment = function(type, props) {
        validateProperties(type, props);
        validateProperties$1(type, props);
        validateProperties$2(type, props, false);
      };
      describeStackFrame = function(element) {
        var source = element._source;
        var type = element.type;
        var name = getComponentName(type);
        var ownerName = null;
        return describeComponentFrame(name, source, ownerName);
      };
      currentDebugStack = null;
      currentDebugElementStack = null;
      setCurrentDebugStack = function(stack) {
        var frame = stack[stack.length - 1];
        currentDebugElementStack = frame.debugElementStack;
        currentDebugElementStack.length = 0;
        currentDebugStack = stack;
        ReactDebugCurrentFrame.getCurrentStack = getStackAddendum;
      };
      pushElementToDebugStack = function(element) {
        if (currentDebugElementStack !== null) {
          currentDebugElementStack.push(element);
        }
      };
      resetCurrentDebugStack = function() {
        currentDebugElementStack = null;
        currentDebugStack = null;
        ReactDebugCurrentFrame.getCurrentStack = null;
      };
      getStackAddendum = function() {
        if (currentDebugStack === null) {
          return '';
        }
        var stack = '';
        var debugStack = currentDebugStack;
        for (var i = debugStack.length - 1; i >= 0; i--) {
          var frame = debugStack[i];
          var _debugElementStack = frame.debugElementStack;
          for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
            stack += describeStackFrame(_debugElementStack[ii]);
          }
        }
        return stack;
      };
    }
    var didWarnDefaultInputValue = false;
    var didWarnDefaultChecked = false;
    var didWarnDefaultSelectValue = false;
    var didWarnDefaultTextareaValue = false;
    var didWarnInvalidOptionChildren = false;
    var didWarnAboutNoopUpdateForComponent = {};
    var didWarnAboutBadClass = {};
    var didWarnAboutDeprecatedWillMount = {};
    var didWarnAboutUndefinedDerivedState = {};
    var didWarnAboutUninitializedState = {};
    var valuePropNames = ['value', 'defaultValue'];
    var newlineEatingTags = {
      listing: true,
      pre: true,
      textarea: true
    };
    function getComponentName(type) {
      return typeof type === 'string' ? type : typeof type === 'function' ? type.displayName || type.name : null;
    }
    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var validatedTagCache = {};
    function validateDangerousTag(tag) {
      if (!validatedTagCache.hasOwnProperty(tag)) {
        !VALID_TAG_REGEX.test(tag) ? invariant_1(false, 'Invalid tag: %s', tag) : void 0;
        validatedTagCache[tag] = true;
      }
    }
    var processStyleName = memoizeStringOnly_1(function(styleName) {
      return hyphenateStyleName_1(styleName);
    });
    function createMarkupForStyles(styles) {
      var serialized = '';
      var delimiter = '';
      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        var isCustomProperty = styleName.indexOf('--') === 0;
        var styleValue = styles[styleName];
        {
          if (!isCustomProperty) {
            warnValidStyle$1(styleName, styleValue, getStackAddendum);
          }
        }
        if (styleValue != null) {
          serialized += delimiter + processStyleName(styleName) + ':';
          serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
          delimiter = ';';
        }
      }
      return serialized || null;
    }
    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
        var warningKey = componentName + '.' + callerName;
        if (didWarnAboutNoopUpdateForComponent[warningKey]) {
          return;
        }
        warning_1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
        didWarnAboutNoopUpdateForComponent[warningKey] = true;
      }
    }
    function shouldConstruct(Component) {
      return Component.prototype && Component.prototype.isReactComponent;
    }
    function getNonChildrenInnerMarkup(props) {
      var innerHTML = props.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          return innerHTML.__html;
        }
      } else {
        var content = props.children;
        if (typeof content === 'string' || typeof content === 'number') {
          return escapeTextForBrowser(content);
        }
      }
      return null;
    }
    function flattenTopLevelChildren(children) {
      if (!React.isValidElement(children)) {
        return toArray(children);
      }
      var element = children;
      if (element.type !== REACT_FRAGMENT_TYPE) {
        return [element];
      }
      var fragmentChildren = element.props.children;
      if (!React.isValidElement(fragmentChildren)) {
        return toArray(fragmentChildren);
      }
      var fragmentChildElement = fragmentChildren;
      return [fragmentChildElement];
    }
    function flattenOptionChildren(children) {
      var content = '';
      React.Children.forEach(children, function(child) {
        if (child == null) {
          return;
        }
        if (typeof child === 'string' || typeof child === 'number') {
          content += child;
        } else {
          {
            if (!didWarnInvalidOptionChildren) {
              didWarnInvalidOptionChildren = true;
              warning_1(false, 'Only strings and numbers are supported as <option> children.');
            }
          }
        }
      });
      return content;
    }
    function maskContext(type, context) {
      var contextTypes = type.contextTypes;
      if (!contextTypes) {
        return emptyObject_1;
      }
      var maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      return maskedContext;
    }
    function checkContextTypes(typeSpecs, values, location) {
      {
        checkPropTypes_1(typeSpecs, values, location, 'Component', getStackAddendum);
      }
    }
    function processContext(type, context) {
      var maskedContext = maskContext(type, context);
      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }
      return maskedContext;
    }
    var STYLE = 'style';
    var RESERVED_PROPS = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };
    function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
      var ret = '<' + tagVerbatim;
      for (var propKey in props) {
        if (!props.hasOwnProperty(propKey)) {
          continue;
        }
        var propValue = props[propKey];
        if (propValue == null) {
          continue;
        }
        if (propKey === STYLE) {
          propValue = createMarkupForStyles(propValue);
        }
        var markup = null;
        if (isCustomComponent(tagLowercase, props)) {
          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
            markup = createMarkupForCustomAttribute(propKey, propValue);
          }
        } else {
          markup = createMarkupForProperty(propKey, propValue);
        }
        if (markup) {
          ret += ' ' + markup;
        }
      }
      if (makeStaticMarkup) {
        return ret;
      }
      if (isRootElement) {
        ret += ' ' + createMarkupForRoot();
      }
      return ret;
    }
    function validateRenderResult(child, type) {
      if (child === undefined) {
        invariant_1(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
      }
    }
    function resolve(child, context) {
      while (React.isValidElement(child)) {
        var element = child;
        var Component = element.type;
        {
          pushElementToDebugStack(element);
        }
        if (typeof Component !== 'function') {
          break;
        }
        processChild(element, Component);
      }
      function processChild(element, Component) {
        var publicContext = processContext(Component, context);
        var queue = [];
        var replace = false;
        var updater = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance) {
            if (queue === null) {
              warnNoop(publicInstance, 'forceUpdate');
              return null;
            }
          },
          enqueueReplaceState: function(publicInstance, completeState) {
            replace = true;
            queue = [completeState];
          },
          enqueueSetState: function(publicInstance, currentPartialState) {
            if (queue === null) {
              warnNoop(publicInstance, 'setState');
              return null;
            }
            queue.push(currentPartialState);
          }
        };
        var inst = void 0;
        if (shouldConstruct(Component)) {
          inst = new Component(element.props, publicContext, updater);
          if (typeof Component.getDerivedStateFromProps === 'function') {
            {
              if (inst.state === null || inst.state === undefined) {
                var componentName = getComponentName(Component) || 'Unknown';
                if (!didWarnAboutUninitializedState[componentName]) {
                  warning_1(false, '%s: Did not properly initialize state during construction. ' + 'Expected state to be an object, but it was %s.', componentName, inst.state === null ? 'null' : 'undefined');
                  didWarnAboutUninitializedState[componentName] = true;
                }
              }
            }
            var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);
            {
              if (partialState === undefined) {
                var _componentName = getComponentName(Component) || 'Unknown';
                if (!didWarnAboutUndefinedDerivedState[_componentName]) {
                  warning_1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
                  didWarnAboutUndefinedDerivedState[_componentName] = true;
                }
              }
            }
            if (partialState != null) {
              inst.state = _assign({}, inst.state, partialState);
            }
          }
        } else {
          {
            if (Component.prototype && typeof Component.prototype.render === 'function') {
              var _componentName2 = getComponentName(Component) || 'Unknown';
              if (!didWarnAboutBadClass[_componentName2]) {
                warning_1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
                didWarnAboutBadClass[_componentName2] = true;
              }
            }
          }
          inst = Component(element.props, publicContext, updater);
          if (inst == null || inst.render == null) {
            child = inst;
            validateRenderResult(child, Component);
            return;
          }
        }
        inst.props = element.props;
        inst.context = publicContext;
        inst.updater = updater;
        var initialState = inst.state;
        if (initialState === undefined) {
          inst.state = initialState = null;
        }
        if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
          if (typeof inst.componentWillMount === 'function') {
            {
              if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
                var _componentName3 = getComponentName(Component) || 'Unknown';
                if (!didWarnAboutDeprecatedWillMount[_componentName3]) {
                  lowPriorityWarning$1(false, '%s: componentWillMount() is deprecated and will be ' + 'removed in the next major version. Read about the motivations ' + 'behind this change: ' + 'https://fb.me/react-async-component-lifecycle-hooks' + '\n\n' + 'As a temporary workaround, you can rename to ' + 'UNSAFE_componentWillMount instead.', _componentName3);
                  didWarnAboutDeprecatedWillMount[_componentName3] = true;
                }
              }
            }
            if (typeof Component.getDerivedStateFromProps !== 'function') {
              inst.componentWillMount();
            }
          }
          if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
            inst.UNSAFE_componentWillMount();
          }
          if (queue.length) {
            var oldQueue = queue;
            var oldReplace = replace;
            queue = null;
            replace = false;
            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;
              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
                var partial = oldQueue[i];
                var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
                if (_partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = _assign({}, nextState, _partialState);
                  } else {
                    _assign(nextState, _partialState);
                  }
                }
              }
              inst.state = nextState;
            }
          } else {
            queue = null;
          }
        }
        child = inst.render();
        {
          if (child === undefined && inst.render._isMockFunction) {
            child = null;
          }
        }
        validateRenderResult(child, Component);
        var childContext = void 0;
        if (typeof inst.getChildContext === 'function') {
          var childContextTypes = Component.childContextTypes;
          if (typeof childContextTypes === 'object') {
            childContext = inst.getChildContext();
            for (var contextKey in childContext) {
              !(contextKey in childContextTypes) ? invariant_1(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
            }
          } else {
            warning_1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
        if (childContext) {
          context = _assign({}, context, childContext);
        }
      }
      return {
        child: child,
        context: context
      };
    }
    var ReactDOMServerRenderer = function() {
      function ReactDOMServerRenderer(children, makeStaticMarkup) {
        _classCallCheck(this, ReactDOMServerRenderer);
        var flatChildren = flattenTopLevelChildren(children);
        var topFrame = {
          type: null,
          domNamespace: Namespaces.html,
          children: flatChildren,
          childIndex: 0,
          context: emptyObject_1,
          footer: ''
        };
        {
          topFrame.debugElementStack = [];
        }
        this.stack = [topFrame];
        this.exhausted = false;
        this.currentSelectValue = null;
        this.previousWasTextNode = false;
        this.makeStaticMarkup = makeStaticMarkup;
        this.providerStack = [];
        this.providerIndex = -1;
      }
      ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
        this.providerIndex += 1;
        this.providerStack[this.providerIndex] = provider;
        var context = provider.type._context;
        context._currentValue = provider.props.value;
      };
      ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
        {
          !(this.providerIndex > -1 && provider === this.providerStack[this.providerIndex]) ? warning_1(false, 'Unexpected pop.') : void 0;
        }
        this.providerStack[this.providerIndex] = null;
        this.providerIndex -= 1;
        var context = provider.type._context;
        if (this.providerIndex < 0) {
          context._currentValue = context._defaultValue;
        } else {
          var previousProvider = this.providerStack[this.providerIndex];
          context._currentValue = previousProvider.props.value;
        }
      };
      ReactDOMServerRenderer.prototype.read = function read(bytes) {
        if (this.exhausted) {
          return null;
        }
        var out = '';
        while (out.length < bytes) {
          if (this.stack.length === 0) {
            this.exhausted = true;
            break;
          }
          var frame = this.stack[this.stack.length - 1];
          if (frame.childIndex >= frame.children.length) {
            var _footer = frame.footer;
            out += _footer;
            if (_footer !== '') {
              this.previousWasTextNode = false;
            }
            this.stack.pop();
            if (frame.type === 'select') {
              this.currentSelectValue = null;
            } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
              var provider = frame.type;
              this.popProvider(provider);
            }
            continue;
          }
          var child = frame.children[frame.childIndex++];
          {
            setCurrentDebugStack(this.stack);
          }
          out += this.render(child, frame.context, frame.domNamespace);
          {
            resetCurrentDebugStack();
          }
        }
        return out;
      };
      ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
        if (typeof child === 'string' || typeof child === 'number') {
          var text = '' + child;
          if (text === '') {
            return '';
          }
          if (this.makeStaticMarkup) {
            return escapeTextForBrowser(text);
          }
          if (this.previousWasTextNode) {
            return '<!-- -->' + escapeTextForBrowser(text);
          }
          this.previousWasTextNode = true;
          return escapeTextForBrowser(text);
        } else {
          var nextChild = void 0;
          var _resolve = resolve(child, context);
          nextChild = _resolve.child;
          context = _resolve.context;
          if (nextChild === null || nextChild === false) {
            return '';
          } else if (!React.isValidElement(nextChild)) {
            if (nextChild != null && nextChild.$$typeof != null) {
              var $$typeof = nextChild.$$typeof;
              !($$typeof !== REACT_PORTAL_TYPE) ? invariant_1(false, 'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.') : void 0;
              invariant_1(false, 'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.', $$typeof.toString());
            }
            var nextChildren = toArray(nextChild);
            var frame = {
              type: null,
              domNamespace: parentNamespace,
              children: nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            {
              frame.debugElementStack = [];
            }
            this.stack.push(frame);
            return '';
          }
          var nextElement = nextChild;
          var elementType = nextElement.type;
          if (typeof elementType === 'string') {
            return this.renderDOM(nextElement, context, parentNamespace);
          }
          switch (elementType) {
            case REACT_STRICT_MODE_TYPE:
            case REACT_ASYNC_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
              {
                var _nextChildren = toArray(nextChild.props.children);
                var _frame = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };
                {
                  _frame.debugElementStack = [];
                }
                this.stack.push(_frame);
                return '';
              }
            case REACT_CALL_TYPE:
            case REACT_RETURN_TYPE:
              invariant_1(false, 'The experimental Call and Return types are not currently supported by the server renderer.');
            default:
              break;
          }
          if (typeof elementType === 'object' && elementType !== null) {
            switch (elementType.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                {
                  var element = nextChild;
                  var _nextChildren2 = toArray(elementType.render(element.props, element.ref));
                  var _frame2 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren2,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame2.debugElementStack = [];
                  }
                  this.stack.push(_frame2);
                  return '';
                }
              case REACT_PROVIDER_TYPE:
                {
                  var provider = nextChild;
                  var nextProps = provider.props;
                  var _nextChildren3 = toArray(nextProps.children);
                  var _frame3 = {
                    type: provider,
                    domNamespace: parentNamespace,
                    children: _nextChildren3,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame3.debugElementStack = [];
                  }
                  this.pushProvider(provider);
                  this.stack.push(_frame3);
                  return '';
                }
              case REACT_CONTEXT_TYPE:
                {
                  var consumer = nextChild;
                  var _nextProps = consumer.props;
                  var nextValue = consumer.type._currentValue;
                  var _nextChildren4 = toArray(_nextProps.children(nextValue));
                  var _frame4 = {
                    type: nextChild,
                    domNamespace: parentNamespace,
                    children: _nextChildren4,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame4.debugElementStack = [];
                  }
                  this.stack.push(_frame4);
                  return '';
                }
              default:
                break;
            }
          }
          var info = '';
          {
            var owner = nextElement._owner;
            if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
            }
            var ownerName = owner ? getComponentName(owner) : null;
            if (ownerName) {
              info += '\n\nCheck the render method of `' + ownerName + '`.';
            }
          }
          invariant_1(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', elementType == null ? elementType : typeof elementType, info);
        }
      };
      ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
        var tag = element.type.toLowerCase();
        var namespace = parentNamespace;
        if (parentNamespace === Namespaces.html) {
          namespace = getIntrinsicNamespace(tag);
        }
        {
          if (namespace === Namespaces.html) {
            !(tag === element.type) ? warning_1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
          }
        }
        validateDangerousTag(tag);
        var props = element.props;
        if (tag === 'input') {
          {
            ReactControlledValuePropTypes.checkPropTypes('input', props, getStackAddendum);
            if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
              warning_1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
              didWarnDefaultChecked = true;
            }
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
              warning_1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
              didWarnDefaultInputValue = true;
            }
          }
          props = _assign({type: undefined}, props, {
            defaultChecked: undefined,
            defaultValue: undefined,
            value: props.value != null ? props.value : props.defaultValue,
            checked: props.checked != null ? props.checked : props.defaultChecked
          });
        } else if (tag === 'textarea') {
          {
            ReactControlledValuePropTypes.checkPropTypes('textarea', props, getStackAddendum);
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
              warning_1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
              didWarnDefaultTextareaValue = true;
            }
          }
          var initialValue = props.value;
          if (initialValue == null) {
            var defaultValue = props.defaultValue;
            var textareaChildren = props.children;
            if (textareaChildren != null) {
              {
                warning_1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
              }
              !(defaultValue == null) ? invariant_1(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
              if (Array.isArray(textareaChildren)) {
                !(textareaChildren.length <= 1) ? invariant_1(false, '<textarea> can only have at most one child.') : void 0;
                textareaChildren = textareaChildren[0];
              }
              defaultValue = '' + textareaChildren;
            }
            if (defaultValue == null) {
              defaultValue = '';
            }
            initialValue = defaultValue;
          }
          props = _assign({}, props, {
            value: undefined,
            children: '' + initialValue
          });
        } else if (tag === 'select') {
          {
            ReactControlledValuePropTypes.checkPropTypes('select', props, getStackAddendum);
            for (var i = 0; i < valuePropNames.length; i++) {
              var propName = valuePropNames[i];
              if (props[propName] == null) {
                continue;
              }
              var isArray = Array.isArray(props[propName]);
              if (props.multiple && !isArray) {
                warning_1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, '');
              } else if (!props.multiple && isArray) {
                warning_1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, '');
              }
            }
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
              warning_1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
              didWarnDefaultSelectValue = true;
            }
          }
          this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
          props = _assign({}, props, {value: undefined});
        } else if (tag === 'option') {
          var selected = null;
          var selectValue = this.currentSelectValue;
          var optionChildren = flattenOptionChildren(props.children);
          if (selectValue != null) {
            var value = void 0;
            if (props.value != null) {
              value = props.value + '';
            } else {
              value = optionChildren;
            }
            selected = false;
            if (Array.isArray(selectValue)) {
              for (var j = 0; j < selectValue.length; j++) {
                if ('' + selectValue[j] === value) {
                  selected = true;
                  break;
                }
              }
            } else {
              selected = '' + selectValue === value;
            }
            props = _assign({
              selected: undefined,
              children: undefined
            }, props, {
              selected: selected,
              children: optionChildren
            });
          }
        }
        {
          validatePropertiesInDevelopment(tag, props);
        }
        assertValidProps(tag, props, getStackAddendum);
        var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
        var footer = '';
        if (omittedCloseTags.hasOwnProperty(tag)) {
          out += '/>';
        } else {
          out += '>';
          footer = '</' + element.type + '>';
        }
        var children = void 0;
        var innerMarkup = getNonChildrenInnerMarkup(props);
        if (innerMarkup != null) {
          children = [];
          if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
            out += '\n';
          }
          out += innerMarkup;
        } else {
          children = toArray(props.children);
        }
        var frame = {
          domNamespace: getChildNamespace(parentNamespace, element.type),
          type: tag,
          children: children,
          childIndex: 0,
          context: context,
          footer: footer
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        this.previousWasTextNode = false;
        return out;
      };
      return ReactDOMServerRenderer;
    }();
    function renderToString(element) {
      var renderer = new ReactDOMServerRenderer(element, false);
      var markup = renderer.read(Infinity);
      return markup;
    }
    function renderToStaticMarkup(element) {
      var renderer = new ReactDOMServerRenderer(element, true);
      var markup = renderer.read(Infinity);
      return markup;
    }
    function renderToNodeStream() {
      invariant_1(false, 'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.');
    }
    function renderToStaticNodeStream() {
      invariant_1(false, 'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.');
    }
    var ReactDOMServerBrowser = {
      renderToString: renderToString,
      renderToStaticMarkup: renderToStaticMarkup,
      renderToNodeStream: renderToNodeStream,
      renderToStaticNodeStream: renderToStaticNodeStream,
      version: ReactVersion
    };
    var ReactDOMServerBrowser$1 = Object.freeze({default: ReactDOMServerBrowser});
    var ReactDOMServer = (ReactDOMServerBrowser$1 && ReactDOMServerBrowser) || ReactDOMServerBrowser$1;
    var server_browser = ReactDOMServer['default'] ? ReactDOMServer['default'] : ReactDOMServer;
    return server_browser;
  })));
})(require('process'));
