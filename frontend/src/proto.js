/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const in_proto = $root.in_proto = (() => {

    /**
     * Namespace in_proto.
     * @exports in_proto
     * @namespace
     */
    const in_proto = {};

    in_proto.Button = (function() {

        /**
         * Properties of a Button.
         * @memberof in_proto
         * @interface IButton
         * @property {in_proto.IGuiElement|null} [base] Button base
         * @property {boolean|null} [pixmap] Button pixmap
         * @property {string|null} [label] Button label
         * @property {boolean|null} [editable] Button editable
         * @property {string|null} [action] Button action
         */

        /**
         * Constructs a new Button.
         * @memberof in_proto
         * @classdesc Represents a Button.
         * @implements IButton
         * @constructor
         * @param {in_proto.IButton=} [properties] Properties to set
         */
        function Button(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Button base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Button
         * @instance
         */
        Button.prototype.base = null;

        /**
         * Button pixmap.
         * @member {boolean} pixmap
         * @memberof in_proto.Button
         * @instance
         */
        Button.prototype.pixmap = false;

        /**
         * Button label.
         * @member {string} label
         * @memberof in_proto.Button
         * @instance
         */
        Button.prototype.label = "";

        /**
         * Button editable.
         * @member {boolean} editable
         * @memberof in_proto.Button
         * @instance
         */
        Button.prototype.editable = false;

        /**
         * Button action.
         * @member {string} action
         * @memberof in_proto.Button
         * @instance
         */
        Button.prototype.action = "";

        /**
         * Creates a new Button instance using the specified properties.
         * @function create
         * @memberof in_proto.Button
         * @static
         * @param {in_proto.IButton=} [properties] Properties to set
         * @returns {in_proto.Button} Button instance
         */
        Button.create = function create(properties) {
            return new Button(properties);
        };

        /**
         * Encodes the specified Button message. Does not implicitly {@link in_proto.Button.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Button
         * @static
         * @param {in_proto.IButton} message Button message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Button.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pixmap != null && Object.hasOwnProperty.call(message, "pixmap"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.pixmap);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.label);
            if (message.editable != null && Object.hasOwnProperty.call(message, "editable"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.editable);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified Button message, length delimited. Does not implicitly {@link in_proto.Button.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Button
         * @static
         * @param {in_proto.IButton} message Button message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Button.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Button message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Button
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Button} Button
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Button.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Button();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.pixmap = reader.bool();
                        break;
                    }
                case 3: {
                        message.label = reader.string();
                        break;
                    }
                case 4: {
                        message.editable = reader.bool();
                        break;
                    }
                case 5: {
                        message.action = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Button message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Button
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Button} Button
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Button.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Button message.
         * @function verify
         * @memberof in_proto.Button
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Button.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.pixmap != null && message.hasOwnProperty("pixmap"))
                if (typeof message.pixmap !== "boolean")
                    return "pixmap: boolean expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.editable != null && message.hasOwnProperty("editable"))
                if (typeof message.editable !== "boolean")
                    return "editable: boolean expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates a Button message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Button
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Button} Button
         */
        Button.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Button)
                return object;
            let message = new $root.in_proto.Button();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Button.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.pixmap != null)
                message.pixmap = Boolean(object.pixmap);
            if (object.label != null)
                message.label = String(object.label);
            if (object.editable != null)
                message.editable = Boolean(object.editable);
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from a Button message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Button
         * @static
         * @param {in_proto.Button} message Button
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Button.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.pixmap = false;
                object.label = "";
                object.editable = false;
                object.action = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.pixmap != null && message.hasOwnProperty("pixmap"))
                object.pixmap = message.pixmap;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.editable != null && message.hasOwnProperty("editable"))
                object.editable = message.editable;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this Button to JSON.
         * @function toJSON
         * @memberof in_proto.Button
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Button.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Button
         * @function getTypeUrl
         * @memberof in_proto.Button
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Button.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Button";
        };

        return Button;
    })();

    in_proto.ButtonField = (function() {

        /**
         * Properties of a ButtonField.
         * @memberof in_proto
         * @interface IButtonField
         * @property {in_proto.IDataField|null} [field] ButtonField field
         * @property {boolean|null} [pixmap] ButtonField pixmap
         * @property {string|null} [icon] ButtonField icon
         */

        /**
         * Constructs a new ButtonField.
         * @memberof in_proto
         * @classdesc Represents a ButtonField.
         * @implements IButtonField
         * @constructor
         * @param {in_proto.IButtonField=} [properties] Properties to set
         */
        function ButtonField(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonField field.
         * @member {in_proto.IDataField|null|undefined} field
         * @memberof in_proto.ButtonField
         * @instance
         */
        ButtonField.prototype.field = null;

        /**
         * ButtonField pixmap.
         * @member {boolean} pixmap
         * @memberof in_proto.ButtonField
         * @instance
         */
        ButtonField.prototype.pixmap = false;

        /**
         * ButtonField icon.
         * @member {string} icon
         * @memberof in_proto.ButtonField
         * @instance
         */
        ButtonField.prototype.icon = "";

        /**
         * Creates a new ButtonField instance using the specified properties.
         * @function create
         * @memberof in_proto.ButtonField
         * @static
         * @param {in_proto.IButtonField=} [properties] Properties to set
         * @returns {in_proto.ButtonField} ButtonField instance
         */
        ButtonField.create = function create(properties) {
            return new ButtonField(properties);
        };

        /**
         * Encodes the specified ButtonField message. Does not implicitly {@link in_proto.ButtonField.verify|verify} messages.
         * @function encode
         * @memberof in_proto.ButtonField
         * @static
         * @param {in_proto.IButtonField} message ButtonField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                $root.in_proto.DataField.encode(message.field, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pixmap != null && Object.hasOwnProperty.call(message, "pixmap"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.pixmap);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            return writer;
        };

        /**
         * Encodes the specified ButtonField message, length delimited. Does not implicitly {@link in_proto.ButtonField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.ButtonField
         * @static
         * @param {in_proto.IButtonField} message ButtonField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonField message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.ButtonField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.ButtonField} ButtonField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.ButtonField();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.field = $root.in_proto.DataField.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.pixmap = reader.bool();
                        break;
                    }
                case 3: {
                        message.icon = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.ButtonField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.ButtonField} ButtonField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonField message.
         * @function verify
         * @memberof in_proto.ButtonField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field != null && message.hasOwnProperty("field")) {
                let error = $root.in_proto.DataField.verify(message.field);
                if (error)
                    return "field." + error;
            }
            if (message.pixmap != null && message.hasOwnProperty("pixmap"))
                if (typeof message.pixmap !== "boolean")
                    return "pixmap: boolean expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            return null;
        };

        /**
         * Creates a ButtonField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.ButtonField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.ButtonField} ButtonField
         */
        ButtonField.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.ButtonField)
                return object;
            let message = new $root.in_proto.ButtonField();
            if (object.field != null) {
                if (typeof object.field !== "object")
                    throw TypeError(".in_proto.ButtonField.field: object expected");
                message.field = $root.in_proto.DataField.fromObject(object.field);
            }
            if (object.pixmap != null)
                message.pixmap = Boolean(object.pixmap);
            if (object.icon != null)
                message.icon = String(object.icon);
            return message;
        };

        /**
         * Creates a plain object from a ButtonField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.ButtonField
         * @static
         * @param {in_proto.ButtonField} message ButtonField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.field = null;
                object.pixmap = false;
                object.icon = "";
            }
            if (message.field != null && message.hasOwnProperty("field"))
                object.field = $root.in_proto.DataField.toObject(message.field, options);
            if (message.pixmap != null && message.hasOwnProperty("pixmap"))
                object.pixmap = message.pixmap;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            return object;
        };

        /**
         * Converts this ButtonField to JSON.
         * @function toJSON
         * @memberof in_proto.ButtonField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonField
         * @function getTypeUrl
         * @memberof in_proto.ButtonField
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonField.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.ButtonField";
        };

        return ButtonField;
    })();

    in_proto.ElementRef = (function() {

        /**
         * Properties of an ElementRef.
         * @memberof in_proto
         * @interface IElementRef
         * @property {number|null} [id] ElementRef id
         * @property {in_proto.GuiElement.Type|null} [type] ElementRef type
         */

        /**
         * Constructs a new ElementRef.
         * @memberof in_proto
         * @classdesc Represents an ElementRef.
         * @implements IElementRef
         * @constructor
         * @param {in_proto.IElementRef=} [properties] Properties to set
         */
        function ElementRef(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ElementRef id.
         * @member {number} id
         * @memberof in_proto.ElementRef
         * @instance
         */
        ElementRef.prototype.id = 0;

        /**
         * ElementRef type.
         * @member {in_proto.GuiElement.Type} type
         * @memberof in_proto.ElementRef
         * @instance
         */
        ElementRef.prototype.type = 0;

        /**
         * Creates a new ElementRef instance using the specified properties.
         * @function create
         * @memberof in_proto.ElementRef
         * @static
         * @param {in_proto.IElementRef=} [properties] Properties to set
         * @returns {in_proto.ElementRef} ElementRef instance
         */
        ElementRef.create = function create(properties) {
            return new ElementRef(properties);
        };

        /**
         * Encodes the specified ElementRef message. Does not implicitly {@link in_proto.ElementRef.verify|verify} messages.
         * @function encode
         * @memberof in_proto.ElementRef
         * @static
         * @param {in_proto.IElementRef} message ElementRef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ElementRef.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified ElementRef message, length delimited. Does not implicitly {@link in_proto.ElementRef.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.ElementRef
         * @static
         * @param {in_proto.IElementRef} message ElementRef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ElementRef.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ElementRef message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.ElementRef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.ElementRef} ElementRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ElementRef.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.ElementRef();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ElementRef message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.ElementRef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.ElementRef} ElementRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ElementRef.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ElementRef message.
         * @function verify
         * @memberof in_proto.ElementRef
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ElementRef.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                    break;
                }
            return null;
        };

        /**
         * Creates an ElementRef message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.ElementRef
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.ElementRef} ElementRef
         */
        ElementRef.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.ElementRef)
                return object;
            let message = new $root.in_proto.ElementRef();
            if (object.id != null)
                message.id = object.id >>> 0;
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.type = 0;
                break;
            case "EPlot2D":
            case 1:
                message.type = 1;
                break;
            case "EPlot3D":
            case 2:
                message.type = 2;
                break;
            case "EButtonbar":
            case 3:
                message.type = 3;
                break;
            case "EButton":
            case 4:
                message.type = 4;
                break;
            case "EComboBox":
            case 5:
                message.type = 5;
                break;
            case "EContainer":
            case 6:
                message.type = 6;
                break;
            case "EDiagram":
            case 7:
                message.type = 7;
                break;
            case "EFieldGroup":
            case 8:
                message.type = 8;
                break;
            case "EFolder":
            case 9:
                message.type = 9;
                break;
            case "EForm":
            case 10:
                message.type = 10;
                break;
            case "EHeader":
            case 11:
                message.type = 11;
                break;
            case "EIconView":
            case 12:
                message.type = 12;
                break;
            case "EIndex":
            case 13:
                message.type = 13;
                break;
            case "EIndexMenu":
            case 14:
                message.type = 14;
                break;
            case "ELabel":
            case 15:
                message.type = 15;
                break;
            case "EList":
            case 16:
                message.type = 16;
                break;
            case "EMenubar":
            case 17:
                message.type = 17;
                break;
            case "EMenuButton":
            case 18:
                message.type = 18;
                break;
            case "EMessagebar":
            case 19:
                message.type = 19;
                break;
            case "EMessage":
            case 20:
                message.type = 20;
                break;
            case "ENavigator":
            case 21:
                message.type = 21;
                break;
            case "ENavigatorNode":
            case 22:
                message.type = 22;
                break;
            case "EPixmap":
            case 23:
                message.type = 23;
                break;
            case "ERadio":
            case 24:
                message.type = 24;
                break;
            case "EScrolledText":
            case 25:
                message.type = 25;
                break;
            case "ESeparator":
            case 26:
                message.type = 26;
                break;
            case "ESlider":
            case 27:
                message.type = 27;
                break;
            case "EStretch":
            case 28:
                message.type = 28;
                break;
            case "ETable":
            case 29:
                message.type = 29;
                break;
            case "EText":
            case 30:
                message.type = 30;
                break;
            case "ETextfield":
            case 31:
                message.type = 31;
                break;
            case "EThermo":
            case 32:
                message.type = 32;
                break;
            case "EToggle":
            case 33:
                message.type = 33;
                break;
            case "EVoid":
            case 34:
                message.type = 34;
                break;
            case "EFieldGroupLine":
            case 35:
                message.type = 35;
                break;
            case "EPulldownMenu":
            case 36:
                message.type = 36;
                break;
            case "EMenuToggle":
            case 37:
                message.type = 37;
                break;
            case "ETableDataItem":
            case 38:
                message.type = 38;
                break;
            case "ETableComboBoxDataItem":
            case 39:
                message.type = 39;
                break;
            case "ETableRadioDataItem":
            case 40:
                message.type = 40;
                break;
            case "ETableToggleDataItem":
            case 41:
                message.type = 41;
                break;
            case "ETableColorPickerDataItem":
            case 42:
                message.type = 42;
                break;
            case "ETableButtonDataItem":
            case 43:
                message.type = 43;
                break;
            case "ECycleButton":
            case 44:
                message.type = 44;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an ElementRef message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.ElementRef
         * @static
         * @param {in_proto.ElementRef} message ElementRef
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ElementRef.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.type = options.enums === String ? "Unknown" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.in_proto.GuiElement.Type[message.type] === undefined ? message.type : $root.in_proto.GuiElement.Type[message.type] : message.type;
            return object;
        };

        /**
         * Converts this ElementRef to JSON.
         * @function toJSON
         * @memberof in_proto.ElementRef
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ElementRef.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ElementRef
         * @function getTypeUrl
         * @memberof in_proto.ElementRef
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ElementRef.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.ElementRef";
        };

        return ElementRef;
    })();

    in_proto.GuiElement = (function() {

        /**
         * Properties of a GuiElement.
         * @memberof in_proto
         * @interface IGuiElement
         * @property {number|null} [id] GuiElement id
         * @property {in_proto.GuiElement.Type|null} [type] GuiElement type
         * @property {string|null} [Name] GuiElement Name
         * @property {boolean|null} [enabled] GuiElement enabled
         * @property {number|null} [width] GuiElement width
         * @property {number|null} [height] GuiElement height
         * @property {in_proto.GuiElement.Orientation|null} [expand] GuiElement expand
         * @property {in_proto.GuiElement.Alignment|null} [alignment] GuiElement alignment
         * @property {string|null} [helptext] GuiElement helptext
         * @property {boolean|null} [visible] GuiElement visible
         * @property {number|null} [rowspan] GuiElement rowspan
         * @property {number|null} [colspan] GuiElement colspan
         * @property {string|null} [styleClass] GuiElement styleClass
         */

        /**
         * Constructs a new GuiElement.
         * @memberof in_proto
         * @classdesc Represents a GuiElement.
         * @implements IGuiElement
         * @constructor
         * @param {in_proto.IGuiElement=} [properties] Properties to set
         */
        function GuiElement(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuiElement id.
         * @member {number} id
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.id = 0;

        /**
         * GuiElement type.
         * @member {in_proto.GuiElement.Type} type
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.type = 0;

        /**
         * GuiElement Name.
         * @member {string} Name
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.Name = "";

        /**
         * GuiElement enabled.
         * @member {boolean} enabled
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.enabled = false;

        /**
         * GuiElement width.
         * @member {number} width
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.width = 0;

        /**
         * GuiElement height.
         * @member {number} height
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.height = 0;

        /**
         * GuiElement expand.
         * @member {in_proto.GuiElement.Orientation} expand
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.expand = 0;

        /**
         * GuiElement alignment.
         * @member {in_proto.GuiElement.Alignment} alignment
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.alignment = 0;

        /**
         * GuiElement helptext.
         * @member {string} helptext
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.helptext = "";

        /**
         * GuiElement visible.
         * @member {boolean} visible
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.visible = false;

        /**
         * GuiElement rowspan.
         * @member {number} rowspan
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.rowspan = 0;

        /**
         * GuiElement colspan.
         * @member {number} colspan
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.colspan = 0;

        /**
         * GuiElement styleClass.
         * @member {string} styleClass
         * @memberof in_proto.GuiElement
         * @instance
         */
        GuiElement.prototype.styleClass = "";

        /**
         * Creates a new GuiElement instance using the specified properties.
         * @function create
         * @memberof in_proto.GuiElement
         * @static
         * @param {in_proto.IGuiElement=} [properties] Properties to set
         * @returns {in_proto.GuiElement} GuiElement instance
         */
        GuiElement.create = function create(properties) {
            return new GuiElement(properties);
        };

        /**
         * Encodes the specified GuiElement message. Does not implicitly {@link in_proto.GuiElement.verify|verify} messages.
         * @function encode
         * @memberof in_proto.GuiElement
         * @static
         * @param {in_proto.IGuiElement} message GuiElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuiElement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Name);
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enabled);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.height);
            if (message.expand != null && Object.hasOwnProperty.call(message, "expand"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.expand);
            if (message.alignment != null && Object.hasOwnProperty.call(message, "alignment"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.alignment);
            if (message.helptext != null && Object.hasOwnProperty.call(message, "helptext"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.helptext);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.visible);
            if (message.rowspan != null && Object.hasOwnProperty.call(message, "rowspan"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.rowspan);
            if (message.colspan != null && Object.hasOwnProperty.call(message, "colspan"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.colspan);
            if (message.styleClass != null && Object.hasOwnProperty.call(message, "styleClass"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.styleClass);
            return writer;
        };

        /**
         * Encodes the specified GuiElement message, length delimited. Does not implicitly {@link in_proto.GuiElement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.GuiElement
         * @static
         * @param {in_proto.IGuiElement} message GuiElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuiElement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuiElement message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.GuiElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.GuiElement} GuiElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuiElement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.GuiElement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.Name = reader.string();
                        break;
                    }
                case 4: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 5: {
                        message.width = reader.uint32();
                        break;
                    }
                case 6: {
                        message.height = reader.uint32();
                        break;
                    }
                case 7: {
                        message.expand = reader.int32();
                        break;
                    }
                case 8: {
                        message.alignment = reader.int32();
                        break;
                    }
                case 9: {
                        message.helptext = reader.string();
                        break;
                    }
                case 10: {
                        message.visible = reader.bool();
                        break;
                    }
                case 11: {
                        message.rowspan = reader.int32();
                        break;
                    }
                case 12: {
                        message.colspan = reader.int32();
                        break;
                    }
                case 13: {
                        message.styleClass = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuiElement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.GuiElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.GuiElement} GuiElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuiElement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuiElement message.
         * @function verify
         * @memberof in_proto.GuiElement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuiElement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                    break;
                }
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.expand != null && message.hasOwnProperty("expand"))
                switch (message.expand) {
                default:
                    return "expand: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.alignment != null && message.hasOwnProperty("alignment"))
                switch (message.alignment) {
                default:
                    return "alignment: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.helptext != null && message.hasOwnProperty("helptext"))
                if (!$util.isString(message.helptext))
                    return "helptext: string expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            if (message.rowspan != null && message.hasOwnProperty("rowspan"))
                if (!$util.isInteger(message.rowspan))
                    return "rowspan: integer expected";
            if (message.colspan != null && message.hasOwnProperty("colspan"))
                if (!$util.isInteger(message.colspan))
                    return "colspan: integer expected";
            if (message.styleClass != null && message.hasOwnProperty("styleClass"))
                if (!$util.isString(message.styleClass))
                    return "styleClass: string expected";
            return null;
        };

        /**
         * Creates a GuiElement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.GuiElement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.GuiElement} GuiElement
         */
        GuiElement.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.GuiElement)
                return object;
            let message = new $root.in_proto.GuiElement();
            if (object.id != null)
                message.id = object.id >>> 0;
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.type = 0;
                break;
            case "EPlot2D":
            case 1:
                message.type = 1;
                break;
            case "EPlot3D":
            case 2:
                message.type = 2;
                break;
            case "EButtonbar":
            case 3:
                message.type = 3;
                break;
            case "EButton":
            case 4:
                message.type = 4;
                break;
            case "EComboBox":
            case 5:
                message.type = 5;
                break;
            case "EContainer":
            case 6:
                message.type = 6;
                break;
            case "EDiagram":
            case 7:
                message.type = 7;
                break;
            case "EFieldGroup":
            case 8:
                message.type = 8;
                break;
            case "EFolder":
            case 9:
                message.type = 9;
                break;
            case "EForm":
            case 10:
                message.type = 10;
                break;
            case "EHeader":
            case 11:
                message.type = 11;
                break;
            case "EIconView":
            case 12:
                message.type = 12;
                break;
            case "EIndex":
            case 13:
                message.type = 13;
                break;
            case "EIndexMenu":
            case 14:
                message.type = 14;
                break;
            case "ELabel":
            case 15:
                message.type = 15;
                break;
            case "EList":
            case 16:
                message.type = 16;
                break;
            case "EMenubar":
            case 17:
                message.type = 17;
                break;
            case "EMenuButton":
            case 18:
                message.type = 18;
                break;
            case "EMessagebar":
            case 19:
                message.type = 19;
                break;
            case "EMessage":
            case 20:
                message.type = 20;
                break;
            case "ENavigator":
            case 21:
                message.type = 21;
                break;
            case "ENavigatorNode":
            case 22:
                message.type = 22;
                break;
            case "EPixmap":
            case 23:
                message.type = 23;
                break;
            case "ERadio":
            case 24:
                message.type = 24;
                break;
            case "EScrolledText":
            case 25:
                message.type = 25;
                break;
            case "ESeparator":
            case 26:
                message.type = 26;
                break;
            case "ESlider":
            case 27:
                message.type = 27;
                break;
            case "EStretch":
            case 28:
                message.type = 28;
                break;
            case "ETable":
            case 29:
                message.type = 29;
                break;
            case "EText":
            case 30:
                message.type = 30;
                break;
            case "ETextfield":
            case 31:
                message.type = 31;
                break;
            case "EThermo":
            case 32:
                message.type = 32;
                break;
            case "EToggle":
            case 33:
                message.type = 33;
                break;
            case "EVoid":
            case 34:
                message.type = 34;
                break;
            case "EFieldGroupLine":
            case 35:
                message.type = 35;
                break;
            case "EPulldownMenu":
            case 36:
                message.type = 36;
                break;
            case "EMenuToggle":
            case 37:
                message.type = 37;
                break;
            case "ETableDataItem":
            case 38:
                message.type = 38;
                break;
            case "ETableComboBoxDataItem":
            case 39:
                message.type = 39;
                break;
            case "ETableRadioDataItem":
            case 40:
                message.type = 40;
                break;
            case "ETableToggleDataItem":
            case 41:
                message.type = 41;
                break;
            case "ETableColorPickerDataItem":
            case 42:
                message.type = 42;
                break;
            case "ETableButtonDataItem":
            case 43:
                message.type = 43;
                break;
            case "ECycleButton":
            case 44:
                message.type = 44;
                break;
            }
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            switch (object.expand) {
            default:
                if (typeof object.expand === "number") {
                    message.expand = object.expand;
                    break;
                }
                break;
            case "None":
            case 0:
                message.expand = 0;
                break;
            case "Horizontal":
            case 1:
                message.expand = 1;
                break;
            case "Vertical":
            case 2:
                message.expand = 2;
                break;
            case "Both":
            case 3:
                message.expand = 3;
                break;
            }
            switch (object.alignment) {
            default:
                if (typeof object.alignment === "number") {
                    message.alignment = object.alignment;
                    break;
                }
                break;
            case "Default":
            case 0:
                message.alignment = 0;
                break;
            case "Left":
            case 1:
                message.alignment = 1;
                break;
            case "Right":
            case 2:
                message.alignment = 2;
                break;
            case "Center":
            case 3:
                message.alignment = 3;
                break;
            case "Top":
            case 4:
                message.alignment = 4;
                break;
            case "Bottom":
            case 5:
                message.alignment = 5;
                break;
            case "Stretch":
            case 6:
                message.alignment = 6;
                break;
            case "Justify":
            case 7:
                message.alignment = 7;
                break;
            }
            if (object.helptext != null)
                message.helptext = String(object.helptext);
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            if (object.rowspan != null)
                message.rowspan = object.rowspan | 0;
            if (object.colspan != null)
                message.colspan = object.colspan | 0;
            if (object.styleClass != null)
                message.styleClass = String(object.styleClass);
            return message;
        };

        /**
         * Creates a plain object from a GuiElement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.GuiElement
         * @static
         * @param {in_proto.GuiElement} message GuiElement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuiElement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.type = options.enums === String ? "Unknown" : 0;
                object.Name = "";
                object.enabled = false;
                object.width = 0;
                object.height = 0;
                object.expand = options.enums === String ? "None" : 0;
                object.alignment = options.enums === String ? "Default" : 0;
                object.helptext = "";
                object.visible = false;
                object.rowspan = 0;
                object.colspan = 0;
                object.styleClass = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.in_proto.GuiElement.Type[message.type] === undefined ? message.type : $root.in_proto.GuiElement.Type[message.type] : message.type;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.expand != null && message.hasOwnProperty("expand"))
                object.expand = options.enums === String ? $root.in_proto.GuiElement.Orientation[message.expand] === undefined ? message.expand : $root.in_proto.GuiElement.Orientation[message.expand] : message.expand;
            if (message.alignment != null && message.hasOwnProperty("alignment"))
                object.alignment = options.enums === String ? $root.in_proto.GuiElement.Alignment[message.alignment] === undefined ? message.alignment : $root.in_proto.GuiElement.Alignment[message.alignment] : message.alignment;
            if (message.helptext != null && message.hasOwnProperty("helptext"))
                object.helptext = message.helptext;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            if (message.rowspan != null && message.hasOwnProperty("rowspan"))
                object.rowspan = message.rowspan;
            if (message.colspan != null && message.hasOwnProperty("colspan"))
                object.colspan = message.colspan;
            if (message.styleClass != null && message.hasOwnProperty("styleClass"))
                object.styleClass = message.styleClass;
            return object;
        };

        /**
         * Converts this GuiElement to JSON.
         * @function toJSON
         * @memberof in_proto.GuiElement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuiElement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuiElement
         * @function getTypeUrl
         * @memberof in_proto.GuiElement
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuiElement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.GuiElement";
        };

        /**
         * Type enum.
         * @name in_proto.GuiElement.Type
         * @enum {number}
         * @property {number} Unknown=0 Unknown value
         * @property {number} EPlot2D=1 EPlot2D value
         * @property {number} EPlot3D=2 EPlot3D value
         * @property {number} EButtonbar=3 EButtonbar value
         * @property {number} EButton=4 EButton value
         * @property {number} EComboBox=5 EComboBox value
         * @property {number} EContainer=6 EContainer value
         * @property {number} EDiagram=7 EDiagram value
         * @property {number} EFieldGroup=8 EFieldGroup value
         * @property {number} EFolder=9 EFolder value
         * @property {number} EForm=10 EForm value
         * @property {number} EHeader=11 EHeader value
         * @property {number} EIconView=12 EIconView value
         * @property {number} EIndex=13 EIndex value
         * @property {number} EIndexMenu=14 EIndexMenu value
         * @property {number} ELabel=15 ELabel value
         * @property {number} EList=16 EList value
         * @property {number} EMenubar=17 EMenubar value
         * @property {number} EMenuButton=18 EMenuButton value
         * @property {number} EMessagebar=19 EMessagebar value
         * @property {number} EMessage=20 EMessage value
         * @property {number} ENavigator=21 ENavigator value
         * @property {number} ENavigatorNode=22 ENavigatorNode value
         * @property {number} EPixmap=23 EPixmap value
         * @property {number} ERadio=24 ERadio value
         * @property {number} EScrolledText=25 EScrolledText value
         * @property {number} ESeparator=26 ESeparator value
         * @property {number} ESlider=27 ESlider value
         * @property {number} EStretch=28 EStretch value
         * @property {number} ETable=29 ETable value
         * @property {number} EText=30 EText value
         * @property {number} ETextfield=31 ETextfield value
         * @property {number} EThermo=32 EThermo value
         * @property {number} EToggle=33 EToggle value
         * @property {number} EVoid=34 EVoid value
         * @property {number} EFieldGroupLine=35 EFieldGroupLine value
         * @property {number} EPulldownMenu=36 EPulldownMenu value
         * @property {number} EMenuToggle=37 EMenuToggle value
         * @property {number} ETableDataItem=38 ETableDataItem value
         * @property {number} ETableComboBoxDataItem=39 ETableComboBoxDataItem value
         * @property {number} ETableRadioDataItem=40 ETableRadioDataItem value
         * @property {number} ETableToggleDataItem=41 ETableToggleDataItem value
         * @property {number} ETableColorPickerDataItem=42 ETableColorPickerDataItem value
         * @property {number} ETableButtonDataItem=43 ETableButtonDataItem value
         * @property {number} ECycleButton=44 ECycleButton value
         */
        GuiElement.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknown"] = 0;
            values[valuesById[1] = "EPlot2D"] = 1;
            values[valuesById[2] = "EPlot3D"] = 2;
            values[valuesById[3] = "EButtonbar"] = 3;
            values[valuesById[4] = "EButton"] = 4;
            values[valuesById[5] = "EComboBox"] = 5;
            values[valuesById[6] = "EContainer"] = 6;
            values[valuesById[7] = "EDiagram"] = 7;
            values[valuesById[8] = "EFieldGroup"] = 8;
            values[valuesById[9] = "EFolder"] = 9;
            values[valuesById[10] = "EForm"] = 10;
            values[valuesById[11] = "EHeader"] = 11;
            values[valuesById[12] = "EIconView"] = 12;
            values[valuesById[13] = "EIndex"] = 13;
            values[valuesById[14] = "EIndexMenu"] = 14;
            values[valuesById[15] = "ELabel"] = 15;
            values[valuesById[16] = "EList"] = 16;
            values[valuesById[17] = "EMenubar"] = 17;
            values[valuesById[18] = "EMenuButton"] = 18;
            values[valuesById[19] = "EMessagebar"] = 19;
            values[valuesById[20] = "EMessage"] = 20;
            values[valuesById[21] = "ENavigator"] = 21;
            values[valuesById[22] = "ENavigatorNode"] = 22;
            values[valuesById[23] = "EPixmap"] = 23;
            values[valuesById[24] = "ERadio"] = 24;
            values[valuesById[25] = "EScrolledText"] = 25;
            values[valuesById[26] = "ESeparator"] = 26;
            values[valuesById[27] = "ESlider"] = 27;
            values[valuesById[28] = "EStretch"] = 28;
            values[valuesById[29] = "ETable"] = 29;
            values[valuesById[30] = "EText"] = 30;
            values[valuesById[31] = "ETextfield"] = 31;
            values[valuesById[32] = "EThermo"] = 32;
            values[valuesById[33] = "EToggle"] = 33;
            values[valuesById[34] = "EVoid"] = 34;
            values[valuesById[35] = "EFieldGroupLine"] = 35;
            values[valuesById[36] = "EPulldownMenu"] = 36;
            values[valuesById[37] = "EMenuToggle"] = 37;
            values[valuesById[38] = "ETableDataItem"] = 38;
            values[valuesById[39] = "ETableComboBoxDataItem"] = 39;
            values[valuesById[40] = "ETableRadioDataItem"] = 40;
            values[valuesById[41] = "ETableToggleDataItem"] = 41;
            values[valuesById[42] = "ETableColorPickerDataItem"] = 42;
            values[valuesById[43] = "ETableButtonDataItem"] = 43;
            values[valuesById[44] = "ECycleButton"] = 44;
            return values;
        })();

        /**
         * Orientation enum.
         * @name in_proto.GuiElement.Orientation
         * @enum {number}
         * @property {number} None=0 None value
         * @property {number} Horizontal=1 Horizontal value
         * @property {number} Vertical=2 Vertical value
         * @property {number} Both=3 Both value
         */
        GuiElement.Orientation = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "None"] = 0;
            values[valuesById[1] = "Horizontal"] = 1;
            values[valuesById[2] = "Vertical"] = 2;
            values[valuesById[3] = "Both"] = 3;
            return values;
        })();

        /**
         * Alignment enum.
         * @name in_proto.GuiElement.Alignment
         * @enum {number}
         * @property {number} Default=0 Default value
         * @property {number} Left=1 Left value
         * @property {number} Right=2 Right value
         * @property {number} Center=3 Center value
         * @property {number} Top=4 Top value
         * @property {number} Bottom=5 Bottom value
         * @property {number} Stretch=6 Stretch value
         * @property {number} Justify=7 Justify value
         */
        GuiElement.Alignment = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "Left"] = 1;
            values[valuesById[2] = "Right"] = 2;
            values[valuesById[3] = "Center"] = 3;
            values[valuesById[4] = "Top"] = 4;
            values[valuesById[5] = "Bottom"] = 5;
            values[valuesById[6] = "Stretch"] = 6;
            values[valuesById[7] = "Justify"] = 7;
            return values;
        })();

        return GuiElement;
    })();

    in_proto.DataField = (function() {

        /**
         * Properties of a DataField.
         * @memberof in_proto
         * @interface IDataField
         * @property {in_proto.IGuiElement|null} [base] DataField base
         * @property {boolean|null} [typeLabel] DataField typeLabel
         * @property {boolean|null} [editable] DataField editable
         * @property {number|null} [length] DataField length
         * @property {number|null} [precision] DataField precision
         * @property {number|null} [scale] DataField scale
         * @property {boolean|null} [checked] DataField checked
         * @property {in_proto.DataField.IRange|null} [range] DataField range
         * @property {string|null} [fullName] DataField fullName
         * @property {string|null} [action] DataField action
         * @property {string|null} [icon] DataField icon
         * @property {boolean|null} [visible] DataField visible
         * @property {string|null} [label] DataField label
         * @property {string|null} [helptext] DataField helptext
         * @property {string|null} [placeholder] DataField placeholder
         * @property {in_proto.IValueInfo|null} [value] DataField value
         * @property {string|null} [bgColor] DataField bgColor
         * @property {string|null} [fgColor] DataField fgColor
         */

        /**
         * Constructs a new DataField.
         * @memberof in_proto
         * @classdesc Represents a DataField.
         * @implements IDataField
         * @constructor
         * @param {in_proto.IDataField=} [properties] Properties to set
         */
        function DataField(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataField base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.base = null;

        /**
         * DataField typeLabel.
         * @member {boolean} typeLabel
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.typeLabel = false;

        /**
         * DataField editable.
         * @member {boolean} editable
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.editable = false;

        /**
         * DataField length.
         * @member {number} length
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.length = 0;

        /**
         * DataField precision.
         * @member {number} precision
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.precision = 0;

        /**
         * DataField scale.
         * @member {number} scale
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.scale = 0;

        /**
         * DataField checked.
         * @member {boolean} checked
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.checked = false;

        /**
         * DataField range.
         * @member {in_proto.DataField.IRange|null|undefined} range
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.range = null;

        /**
         * DataField fullName.
         * @member {string} fullName
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.fullName = "";

        /**
         * DataField action.
         * @member {string} action
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.action = "";

        /**
         * DataField icon.
         * @member {string} icon
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.icon = "";

        /**
         * DataField visible.
         * @member {boolean} visible
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.visible = false;

        /**
         * DataField label.
         * @member {string} label
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.label = "";

        /**
         * DataField helptext.
         * @member {string} helptext
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.helptext = "";

        /**
         * DataField placeholder.
         * @member {string} placeholder
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.placeholder = "";

        /**
         * DataField value.
         * @member {in_proto.IValueInfo|null|undefined} value
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.value = null;

        /**
         * DataField bgColor.
         * @member {string} bgColor
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.bgColor = "";

        /**
         * DataField fgColor.
         * @member {string} fgColor
         * @memberof in_proto.DataField
         * @instance
         */
        DataField.prototype.fgColor = "";

        /**
         * Creates a new DataField instance using the specified properties.
         * @function create
         * @memberof in_proto.DataField
         * @static
         * @param {in_proto.IDataField=} [properties] Properties to set
         * @returns {in_proto.DataField} DataField instance
         */
        DataField.create = function create(properties) {
            return new DataField(properties);
        };

        /**
         * Encodes the specified DataField message. Does not implicitly {@link in_proto.DataField.verify|verify} messages.
         * @function encode
         * @memberof in_proto.DataField
         * @static
         * @param {in_proto.IDataField} message DataField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.typeLabel != null && Object.hasOwnProperty.call(message, "typeLabel"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.typeLabel);
            if (message.editable != null && Object.hasOwnProperty.call(message, "editable"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.editable);
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.length);
            if (message.precision != null && Object.hasOwnProperty.call(message, "precision"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.precision);
            if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.scale);
            if (message.checked != null && Object.hasOwnProperty.call(message, "checked"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.checked);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                $root.in_proto.DataField.Range.encode(message.range, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.fullName);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.action);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.icon);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.visible);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.label);
            if (message.helptext != null && Object.hasOwnProperty.call(message, "helptext"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.helptext);
            if (message.placeholder != null && Object.hasOwnProperty.call(message, "placeholder"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.placeholder);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                $root.in_proto.ValueInfo.encode(message.value, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.bgColor != null && Object.hasOwnProperty.call(message, "bgColor"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.bgColor);
            if (message.fgColor != null && Object.hasOwnProperty.call(message, "fgColor"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.fgColor);
            return writer;
        };

        /**
         * Encodes the specified DataField message, length delimited. Does not implicitly {@link in_proto.DataField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.DataField
         * @static
         * @param {in_proto.IDataField} message DataField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DataField message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.DataField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.DataField} DataField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.DataField();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.typeLabel = reader.bool();
                        break;
                    }
                case 3: {
                        message.editable = reader.bool();
                        break;
                    }
                case 4: {
                        message.length = reader.uint32();
                        break;
                    }
                case 5: {
                        message.precision = reader.int32();
                        break;
                    }
                case 6: {
                        message.scale = reader.double();
                        break;
                    }
                case 7: {
                        message.checked = reader.bool();
                        break;
                    }
                case 8: {
                        message.range = $root.in_proto.DataField.Range.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.fullName = reader.string();
                        break;
                    }
                case 10: {
                        message.action = reader.string();
                        break;
                    }
                case 11: {
                        message.icon = reader.string();
                        break;
                    }
                case 12: {
                        message.visible = reader.bool();
                        break;
                    }
                case 13: {
                        message.label = reader.string();
                        break;
                    }
                case 14: {
                        message.helptext = reader.string();
                        break;
                    }
                case 15: {
                        message.placeholder = reader.string();
                        break;
                    }
                case 16: {
                        message.value = $root.in_proto.ValueInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.bgColor = reader.string();
                        break;
                    }
                case 18: {
                        message.fgColor = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DataField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.DataField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.DataField} DataField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DataField message.
         * @function verify
         * @memberof in_proto.DataField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.typeLabel != null && message.hasOwnProperty("typeLabel"))
                if (typeof message.typeLabel !== "boolean")
                    return "typeLabel: boolean expected";
            if (message.editable != null && message.hasOwnProperty("editable"))
                if (typeof message.editable !== "boolean")
                    return "editable: boolean expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            if (message.precision != null && message.hasOwnProperty("precision"))
                if (!$util.isInteger(message.precision))
                    return "precision: integer expected";
            if (message.scale != null && message.hasOwnProperty("scale"))
                if (typeof message.scale !== "number")
                    return "scale: number expected";
            if (message.checked != null && message.hasOwnProperty("checked"))
                if (typeof message.checked !== "boolean")
                    return "checked: boolean expected";
            if (message.range != null && message.hasOwnProperty("range")) {
                let error = $root.in_proto.DataField.Range.verify(message.range);
                if (error)
                    return "range." + error;
            }
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.helptext != null && message.hasOwnProperty("helptext"))
                if (!$util.isString(message.helptext))
                    return "helptext: string expected";
            if (message.placeholder != null && message.hasOwnProperty("placeholder"))
                if (!$util.isString(message.placeholder))
                    return "placeholder: string expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                let error = $root.in_proto.ValueInfo.verify(message.value);
                if (error)
                    return "value." + error;
            }
            if (message.bgColor != null && message.hasOwnProperty("bgColor"))
                if (!$util.isString(message.bgColor))
                    return "bgColor: string expected";
            if (message.fgColor != null && message.hasOwnProperty("fgColor"))
                if (!$util.isString(message.fgColor))
                    return "fgColor: string expected";
            return null;
        };

        /**
         * Creates a DataField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.DataField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.DataField} DataField
         */
        DataField.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.DataField)
                return object;
            let message = new $root.in_proto.DataField();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.DataField.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.typeLabel != null)
                message.typeLabel = Boolean(object.typeLabel);
            if (object.editable != null)
                message.editable = Boolean(object.editable);
            if (object.length != null)
                message.length = object.length >>> 0;
            if (object.precision != null)
                message.precision = object.precision | 0;
            if (object.scale != null)
                message.scale = Number(object.scale);
            if (object.checked != null)
                message.checked = Boolean(object.checked);
            if (object.range != null) {
                if (typeof object.range !== "object")
                    throw TypeError(".in_proto.DataField.range: object expected");
                message.range = $root.in_proto.DataField.Range.fromObject(object.range);
            }
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            if (object.action != null)
                message.action = String(object.action);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            if (object.label != null)
                message.label = String(object.label);
            if (object.helptext != null)
                message.helptext = String(object.helptext);
            if (object.placeholder != null)
                message.placeholder = String(object.placeholder);
            if (object.value != null) {
                if (typeof object.value !== "object")
                    throw TypeError(".in_proto.DataField.value: object expected");
                message.value = $root.in_proto.ValueInfo.fromObject(object.value);
            }
            if (object.bgColor != null)
                message.bgColor = String(object.bgColor);
            if (object.fgColor != null)
                message.fgColor = String(object.fgColor);
            return message;
        };

        /**
         * Creates a plain object from a DataField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.DataField
         * @static
         * @param {in_proto.DataField} message DataField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.typeLabel = false;
                object.editable = false;
                object.length = 0;
                object.precision = 0;
                object.scale = 0;
                object.checked = false;
                object.range = null;
                object.fullName = "";
                object.action = "";
                object.icon = "";
                object.visible = false;
                object.label = "";
                object.helptext = "";
                object.placeholder = "";
                object.value = null;
                object.bgColor = "";
                object.fgColor = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.typeLabel != null && message.hasOwnProperty("typeLabel"))
                object.typeLabel = message.typeLabel;
            if (message.editable != null && message.hasOwnProperty("editable"))
                object.editable = message.editable;
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            if (message.precision != null && message.hasOwnProperty("precision"))
                object.precision = message.precision;
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
            if (message.checked != null && message.hasOwnProperty("checked"))
                object.checked = message.checked;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = $root.in_proto.DataField.Range.toObject(message.range, options);
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.helptext != null && message.hasOwnProperty("helptext"))
                object.helptext = message.helptext;
            if (message.placeholder != null && message.hasOwnProperty("placeholder"))
                object.placeholder = message.placeholder;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = $root.in_proto.ValueInfo.toObject(message.value, options);
            if (message.bgColor != null && message.hasOwnProperty("bgColor"))
                object.bgColor = message.bgColor;
            if (message.fgColor != null && message.hasOwnProperty("fgColor"))
                object.fgColor = message.fgColor;
            return object;
        };

        /**
         * Converts this DataField to JSON.
         * @function toJSON
         * @memberof in_proto.DataField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DataField
         * @function getTypeUrl
         * @memberof in_proto.DataField
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DataField.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.DataField";
        };

        DataField.Range = (function() {

            /**
             * Properties of a Range.
             * @memberof in_proto.DataField
             * @interface IRange
             * @property {number|null} [min] Range min
             * @property {number|null} [max] Range max
             * @property {number|null} [step] Range step
             */

            /**
             * Constructs a new Range.
             * @memberof in_proto.DataField
             * @classdesc Represents a Range.
             * @implements IRange
             * @constructor
             * @param {in_proto.DataField.IRange=} [properties] Properties to set
             */
            function Range(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Range min.
             * @member {number} min
             * @memberof in_proto.DataField.Range
             * @instance
             */
            Range.prototype.min = 0;

            /**
             * Range max.
             * @member {number} max
             * @memberof in_proto.DataField.Range
             * @instance
             */
            Range.prototype.max = 0;

            /**
             * Range step.
             * @member {number} step
             * @memberof in_proto.DataField.Range
             * @instance
             */
            Range.prototype.step = 0;

            /**
             * Creates a new Range instance using the specified properties.
             * @function create
             * @memberof in_proto.DataField.Range
             * @static
             * @param {in_proto.DataField.IRange=} [properties] Properties to set
             * @returns {in_proto.DataField.Range} Range instance
             */
            Range.create = function create(properties) {
                return new Range(properties);
            };

            /**
             * Encodes the specified Range message. Does not implicitly {@link in_proto.DataField.Range.verify|verify} messages.
             * @function encode
             * @memberof in_proto.DataField.Range
             * @static
             * @param {in_proto.DataField.IRange} message Range message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Range.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.min);
                if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.max);
                if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.step);
                return writer;
            };

            /**
             * Encodes the specified Range message, length delimited. Does not implicitly {@link in_proto.DataField.Range.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.DataField.Range
             * @static
             * @param {in_proto.DataField.IRange} message Range message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Range.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Range message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.DataField.Range
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.DataField.Range} Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Range.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.DataField.Range();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.min = reader.double();
                            break;
                        }
                    case 2: {
                            message.max = reader.double();
                            break;
                        }
                    case 3: {
                            message.step = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Range message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.DataField.Range
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.DataField.Range} Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Range.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Range message.
             * @function verify
             * @memberof in_proto.DataField.Range
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Range.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.min != null && message.hasOwnProperty("min"))
                    if (typeof message.min !== "number")
                        return "min: number expected";
                if (message.max != null && message.hasOwnProperty("max"))
                    if (typeof message.max !== "number")
                        return "max: number expected";
                if (message.step != null && message.hasOwnProperty("step"))
                    if (typeof message.step !== "number")
                        return "step: number expected";
                return null;
            };

            /**
             * Creates a Range message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.DataField.Range
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.DataField.Range} Range
             */
            Range.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.DataField.Range)
                    return object;
                let message = new $root.in_proto.DataField.Range();
                if (object.min != null)
                    message.min = Number(object.min);
                if (object.max != null)
                    message.max = Number(object.max);
                if (object.step != null)
                    message.step = Number(object.step);
                return message;
            };

            /**
             * Creates a plain object from a Range message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.DataField.Range
             * @static
             * @param {in_proto.DataField.Range} message Range
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Range.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.min = 0;
                    object.max = 0;
                    object.step = 0;
                }
                if (message.min != null && message.hasOwnProperty("min"))
                    object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
                if (message.max != null && message.hasOwnProperty("max"))
                    object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
                if (message.step != null && message.hasOwnProperty("step"))
                    object.step = options.json && !isFinite(message.step) ? String(message.step) : message.step;
                return object;
            };

            /**
             * Converts this Range to JSON.
             * @function toJSON
             * @memberof in_proto.DataField.Range
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Range.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Range
             * @function getTypeUrl
             * @memberof in_proto.DataField.Range
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Range.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.DataField.Range";
            };

            return Range;
        })();

        return DataField;
    })();

    in_proto.ValueInfo = (function() {

        /**
         * Properties of a ValueInfo.
         * @memberof in_proto
         * @interface IValueInfo
         * @property {string|null} [stringValue] ValueInfo stringValue
         * @property {number|null} [doubleValue] ValueInfo doubleValue
         * @property {number|null} [intValue] ValueInfo intValue
         * @property {string|null} [patternValue] ValueInfo patternValue
         * @property {string|null} [formattedValue] ValueInfo formattedValue
         * @property {number|null} [minValue] ValueInfo minValue
         * @property {number|null} [maxValue] ValueInfo maxValue
         * @property {number|null} [precision] ValueInfo precision
         * @property {in_proto.ValueInfo.DataType|null} [datatype] ValueInfo datatype
         * @property {string|null} [filename] ValueInfo filename
         * @property {string|null} [mimetype] ValueInfo mimetype
         */

        /**
         * Constructs a new ValueInfo.
         * @memberof in_proto
         * @classdesc Represents a ValueInfo.
         * @implements IValueInfo
         * @constructor
         * @param {in_proto.IValueInfo=} [properties] Properties to set
         */
        function ValueInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValueInfo stringValue.
         * @member {string} stringValue
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.stringValue = "";

        /**
         * ValueInfo doubleValue.
         * @member {number} doubleValue
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.doubleValue = 0;

        /**
         * ValueInfo intValue.
         * @member {number} intValue
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.intValue = 0;

        /**
         * ValueInfo patternValue.
         * @member {string} patternValue
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.patternValue = "";

        /**
         * ValueInfo formattedValue.
         * @member {string} formattedValue
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.formattedValue = "";

        /**
         * ValueInfo minValue.
         * @member {number} minValue
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.minValue = 0;

        /**
         * ValueInfo maxValue.
         * @member {number} maxValue
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.maxValue = 0;

        /**
         * ValueInfo precision.
         * @member {number} precision
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.precision = 0;

        /**
         * ValueInfo datatype.
         * @member {in_proto.ValueInfo.DataType} datatype
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.datatype = 0;

        /**
         * ValueInfo filename.
         * @member {string} filename
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.filename = "";

        /**
         * ValueInfo mimetype.
         * @member {string} mimetype
         * @memberof in_proto.ValueInfo
         * @instance
         */
        ValueInfo.prototype.mimetype = "";

        /**
         * Creates a new ValueInfo instance using the specified properties.
         * @function create
         * @memberof in_proto.ValueInfo
         * @static
         * @param {in_proto.IValueInfo=} [properties] Properties to set
         * @returns {in_proto.ValueInfo} ValueInfo instance
         */
        ValueInfo.create = function create(properties) {
            return new ValueInfo(properties);
        };

        /**
         * Encodes the specified ValueInfo message. Does not implicitly {@link in_proto.ValueInfo.verify|verify} messages.
         * @function encode
         * @memberof in_proto.ValueInfo
         * @static
         * @param {in_proto.IValueInfo} message ValueInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValueInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
            if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.doubleValue);
            if (message.intValue != null && Object.hasOwnProperty.call(message, "intValue"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.intValue);
            if (message.patternValue != null && Object.hasOwnProperty.call(message, "patternValue"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.patternValue);
            if (message.formattedValue != null && Object.hasOwnProperty.call(message, "formattedValue"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.formattedValue);
            if (message.minValue != null && Object.hasOwnProperty.call(message, "minValue"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.minValue);
            if (message.maxValue != null && Object.hasOwnProperty.call(message, "maxValue"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.maxValue);
            if (message.precision != null && Object.hasOwnProperty.call(message, "precision"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.precision);
            if (message.datatype != null && Object.hasOwnProperty.call(message, "datatype"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.datatype);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.filename);
            if (message.mimetype != null && Object.hasOwnProperty.call(message, "mimetype"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.mimetype);
            return writer;
        };

        /**
         * Encodes the specified ValueInfo message, length delimited. Does not implicitly {@link in_proto.ValueInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.ValueInfo
         * @static
         * @param {in_proto.IValueInfo} message ValueInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValueInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValueInfo message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.ValueInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.ValueInfo} ValueInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValueInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.ValueInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.stringValue = reader.string();
                        break;
                    }
                case 2: {
                        message.doubleValue = reader.double();
                        break;
                    }
                case 3: {
                        message.intValue = reader.int32();
                        break;
                    }
                case 4: {
                        message.patternValue = reader.string();
                        break;
                    }
                case 5: {
                        message.formattedValue = reader.string();
                        break;
                    }
                case 6: {
                        message.minValue = reader.double();
                        break;
                    }
                case 7: {
                        message.maxValue = reader.double();
                        break;
                    }
                case 8: {
                        message.precision = reader.double();
                        break;
                    }
                case 9: {
                        message.datatype = reader.int32();
                        break;
                    }
                case 10: {
                        message.filename = reader.string();
                        break;
                    }
                case 11: {
                        message.mimetype = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValueInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.ValueInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.ValueInfo} ValueInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValueInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValueInfo message.
         * @function verify
         * @memberof in_proto.ValueInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValueInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
            if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                if (typeof message.doubleValue !== "number")
                    return "doubleValue: number expected";
            if (message.intValue != null && message.hasOwnProperty("intValue"))
                if (!$util.isInteger(message.intValue))
                    return "intValue: integer expected";
            if (message.patternValue != null && message.hasOwnProperty("patternValue"))
                if (!$util.isString(message.patternValue))
                    return "patternValue: string expected";
            if (message.formattedValue != null && message.hasOwnProperty("formattedValue"))
                if (!$util.isString(message.formattedValue))
                    return "formattedValue: string expected";
            if (message.minValue != null && message.hasOwnProperty("minValue"))
                if (typeof message.minValue !== "number")
                    return "minValue: number expected";
            if (message.maxValue != null && message.hasOwnProperty("maxValue"))
                if (typeof message.maxValue !== "number")
                    return "maxValue: number expected";
            if (message.precision != null && message.hasOwnProperty("precision"))
                if (typeof message.precision !== "number")
                    return "precision: number expected";
            if (message.datatype != null && message.hasOwnProperty("datatype"))
                switch (message.datatype) {
                default:
                    return "datatype: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                if (!$util.isString(message.mimetype))
                    return "mimetype: string expected";
            return null;
        };

        /**
         * Creates a ValueInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.ValueInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.ValueInfo} ValueInfo
         */
        ValueInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.ValueInfo)
                return object;
            let message = new $root.in_proto.ValueInfo();
            if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
            if (object.doubleValue != null)
                message.doubleValue = Number(object.doubleValue);
            if (object.intValue != null)
                message.intValue = object.intValue | 0;
            if (object.patternValue != null)
                message.patternValue = String(object.patternValue);
            if (object.formattedValue != null)
                message.formattedValue = String(object.formattedValue);
            if (object.minValue != null)
                message.minValue = Number(object.minValue);
            if (object.maxValue != null)
                message.maxValue = Number(object.maxValue);
            if (object.precision != null)
                message.precision = Number(object.precision);
            switch (object.datatype) {
            default:
                if (typeof object.datatype === "number") {
                    message.datatype = object.datatype;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.datatype = 0;
                break;
            case "Integer":
            case 1:
                message.datatype = 1;
                break;
            case "Double":
            case 2:
                message.datatype = 2;
                break;
            case "StringDate":
            case 3:
                message.datatype = 3;
                break;
            case "StringTime":
            case 4:
                message.datatype = 4;
                break;
            case "StringDateTime":
            case 5:
                message.datatype = 5;
                break;
            case "StringValue":
            case 6:
                message.datatype = 6;
                break;
            case "StringPassword":
            case 7:
                message.datatype = 7;
                break;
            case "String":
            case 8:
                message.datatype = 8;
                break;
            case "CDATA":
            case 9:
                message.datatype = 9;
                break;
            case "Complex":
            case 10:
                message.datatype = 10;
                break;
            }
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.mimetype != null)
                message.mimetype = String(object.mimetype);
            return message;
        };

        /**
         * Creates a plain object from a ValueInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.ValueInfo
         * @static
         * @param {in_proto.ValueInfo} message ValueInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValueInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.stringValue = "";
                object.doubleValue = 0;
                object.intValue = 0;
                object.patternValue = "";
                object.formattedValue = "";
                object.minValue = 0;
                object.maxValue = 0;
                object.precision = 0;
                object.datatype = options.enums === String ? "Unknown" : 0;
                object.filename = "";
                object.mimetype = "";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                object.stringValue = message.stringValue;
            if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
            if (message.intValue != null && message.hasOwnProperty("intValue"))
                object.intValue = message.intValue;
            if (message.patternValue != null && message.hasOwnProperty("patternValue"))
                object.patternValue = message.patternValue;
            if (message.formattedValue != null && message.hasOwnProperty("formattedValue"))
                object.formattedValue = message.formattedValue;
            if (message.minValue != null && message.hasOwnProperty("minValue"))
                object.minValue = options.json && !isFinite(message.minValue) ? String(message.minValue) : message.minValue;
            if (message.maxValue != null && message.hasOwnProperty("maxValue"))
                object.maxValue = options.json && !isFinite(message.maxValue) ? String(message.maxValue) : message.maxValue;
            if (message.precision != null && message.hasOwnProperty("precision"))
                object.precision = options.json && !isFinite(message.precision) ? String(message.precision) : message.precision;
            if (message.datatype != null && message.hasOwnProperty("datatype"))
                object.datatype = options.enums === String ? $root.in_proto.ValueInfo.DataType[message.datatype] === undefined ? message.datatype : $root.in_proto.ValueInfo.DataType[message.datatype] : message.datatype;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.mimetype != null && message.hasOwnProperty("mimetype"))
                object.mimetype = message.mimetype;
            return object;
        };

        /**
         * Converts this ValueInfo to JSON.
         * @function toJSON
         * @memberof in_proto.ValueInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValueInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ValueInfo
         * @function getTypeUrl
         * @memberof in_proto.ValueInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ValueInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.ValueInfo";
        };

        /**
         * DataType enum.
         * @name in_proto.ValueInfo.DataType
         * @enum {number}
         * @property {number} Unknown=0 Unknown value
         * @property {number} Integer=1 Integer value
         * @property {number} Double=2 Double value
         * @property {number} StringDate=3 StringDate value
         * @property {number} StringTime=4 StringTime value
         * @property {number} StringDateTime=5 StringDateTime value
         * @property {number} StringValue=6 StringValue value
         * @property {number} StringPassword=7 StringPassword value
         * @property {number} String=8 String value
         * @property {number} CDATA=9 CDATA value
         * @property {number} Complex=10 Complex value
         */
        ValueInfo.DataType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknown"] = 0;
            values[valuesById[1] = "Integer"] = 1;
            values[valuesById[2] = "Double"] = 2;
            values[valuesById[3] = "StringDate"] = 3;
            values[valuesById[4] = "StringTime"] = 4;
            values[valuesById[5] = "StringDateTime"] = 5;
            values[valuesById[6] = "StringValue"] = 6;
            values[valuesById[7] = "StringPassword"] = 7;
            values[valuesById[8] = "String"] = 8;
            values[valuesById[9] = "CDATA"] = 9;
            values[valuesById[10] = "Complex"] = 10;
            return values;
        })();

        return ValueInfo;
    })();

    in_proto.Buttonbar = (function() {

        /**
         * Properties of a Buttonbar.
         * @memberof in_proto
         * @interface IButtonbar
         * @property {in_proto.IGuiElement|null} [base] Buttonbar base
         * @property {Array.<in_proto.IElementRef>|null} [elements] Buttonbar elements
         */

        /**
         * Constructs a new Buttonbar.
         * @memberof in_proto
         * @classdesc Represents a Buttonbar.
         * @implements IButtonbar
         * @constructor
         * @param {in_proto.IButtonbar=} [properties] Properties to set
         */
        function Buttonbar(properties) {
            this.elements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Buttonbar base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Buttonbar
         * @instance
         */
        Buttonbar.prototype.base = null;

        /**
         * Buttonbar elements.
         * @member {Array.<in_proto.IElementRef>} elements
         * @memberof in_proto.Buttonbar
         * @instance
         */
        Buttonbar.prototype.elements = $util.emptyArray;

        /**
         * Creates a new Buttonbar instance using the specified properties.
         * @function create
         * @memberof in_proto.Buttonbar
         * @static
         * @param {in_proto.IButtonbar=} [properties] Properties to set
         * @returns {in_proto.Buttonbar} Buttonbar instance
         */
        Buttonbar.create = function create(properties) {
            return new Buttonbar(properties);
        };

        /**
         * Encodes the specified Buttonbar message. Does not implicitly {@link in_proto.Buttonbar.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Buttonbar
         * @static
         * @param {in_proto.IButtonbar} message Buttonbar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Buttonbar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.elements != null && message.elements.length)
                for (let i = 0; i < message.elements.length; ++i)
                    $root.in_proto.ElementRef.encode(message.elements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Buttonbar message, length delimited. Does not implicitly {@link in_proto.Buttonbar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Buttonbar
         * @static
         * @param {in_proto.IButtonbar} message Buttonbar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Buttonbar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Buttonbar message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Buttonbar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Buttonbar} Buttonbar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Buttonbar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Buttonbar();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.in_proto.ElementRef.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Buttonbar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Buttonbar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Buttonbar} Buttonbar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Buttonbar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Buttonbar message.
         * @function verify
         * @memberof in_proto.Buttonbar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Buttonbar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (let i = 0; i < message.elements.length; ++i) {
                    let error = $root.in_proto.ElementRef.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Buttonbar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Buttonbar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Buttonbar} Buttonbar
         */
        Buttonbar.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Buttonbar)
                return object;
            let message = new $root.in_proto.Buttonbar();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Buttonbar.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".in_proto.Buttonbar.elements: array expected");
                message.elements = [];
                for (let i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".in_proto.Buttonbar.elements: object expected");
                    message.elements[i] = $root.in_proto.ElementRef.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Buttonbar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Buttonbar
         * @static
         * @param {in_proto.Buttonbar} message Buttonbar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Buttonbar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults)
                object.base = null;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (let j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.in_proto.ElementRef.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this Buttonbar to JSON.
         * @function toJSON
         * @memberof in_proto.Buttonbar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Buttonbar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Buttonbar
         * @function getTypeUrl
         * @memberof in_proto.Buttonbar
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Buttonbar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Buttonbar";
        };

        return Buttonbar;
    })();

    in_proto.ComboBox = (function() {

        /**
         * Properties of a ComboBox.
         * @memberof in_proto
         * @interface IComboBox
         * @property {in_proto.IDataField|null} [base] ComboBox base
         * @property {Array.<string>|null} [inputDataset] ComboBox inputDataset
         * @property {Array.<string>|null} [outputDataset] ComboBox outputDataset
         */

        /**
         * Constructs a new ComboBox.
         * @memberof in_proto
         * @classdesc Represents a ComboBox.
         * @implements IComboBox
         * @constructor
         * @param {in_proto.IComboBox=} [properties] Properties to set
         */
        function ComboBox(properties) {
            this.inputDataset = [];
            this.outputDataset = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ComboBox base.
         * @member {in_proto.IDataField|null|undefined} base
         * @memberof in_proto.ComboBox
         * @instance
         */
        ComboBox.prototype.base = null;

        /**
         * ComboBox inputDataset.
         * @member {Array.<string>} inputDataset
         * @memberof in_proto.ComboBox
         * @instance
         */
        ComboBox.prototype.inputDataset = $util.emptyArray;

        /**
         * ComboBox outputDataset.
         * @member {Array.<string>} outputDataset
         * @memberof in_proto.ComboBox
         * @instance
         */
        ComboBox.prototype.outputDataset = $util.emptyArray;

        /**
         * Creates a new ComboBox instance using the specified properties.
         * @function create
         * @memberof in_proto.ComboBox
         * @static
         * @param {in_proto.IComboBox=} [properties] Properties to set
         * @returns {in_proto.ComboBox} ComboBox instance
         */
        ComboBox.create = function create(properties) {
            return new ComboBox(properties);
        };

        /**
         * Encodes the specified ComboBox message. Does not implicitly {@link in_proto.ComboBox.verify|verify} messages.
         * @function encode
         * @memberof in_proto.ComboBox
         * @static
         * @param {in_proto.IComboBox} message ComboBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ComboBox.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.DataField.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.inputDataset != null && message.inputDataset.length)
                for (let i = 0; i < message.inputDataset.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputDataset[i]);
            if (message.outputDataset != null && message.outputDataset.length)
                for (let i = 0; i < message.outputDataset.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputDataset[i]);
            return writer;
        };

        /**
         * Encodes the specified ComboBox message, length delimited. Does not implicitly {@link in_proto.ComboBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.ComboBox
         * @static
         * @param {in_proto.IComboBox} message ComboBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ComboBox.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ComboBox message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.ComboBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.ComboBox} ComboBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ComboBox.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.ComboBox();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.DataField.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.inputDataset && message.inputDataset.length))
                            message.inputDataset = [];
                        message.inputDataset.push(reader.string());
                        break;
                    }
                case 3: {
                        if (!(message.outputDataset && message.outputDataset.length))
                            message.outputDataset = [];
                        message.outputDataset.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ComboBox message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.ComboBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.ComboBox} ComboBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ComboBox.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ComboBox message.
         * @function verify
         * @memberof in_proto.ComboBox
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ComboBox.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.DataField.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.inputDataset != null && message.hasOwnProperty("inputDataset")) {
                if (!Array.isArray(message.inputDataset))
                    return "inputDataset: array expected";
                for (let i = 0; i < message.inputDataset.length; ++i)
                    if (!$util.isString(message.inputDataset[i]))
                        return "inputDataset: string[] expected";
            }
            if (message.outputDataset != null && message.hasOwnProperty("outputDataset")) {
                if (!Array.isArray(message.outputDataset))
                    return "outputDataset: array expected";
                for (let i = 0; i < message.outputDataset.length; ++i)
                    if (!$util.isString(message.outputDataset[i]))
                        return "outputDataset: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ComboBox message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.ComboBox
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.ComboBox} ComboBox
         */
        ComboBox.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.ComboBox)
                return object;
            let message = new $root.in_proto.ComboBox();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.ComboBox.base: object expected");
                message.base = $root.in_proto.DataField.fromObject(object.base);
            }
            if (object.inputDataset) {
                if (!Array.isArray(object.inputDataset))
                    throw TypeError(".in_proto.ComboBox.inputDataset: array expected");
                message.inputDataset = [];
                for (let i = 0; i < object.inputDataset.length; ++i)
                    message.inputDataset[i] = String(object.inputDataset[i]);
            }
            if (object.outputDataset) {
                if (!Array.isArray(object.outputDataset))
                    throw TypeError(".in_proto.ComboBox.outputDataset: array expected");
                message.outputDataset = [];
                for (let i = 0; i < object.outputDataset.length; ++i)
                    message.outputDataset[i] = String(object.outputDataset[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ComboBox message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.ComboBox
         * @static
         * @param {in_proto.ComboBox} message ComboBox
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ComboBox.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.inputDataset = [];
                object.outputDataset = [];
            }
            if (options.defaults)
                object.base = null;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.DataField.toObject(message.base, options);
            if (message.inputDataset && message.inputDataset.length) {
                object.inputDataset = [];
                for (let j = 0; j < message.inputDataset.length; ++j)
                    object.inputDataset[j] = message.inputDataset[j];
            }
            if (message.outputDataset && message.outputDataset.length) {
                object.outputDataset = [];
                for (let j = 0; j < message.outputDataset.length; ++j)
                    object.outputDataset[j] = message.outputDataset[j];
            }
            return object;
        };

        /**
         * Converts this ComboBox to JSON.
         * @function toJSON
         * @memberof in_proto.ComboBox
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ComboBox.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ComboBox
         * @function getTypeUrl
         * @memberof in_proto.ComboBox
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ComboBox.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.ComboBox";
        };

        return ComboBox;
    })();

    in_proto.Container = (function() {

        /**
         * Properties of a Container.
         * @memberof in_proto
         * @interface IContainer
         * @property {in_proto.IGuiElement|null} [base] Container base
         * @property {in_proto.GuiElement.Orientation|null} [orientation] Container orientation
         * @property {boolean|null} [scrollbars] Container scrollbars
         * @property {boolean|null} [panedWindow] Container panedWindow
         * @property {boolean|null} [frame] Container frame
         * @property {string|null} [title] Container title
         * @property {Array.<in_proto.IElementRef>|null} [elements] Container elements
         */

        /**
         * Constructs a new Container.
         * @memberof in_proto
         * @classdesc Represents a Container.
         * @implements IContainer
         * @constructor
         * @param {in_proto.IContainer=} [properties] Properties to set
         */
        function Container(properties) {
            this.elements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Container base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Container
         * @instance
         */
        Container.prototype.base = null;

        /**
         * Container orientation.
         * @member {in_proto.GuiElement.Orientation} orientation
         * @memberof in_proto.Container
         * @instance
         */
        Container.prototype.orientation = 0;

        /**
         * Container scrollbars.
         * @member {boolean} scrollbars
         * @memberof in_proto.Container
         * @instance
         */
        Container.prototype.scrollbars = false;

        /**
         * Container panedWindow.
         * @member {boolean} panedWindow
         * @memberof in_proto.Container
         * @instance
         */
        Container.prototype.panedWindow = false;

        /**
         * Container frame.
         * @member {boolean} frame
         * @memberof in_proto.Container
         * @instance
         */
        Container.prototype.frame = false;

        /**
         * Container title.
         * @member {string} title
         * @memberof in_proto.Container
         * @instance
         */
        Container.prototype.title = "";

        /**
         * Container elements.
         * @member {Array.<in_proto.IElementRef>} elements
         * @memberof in_proto.Container
         * @instance
         */
        Container.prototype.elements = $util.emptyArray;

        /**
         * Creates a new Container instance using the specified properties.
         * @function create
         * @memberof in_proto.Container
         * @static
         * @param {in_proto.IContainer=} [properties] Properties to set
         * @returns {in_proto.Container} Container instance
         */
        Container.create = function create(properties) {
            return new Container(properties);
        };

        /**
         * Encodes the specified Container message. Does not implicitly {@link in_proto.Container.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Container
         * @static
         * @param {in_proto.IContainer} message Container message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Container.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.orientation);
            if (message.scrollbars != null && Object.hasOwnProperty.call(message, "scrollbars"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.scrollbars);
            if (message.panedWindow != null && Object.hasOwnProperty.call(message, "panedWindow"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.panedWindow);
            if (message.frame != null && Object.hasOwnProperty.call(message, "frame"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.frame);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.title);
            if (message.elements != null && message.elements.length)
                for (let i = 0; i < message.elements.length; ++i)
                    $root.in_proto.ElementRef.encode(message.elements[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Container message, length delimited. Does not implicitly {@link in_proto.Container.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Container
         * @static
         * @param {in_proto.IContainer} message Container message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Container.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Container message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Container
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Container} Container
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Container.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Container();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.orientation = reader.int32();
                        break;
                    }
                case 3: {
                        message.scrollbars = reader.bool();
                        break;
                    }
                case 4: {
                        message.panedWindow = reader.bool();
                        break;
                    }
                case 5: {
                        message.frame = reader.bool();
                        break;
                    }
                case 6: {
                        message.title = reader.string();
                        break;
                    }
                case 7: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.in_proto.ElementRef.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Container message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Container
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Container} Container
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Container.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Container message.
         * @function verify
         * @memberof in_proto.Container
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Container.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                switch (message.orientation) {
                default:
                    return "orientation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.scrollbars != null && message.hasOwnProperty("scrollbars"))
                if (typeof message.scrollbars !== "boolean")
                    return "scrollbars: boolean expected";
            if (message.panedWindow != null && message.hasOwnProperty("panedWindow"))
                if (typeof message.panedWindow !== "boolean")
                    return "panedWindow: boolean expected";
            if (message.frame != null && message.hasOwnProperty("frame"))
                if (typeof message.frame !== "boolean")
                    return "frame: boolean expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (let i = 0; i < message.elements.length; ++i) {
                    let error = $root.in_proto.ElementRef.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Container message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Container
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Container} Container
         */
        Container.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Container)
                return object;
            let message = new $root.in_proto.Container();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Container.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            switch (object.orientation) {
            default:
                if (typeof object.orientation === "number") {
                    message.orientation = object.orientation;
                    break;
                }
                break;
            case "None":
            case 0:
                message.orientation = 0;
                break;
            case "Horizontal":
            case 1:
                message.orientation = 1;
                break;
            case "Vertical":
            case 2:
                message.orientation = 2;
                break;
            case "Both":
            case 3:
                message.orientation = 3;
                break;
            }
            if (object.scrollbars != null)
                message.scrollbars = Boolean(object.scrollbars);
            if (object.panedWindow != null)
                message.panedWindow = Boolean(object.panedWindow);
            if (object.frame != null)
                message.frame = Boolean(object.frame);
            if (object.title != null)
                message.title = String(object.title);
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".in_proto.Container.elements: array expected");
                message.elements = [];
                for (let i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".in_proto.Container.elements: object expected");
                    message.elements[i] = $root.in_proto.ElementRef.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Container message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Container
         * @static
         * @param {in_proto.Container} message Container
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Container.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults) {
                object.base = null;
                object.orientation = options.enums === String ? "None" : 0;
                object.scrollbars = false;
                object.panedWindow = false;
                object.frame = false;
                object.title = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = options.enums === String ? $root.in_proto.GuiElement.Orientation[message.orientation] === undefined ? message.orientation : $root.in_proto.GuiElement.Orientation[message.orientation] : message.orientation;
            if (message.scrollbars != null && message.hasOwnProperty("scrollbars"))
                object.scrollbars = message.scrollbars;
            if (message.panedWindow != null && message.hasOwnProperty("panedWindow"))
                object.panedWindow = message.panedWindow;
            if (message.frame != null && message.hasOwnProperty("frame"))
                object.frame = message.frame;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (let j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.in_proto.ElementRef.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this Container to JSON.
         * @function toJSON
         * @memberof in_proto.Container
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Container.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Container
         * @function getTypeUrl
         * @memberof in_proto.Container
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Container.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Container";
        };

        return Container;
    })();

    in_proto.CycleButton = (function() {

        /**
         * Properties of a CycleButton.
         * @memberof in_proto
         * @interface ICycleButton
         * @property {in_proto.IGuiElement|null} [base] CycleButton base
         * @property {string|null} [label] CycleButton label
         * @property {number|null} [cycle] CycleButton cycle
         * @property {number|null} [numCycle] CycleButton numCycle
         * @property {Array.<string>|null} [cycles] CycleButton cycles
         */

        /**
         * Constructs a new CycleButton.
         * @memberof in_proto
         * @classdesc Represents a CycleButton.
         * @implements ICycleButton
         * @constructor
         * @param {in_proto.ICycleButton=} [properties] Properties to set
         */
        function CycleButton(properties) {
            this.cycles = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CycleButton base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.CycleButton
         * @instance
         */
        CycleButton.prototype.base = null;

        /**
         * CycleButton label.
         * @member {string} label
         * @memberof in_proto.CycleButton
         * @instance
         */
        CycleButton.prototype.label = "";

        /**
         * CycleButton cycle.
         * @member {number} cycle
         * @memberof in_proto.CycleButton
         * @instance
         */
        CycleButton.prototype.cycle = 0;

        /**
         * CycleButton numCycle.
         * @member {number} numCycle
         * @memberof in_proto.CycleButton
         * @instance
         */
        CycleButton.prototype.numCycle = 0;

        /**
         * CycleButton cycles.
         * @member {Array.<string>} cycles
         * @memberof in_proto.CycleButton
         * @instance
         */
        CycleButton.prototype.cycles = $util.emptyArray;

        /**
         * Creates a new CycleButton instance using the specified properties.
         * @function create
         * @memberof in_proto.CycleButton
         * @static
         * @param {in_proto.ICycleButton=} [properties] Properties to set
         * @returns {in_proto.CycleButton} CycleButton instance
         */
        CycleButton.create = function create(properties) {
            return new CycleButton(properties);
        };

        /**
         * Encodes the specified CycleButton message. Does not implicitly {@link in_proto.CycleButton.verify|verify} messages.
         * @function encode
         * @memberof in_proto.CycleButton
         * @static
         * @param {in_proto.ICycleButton} message CycleButton message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CycleButton.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.cycle != null && Object.hasOwnProperty.call(message, "cycle"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.cycle);
            if (message.numCycle != null && Object.hasOwnProperty.call(message, "numCycle"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.numCycle);
            if (message.cycles != null && message.cycles.length)
                for (let i = 0; i < message.cycles.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.cycles[i]);
            return writer;
        };

        /**
         * Encodes the specified CycleButton message, length delimited. Does not implicitly {@link in_proto.CycleButton.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.CycleButton
         * @static
         * @param {in_proto.ICycleButton} message CycleButton message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CycleButton.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CycleButton message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.CycleButton
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.CycleButton} CycleButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CycleButton.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.CycleButton();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.cycle = reader.uint32();
                        break;
                    }
                case 4: {
                        message.numCycle = reader.uint32();
                        break;
                    }
                case 5: {
                        if (!(message.cycles && message.cycles.length))
                            message.cycles = [];
                        message.cycles.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CycleButton message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.CycleButton
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.CycleButton} CycleButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CycleButton.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CycleButton message.
         * @function verify
         * @memberof in_proto.CycleButton
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CycleButton.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.cycle != null && message.hasOwnProperty("cycle"))
                if (!$util.isInteger(message.cycle))
                    return "cycle: integer expected";
            if (message.numCycle != null && message.hasOwnProperty("numCycle"))
                if (!$util.isInteger(message.numCycle))
                    return "numCycle: integer expected";
            if (message.cycles != null && message.hasOwnProperty("cycles")) {
                if (!Array.isArray(message.cycles))
                    return "cycles: array expected";
                for (let i = 0; i < message.cycles.length; ++i)
                    if (!$util.isString(message.cycles[i]))
                        return "cycles: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CycleButton message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.CycleButton
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.CycleButton} CycleButton
         */
        CycleButton.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.CycleButton)
                return object;
            let message = new $root.in_proto.CycleButton();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.CycleButton.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.label != null)
                message.label = String(object.label);
            if (object.cycle != null)
                message.cycle = object.cycle >>> 0;
            if (object.numCycle != null)
                message.numCycle = object.numCycle >>> 0;
            if (object.cycles) {
                if (!Array.isArray(object.cycles))
                    throw TypeError(".in_proto.CycleButton.cycles: array expected");
                message.cycles = [];
                for (let i = 0; i < object.cycles.length; ++i)
                    message.cycles[i] = String(object.cycles[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CycleButton message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.CycleButton
         * @static
         * @param {in_proto.CycleButton} message CycleButton
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CycleButton.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.cycles = [];
            if (options.defaults) {
                object.base = null;
                object.label = "";
                object.cycle = 0;
                object.numCycle = 0;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.cycle != null && message.hasOwnProperty("cycle"))
                object.cycle = message.cycle;
            if (message.numCycle != null && message.hasOwnProperty("numCycle"))
                object.numCycle = message.numCycle;
            if (message.cycles && message.cycles.length) {
                object.cycles = [];
                for (let j = 0; j < message.cycles.length; ++j)
                    object.cycles[j] = message.cycles[j];
            }
            return object;
        };

        /**
         * Converts this CycleButton to JSON.
         * @function toJSON
         * @memberof in_proto.CycleButton
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CycleButton.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CycleButton
         * @function getTypeUrl
         * @memberof in_proto.CycleButton
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CycleButton.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.CycleButton";
        };

        return CycleButton;
    })();

    in_proto.FieldGroup = (function() {

        /**
         * Properties of a FieldGroup.
         * @memberof in_proto
         * @interface IFieldGroup
         * @property {in_proto.IGuiElement|null} [base] FieldGroup base
         * @property {string|null} [label] FieldGroup label
         * @property {in_proto.GuiElement.Alignment|null} [labelAlignment] FieldGroup labelAlignment
         * @property {in_proto.GuiElement.Orientation|null} [orientation] FieldGroup orientation
         * @property {boolean|null} [frame] FieldGroup frame
         * @property {Array.<in_proto.FieldGroup.IGridTemplateField>|null} [gridTemplateColumns] FieldGroup gridTemplateColumns
         * @property {Array.<in_proto.IFieldGroupLine>|null} [lines] FieldGroup lines
         */

        /**
         * Constructs a new FieldGroup.
         * @memberof in_proto
         * @classdesc Represents a FieldGroup.
         * @implements IFieldGroup
         * @constructor
         * @param {in_proto.IFieldGroup=} [properties] Properties to set
         */
        function FieldGroup(properties) {
            this.gridTemplateColumns = [];
            this.lines = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FieldGroup base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.FieldGroup
         * @instance
         */
        FieldGroup.prototype.base = null;

        /**
         * FieldGroup label.
         * @member {string} label
         * @memberof in_proto.FieldGroup
         * @instance
         */
        FieldGroup.prototype.label = "";

        /**
         * FieldGroup labelAlignment.
         * @member {in_proto.GuiElement.Alignment} labelAlignment
         * @memberof in_proto.FieldGroup
         * @instance
         */
        FieldGroup.prototype.labelAlignment = 0;

        /**
         * FieldGroup orientation.
         * @member {in_proto.GuiElement.Orientation} orientation
         * @memberof in_proto.FieldGroup
         * @instance
         */
        FieldGroup.prototype.orientation = 0;

        /**
         * FieldGroup frame.
         * @member {boolean} frame
         * @memberof in_proto.FieldGroup
         * @instance
         */
        FieldGroup.prototype.frame = false;

        /**
         * FieldGroup gridTemplateColumns.
         * @member {Array.<in_proto.FieldGroup.IGridTemplateField>} gridTemplateColumns
         * @memberof in_proto.FieldGroup
         * @instance
         */
        FieldGroup.prototype.gridTemplateColumns = $util.emptyArray;

        /**
         * FieldGroup lines.
         * @member {Array.<in_proto.IFieldGroupLine>} lines
         * @memberof in_proto.FieldGroup
         * @instance
         */
        FieldGroup.prototype.lines = $util.emptyArray;

        /**
         * Creates a new FieldGroup instance using the specified properties.
         * @function create
         * @memberof in_proto.FieldGroup
         * @static
         * @param {in_proto.IFieldGroup=} [properties] Properties to set
         * @returns {in_proto.FieldGroup} FieldGroup instance
         */
        FieldGroup.create = function create(properties) {
            return new FieldGroup(properties);
        };

        /**
         * Encodes the specified FieldGroup message. Does not implicitly {@link in_proto.FieldGroup.verify|verify} messages.
         * @function encode
         * @memberof in_proto.FieldGroup
         * @static
         * @param {in_proto.IFieldGroup} message FieldGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.labelAlignment != null && Object.hasOwnProperty.call(message, "labelAlignment"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.labelAlignment);
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.orientation);
            if (message.frame != null && Object.hasOwnProperty.call(message, "frame"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.frame);
            if (message.gridTemplateColumns != null && message.gridTemplateColumns.length)
                for (let i = 0; i < message.gridTemplateColumns.length; ++i)
                    $root.in_proto.FieldGroup.GridTemplateField.encode(message.gridTemplateColumns[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.lines != null && message.lines.length)
                for (let i = 0; i < message.lines.length; ++i)
                    $root.in_proto.FieldGroupLine.encode(message.lines[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FieldGroup message, length delimited. Does not implicitly {@link in_proto.FieldGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.FieldGroup
         * @static
         * @param {in_proto.IFieldGroup} message FieldGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FieldGroup message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.FieldGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.FieldGroup} FieldGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.FieldGroup();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.labelAlignment = reader.int32();
                        break;
                    }
                case 4: {
                        message.orientation = reader.int32();
                        break;
                    }
                case 5: {
                        message.frame = reader.bool();
                        break;
                    }
                case 6: {
                        if (!(message.gridTemplateColumns && message.gridTemplateColumns.length))
                            message.gridTemplateColumns = [];
                        message.gridTemplateColumns.push($root.in_proto.FieldGroup.GridTemplateField.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        if (!(message.lines && message.lines.length))
                            message.lines = [];
                        message.lines.push($root.in_proto.FieldGroupLine.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FieldGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.FieldGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.FieldGroup} FieldGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FieldGroup message.
         * @function verify
         * @memberof in_proto.FieldGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FieldGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.labelAlignment != null && message.hasOwnProperty("labelAlignment"))
                switch (message.labelAlignment) {
                default:
                    return "labelAlignment: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                switch (message.orientation) {
                default:
                    return "orientation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.frame != null && message.hasOwnProperty("frame"))
                if (typeof message.frame !== "boolean")
                    return "frame: boolean expected";
            if (message.gridTemplateColumns != null && message.hasOwnProperty("gridTemplateColumns")) {
                if (!Array.isArray(message.gridTemplateColumns))
                    return "gridTemplateColumns: array expected";
                for (let i = 0; i < message.gridTemplateColumns.length; ++i) {
                    let error = $root.in_proto.FieldGroup.GridTemplateField.verify(message.gridTemplateColumns[i]);
                    if (error)
                        return "gridTemplateColumns." + error;
                }
            }
            if (message.lines != null && message.hasOwnProperty("lines")) {
                if (!Array.isArray(message.lines))
                    return "lines: array expected";
                for (let i = 0; i < message.lines.length; ++i) {
                    let error = $root.in_proto.FieldGroupLine.verify(message.lines[i]);
                    if (error)
                        return "lines." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FieldGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.FieldGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.FieldGroup} FieldGroup
         */
        FieldGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.FieldGroup)
                return object;
            let message = new $root.in_proto.FieldGroup();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.FieldGroup.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.label != null)
                message.label = String(object.label);
            switch (object.labelAlignment) {
            default:
                if (typeof object.labelAlignment === "number") {
                    message.labelAlignment = object.labelAlignment;
                    break;
                }
                break;
            case "Default":
            case 0:
                message.labelAlignment = 0;
                break;
            case "Left":
            case 1:
                message.labelAlignment = 1;
                break;
            case "Right":
            case 2:
                message.labelAlignment = 2;
                break;
            case "Center":
            case 3:
                message.labelAlignment = 3;
                break;
            case "Top":
            case 4:
                message.labelAlignment = 4;
                break;
            case "Bottom":
            case 5:
                message.labelAlignment = 5;
                break;
            case "Stretch":
            case 6:
                message.labelAlignment = 6;
                break;
            case "Justify":
            case 7:
                message.labelAlignment = 7;
                break;
            }
            switch (object.orientation) {
            default:
                if (typeof object.orientation === "number") {
                    message.orientation = object.orientation;
                    break;
                }
                break;
            case "None":
            case 0:
                message.orientation = 0;
                break;
            case "Horizontal":
            case 1:
                message.orientation = 1;
                break;
            case "Vertical":
            case 2:
                message.orientation = 2;
                break;
            case "Both":
            case 3:
                message.orientation = 3;
                break;
            }
            if (object.frame != null)
                message.frame = Boolean(object.frame);
            if (object.gridTemplateColumns) {
                if (!Array.isArray(object.gridTemplateColumns))
                    throw TypeError(".in_proto.FieldGroup.gridTemplateColumns: array expected");
                message.gridTemplateColumns = [];
                for (let i = 0; i < object.gridTemplateColumns.length; ++i) {
                    if (typeof object.gridTemplateColumns[i] !== "object")
                        throw TypeError(".in_proto.FieldGroup.gridTemplateColumns: object expected");
                    message.gridTemplateColumns[i] = $root.in_proto.FieldGroup.GridTemplateField.fromObject(object.gridTemplateColumns[i]);
                }
            }
            if (object.lines) {
                if (!Array.isArray(object.lines))
                    throw TypeError(".in_proto.FieldGroup.lines: array expected");
                message.lines = [];
                for (let i = 0; i < object.lines.length; ++i) {
                    if (typeof object.lines[i] !== "object")
                        throw TypeError(".in_proto.FieldGroup.lines: object expected");
                    message.lines[i] = $root.in_proto.FieldGroupLine.fromObject(object.lines[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FieldGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.FieldGroup
         * @static
         * @param {in_proto.FieldGroup} message FieldGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FieldGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.gridTemplateColumns = [];
                object.lines = [];
            }
            if (options.defaults) {
                object.base = null;
                object.label = "";
                object.labelAlignment = options.enums === String ? "Default" : 0;
                object.orientation = options.enums === String ? "None" : 0;
                object.frame = false;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.labelAlignment != null && message.hasOwnProperty("labelAlignment"))
                object.labelAlignment = options.enums === String ? $root.in_proto.GuiElement.Alignment[message.labelAlignment] === undefined ? message.labelAlignment : $root.in_proto.GuiElement.Alignment[message.labelAlignment] : message.labelAlignment;
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = options.enums === String ? $root.in_proto.GuiElement.Orientation[message.orientation] === undefined ? message.orientation : $root.in_proto.GuiElement.Orientation[message.orientation] : message.orientation;
            if (message.frame != null && message.hasOwnProperty("frame"))
                object.frame = message.frame;
            if (message.gridTemplateColumns && message.gridTemplateColumns.length) {
                object.gridTemplateColumns = [];
                for (let j = 0; j < message.gridTemplateColumns.length; ++j)
                    object.gridTemplateColumns[j] = $root.in_proto.FieldGroup.GridTemplateField.toObject(message.gridTemplateColumns[j], options);
            }
            if (message.lines && message.lines.length) {
                object.lines = [];
                for (let j = 0; j < message.lines.length; ++j)
                    object.lines[j] = $root.in_proto.FieldGroupLine.toObject(message.lines[j], options);
            }
            return object;
        };

        /**
         * Converts this FieldGroup to JSON.
         * @function toJSON
         * @memberof in_proto.FieldGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FieldGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FieldGroup
         * @function getTypeUrl
         * @memberof in_proto.FieldGroup
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FieldGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.FieldGroup";
        };

        FieldGroup.GridTemplateField = (function() {

            /**
             * Properties of a GridTemplateField.
             * @memberof in_proto.FieldGroup
             * @interface IGridTemplateField
             * @property {number|null} [minMax] GridTemplateField minMax
             */

            /**
             * Constructs a new GridTemplateField.
             * @memberof in_proto.FieldGroup
             * @classdesc Represents a GridTemplateField.
             * @implements IGridTemplateField
             * @constructor
             * @param {in_proto.FieldGroup.IGridTemplateField=} [properties] Properties to set
             */
            function GridTemplateField(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GridTemplateField minMax.
             * @member {number} minMax
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @instance
             */
            GridTemplateField.prototype.minMax = 0;

            /**
             * Creates a new GridTemplateField instance using the specified properties.
             * @function create
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {in_proto.FieldGroup.IGridTemplateField=} [properties] Properties to set
             * @returns {in_proto.FieldGroup.GridTemplateField} GridTemplateField instance
             */
            GridTemplateField.create = function create(properties) {
                return new GridTemplateField(properties);
            };

            /**
             * Encodes the specified GridTemplateField message. Does not implicitly {@link in_proto.FieldGroup.GridTemplateField.verify|verify} messages.
             * @function encode
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {in_proto.FieldGroup.IGridTemplateField} message GridTemplateField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GridTemplateField.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.minMax != null && Object.hasOwnProperty.call(message, "minMax"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.minMax);
                return writer;
            };

            /**
             * Encodes the specified GridTemplateField message, length delimited. Does not implicitly {@link in_proto.FieldGroup.GridTemplateField.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {in_proto.FieldGroup.IGridTemplateField} message GridTemplateField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GridTemplateField.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GridTemplateField message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.FieldGroup.GridTemplateField} GridTemplateField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GridTemplateField.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.FieldGroup.GridTemplateField();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.minMax = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GridTemplateField message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.FieldGroup.GridTemplateField} GridTemplateField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GridTemplateField.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GridTemplateField message.
             * @function verify
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GridTemplateField.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.minMax != null && message.hasOwnProperty("minMax"))
                    if (typeof message.minMax !== "number")
                        return "minMax: number expected";
                return null;
            };

            /**
             * Creates a GridTemplateField message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.FieldGroup.GridTemplateField} GridTemplateField
             */
            GridTemplateField.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.FieldGroup.GridTemplateField)
                    return object;
                let message = new $root.in_proto.FieldGroup.GridTemplateField();
                if (object.minMax != null)
                    message.minMax = Number(object.minMax);
                return message;
            };

            /**
             * Creates a plain object from a GridTemplateField message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {in_proto.FieldGroup.GridTemplateField} message GridTemplateField
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GridTemplateField.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.minMax = 0;
                if (message.minMax != null && message.hasOwnProperty("minMax"))
                    object.minMax = options.json && !isFinite(message.minMax) ? String(message.minMax) : message.minMax;
                return object;
            };

            /**
             * Converts this GridTemplateField to JSON.
             * @function toJSON
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GridTemplateField.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GridTemplateField
             * @function getTypeUrl
             * @memberof in_proto.FieldGroup.GridTemplateField
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GridTemplateField.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.FieldGroup.GridTemplateField";
            };

            return GridTemplateField;
        })();

        return FieldGroup;
    })();

    in_proto.FieldGroupLine = (function() {

        /**
         * Properties of a FieldGroupLine.
         * @memberof in_proto
         * @interface IFieldGroupLine
         * @property {number|null} [id] FieldGroupLine id
         * @property {Array.<in_proto.IElementRef>|null} [elements] FieldGroupLine elements
         */

        /**
         * Constructs a new FieldGroupLine.
         * @memberof in_proto
         * @classdesc Represents a FieldGroupLine.
         * @implements IFieldGroupLine
         * @constructor
         * @param {in_proto.IFieldGroupLine=} [properties] Properties to set
         */
        function FieldGroupLine(properties) {
            this.elements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FieldGroupLine id.
         * @member {number} id
         * @memberof in_proto.FieldGroupLine
         * @instance
         */
        FieldGroupLine.prototype.id = 0;

        /**
         * FieldGroupLine elements.
         * @member {Array.<in_proto.IElementRef>} elements
         * @memberof in_proto.FieldGroupLine
         * @instance
         */
        FieldGroupLine.prototype.elements = $util.emptyArray;

        /**
         * Creates a new FieldGroupLine instance using the specified properties.
         * @function create
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {in_proto.IFieldGroupLine=} [properties] Properties to set
         * @returns {in_proto.FieldGroupLine} FieldGroupLine instance
         */
        FieldGroupLine.create = function create(properties) {
            return new FieldGroupLine(properties);
        };

        /**
         * Encodes the specified FieldGroupLine message. Does not implicitly {@link in_proto.FieldGroupLine.verify|verify} messages.
         * @function encode
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {in_proto.IFieldGroupLine} message FieldGroupLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldGroupLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.elements != null && message.elements.length)
                for (let i = 0; i < message.elements.length; ++i)
                    $root.in_proto.ElementRef.encode(message.elements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FieldGroupLine message, length delimited. Does not implicitly {@link in_proto.FieldGroupLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {in_proto.IFieldGroupLine} message FieldGroupLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FieldGroupLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FieldGroupLine message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.FieldGroupLine} FieldGroupLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldGroupLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.FieldGroupLine();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.in_proto.ElementRef.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FieldGroupLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.FieldGroupLine} FieldGroupLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FieldGroupLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FieldGroupLine message.
         * @function verify
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FieldGroupLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (let i = 0; i < message.elements.length; ++i) {
                    let error = $root.in_proto.ElementRef.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FieldGroupLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.FieldGroupLine} FieldGroupLine
         */
        FieldGroupLine.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.FieldGroupLine)
                return object;
            let message = new $root.in_proto.FieldGroupLine();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".in_proto.FieldGroupLine.elements: array expected");
                message.elements = [];
                for (let i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".in_proto.FieldGroupLine.elements: object expected");
                    message.elements[i] = $root.in_proto.ElementRef.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FieldGroupLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {in_proto.FieldGroupLine} message FieldGroupLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FieldGroupLine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (let j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.in_proto.ElementRef.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this FieldGroupLine to JSON.
         * @function toJSON
         * @memberof in_proto.FieldGroupLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FieldGroupLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FieldGroupLine
         * @function getTypeUrl
         * @memberof in_proto.FieldGroupLine
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FieldGroupLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.FieldGroupLine";
        };

        return FieldGroupLine;
    })();

    in_proto.Folder = (function() {

        /**
         * Properties of a Folder.
         * @memberof in_proto
         * @interface IFolder
         * @property {in_proto.IGuiElement|null} [base] Folder base
         * @property {boolean|null} [buttons] Folder buttons
         * @property {Array.<in_proto.Folder.IPage>|null} [pages] Folder pages
         * @property {number|null} [active] Folder active
         * @property {in_proto.GuiElement.Alignment|null} [buttonAlignment] Folder buttonAlignment
         * @property {number|null} [width] Folder width
         */

        /**
         * Constructs a new Folder.
         * @memberof in_proto
         * @classdesc Represents a Folder.
         * @implements IFolder
         * @constructor
         * @param {in_proto.IFolder=} [properties] Properties to set
         */
        function Folder(properties) {
            this.pages = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Folder base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Folder
         * @instance
         */
        Folder.prototype.base = null;

        /**
         * Folder buttons.
         * @member {boolean} buttons
         * @memberof in_proto.Folder
         * @instance
         */
        Folder.prototype.buttons = false;

        /**
         * Folder pages.
         * @member {Array.<in_proto.Folder.IPage>} pages
         * @memberof in_proto.Folder
         * @instance
         */
        Folder.prototype.pages = $util.emptyArray;

        /**
         * Folder active.
         * @member {number} active
         * @memberof in_proto.Folder
         * @instance
         */
        Folder.prototype.active = 0;

        /**
         * Folder buttonAlignment.
         * @member {in_proto.GuiElement.Alignment} buttonAlignment
         * @memberof in_proto.Folder
         * @instance
         */
        Folder.prototype.buttonAlignment = 0;

        /**
         * Folder width.
         * @member {number} width
         * @memberof in_proto.Folder
         * @instance
         */
        Folder.prototype.width = 0;

        /**
         * Creates a new Folder instance using the specified properties.
         * @function create
         * @memberof in_proto.Folder
         * @static
         * @param {in_proto.IFolder=} [properties] Properties to set
         * @returns {in_proto.Folder} Folder instance
         */
        Folder.create = function create(properties) {
            return new Folder(properties);
        };

        /**
         * Encodes the specified Folder message. Does not implicitly {@link in_proto.Folder.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Folder
         * @static
         * @param {in_proto.IFolder} message Folder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Folder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.buttons != null && Object.hasOwnProperty.call(message, "buttons"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.buttons);
            if (message.pages != null && message.pages.length)
                for (let i = 0; i < message.pages.length; ++i)
                    $root.in_proto.Folder.Page.encode(message.pages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.active != null && Object.hasOwnProperty.call(message, "active"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.active);
            if (message.buttonAlignment != null && Object.hasOwnProperty.call(message, "buttonAlignment"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.buttonAlignment);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.width);
            return writer;
        };

        /**
         * Encodes the specified Folder message, length delimited. Does not implicitly {@link in_proto.Folder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Folder
         * @static
         * @param {in_proto.IFolder} message Folder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Folder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Folder message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Folder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Folder} Folder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Folder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Folder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.buttons = reader.bool();
                        break;
                    }
                case 3: {
                        if (!(message.pages && message.pages.length))
                            message.pages = [];
                        message.pages.push($root.in_proto.Folder.Page.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.active = reader.uint32();
                        break;
                    }
                case 5: {
                        message.buttonAlignment = reader.int32();
                        break;
                    }
                case 6: {
                        message.width = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Folder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Folder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Folder} Folder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Folder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Folder message.
         * @function verify
         * @memberof in_proto.Folder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Folder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.buttons != null && message.hasOwnProperty("buttons"))
                if (typeof message.buttons !== "boolean")
                    return "buttons: boolean expected";
            if (message.pages != null && message.hasOwnProperty("pages")) {
                if (!Array.isArray(message.pages))
                    return "pages: array expected";
                for (let i = 0; i < message.pages.length; ++i) {
                    let error = $root.in_proto.Folder.Page.verify(message.pages[i]);
                    if (error)
                        return "pages." + error;
                }
            }
            if (message.active != null && message.hasOwnProperty("active"))
                if (!$util.isInteger(message.active))
                    return "active: integer expected";
            if (message.buttonAlignment != null && message.hasOwnProperty("buttonAlignment"))
                switch (message.buttonAlignment) {
                default:
                    return "buttonAlignment: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            return null;
        };

        /**
         * Creates a Folder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Folder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Folder} Folder
         */
        Folder.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Folder)
                return object;
            let message = new $root.in_proto.Folder();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Folder.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.buttons != null)
                message.buttons = Boolean(object.buttons);
            if (object.pages) {
                if (!Array.isArray(object.pages))
                    throw TypeError(".in_proto.Folder.pages: array expected");
                message.pages = [];
                for (let i = 0; i < object.pages.length; ++i) {
                    if (typeof object.pages[i] !== "object")
                        throw TypeError(".in_proto.Folder.pages: object expected");
                    message.pages[i] = $root.in_proto.Folder.Page.fromObject(object.pages[i]);
                }
            }
            if (object.active != null)
                message.active = object.active >>> 0;
            switch (object.buttonAlignment) {
            default:
                if (typeof object.buttonAlignment === "number") {
                    message.buttonAlignment = object.buttonAlignment;
                    break;
                }
                break;
            case "Default":
            case 0:
                message.buttonAlignment = 0;
                break;
            case "Left":
            case 1:
                message.buttonAlignment = 1;
                break;
            case "Right":
            case 2:
                message.buttonAlignment = 2;
                break;
            case "Center":
            case 3:
                message.buttonAlignment = 3;
                break;
            case "Top":
            case 4:
                message.buttonAlignment = 4;
                break;
            case "Bottom":
            case 5:
                message.buttonAlignment = 5;
                break;
            case "Stretch":
            case 6:
                message.buttonAlignment = 6;
                break;
            case "Justify":
            case 7:
                message.buttonAlignment = 7;
                break;
            }
            if (object.width != null)
                message.width = object.width >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Folder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Folder
         * @static
         * @param {in_proto.Folder} message Folder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Folder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.pages = [];
            if (options.defaults) {
                object.base = null;
                object.buttons = false;
                object.active = 0;
                object.buttonAlignment = options.enums === String ? "Default" : 0;
                object.width = 0;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.buttons != null && message.hasOwnProperty("buttons"))
                object.buttons = message.buttons;
            if (message.pages && message.pages.length) {
                object.pages = [];
                for (let j = 0; j < message.pages.length; ++j)
                    object.pages[j] = $root.in_proto.Folder.Page.toObject(message.pages[j], options);
            }
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            if (message.buttonAlignment != null && message.hasOwnProperty("buttonAlignment"))
                object.buttonAlignment = options.enums === String ? $root.in_proto.GuiElement.Alignment[message.buttonAlignment] === undefined ? message.buttonAlignment : $root.in_proto.GuiElement.Alignment[message.buttonAlignment] : message.buttonAlignment;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            return object;
        };

        /**
         * Converts this Folder to JSON.
         * @function toJSON
         * @memberof in_proto.Folder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Folder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Folder
         * @function getTypeUrl
         * @memberof in_proto.Folder
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Folder.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Folder";
        };

        Folder.Page = (function() {

            /**
             * Properties of a Page.
             * @memberof in_proto.Folder
             * @interface IPage
             * @property {number|null} [pageId] Page pageId
             * @property {string|null} [label] Page label
             * @property {boolean|null} [active] Page active
             * @property {in_proto.IContainer|null} [container] Page container
             */

            /**
             * Constructs a new Page.
             * @memberof in_proto.Folder
             * @classdesc Represents a Page.
             * @implements IPage
             * @constructor
             * @param {in_proto.Folder.IPage=} [properties] Properties to set
             */
            function Page(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Page pageId.
             * @member {number} pageId
             * @memberof in_proto.Folder.Page
             * @instance
             */
            Page.prototype.pageId = 0;

            /**
             * Page label.
             * @member {string} label
             * @memberof in_proto.Folder.Page
             * @instance
             */
            Page.prototype.label = "";

            /**
             * Page active.
             * @member {boolean} active
             * @memberof in_proto.Folder.Page
             * @instance
             */
            Page.prototype.active = false;

            /**
             * Page container.
             * @member {in_proto.IContainer|null|undefined} container
             * @memberof in_proto.Folder.Page
             * @instance
             */
            Page.prototype.container = null;

            /**
             * Creates a new Page instance using the specified properties.
             * @function create
             * @memberof in_proto.Folder.Page
             * @static
             * @param {in_proto.Folder.IPage=} [properties] Properties to set
             * @returns {in_proto.Folder.Page} Page instance
             */
            Page.create = function create(properties) {
                return new Page(properties);
            };

            /**
             * Encodes the specified Page message. Does not implicitly {@link in_proto.Folder.Page.verify|verify} messages.
             * @function encode
             * @memberof in_proto.Folder.Page
             * @static
             * @param {in_proto.Folder.IPage} message Page message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Page.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pageId != null && Object.hasOwnProperty.call(message, "pageId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pageId);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
                if (message.active != null && Object.hasOwnProperty.call(message, "active"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.active);
                if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                    $root.in_proto.Container.encode(message.container, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Page message, length delimited. Does not implicitly {@link in_proto.Folder.Page.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.Folder.Page
             * @static
             * @param {in_proto.Folder.IPage} message Page message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Page.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Page message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.Folder.Page
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.Folder.Page} Page
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Page.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Folder.Page();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.pageId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.label = reader.string();
                            break;
                        }
                    case 3: {
                            message.active = reader.bool();
                            break;
                        }
                    case 4: {
                            message.container = $root.in_proto.Container.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Page message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.Folder.Page
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.Folder.Page} Page
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Page.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Page message.
             * @function verify
             * @memberof in_proto.Folder.Page
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Page.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pageId != null && message.hasOwnProperty("pageId"))
                    if (!$util.isInteger(message.pageId))
                        return "pageId: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.active != null && message.hasOwnProperty("active"))
                    if (typeof message.active !== "boolean")
                        return "active: boolean expected";
                if (message.container != null && message.hasOwnProperty("container")) {
                    let error = $root.in_proto.Container.verify(message.container);
                    if (error)
                        return "container." + error;
                }
                return null;
            };

            /**
             * Creates a Page message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.Folder.Page
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.Folder.Page} Page
             */
            Page.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.Folder.Page)
                    return object;
                let message = new $root.in_proto.Folder.Page();
                if (object.pageId != null)
                    message.pageId = object.pageId >>> 0;
                if (object.label != null)
                    message.label = String(object.label);
                if (object.active != null)
                    message.active = Boolean(object.active);
                if (object.container != null) {
                    if (typeof object.container !== "object")
                        throw TypeError(".in_proto.Folder.Page.container: object expected");
                    message.container = $root.in_proto.Container.fromObject(object.container);
                }
                return message;
            };

            /**
             * Creates a plain object from a Page message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.Folder.Page
             * @static
             * @param {in_proto.Folder.Page} message Page
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Page.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.pageId = 0;
                    object.label = "";
                    object.active = false;
                    object.container = null;
                }
                if (message.pageId != null && message.hasOwnProperty("pageId"))
                    object.pageId = message.pageId;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.active != null && message.hasOwnProperty("active"))
                    object.active = message.active;
                if (message.container != null && message.hasOwnProperty("container"))
                    object.container = $root.in_proto.Container.toObject(message.container, options);
                return object;
            };

            /**
             * Converts this Page to JSON.
             * @function toJSON
             * @memberof in_proto.Folder.Page
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Page.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Page
             * @function getTypeUrl
             * @memberof in_proto.Folder.Page
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Page.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.Folder.Page";
            };

            return Page;
        })();

        return Folder;
    })();

    in_proto.Form = (function() {

        /**
         * Properties of a Form.
         * @memberof in_proto
         * @interface IForm
         * @property {in_proto.IGuiElement|null} [base] Form base
         * @property {string|null} [title] Form title
         * @property {boolean|null} [main] Form main
         * @property {boolean|null} [modal] Form modal
         * @property {Array.<in_proto.IElementRef>|null} [elements] Form elements
         */

        /**
         * Constructs a new Form.
         * @memberof in_proto
         * @classdesc Represents a Form.
         * @implements IForm
         * @constructor
         * @param {in_proto.IForm=} [properties] Properties to set
         */
        function Form(properties) {
            this.elements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Form base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Form
         * @instance
         */
        Form.prototype.base = null;

        /**
         * Form title.
         * @member {string} title
         * @memberof in_proto.Form
         * @instance
         */
        Form.prototype.title = "";

        /**
         * Form main.
         * @member {boolean} main
         * @memberof in_proto.Form
         * @instance
         */
        Form.prototype.main = false;

        /**
         * Form modal.
         * @member {boolean} modal
         * @memberof in_proto.Form
         * @instance
         */
        Form.prototype.modal = false;

        /**
         * Form elements.
         * @member {Array.<in_proto.IElementRef>} elements
         * @memberof in_proto.Form
         * @instance
         */
        Form.prototype.elements = $util.emptyArray;

        /**
         * Creates a new Form instance using the specified properties.
         * @function create
         * @memberof in_proto.Form
         * @static
         * @param {in_proto.IForm=} [properties] Properties to set
         * @returns {in_proto.Form} Form instance
         */
        Form.create = function create(properties) {
            return new Form(properties);
        };

        /**
         * Encodes the specified Form message. Does not implicitly {@link in_proto.Form.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Form
         * @static
         * @param {in_proto.IForm} message Form message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Form.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.main != null && Object.hasOwnProperty.call(message, "main"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.main);
            if (message.modal != null && Object.hasOwnProperty.call(message, "modal"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.modal);
            if (message.elements != null && message.elements.length)
                for (let i = 0; i < message.elements.length; ++i)
                    $root.in_proto.ElementRef.encode(message.elements[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Form message, length delimited. Does not implicitly {@link in_proto.Form.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Form
         * @static
         * @param {in_proto.IForm} message Form message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Form.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Form message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Form
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Form} Form
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Form.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Form();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.title = reader.string();
                        break;
                    }
                case 3: {
                        message.main = reader.bool();
                        break;
                    }
                case 4: {
                        message.modal = reader.bool();
                        break;
                    }
                case 5: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.in_proto.ElementRef.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Form message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Form
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Form} Form
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Form.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Form message.
         * @function verify
         * @memberof in_proto.Form
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Form.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.main != null && message.hasOwnProperty("main"))
                if (typeof message.main !== "boolean")
                    return "main: boolean expected";
            if (message.modal != null && message.hasOwnProperty("modal"))
                if (typeof message.modal !== "boolean")
                    return "modal: boolean expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (let i = 0; i < message.elements.length; ++i) {
                    let error = $root.in_proto.ElementRef.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Form message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Form
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Form} Form
         */
        Form.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Form)
                return object;
            let message = new $root.in_proto.Form();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Form.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.title != null)
                message.title = String(object.title);
            if (object.main != null)
                message.main = Boolean(object.main);
            if (object.modal != null)
                message.modal = Boolean(object.modal);
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".in_proto.Form.elements: array expected");
                message.elements = [];
                for (let i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".in_proto.Form.elements: object expected");
                    message.elements[i] = $root.in_proto.ElementRef.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Form message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Form
         * @static
         * @param {in_proto.Form} message Form
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Form.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults) {
                object.base = null;
                object.title = "";
                object.main = false;
                object.modal = false;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.main != null && message.hasOwnProperty("main"))
                object.main = message.main;
            if (message.modal != null && message.hasOwnProperty("modal"))
                object.modal = message.modal;
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (let j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.in_proto.ElementRef.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this Form to JSON.
         * @function toJSON
         * @memberof in_proto.Form
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Form.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Form
         * @function getTypeUrl
         * @memberof in_proto.Form
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Form.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Form";
        };

        return Form;
    })();

    in_proto.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof in_proto
         * @interface IHeader
         * @property {in_proto.IGuiElement|null} [base] Header base
         * @property {string|null} [title] Header title
         * @property {string|null} [subtitle] Header subtitle
         * @property {string|null} [leftIcon] Header leftIcon
         * @property {string|null} [rightIcon] Header rightIcon
         */

        /**
         * Constructs a new Header.
         * @memberof in_proto
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {in_proto.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Header base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Header
         * @instance
         */
        Header.prototype.base = null;

        /**
         * Header title.
         * @member {string} title
         * @memberof in_proto.Header
         * @instance
         */
        Header.prototype.title = "";

        /**
         * Header subtitle.
         * @member {string} subtitle
         * @memberof in_proto.Header
         * @instance
         */
        Header.prototype.subtitle = "";

        /**
         * Header leftIcon.
         * @member {string} leftIcon
         * @memberof in_proto.Header
         * @instance
         */
        Header.prototype.leftIcon = "";

        /**
         * Header rightIcon.
         * @member {string} rightIcon
         * @memberof in_proto.Header
         * @instance
         */
        Header.prototype.rightIcon = "";

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof in_proto.Header
         * @static
         * @param {in_proto.IHeader=} [properties] Properties to set
         * @returns {in_proto.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link in_proto.Header.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Header
         * @static
         * @param {in_proto.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.subtitle != null && Object.hasOwnProperty.call(message, "subtitle"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.subtitle);
            if (message.leftIcon != null && Object.hasOwnProperty.call(message, "leftIcon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.leftIcon);
            if (message.rightIcon != null && Object.hasOwnProperty.call(message, "rightIcon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.rightIcon);
            return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link in_proto.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Header
         * @static
         * @param {in_proto.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Header();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.title = reader.string();
                        break;
                    }
                case 3: {
                        message.subtitle = reader.string();
                        break;
                    }
                case 4: {
                        message.leftIcon = reader.string();
                        break;
                    }
                case 5: {
                        message.rightIcon = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Header message.
         * @function verify
         * @memberof in_proto.Header
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Header.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.subtitle != null && message.hasOwnProperty("subtitle"))
                if (!$util.isString(message.subtitle))
                    return "subtitle: string expected";
            if (message.leftIcon != null && message.hasOwnProperty("leftIcon"))
                if (!$util.isString(message.leftIcon))
                    return "leftIcon: string expected";
            if (message.rightIcon != null && message.hasOwnProperty("rightIcon"))
                if (!$util.isString(message.rightIcon))
                    return "rightIcon: string expected";
            return null;
        };

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Header} Header
         */
        Header.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Header)
                return object;
            let message = new $root.in_proto.Header();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Header.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.title != null)
                message.title = String(object.title);
            if (object.subtitle != null)
                message.subtitle = String(object.subtitle);
            if (object.leftIcon != null)
                message.leftIcon = String(object.leftIcon);
            if (object.rightIcon != null)
                message.rightIcon = String(object.rightIcon);
            return message;
        };

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Header
         * @static
         * @param {in_proto.Header} message Header
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Header.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.title = "";
                object.subtitle = "";
                object.leftIcon = "";
                object.rightIcon = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.subtitle != null && message.hasOwnProperty("subtitle"))
                object.subtitle = message.subtitle;
            if (message.leftIcon != null && message.hasOwnProperty("leftIcon"))
                object.leftIcon = message.leftIcon;
            if (message.rightIcon != null && message.hasOwnProperty("rightIcon"))
                object.rightIcon = message.rightIcon;
            return object;
        };

        /**
         * Converts this Header to JSON.
         * @function toJSON
         * @memberof in_proto.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Header
         * @function getTypeUrl
         * @memberof in_proto.Header
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Header";
        };

        return Header;
    })();

    in_proto.Index = (function() {

        /**
         * Properties of an Index.
         * @memberof in_proto
         * @interface IIndex
         * @property {in_proto.IGuiElement|null} [base] Index base
         * @property {boolean|null} [enabled] Index enabled
         * @property {in_proto.DataField.IRange|null} [range] Index range
         * @property {number|null} [index] Index index
         * @property {number|null} [newIndex] Index newIndex
         * @property {in_proto.GuiElement.Orientation|null} [orientation] Index orientation
         * @property {boolean|null} [visible] Index visible
         * @property {string|null} [fullName] Index fullName
         * @property {string|null} [action] Index action
         */

        /**
         * Constructs a new Index.
         * @memberof in_proto
         * @classdesc Represents an Index.
         * @implements IIndex
         * @constructor
         * @param {in_proto.IIndex=} [properties] Properties to set
         */
        function Index(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Index base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.base = null;

        /**
         * Index enabled.
         * @member {boolean} enabled
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.enabled = false;

        /**
         * Index range.
         * @member {in_proto.DataField.IRange|null|undefined} range
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.range = null;

        /**
         * Index index.
         * @member {number} index
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.index = 0;

        /**
         * Index newIndex.
         * @member {number} newIndex
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.newIndex = 0;

        /**
         * Index orientation.
         * @member {in_proto.GuiElement.Orientation} orientation
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.orientation = 0;

        /**
         * Index visible.
         * @member {boolean} visible
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.visible = false;

        /**
         * Index fullName.
         * @member {string} fullName
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.fullName = "";

        /**
         * Index action.
         * @member {string} action
         * @memberof in_proto.Index
         * @instance
         */
        Index.prototype.action = "";

        /**
         * Creates a new Index instance using the specified properties.
         * @function create
         * @memberof in_proto.Index
         * @static
         * @param {in_proto.IIndex=} [properties] Properties to set
         * @returns {in_proto.Index} Index instance
         */
        Index.create = function create(properties) {
            return new Index(properties);
        };

        /**
         * Encodes the specified Index message. Does not implicitly {@link in_proto.Index.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Index
         * @static
         * @param {in_proto.IIndex} message Index message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Index.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.enabled);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                $root.in_proto.DataField.Range.encode(message.range, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.index);
            if (message.newIndex != null && Object.hasOwnProperty.call(message, "newIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.newIndex);
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.orientation);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.visible);
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.fullName);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified Index message, length delimited. Does not implicitly {@link in_proto.Index.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Index
         * @static
         * @param {in_proto.IIndex} message Index message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Index.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Index message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Index
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Index} Index
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Index.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Index();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 3: {
                        message.range = $root.in_proto.DataField.Range.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.index = reader.uint32();
                        break;
                    }
                case 5: {
                        message.newIndex = reader.uint32();
                        break;
                    }
                case 6: {
                        message.orientation = reader.int32();
                        break;
                    }
                case 7: {
                        message.visible = reader.bool();
                        break;
                    }
                case 8: {
                        message.fullName = reader.string();
                        break;
                    }
                case 9: {
                        message.action = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Index message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Index
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Index} Index
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Index.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Index message.
         * @function verify
         * @memberof in_proto.Index
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Index.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.range != null && message.hasOwnProperty("range")) {
                let error = $root.in_proto.DataField.Range.verify(message.range);
                if (error)
                    return "range." + error;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.newIndex != null && message.hasOwnProperty("newIndex"))
                if (!$util.isInteger(message.newIndex))
                    return "newIndex: integer expected";
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                switch (message.orientation) {
                default:
                    return "orientation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates an Index message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Index
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Index} Index
         */
        Index.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Index)
                return object;
            let message = new $root.in_proto.Index();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Index.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.range != null) {
                if (typeof object.range !== "object")
                    throw TypeError(".in_proto.Index.range: object expected");
                message.range = $root.in_proto.DataField.Range.fromObject(object.range);
            }
            if (object.index != null)
                message.index = object.index >>> 0;
            if (object.newIndex != null)
                message.newIndex = object.newIndex >>> 0;
            switch (object.orientation) {
            default:
                if (typeof object.orientation === "number") {
                    message.orientation = object.orientation;
                    break;
                }
                break;
            case "None":
            case 0:
                message.orientation = 0;
                break;
            case "Horizontal":
            case 1:
                message.orientation = 1;
                break;
            case "Vertical":
            case 2:
                message.orientation = 2;
                break;
            case "Both":
            case 3:
                message.orientation = 3;
                break;
            }
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from an Index message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Index
         * @static
         * @param {in_proto.Index} message Index
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Index.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.enabled = false;
                object.range = null;
                object.index = 0;
                object.newIndex = 0;
                object.orientation = options.enums === String ? "None" : 0;
                object.visible = false;
                object.fullName = "";
                object.action = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = $root.in_proto.DataField.Range.toObject(message.range, options);
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.newIndex != null && message.hasOwnProperty("newIndex"))
                object.newIndex = message.newIndex;
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = options.enums === String ? $root.in_proto.GuiElement.Orientation[message.orientation] === undefined ? message.orientation : $root.in_proto.GuiElement.Orientation[message.orientation] : message.orientation;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this Index to JSON.
         * @function toJSON
         * @memberof in_proto.Index
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Index.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Index
         * @function getTypeUrl
         * @memberof in_proto.Index
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Index.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Index";
        };

        return Index;
    })();

    in_proto.IndexMenu = (function() {

        /**
         * Properties of an IndexMenu.
         * @memberof in_proto
         * @interface IIndexMenu
         * @property {in_proto.IGuiElement|null} [base] IndexMenu base
         * @property {string|null} [label] IndexMenu label
         * @property {boolean|null} [menu] IndexMenu menu
         * @property {in_proto.IPopupMenu|null} [popupMenu] IndexMenu popupMenu
         * @property {string|null} [guielement] IndexMenu guielement
         */

        /**
         * Constructs a new IndexMenu.
         * @memberof in_proto
         * @classdesc Represents an IndexMenu.
         * @implements IIndexMenu
         * @constructor
         * @param {in_proto.IIndexMenu=} [properties] Properties to set
         */
        function IndexMenu(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IndexMenu base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.IndexMenu
         * @instance
         */
        IndexMenu.prototype.base = null;

        /**
         * IndexMenu label.
         * @member {string} label
         * @memberof in_proto.IndexMenu
         * @instance
         */
        IndexMenu.prototype.label = "";

        /**
         * IndexMenu menu.
         * @member {boolean} menu
         * @memberof in_proto.IndexMenu
         * @instance
         */
        IndexMenu.prototype.menu = false;

        /**
         * IndexMenu popupMenu.
         * @member {in_proto.IPopupMenu|null|undefined} popupMenu
         * @memberof in_proto.IndexMenu
         * @instance
         */
        IndexMenu.prototype.popupMenu = null;

        /**
         * IndexMenu guielement.
         * @member {string} guielement
         * @memberof in_proto.IndexMenu
         * @instance
         */
        IndexMenu.prototype.guielement = "";

        /**
         * Creates a new IndexMenu instance using the specified properties.
         * @function create
         * @memberof in_proto.IndexMenu
         * @static
         * @param {in_proto.IIndexMenu=} [properties] Properties to set
         * @returns {in_proto.IndexMenu} IndexMenu instance
         */
        IndexMenu.create = function create(properties) {
            return new IndexMenu(properties);
        };

        /**
         * Encodes the specified IndexMenu message. Does not implicitly {@link in_proto.IndexMenu.verify|verify} messages.
         * @function encode
         * @memberof in_proto.IndexMenu
         * @static
         * @param {in_proto.IIndexMenu} message IndexMenu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IndexMenu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.menu != null && Object.hasOwnProperty.call(message, "menu"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.menu);
            if (message.popupMenu != null && Object.hasOwnProperty.call(message, "popupMenu"))
                $root.in_proto.PopupMenu.encode(message.popupMenu, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.guielement != null && Object.hasOwnProperty.call(message, "guielement"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.guielement);
            return writer;
        };

        /**
         * Encodes the specified IndexMenu message, length delimited. Does not implicitly {@link in_proto.IndexMenu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.IndexMenu
         * @static
         * @param {in_proto.IIndexMenu} message IndexMenu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IndexMenu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IndexMenu message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.IndexMenu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.IndexMenu} IndexMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IndexMenu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.IndexMenu();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.menu = reader.bool();
                        break;
                    }
                case 4: {
                        message.popupMenu = $root.in_proto.PopupMenu.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.guielement = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IndexMenu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.IndexMenu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.IndexMenu} IndexMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IndexMenu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IndexMenu message.
         * @function verify
         * @memberof in_proto.IndexMenu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IndexMenu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.menu != null && message.hasOwnProperty("menu"))
                if (typeof message.menu !== "boolean")
                    return "menu: boolean expected";
            if (message.popupMenu != null && message.hasOwnProperty("popupMenu")) {
                let error = $root.in_proto.PopupMenu.verify(message.popupMenu);
                if (error)
                    return "popupMenu." + error;
            }
            if (message.guielement != null && message.hasOwnProperty("guielement"))
                if (!$util.isString(message.guielement))
                    return "guielement: string expected";
            return null;
        };

        /**
         * Creates an IndexMenu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.IndexMenu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.IndexMenu} IndexMenu
         */
        IndexMenu.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.IndexMenu)
                return object;
            let message = new $root.in_proto.IndexMenu();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.IndexMenu.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.label != null)
                message.label = String(object.label);
            if (object.menu != null)
                message.menu = Boolean(object.menu);
            if (object.popupMenu != null) {
                if (typeof object.popupMenu !== "object")
                    throw TypeError(".in_proto.IndexMenu.popupMenu: object expected");
                message.popupMenu = $root.in_proto.PopupMenu.fromObject(object.popupMenu);
            }
            if (object.guielement != null)
                message.guielement = String(object.guielement);
            return message;
        };

        /**
         * Creates a plain object from an IndexMenu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.IndexMenu
         * @static
         * @param {in_proto.IndexMenu} message IndexMenu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IndexMenu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.label = "";
                object.menu = false;
                object.popupMenu = null;
                object.guielement = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.menu != null && message.hasOwnProperty("menu"))
                object.menu = message.menu;
            if (message.popupMenu != null && message.hasOwnProperty("popupMenu"))
                object.popupMenu = $root.in_proto.PopupMenu.toObject(message.popupMenu, options);
            if (message.guielement != null && message.hasOwnProperty("guielement"))
                object.guielement = message.guielement;
            return object;
        };

        /**
         * Converts this IndexMenu to JSON.
         * @function toJSON
         * @memberof in_proto.IndexMenu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IndexMenu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IndexMenu
         * @function getTypeUrl
         * @memberof in_proto.IndexMenu
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IndexMenu.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.IndexMenu";
        };

        return IndexMenu;
    })();

    in_proto.PopupMenu = (function() {

        /**
         * Properties of a PopupMenu.
         * @memberof in_proto
         * @interface IPopupMenu
         * @property {string|null} [title] PopupMenu title
         * @property {Array.<in_proto.IElementRef>|null} [elements] PopupMenu elements
         * @property {boolean|null} [tearOff] PopupMenu tearOff
         * @property {boolean|null} [clearDefaultMenu] PopupMenu clearDefaultMenu
         */

        /**
         * Constructs a new PopupMenu.
         * @memberof in_proto
         * @classdesc Represents a PopupMenu.
         * @implements IPopupMenu
         * @constructor
         * @param {in_proto.IPopupMenu=} [properties] Properties to set
         */
        function PopupMenu(properties) {
            this.elements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PopupMenu title.
         * @member {string} title
         * @memberof in_proto.PopupMenu
         * @instance
         */
        PopupMenu.prototype.title = "";

        /**
         * PopupMenu elements.
         * @member {Array.<in_proto.IElementRef>} elements
         * @memberof in_proto.PopupMenu
         * @instance
         */
        PopupMenu.prototype.elements = $util.emptyArray;

        /**
         * PopupMenu tearOff.
         * @member {boolean} tearOff
         * @memberof in_proto.PopupMenu
         * @instance
         */
        PopupMenu.prototype.tearOff = false;

        /**
         * PopupMenu clearDefaultMenu.
         * @member {boolean} clearDefaultMenu
         * @memberof in_proto.PopupMenu
         * @instance
         */
        PopupMenu.prototype.clearDefaultMenu = false;

        /**
         * Creates a new PopupMenu instance using the specified properties.
         * @function create
         * @memberof in_proto.PopupMenu
         * @static
         * @param {in_proto.IPopupMenu=} [properties] Properties to set
         * @returns {in_proto.PopupMenu} PopupMenu instance
         */
        PopupMenu.create = function create(properties) {
            return new PopupMenu(properties);
        };

        /**
         * Encodes the specified PopupMenu message. Does not implicitly {@link in_proto.PopupMenu.verify|verify} messages.
         * @function encode
         * @memberof in_proto.PopupMenu
         * @static
         * @param {in_proto.IPopupMenu} message PopupMenu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PopupMenu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.elements != null && message.elements.length)
                for (let i = 0; i < message.elements.length; ++i)
                    $root.in_proto.ElementRef.encode(message.elements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.tearOff != null && Object.hasOwnProperty.call(message, "tearOff"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.tearOff);
            if (message.clearDefaultMenu != null && Object.hasOwnProperty.call(message, "clearDefaultMenu"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.clearDefaultMenu);
            return writer;
        };

        /**
         * Encodes the specified PopupMenu message, length delimited. Does not implicitly {@link in_proto.PopupMenu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.PopupMenu
         * @static
         * @param {in_proto.IPopupMenu} message PopupMenu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PopupMenu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PopupMenu message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.PopupMenu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.PopupMenu} PopupMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PopupMenu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.PopupMenu();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.title = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.in_proto.ElementRef.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.tearOff = reader.bool();
                        break;
                    }
                case 4: {
                        message.clearDefaultMenu = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PopupMenu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.PopupMenu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.PopupMenu} PopupMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PopupMenu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PopupMenu message.
         * @function verify
         * @memberof in_proto.PopupMenu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PopupMenu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (let i = 0; i < message.elements.length; ++i) {
                    let error = $root.in_proto.ElementRef.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            if (message.tearOff != null && message.hasOwnProperty("tearOff"))
                if (typeof message.tearOff !== "boolean")
                    return "tearOff: boolean expected";
            if (message.clearDefaultMenu != null && message.hasOwnProperty("clearDefaultMenu"))
                if (typeof message.clearDefaultMenu !== "boolean")
                    return "clearDefaultMenu: boolean expected";
            return null;
        };

        /**
         * Creates a PopupMenu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.PopupMenu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.PopupMenu} PopupMenu
         */
        PopupMenu.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.PopupMenu)
                return object;
            let message = new $root.in_proto.PopupMenu();
            if (object.title != null)
                message.title = String(object.title);
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".in_proto.PopupMenu.elements: array expected");
                message.elements = [];
                for (let i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".in_proto.PopupMenu.elements: object expected");
                    message.elements[i] = $root.in_proto.ElementRef.fromObject(object.elements[i]);
                }
            }
            if (object.tearOff != null)
                message.tearOff = Boolean(object.tearOff);
            if (object.clearDefaultMenu != null)
                message.clearDefaultMenu = Boolean(object.clearDefaultMenu);
            return message;
        };

        /**
         * Creates a plain object from a PopupMenu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.PopupMenu
         * @static
         * @param {in_proto.PopupMenu} message PopupMenu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PopupMenu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults) {
                object.title = "";
                object.tearOff = false;
                object.clearDefaultMenu = false;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (let j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.in_proto.ElementRef.toObject(message.elements[j], options);
            }
            if (message.tearOff != null && message.hasOwnProperty("tearOff"))
                object.tearOff = message.tearOff;
            if (message.clearDefaultMenu != null && message.hasOwnProperty("clearDefaultMenu"))
                object.clearDefaultMenu = message.clearDefaultMenu;
            return object;
        };

        /**
         * Converts this PopupMenu to JSON.
         * @function toJSON
         * @memberof in_proto.PopupMenu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PopupMenu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PopupMenu
         * @function getTypeUrl
         * @memberof in_proto.PopupMenu
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PopupMenu.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.PopupMenu";
        };

        return PopupMenu;
    })();

    in_proto.Label = (function() {

        /**
         * Properties of a Label.
         * @memberof in_proto
         * @interface ILabel
         * @property {in_proto.IGuiElement|null} [base] Label base
         * @property {string|null} [icon] Label icon
         * @property {string|null} [label] Label label
         */

        /**
         * Constructs a new Label.
         * @memberof in_proto
         * @classdesc Represents a Label.
         * @implements ILabel
         * @constructor
         * @param {in_proto.ILabel=} [properties] Properties to set
         */
        function Label(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Label base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Label
         * @instance
         */
        Label.prototype.base = null;

        /**
         * Label icon.
         * @member {string} icon
         * @memberof in_proto.Label
         * @instance
         */
        Label.prototype.icon = "";

        /**
         * Label label.
         * @member {string} label
         * @memberof in_proto.Label
         * @instance
         */
        Label.prototype.label = "";

        /**
         * Creates a new Label instance using the specified properties.
         * @function create
         * @memberof in_proto.Label
         * @static
         * @param {in_proto.ILabel=} [properties] Properties to set
         * @returns {in_proto.Label} Label instance
         */
        Label.create = function create(properties) {
            return new Label(properties);
        };

        /**
         * Encodes the specified Label message. Does not implicitly {@link in_proto.Label.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Label
         * @static
         * @param {in_proto.ILabel} message Label message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Label.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.icon);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.label);
            return writer;
        };

        /**
         * Encodes the specified Label message, length delimited. Does not implicitly {@link in_proto.Label.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Label
         * @static
         * @param {in_proto.ILabel} message Label message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Label.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Label message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Label
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Label} Label
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Label.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Label();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.icon = reader.string();
                        break;
                    }
                case 3: {
                        message.label = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Label message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Label
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Label} Label
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Label.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Label message.
         * @function verify
         * @memberof in_proto.Label
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Label.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            return null;
        };

        /**
         * Creates a Label message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Label
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Label} Label
         */
        Label.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Label)
                return object;
            let message = new $root.in_proto.Label();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Label.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.label != null)
                message.label = String(object.label);
            return message;
        };

        /**
         * Creates a plain object from a Label message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Label
         * @static
         * @param {in_proto.Label} message Label
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Label.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.icon = "";
                object.label = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            return object;
        };

        /**
         * Converts this Label to JSON.
         * @function toJSON
         * @memberof in_proto.Label
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Label.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Label
         * @function getTypeUrl
         * @memberof in_proto.Label
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Label.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Label";
        };

        return Label;
    })();

    in_proto.List = (function() {

        /**
         * Properties of a List.
         * @memberof in_proto
         * @interface IList
         * @property {in_proto.IGuiElement|null} [base] List base
         * @property {string|null} [title] List title
         * @property {in_proto.GuiElement.Alignment|null} [titleAlignment] List titleAlignment
         * @property {number|null} [rowCount] List rowCount
         * @property {Array.<number>|null} [selected] List selected
         * @property {boolean|null} [multiSelection] List multiSelection
         * @property {string|null} [action] List action
         * @property {Array.<string>|null} [bgcolor] List bgcolor
         * @property {Array.<string>|null} [fgcolor] List fgcolor
         * @property {Array.<in_proto.List.IListElement>|null} [entries] List entries
         * @property {in_proto.IPopupMenu|null} [popupBaseMenu] List popupBaseMenu
         */

        /**
         * Constructs a new List.
         * @memberof in_proto
         * @classdesc Represents a List.
         * @implements IList
         * @constructor
         * @param {in_proto.IList=} [properties] Properties to set
         */
        function List(properties) {
            this.selected = [];
            this.bgcolor = [];
            this.fgcolor = [];
            this.entries = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * List base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.base = null;

        /**
         * List title.
         * @member {string} title
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.title = "";

        /**
         * List titleAlignment.
         * @member {in_proto.GuiElement.Alignment} titleAlignment
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.titleAlignment = 0;

        /**
         * List rowCount.
         * @member {number} rowCount
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.rowCount = 0;

        /**
         * List selected.
         * @member {Array.<number>} selected
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.selected = $util.emptyArray;

        /**
         * List multiSelection.
         * @member {boolean} multiSelection
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.multiSelection = false;

        /**
         * List action.
         * @member {string} action
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.action = "";

        /**
         * List bgcolor.
         * @member {Array.<string>} bgcolor
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.bgcolor = $util.emptyArray;

        /**
         * List fgcolor.
         * @member {Array.<string>} fgcolor
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.fgcolor = $util.emptyArray;

        /**
         * List entries.
         * @member {Array.<in_proto.List.IListElement>} entries
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.entries = $util.emptyArray;

        /**
         * List popupBaseMenu.
         * @member {in_proto.IPopupMenu|null|undefined} popupBaseMenu
         * @memberof in_proto.List
         * @instance
         */
        List.prototype.popupBaseMenu = null;

        /**
         * Creates a new List instance using the specified properties.
         * @function create
         * @memberof in_proto.List
         * @static
         * @param {in_proto.IList=} [properties] Properties to set
         * @returns {in_proto.List} List instance
         */
        List.create = function create(properties) {
            return new List(properties);
        };

        /**
         * Encodes the specified List message. Does not implicitly {@link in_proto.List.verify|verify} messages.
         * @function encode
         * @memberof in_proto.List
         * @static
         * @param {in_proto.IList} message List message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        List.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.titleAlignment != null && Object.hasOwnProperty.call(message, "titleAlignment"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.titleAlignment);
            if (message.rowCount != null && Object.hasOwnProperty.call(message, "rowCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.rowCount);
            if (message.selected != null && message.selected.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.selected.length; ++i)
                    writer.uint32(message.selected[i]);
                writer.ldelim();
            }
            if (message.multiSelection != null && Object.hasOwnProperty.call(message, "multiSelection"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.multiSelection);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.action);
            if (message.bgcolor != null && message.bgcolor.length)
                for (let i = 0; i < message.bgcolor.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.bgcolor[i]);
            if (message.fgcolor != null && message.fgcolor.length)
                for (let i = 0; i < message.fgcolor.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.fgcolor[i]);
            if (message.entries != null && message.entries.length)
                for (let i = 0; i < message.entries.length; ++i)
                    $root.in_proto.List.ListElement.encode(message.entries[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.popupBaseMenu != null && Object.hasOwnProperty.call(message, "popupBaseMenu"))
                $root.in_proto.PopupMenu.encode(message.popupBaseMenu, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified List message, length delimited. Does not implicitly {@link in_proto.List.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.List
         * @static
         * @param {in_proto.IList} message List message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        List.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a List message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.List
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.List} List
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        List.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.List();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.title = reader.string();
                        break;
                    }
                case 3: {
                        message.titleAlignment = reader.int32();
                        break;
                    }
                case 4: {
                        message.rowCount = reader.uint32();
                        break;
                    }
                case 5: {
                        if (!(message.selected && message.selected.length))
                            message.selected = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.selected.push(reader.uint32());
                        } else
                            message.selected.push(reader.uint32());
                        break;
                    }
                case 6: {
                        message.multiSelection = reader.bool();
                        break;
                    }
                case 7: {
                        message.action = reader.string();
                        break;
                    }
                case 8: {
                        if (!(message.bgcolor && message.bgcolor.length))
                            message.bgcolor = [];
                        message.bgcolor.push(reader.string());
                        break;
                    }
                case 9: {
                        if (!(message.fgcolor && message.fgcolor.length))
                            message.fgcolor = [];
                        message.fgcolor.push(reader.string());
                        break;
                    }
                case 10: {
                        if (!(message.entries && message.entries.length))
                            message.entries = [];
                        message.entries.push($root.in_proto.List.ListElement.decode(reader, reader.uint32()));
                        break;
                    }
                case 11: {
                        message.popupBaseMenu = $root.in_proto.PopupMenu.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a List message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.List
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.List} List
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        List.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a List message.
         * @function verify
         * @memberof in_proto.List
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        List.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.titleAlignment != null && message.hasOwnProperty("titleAlignment"))
                switch (message.titleAlignment) {
                default:
                    return "titleAlignment: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.rowCount != null && message.hasOwnProperty("rowCount"))
                if (!$util.isInteger(message.rowCount))
                    return "rowCount: integer expected";
            if (message.selected != null && message.hasOwnProperty("selected")) {
                if (!Array.isArray(message.selected))
                    return "selected: array expected";
                for (let i = 0; i < message.selected.length; ++i)
                    if (!$util.isInteger(message.selected[i]))
                        return "selected: integer[] expected";
            }
            if (message.multiSelection != null && message.hasOwnProperty("multiSelection"))
                if (typeof message.multiSelection !== "boolean")
                    return "multiSelection: boolean expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.bgcolor != null && message.hasOwnProperty("bgcolor")) {
                if (!Array.isArray(message.bgcolor))
                    return "bgcolor: array expected";
                for (let i = 0; i < message.bgcolor.length; ++i)
                    if (!$util.isString(message.bgcolor[i]))
                        return "bgcolor: string[] expected";
            }
            if (message.fgcolor != null && message.hasOwnProperty("fgcolor")) {
                if (!Array.isArray(message.fgcolor))
                    return "fgcolor: array expected";
                for (let i = 0; i < message.fgcolor.length; ++i)
                    if (!$util.isString(message.fgcolor[i]))
                        return "fgcolor: string[] expected";
            }
            if (message.entries != null && message.hasOwnProperty("entries")) {
                if (!Array.isArray(message.entries))
                    return "entries: array expected";
                for (let i = 0; i < message.entries.length; ++i) {
                    let error = $root.in_proto.List.ListElement.verify(message.entries[i]);
                    if (error)
                        return "entries." + error;
                }
            }
            if (message.popupBaseMenu != null && message.hasOwnProperty("popupBaseMenu")) {
                let error = $root.in_proto.PopupMenu.verify(message.popupBaseMenu);
                if (error)
                    return "popupBaseMenu." + error;
            }
            return null;
        };

        /**
         * Creates a List message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.List
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.List} List
         */
        List.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.List)
                return object;
            let message = new $root.in_proto.List();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.List.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.title != null)
                message.title = String(object.title);
            switch (object.titleAlignment) {
            default:
                if (typeof object.titleAlignment === "number") {
                    message.titleAlignment = object.titleAlignment;
                    break;
                }
                break;
            case "Default":
            case 0:
                message.titleAlignment = 0;
                break;
            case "Left":
            case 1:
                message.titleAlignment = 1;
                break;
            case "Right":
            case 2:
                message.titleAlignment = 2;
                break;
            case "Center":
            case 3:
                message.titleAlignment = 3;
                break;
            case "Top":
            case 4:
                message.titleAlignment = 4;
                break;
            case "Bottom":
            case 5:
                message.titleAlignment = 5;
                break;
            case "Stretch":
            case 6:
                message.titleAlignment = 6;
                break;
            case "Justify":
            case 7:
                message.titleAlignment = 7;
                break;
            }
            if (object.rowCount != null)
                message.rowCount = object.rowCount >>> 0;
            if (object.selected) {
                if (!Array.isArray(object.selected))
                    throw TypeError(".in_proto.List.selected: array expected");
                message.selected = [];
                for (let i = 0; i < object.selected.length; ++i)
                    message.selected[i] = object.selected[i] >>> 0;
            }
            if (object.multiSelection != null)
                message.multiSelection = Boolean(object.multiSelection);
            if (object.action != null)
                message.action = String(object.action);
            if (object.bgcolor) {
                if (!Array.isArray(object.bgcolor))
                    throw TypeError(".in_proto.List.bgcolor: array expected");
                message.bgcolor = [];
                for (let i = 0; i < object.bgcolor.length; ++i)
                    message.bgcolor[i] = String(object.bgcolor[i]);
            }
            if (object.fgcolor) {
                if (!Array.isArray(object.fgcolor))
                    throw TypeError(".in_proto.List.fgcolor: array expected");
                message.fgcolor = [];
                for (let i = 0; i < object.fgcolor.length; ++i)
                    message.fgcolor[i] = String(object.fgcolor[i]);
            }
            if (object.entries) {
                if (!Array.isArray(object.entries))
                    throw TypeError(".in_proto.List.entries: array expected");
                message.entries = [];
                for (let i = 0; i < object.entries.length; ++i) {
                    if (typeof object.entries[i] !== "object")
                        throw TypeError(".in_proto.List.entries: object expected");
                    message.entries[i] = $root.in_proto.List.ListElement.fromObject(object.entries[i]);
                }
            }
            if (object.popupBaseMenu != null) {
                if (typeof object.popupBaseMenu !== "object")
                    throw TypeError(".in_proto.List.popupBaseMenu: object expected");
                message.popupBaseMenu = $root.in_proto.PopupMenu.fromObject(object.popupBaseMenu);
            }
            return message;
        };

        /**
         * Creates a plain object from a List message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.List
         * @static
         * @param {in_proto.List} message List
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        List.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.selected = [];
                object.bgcolor = [];
                object.fgcolor = [];
                object.entries = [];
            }
            if (options.defaults) {
                object.base = null;
                object.title = "";
                object.titleAlignment = options.enums === String ? "Default" : 0;
                object.rowCount = 0;
                object.multiSelection = false;
                object.action = "";
                object.popupBaseMenu = null;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.titleAlignment != null && message.hasOwnProperty("titleAlignment"))
                object.titleAlignment = options.enums === String ? $root.in_proto.GuiElement.Alignment[message.titleAlignment] === undefined ? message.titleAlignment : $root.in_proto.GuiElement.Alignment[message.titleAlignment] : message.titleAlignment;
            if (message.rowCount != null && message.hasOwnProperty("rowCount"))
                object.rowCount = message.rowCount;
            if (message.selected && message.selected.length) {
                object.selected = [];
                for (let j = 0; j < message.selected.length; ++j)
                    object.selected[j] = message.selected[j];
            }
            if (message.multiSelection != null && message.hasOwnProperty("multiSelection"))
                object.multiSelection = message.multiSelection;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.bgcolor && message.bgcolor.length) {
                object.bgcolor = [];
                for (let j = 0; j < message.bgcolor.length; ++j)
                    object.bgcolor[j] = message.bgcolor[j];
            }
            if (message.fgcolor && message.fgcolor.length) {
                object.fgcolor = [];
                for (let j = 0; j < message.fgcolor.length; ++j)
                    object.fgcolor[j] = message.fgcolor[j];
            }
            if (message.entries && message.entries.length) {
                object.entries = [];
                for (let j = 0; j < message.entries.length; ++j)
                    object.entries[j] = $root.in_proto.List.ListElement.toObject(message.entries[j], options);
            }
            if (message.popupBaseMenu != null && message.hasOwnProperty("popupBaseMenu"))
                object.popupBaseMenu = $root.in_proto.PopupMenu.toObject(message.popupBaseMenu, options);
            return object;
        };

        /**
         * Converts this List to JSON.
         * @function toJSON
         * @memberof in_proto.List
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        List.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for List
         * @function getTypeUrl
         * @memberof in_proto.List
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        List.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.List";
        };

        List.ListElement = (function() {

            /**
             * Properties of a ListElement.
             * @memberof in_proto.List
             * @interface IListElement
             * @property {Array.<string>|null} [values] ListElement values
             * @property {string|null} [label] ListElement label
             * @property {in_proto.GuiElement.Alignment|null} [alignment] ListElement alignment
             * @property {boolean|null} [optional] ListElement optional
             * @property {number|null} [width] ListElement width
             * @property {in_proto.IValueInfo|null} [value] ListElement value
             * @property {string|null} [fullName] ListElement fullName
             * @property {Array.<string>|null} [bgColors] ListElement bgColors
             * @property {Array.<string>|null} [fgColors] ListElement fgColors
             */

            /**
             * Constructs a new ListElement.
             * @memberof in_proto.List
             * @classdesc Represents a ListElement.
             * @implements IListElement
             * @constructor
             * @param {in_proto.List.IListElement=} [properties] Properties to set
             */
            function ListElement(properties) {
                this.values = [];
                this.bgColors = [];
                this.fgColors = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListElement values.
             * @member {Array.<string>} values
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.values = $util.emptyArray;

            /**
             * ListElement label.
             * @member {string} label
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.label = "";

            /**
             * ListElement alignment.
             * @member {in_proto.GuiElement.Alignment} alignment
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.alignment = 0;

            /**
             * ListElement optional.
             * @member {boolean} optional
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.optional = false;

            /**
             * ListElement width.
             * @member {number} width
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.width = 0;

            /**
             * ListElement value.
             * @member {in_proto.IValueInfo|null|undefined} value
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.value = null;

            /**
             * ListElement fullName.
             * @member {string} fullName
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.fullName = "";

            /**
             * ListElement bgColors.
             * @member {Array.<string>} bgColors
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.bgColors = $util.emptyArray;

            /**
             * ListElement fgColors.
             * @member {Array.<string>} fgColors
             * @memberof in_proto.List.ListElement
             * @instance
             */
            ListElement.prototype.fgColors = $util.emptyArray;

            /**
             * Creates a new ListElement instance using the specified properties.
             * @function create
             * @memberof in_proto.List.ListElement
             * @static
             * @param {in_proto.List.IListElement=} [properties] Properties to set
             * @returns {in_proto.List.ListElement} ListElement instance
             */
            ListElement.create = function create(properties) {
                return new ListElement(properties);
            };

            /**
             * Encodes the specified ListElement message. Does not implicitly {@link in_proto.List.ListElement.verify|verify} messages.
             * @function encode
             * @memberof in_proto.List.ListElement
             * @static
             * @param {in_proto.List.IListElement} message ListElement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListElement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (let i = 0; i < message.values.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.values[i]);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
                if (message.alignment != null && Object.hasOwnProperty.call(message, "alignment"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.alignment);
                if (message.optional != null && Object.hasOwnProperty.call(message, "optional"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.optional);
                if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.width);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    $root.in_proto.ValueInfo.encode(message.value, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.fullName);
                if (message.bgColors != null && message.bgColors.length)
                    for (let i = 0; i < message.bgColors.length; ++i)
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.bgColors[i]);
                if (message.fgColors != null && message.fgColors.length)
                    for (let i = 0; i < message.fgColors.length; ++i)
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.fgColors[i]);
                return writer;
            };

            /**
             * Encodes the specified ListElement message, length delimited. Does not implicitly {@link in_proto.List.ListElement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.List.ListElement
             * @static
             * @param {in_proto.List.IListElement} message ListElement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListElement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListElement message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.List.ListElement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.List.ListElement} ListElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListElement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.List.ListElement();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.values && message.values.length))
                                message.values = [];
                            message.values.push(reader.string());
                            break;
                        }
                    case 2: {
                            message.label = reader.string();
                            break;
                        }
                    case 3: {
                            message.alignment = reader.int32();
                            break;
                        }
                    case 4: {
                            message.optional = reader.bool();
                            break;
                        }
                    case 5: {
                            message.width = reader.uint32();
                            break;
                        }
                    case 6: {
                            message.value = $root.in_proto.ValueInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.fullName = reader.string();
                            break;
                        }
                    case 8: {
                            if (!(message.bgColors && message.bgColors.length))
                                message.bgColors = [];
                            message.bgColors.push(reader.string());
                            break;
                        }
                    case 9: {
                            if (!(message.fgColors && message.fgColors.length))
                                message.fgColors = [];
                            message.fgColors.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListElement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.List.ListElement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.List.ListElement} ListElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListElement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListElement message.
             * @function verify
             * @memberof in_proto.List.ListElement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListElement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (let i = 0; i < message.values.length; ++i)
                        if (!$util.isString(message.values[i]))
                            return "values: string[] expected";
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.alignment != null && message.hasOwnProperty("alignment"))
                    switch (message.alignment) {
                    default:
                        return "alignment: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
                if (message.optional != null && message.hasOwnProperty("optional"))
                    if (typeof message.optional !== "boolean")
                        return "optional: boolean expected";
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width))
                        return "width: integer expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    let error = $root.in_proto.ValueInfo.verify(message.value);
                    if (error)
                        return "value." + error;
                }
                if (message.fullName != null && message.hasOwnProperty("fullName"))
                    if (!$util.isString(message.fullName))
                        return "fullName: string expected";
                if (message.bgColors != null && message.hasOwnProperty("bgColors")) {
                    if (!Array.isArray(message.bgColors))
                        return "bgColors: array expected";
                    for (let i = 0; i < message.bgColors.length; ++i)
                        if (!$util.isString(message.bgColors[i]))
                            return "bgColors: string[] expected";
                }
                if (message.fgColors != null && message.hasOwnProperty("fgColors")) {
                    if (!Array.isArray(message.fgColors))
                        return "fgColors: array expected";
                    for (let i = 0; i < message.fgColors.length; ++i)
                        if (!$util.isString(message.fgColors[i]))
                            return "fgColors: string[] expected";
                }
                return null;
            };

            /**
             * Creates a ListElement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.List.ListElement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.List.ListElement} ListElement
             */
            ListElement.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.List.ListElement)
                    return object;
                let message = new $root.in_proto.List.ListElement();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".in_proto.List.ListElement.values: array expected");
                    message.values = [];
                    for (let i = 0; i < object.values.length; ++i)
                        message.values[i] = String(object.values[i]);
                }
                if (object.label != null)
                    message.label = String(object.label);
                switch (object.alignment) {
                default:
                    if (typeof object.alignment === "number") {
                        message.alignment = object.alignment;
                        break;
                    }
                    break;
                case "Default":
                case 0:
                    message.alignment = 0;
                    break;
                case "Left":
                case 1:
                    message.alignment = 1;
                    break;
                case "Right":
                case 2:
                    message.alignment = 2;
                    break;
                case "Center":
                case 3:
                    message.alignment = 3;
                    break;
                case "Top":
                case 4:
                    message.alignment = 4;
                    break;
                case "Bottom":
                case 5:
                    message.alignment = 5;
                    break;
                case "Stretch":
                case 6:
                    message.alignment = 6;
                    break;
                case "Justify":
                case 7:
                    message.alignment = 7;
                    break;
                }
                if (object.optional != null)
                    message.optional = Boolean(object.optional);
                if (object.width != null)
                    message.width = object.width >>> 0;
                if (object.value != null) {
                    if (typeof object.value !== "object")
                        throw TypeError(".in_proto.List.ListElement.value: object expected");
                    message.value = $root.in_proto.ValueInfo.fromObject(object.value);
                }
                if (object.fullName != null)
                    message.fullName = String(object.fullName);
                if (object.bgColors) {
                    if (!Array.isArray(object.bgColors))
                        throw TypeError(".in_proto.List.ListElement.bgColors: array expected");
                    message.bgColors = [];
                    for (let i = 0; i < object.bgColors.length; ++i)
                        message.bgColors[i] = String(object.bgColors[i]);
                }
                if (object.fgColors) {
                    if (!Array.isArray(object.fgColors))
                        throw TypeError(".in_proto.List.ListElement.fgColors: array expected");
                    message.fgColors = [];
                    for (let i = 0; i < object.fgColors.length; ++i)
                        message.fgColors[i] = String(object.fgColors[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a ListElement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.List.ListElement
             * @static
             * @param {in_proto.List.ListElement} message ListElement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListElement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.values = [];
                    object.bgColors = [];
                    object.fgColors = [];
                }
                if (options.defaults) {
                    object.label = "";
                    object.alignment = options.enums === String ? "Default" : 0;
                    object.optional = false;
                    object.width = 0;
                    object.value = null;
                    object.fullName = "";
                }
                if (message.values && message.values.length) {
                    object.values = [];
                    for (let j = 0; j < message.values.length; ++j)
                        object.values[j] = message.values[j];
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.alignment != null && message.hasOwnProperty("alignment"))
                    object.alignment = options.enums === String ? $root.in_proto.GuiElement.Alignment[message.alignment] === undefined ? message.alignment : $root.in_proto.GuiElement.Alignment[message.alignment] : message.alignment;
                if (message.optional != null && message.hasOwnProperty("optional"))
                    object.optional = message.optional;
                if (message.width != null && message.hasOwnProperty("width"))
                    object.width = message.width;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = $root.in_proto.ValueInfo.toObject(message.value, options);
                if (message.fullName != null && message.hasOwnProperty("fullName"))
                    object.fullName = message.fullName;
                if (message.bgColors && message.bgColors.length) {
                    object.bgColors = [];
                    for (let j = 0; j < message.bgColors.length; ++j)
                        object.bgColors[j] = message.bgColors[j];
                }
                if (message.fgColors && message.fgColors.length) {
                    object.fgColors = [];
                    for (let j = 0; j < message.fgColors.length; ++j)
                        object.fgColors[j] = message.fgColors[j];
                }
                return object;
            };

            /**
             * Converts this ListElement to JSON.
             * @function toJSON
             * @memberof in_proto.List.ListElement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListElement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ListElement
             * @function getTypeUrl
             * @memberof in_proto.List.ListElement
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ListElement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.List.ListElement";
            };

            return ListElement;
        })();

        return List;
    })();

    in_proto.Menubar = (function() {

        /**
         * Properties of a Menubar.
         * @memberof in_proto
         * @interface IMenubar
         * @property {in_proto.IGuiElement|null} [base] Menubar base
         * @property {Array.<in_proto.IElementRef>|null} [elements] Menubar elements
         */

        /**
         * Constructs a new Menubar.
         * @memberof in_proto
         * @classdesc Represents a Menubar.
         * @implements IMenubar
         * @constructor
         * @param {in_proto.IMenubar=} [properties] Properties to set
         */
        function Menubar(properties) {
            this.elements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Menubar base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Menubar
         * @instance
         */
        Menubar.prototype.base = null;

        /**
         * Menubar elements.
         * @member {Array.<in_proto.IElementRef>} elements
         * @memberof in_proto.Menubar
         * @instance
         */
        Menubar.prototype.elements = $util.emptyArray;

        /**
         * Creates a new Menubar instance using the specified properties.
         * @function create
         * @memberof in_proto.Menubar
         * @static
         * @param {in_proto.IMenubar=} [properties] Properties to set
         * @returns {in_proto.Menubar} Menubar instance
         */
        Menubar.create = function create(properties) {
            return new Menubar(properties);
        };

        /**
         * Encodes the specified Menubar message. Does not implicitly {@link in_proto.Menubar.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Menubar
         * @static
         * @param {in_proto.IMenubar} message Menubar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Menubar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.elements != null && message.elements.length)
                for (let i = 0; i < message.elements.length; ++i)
                    $root.in_proto.ElementRef.encode(message.elements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Menubar message, length delimited. Does not implicitly {@link in_proto.Menubar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Menubar
         * @static
         * @param {in_proto.IMenubar} message Menubar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Menubar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Menubar message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Menubar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Menubar} Menubar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Menubar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Menubar();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.in_proto.ElementRef.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Menubar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Menubar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Menubar} Menubar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Menubar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Menubar message.
         * @function verify
         * @memberof in_proto.Menubar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Menubar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (let i = 0; i < message.elements.length; ++i) {
                    let error = $root.in_proto.ElementRef.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Menubar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Menubar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Menubar} Menubar
         */
        Menubar.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Menubar)
                return object;
            let message = new $root.in_proto.Menubar();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Menubar.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".in_proto.Menubar.elements: array expected");
                message.elements = [];
                for (let i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".in_proto.Menubar.elements: object expected");
                    message.elements[i] = $root.in_proto.ElementRef.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Menubar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Menubar
         * @static
         * @param {in_proto.Menubar} message Menubar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Menubar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults)
                object.base = null;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (let j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.in_proto.ElementRef.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this Menubar to JSON.
         * @function toJSON
         * @memberof in_proto.Menubar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Menubar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Menubar
         * @function getTypeUrl
         * @memberof in_proto.Menubar
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Menubar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Menubar";
        };

        return Menubar;
    })();

    in_proto.PulldownMenu = (function() {

        /**
         * Properties of a PulldownMenu.
         * @memberof in_proto
         * @interface IPulldownMenu
         * @property {in_proto.IGuiElement|null} [base] PulldownMenu base
         * @property {Array.<in_proto.IElementRef>|null} [elements] PulldownMenu elements
         * @property {string|null} [label] PulldownMenu label
         * @property {string|null} [mnemonic] PulldownMenu mnemonic
         * @property {boolean|null} [radio] PulldownMenu radio
         * @property {boolean|null} [tearOff] PulldownMenu tearOff
         */

        /**
         * Constructs a new PulldownMenu.
         * @memberof in_proto
         * @classdesc Represents a PulldownMenu.
         * @implements IPulldownMenu
         * @constructor
         * @param {in_proto.IPulldownMenu=} [properties] Properties to set
         */
        function PulldownMenu(properties) {
            this.elements = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PulldownMenu base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.PulldownMenu
         * @instance
         */
        PulldownMenu.prototype.base = null;

        /**
         * PulldownMenu elements.
         * @member {Array.<in_proto.IElementRef>} elements
         * @memberof in_proto.PulldownMenu
         * @instance
         */
        PulldownMenu.prototype.elements = $util.emptyArray;

        /**
         * PulldownMenu label.
         * @member {string} label
         * @memberof in_proto.PulldownMenu
         * @instance
         */
        PulldownMenu.prototype.label = "";

        /**
         * PulldownMenu mnemonic.
         * @member {string} mnemonic
         * @memberof in_proto.PulldownMenu
         * @instance
         */
        PulldownMenu.prototype.mnemonic = "";

        /**
         * PulldownMenu radio.
         * @member {boolean} radio
         * @memberof in_proto.PulldownMenu
         * @instance
         */
        PulldownMenu.prototype.radio = false;

        /**
         * PulldownMenu tearOff.
         * @member {boolean} tearOff
         * @memberof in_proto.PulldownMenu
         * @instance
         */
        PulldownMenu.prototype.tearOff = false;

        /**
         * Creates a new PulldownMenu instance using the specified properties.
         * @function create
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {in_proto.IPulldownMenu=} [properties] Properties to set
         * @returns {in_proto.PulldownMenu} PulldownMenu instance
         */
        PulldownMenu.create = function create(properties) {
            return new PulldownMenu(properties);
        };

        /**
         * Encodes the specified PulldownMenu message. Does not implicitly {@link in_proto.PulldownMenu.verify|verify} messages.
         * @function encode
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {in_proto.IPulldownMenu} message PulldownMenu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PulldownMenu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.elements != null && message.elements.length)
                for (let i = 0; i < message.elements.length; ++i)
                    $root.in_proto.ElementRef.encode(message.elements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.label);
            if (message.mnemonic != null && Object.hasOwnProperty.call(message, "mnemonic"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.mnemonic);
            if (message.radio != null && Object.hasOwnProperty.call(message, "radio"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.radio);
            if (message.tearOff != null && Object.hasOwnProperty.call(message, "tearOff"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.tearOff);
            return writer;
        };

        /**
         * Encodes the specified PulldownMenu message, length delimited. Does not implicitly {@link in_proto.PulldownMenu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {in_proto.IPulldownMenu} message PulldownMenu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PulldownMenu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PulldownMenu message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.PulldownMenu} PulldownMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PulldownMenu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.PulldownMenu();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.in_proto.ElementRef.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.label = reader.string();
                        break;
                    }
                case 4: {
                        message.mnemonic = reader.string();
                        break;
                    }
                case 5: {
                        message.radio = reader.bool();
                        break;
                    }
                case 6: {
                        message.tearOff = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PulldownMenu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.PulldownMenu} PulldownMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PulldownMenu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PulldownMenu message.
         * @function verify
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PulldownMenu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (let i = 0; i < message.elements.length; ++i) {
                    let error = $root.in_proto.ElementRef.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.mnemonic != null && message.hasOwnProperty("mnemonic"))
                if (!$util.isString(message.mnemonic))
                    return "mnemonic: string expected";
            if (message.radio != null && message.hasOwnProperty("radio"))
                if (typeof message.radio !== "boolean")
                    return "radio: boolean expected";
            if (message.tearOff != null && message.hasOwnProperty("tearOff"))
                if (typeof message.tearOff !== "boolean")
                    return "tearOff: boolean expected";
            return null;
        };

        /**
         * Creates a PulldownMenu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.PulldownMenu} PulldownMenu
         */
        PulldownMenu.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.PulldownMenu)
                return object;
            let message = new $root.in_proto.PulldownMenu();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.PulldownMenu.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".in_proto.PulldownMenu.elements: array expected");
                message.elements = [];
                for (let i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".in_proto.PulldownMenu.elements: object expected");
                    message.elements[i] = $root.in_proto.ElementRef.fromObject(object.elements[i]);
                }
            }
            if (object.label != null)
                message.label = String(object.label);
            if (object.mnemonic != null)
                message.mnemonic = String(object.mnemonic);
            if (object.radio != null)
                message.radio = Boolean(object.radio);
            if (object.tearOff != null)
                message.tearOff = Boolean(object.tearOff);
            return message;
        };

        /**
         * Creates a plain object from a PulldownMenu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {in_proto.PulldownMenu} message PulldownMenu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PulldownMenu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults) {
                object.base = null;
                object.label = "";
                object.mnemonic = "";
                object.radio = false;
                object.tearOff = false;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (let j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.in_proto.ElementRef.toObject(message.elements[j], options);
            }
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.mnemonic != null && message.hasOwnProperty("mnemonic"))
                object.mnemonic = message.mnemonic;
            if (message.radio != null && message.hasOwnProperty("radio"))
                object.radio = message.radio;
            if (message.tearOff != null && message.hasOwnProperty("tearOff"))
                object.tearOff = message.tearOff;
            return object;
        };

        /**
         * Converts this PulldownMenu to JSON.
         * @function toJSON
         * @memberof in_proto.PulldownMenu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PulldownMenu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PulldownMenu
         * @function getTypeUrl
         * @memberof in_proto.PulldownMenu
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PulldownMenu.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.PulldownMenu";
        };

        return PulldownMenu;
    })();

    in_proto.MenuButton = (function() {

        /**
         * Properties of a MenuButton.
         * @memberof in_proto
         * @interface IMenuButton
         * @property {in_proto.IGuiElement|null} [base] MenuButton base
         * @property {string|null} [mapAction] MenuButton mapAction
         * @property {string|null} [label] MenuButton label
         * @property {string|null} [action] MenuButton action
         */

        /**
         * Constructs a new MenuButton.
         * @memberof in_proto
         * @classdesc Represents a MenuButton.
         * @implements IMenuButton
         * @constructor
         * @param {in_proto.IMenuButton=} [properties] Properties to set
         */
        function MenuButton(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MenuButton base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.MenuButton
         * @instance
         */
        MenuButton.prototype.base = null;

        /**
         * MenuButton mapAction.
         * @member {string} mapAction
         * @memberof in_proto.MenuButton
         * @instance
         */
        MenuButton.prototype.mapAction = "";

        /**
         * MenuButton label.
         * @member {string} label
         * @memberof in_proto.MenuButton
         * @instance
         */
        MenuButton.prototype.label = "";

        /**
         * MenuButton action.
         * @member {string} action
         * @memberof in_proto.MenuButton
         * @instance
         */
        MenuButton.prototype.action = "";

        /**
         * Creates a new MenuButton instance using the specified properties.
         * @function create
         * @memberof in_proto.MenuButton
         * @static
         * @param {in_proto.IMenuButton=} [properties] Properties to set
         * @returns {in_proto.MenuButton} MenuButton instance
         */
        MenuButton.create = function create(properties) {
            return new MenuButton(properties);
        };

        /**
         * Encodes the specified MenuButton message. Does not implicitly {@link in_proto.MenuButton.verify|verify} messages.
         * @function encode
         * @memberof in_proto.MenuButton
         * @static
         * @param {in_proto.IMenuButton} message MenuButton message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuButton.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mapAction != null && Object.hasOwnProperty.call(message, "mapAction"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mapAction);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.label);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified MenuButton message, length delimited. Does not implicitly {@link in_proto.MenuButton.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.MenuButton
         * @static
         * @param {in_proto.IMenuButton} message MenuButton message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MenuButton.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MenuButton message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.MenuButton
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.MenuButton} MenuButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuButton.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.MenuButton();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.mapAction = reader.string();
                        break;
                    }
                case 3: {
                        message.label = reader.string();
                        break;
                    }
                case 4: {
                        message.action = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MenuButton message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.MenuButton
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.MenuButton} MenuButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MenuButton.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MenuButton message.
         * @function verify
         * @memberof in_proto.MenuButton
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MenuButton.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.mapAction != null && message.hasOwnProperty("mapAction"))
                if (!$util.isString(message.mapAction))
                    return "mapAction: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates a MenuButton message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.MenuButton
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.MenuButton} MenuButton
         */
        MenuButton.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.MenuButton)
                return object;
            let message = new $root.in_proto.MenuButton();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.MenuButton.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.mapAction != null)
                message.mapAction = String(object.mapAction);
            if (object.label != null)
                message.label = String(object.label);
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from a MenuButton message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.MenuButton
         * @static
         * @param {in_proto.MenuButton} message MenuButton
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MenuButton.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.mapAction = "";
                object.label = "";
                object.action = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.mapAction != null && message.hasOwnProperty("mapAction"))
                object.mapAction = message.mapAction;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this MenuButton to JSON.
         * @function toJSON
         * @memberof in_proto.MenuButton
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MenuButton.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MenuButton
         * @function getTypeUrl
         * @memberof in_proto.MenuButton
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MenuButton.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.MenuButton";
        };

        return MenuButton;
    })();

    in_proto.ElementList = (function() {

        /**
         * Properties of an ElementList.
         * @memberof in_proto
         * @interface IElementList
         * @property {Array.<in_proto.IPlot2D>|null} [plot_2ds] ElementList plot_2ds
         * @property {Array.<in_proto.IPlot3D>|null} [plot_3ds] ElementList plot_3ds
         * @property {Array.<in_proto.IButtonbar>|null} [buttonbars] ElementList buttonbars
         * @property {Array.<in_proto.IButton>|null} [buttons] ElementList buttons
         * @property {Array.<in_proto.IComboBox>|null} [comboboxes] ElementList comboboxes
         * @property {Array.<in_proto.IContainer>|null} [containers] ElementList containers
         * @property {Array.<in_proto.IFieldGroup>|null} [fieldGroups] ElementList fieldGroups
         * @property {Array.<in_proto.IFolder>|null} [folders] ElementList folders
         * @property {Array.<in_proto.IForm>|null} [forms] ElementList forms
         * @property {Array.<in_proto.IHeader>|null} [headers] ElementList headers
         * @property {Array.<in_proto.IIndex>|null} [indexs] ElementList indexs
         * @property {Array.<in_proto.IIndexMenu>|null} [indexMenus] ElementList indexMenus
         * @property {Array.<in_proto.ILabel>|null} [labels] ElementList labels
         * @property {Array.<in_proto.IList>|null} [lists] ElementList lists
         * @property {Array.<in_proto.IMenubar>|null} [menubars] ElementList menubars
         * @property {Array.<in_proto.IMenuButton>|null} [menuButtons] ElementList menuButtons
         * @property {Array.<in_proto.IMessagebar>|null} [messagebars] ElementList messagebars
         * @property {Array.<in_proto.INavigator>|null} [navigators] ElementList navigators
         * @property {Array.<in_proto.IRadio>|null} [radios] ElementList radios
         * @property {Array.<in_proto.ISeparator>|null} [separators] ElementList separators
         * @property {Array.<in_proto.IStretch>|null} [stretchs] ElementList stretchs
         * @property {Array.<in_proto.ITable>|null} [tables] ElementList tables
         * @property {Array.<in_proto.IText>|null} [texts] ElementList texts
         * @property {Array.<in_proto.IDataField>|null} [dataFields] ElementList dataFields
         * @property {Array.<in_proto.IThermo>|null} [thermos] ElementList thermos
         * @property {Array.<in_proto.IToggle>|null} [toggles] ElementList toggles
         * @property {Array.<in_proto.IVoid>|null} [voids] ElementList voids
         * @property {Array.<in_proto.IButtonField>|null} [buttonfields] ElementList buttonfields
         * @property {Array.<in_proto.ICycleButton>|null} [cyclebuttons] ElementList cyclebuttons
         * @property {Array.<in_proto.IPulldownMenu>|null} [pulldownMenus] ElementList pulldownMenus
         * @property {Array.<in_proto.IPopupMenu>|null} [popupMenu] ElementList popupMenu
         */

        /**
         * Constructs a new ElementList.
         * @memberof in_proto
         * @classdesc Represents an ElementList.
         * @implements IElementList
         * @constructor
         * @param {in_proto.IElementList=} [properties] Properties to set
         */
        function ElementList(properties) {
            this.plot_2ds = [];
            this.plot_3ds = [];
            this.buttonbars = [];
            this.buttons = [];
            this.comboboxes = [];
            this.containers = [];
            this.fieldGroups = [];
            this.folders = [];
            this.forms = [];
            this.headers = [];
            this.indexs = [];
            this.indexMenus = [];
            this.labels = [];
            this.lists = [];
            this.menubars = [];
            this.menuButtons = [];
            this.messagebars = [];
            this.navigators = [];
            this.radios = [];
            this.separators = [];
            this.stretchs = [];
            this.tables = [];
            this.texts = [];
            this.dataFields = [];
            this.thermos = [];
            this.toggles = [];
            this.voids = [];
            this.buttonfields = [];
            this.cyclebuttons = [];
            this.pulldownMenus = [];
            this.popupMenu = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ElementList plot_2ds.
         * @member {Array.<in_proto.IPlot2D>} plot_2ds
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.plot_2ds = $util.emptyArray;

        /**
         * ElementList plot_3ds.
         * @member {Array.<in_proto.IPlot3D>} plot_3ds
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.plot_3ds = $util.emptyArray;

        /**
         * ElementList buttonbars.
         * @member {Array.<in_proto.IButtonbar>} buttonbars
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.buttonbars = $util.emptyArray;

        /**
         * ElementList buttons.
         * @member {Array.<in_proto.IButton>} buttons
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.buttons = $util.emptyArray;

        /**
         * ElementList comboboxes.
         * @member {Array.<in_proto.IComboBox>} comboboxes
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.comboboxes = $util.emptyArray;

        /**
         * ElementList containers.
         * @member {Array.<in_proto.IContainer>} containers
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.containers = $util.emptyArray;

        /**
         * ElementList fieldGroups.
         * @member {Array.<in_proto.IFieldGroup>} fieldGroups
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.fieldGroups = $util.emptyArray;

        /**
         * ElementList folders.
         * @member {Array.<in_proto.IFolder>} folders
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.folders = $util.emptyArray;

        /**
         * ElementList forms.
         * @member {Array.<in_proto.IForm>} forms
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.forms = $util.emptyArray;

        /**
         * ElementList headers.
         * @member {Array.<in_proto.IHeader>} headers
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.headers = $util.emptyArray;

        /**
         * ElementList indexs.
         * @member {Array.<in_proto.IIndex>} indexs
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.indexs = $util.emptyArray;

        /**
         * ElementList indexMenus.
         * @member {Array.<in_proto.IIndexMenu>} indexMenus
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.indexMenus = $util.emptyArray;

        /**
         * ElementList labels.
         * @member {Array.<in_proto.ILabel>} labels
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.labels = $util.emptyArray;

        /**
         * ElementList lists.
         * @member {Array.<in_proto.IList>} lists
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.lists = $util.emptyArray;

        /**
         * ElementList menubars.
         * @member {Array.<in_proto.IMenubar>} menubars
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.menubars = $util.emptyArray;

        /**
         * ElementList menuButtons.
         * @member {Array.<in_proto.IMenuButton>} menuButtons
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.menuButtons = $util.emptyArray;

        /**
         * ElementList messagebars.
         * @member {Array.<in_proto.IMessagebar>} messagebars
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.messagebars = $util.emptyArray;

        /**
         * ElementList navigators.
         * @member {Array.<in_proto.INavigator>} navigators
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.navigators = $util.emptyArray;

        /**
         * ElementList radios.
         * @member {Array.<in_proto.IRadio>} radios
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.radios = $util.emptyArray;

        /**
         * ElementList separators.
         * @member {Array.<in_proto.ISeparator>} separators
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.separators = $util.emptyArray;

        /**
         * ElementList stretchs.
         * @member {Array.<in_proto.IStretch>} stretchs
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.stretchs = $util.emptyArray;

        /**
         * ElementList tables.
         * @member {Array.<in_proto.ITable>} tables
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.tables = $util.emptyArray;

        /**
         * ElementList texts.
         * @member {Array.<in_proto.IText>} texts
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.texts = $util.emptyArray;

        /**
         * ElementList dataFields.
         * @member {Array.<in_proto.IDataField>} dataFields
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.dataFields = $util.emptyArray;

        /**
         * ElementList thermos.
         * @member {Array.<in_proto.IThermo>} thermos
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.thermos = $util.emptyArray;

        /**
         * ElementList toggles.
         * @member {Array.<in_proto.IToggle>} toggles
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.toggles = $util.emptyArray;

        /**
         * ElementList voids.
         * @member {Array.<in_proto.IVoid>} voids
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.voids = $util.emptyArray;

        /**
         * ElementList buttonfields.
         * @member {Array.<in_proto.IButtonField>} buttonfields
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.buttonfields = $util.emptyArray;

        /**
         * ElementList cyclebuttons.
         * @member {Array.<in_proto.ICycleButton>} cyclebuttons
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.cyclebuttons = $util.emptyArray;

        /**
         * ElementList pulldownMenus.
         * @member {Array.<in_proto.IPulldownMenu>} pulldownMenus
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.pulldownMenus = $util.emptyArray;

        /**
         * ElementList popupMenu.
         * @member {Array.<in_proto.IPopupMenu>} popupMenu
         * @memberof in_proto.ElementList
         * @instance
         */
        ElementList.prototype.popupMenu = $util.emptyArray;

        /**
         * Creates a new ElementList instance using the specified properties.
         * @function create
         * @memberof in_proto.ElementList
         * @static
         * @param {in_proto.IElementList=} [properties] Properties to set
         * @returns {in_proto.ElementList} ElementList instance
         */
        ElementList.create = function create(properties) {
            return new ElementList(properties);
        };

        /**
         * Encodes the specified ElementList message. Does not implicitly {@link in_proto.ElementList.verify|verify} messages.
         * @function encode
         * @memberof in_proto.ElementList
         * @static
         * @param {in_proto.IElementList} message ElementList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ElementList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.plot_2ds != null && message.plot_2ds.length)
                for (let i = 0; i < message.plot_2ds.length; ++i)
                    $root.in_proto.Plot2D.encode(message.plot_2ds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.plot_3ds != null && message.plot_3ds.length)
                for (let i = 0; i < message.plot_3ds.length; ++i)
                    $root.in_proto.Plot3D.encode(message.plot_3ds[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.buttonbars != null && message.buttonbars.length)
                for (let i = 0; i < message.buttonbars.length; ++i)
                    $root.in_proto.Buttonbar.encode(message.buttonbars[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.buttons != null && message.buttons.length)
                for (let i = 0; i < message.buttons.length; ++i)
                    $root.in_proto.Button.encode(message.buttons[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.comboboxes != null && message.comboboxes.length)
                for (let i = 0; i < message.comboboxes.length; ++i)
                    $root.in_proto.ComboBox.encode(message.comboboxes[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.containers != null && message.containers.length)
                for (let i = 0; i < message.containers.length; ++i)
                    $root.in_proto.Container.encode(message.containers[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.fieldGroups != null && message.fieldGroups.length)
                for (let i = 0; i < message.fieldGroups.length; ++i)
                    $root.in_proto.FieldGroup.encode(message.fieldGroups[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.folders != null && message.folders.length)
                for (let i = 0; i < message.folders.length; ++i)
                    $root.in_proto.Folder.encode(message.folders[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.forms != null && message.forms.length)
                for (let i = 0; i < message.forms.length; ++i)
                    $root.in_proto.Form.encode(message.forms[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.headers != null && message.headers.length)
                for (let i = 0; i < message.headers.length; ++i)
                    $root.in_proto.Header.encode(message.headers[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.indexs != null && message.indexs.length)
                for (let i = 0; i < message.indexs.length; ++i)
                    $root.in_proto.Index.encode(message.indexs[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.indexMenus != null && message.indexMenus.length)
                for (let i = 0; i < message.indexMenus.length; ++i)
                    $root.in_proto.IndexMenu.encode(message.indexMenus[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.labels != null && message.labels.length)
                for (let i = 0; i < message.labels.length; ++i)
                    $root.in_proto.Label.encode(message.labels[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.lists != null && message.lists.length)
                for (let i = 0; i < message.lists.length; ++i)
                    $root.in_proto.List.encode(message.lists[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.menubars != null && message.menubars.length)
                for (let i = 0; i < message.menubars.length; ++i)
                    $root.in_proto.Menubar.encode(message.menubars[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.menuButtons != null && message.menuButtons.length)
                for (let i = 0; i < message.menuButtons.length; ++i)
                    $root.in_proto.MenuButton.encode(message.menuButtons[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.messagebars != null && message.messagebars.length)
                for (let i = 0; i < message.messagebars.length; ++i)
                    $root.in_proto.Messagebar.encode(message.messagebars[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.navigators != null && message.navigators.length)
                for (let i = 0; i < message.navigators.length; ++i)
                    $root.in_proto.Navigator.encode(message.navigators[i], writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.radios != null && message.radios.length)
                for (let i = 0; i < message.radios.length; ++i)
                    $root.in_proto.Radio.encode(message.radios[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.separators != null && message.separators.length)
                for (let i = 0; i < message.separators.length; ++i)
                    $root.in_proto.Separator.encode(message.separators[i], writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.stretchs != null && message.stretchs.length)
                for (let i = 0; i < message.stretchs.length; ++i)
                    $root.in_proto.Stretch.encode(message.stretchs[i], writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            if (message.tables != null && message.tables.length)
                for (let i = 0; i < message.tables.length; ++i)
                    $root.in_proto.Table.encode(message.tables[i], writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.texts != null && message.texts.length)
                for (let i = 0; i < message.texts.length; ++i)
                    $root.in_proto.Text.encode(message.texts[i], writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message.dataFields != null && message.dataFields.length)
                for (let i = 0; i < message.dataFields.length; ++i)
                    $root.in_proto.DataField.encode(message.dataFields[i], writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            if (message.thermos != null && message.thermos.length)
                for (let i = 0; i < message.thermos.length; ++i)
                    $root.in_proto.Thermo.encode(message.thermos[i], writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message.toggles != null && message.toggles.length)
                for (let i = 0; i < message.toggles.length; ++i)
                    $root.in_proto.Toggle.encode(message.toggles[i], writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
            if (message.voids != null && message.voids.length)
                for (let i = 0; i < message.voids.length; ++i)
                    $root.in_proto.Void.encode(message.voids[i], writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
            if (message.buttonfields != null && message.buttonfields.length)
                for (let i = 0; i < message.buttonfields.length; ++i)
                    $root.in_proto.ButtonField.encode(message.buttonfields[i], writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();
            if (message.cyclebuttons != null && message.cyclebuttons.length)
                for (let i = 0; i < message.cyclebuttons.length; ++i)
                    $root.in_proto.CycleButton.encode(message.cyclebuttons[i], writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
            if (message.pulldownMenus != null && message.pulldownMenus.length)
                for (let i = 0; i < message.pulldownMenus.length; ++i)
                    $root.in_proto.PulldownMenu.encode(message.pulldownMenus[i], writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
            if (message.popupMenu != null && message.popupMenu.length)
                for (let i = 0; i < message.popupMenu.length; ++i)
                    $root.in_proto.PopupMenu.encode(message.popupMenu[i], writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ElementList message, length delimited. Does not implicitly {@link in_proto.ElementList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.ElementList
         * @static
         * @param {in_proto.IElementList} message ElementList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ElementList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ElementList message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.ElementList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.ElementList} ElementList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ElementList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.ElementList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.plot_2ds && message.plot_2ds.length))
                            message.plot_2ds = [];
                        message.plot_2ds.push($root.in_proto.Plot2D.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.plot_3ds && message.plot_3ds.length))
                            message.plot_3ds = [];
                        message.plot_3ds.push($root.in_proto.Plot3D.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.buttonbars && message.buttonbars.length))
                            message.buttonbars = [];
                        message.buttonbars.push($root.in_proto.Buttonbar.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.buttons && message.buttons.length))
                            message.buttons = [];
                        message.buttons.push($root.in_proto.Button.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.comboboxes && message.comboboxes.length))
                            message.comboboxes = [];
                        message.comboboxes.push($root.in_proto.ComboBox.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.containers && message.containers.length))
                            message.containers = [];
                        message.containers.push($root.in_proto.Container.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        if (!(message.fieldGroups && message.fieldGroups.length))
                            message.fieldGroups = [];
                        message.fieldGroups.push($root.in_proto.FieldGroup.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        if (!(message.folders && message.folders.length))
                            message.folders = [];
                        message.folders.push($root.in_proto.Folder.decode(reader, reader.uint32()));
                        break;
                    }
                case 10: {
                        if (!(message.forms && message.forms.length))
                            message.forms = [];
                        message.forms.push($root.in_proto.Form.decode(reader, reader.uint32()));
                        break;
                    }
                case 12: {
                        if (!(message.headers && message.headers.length))
                            message.headers = [];
                        message.headers.push($root.in_proto.Header.decode(reader, reader.uint32()));
                        break;
                    }
                case 14: {
                        if (!(message.indexs && message.indexs.length))
                            message.indexs = [];
                        message.indexs.push($root.in_proto.Index.decode(reader, reader.uint32()));
                        break;
                    }
                case 15: {
                        if (!(message.indexMenus && message.indexMenus.length))
                            message.indexMenus = [];
                        message.indexMenus.push($root.in_proto.IndexMenu.decode(reader, reader.uint32()));
                        break;
                    }
                case 16: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push($root.in_proto.Label.decode(reader, reader.uint32()));
                        break;
                    }
                case 17: {
                        if (!(message.lists && message.lists.length))
                            message.lists = [];
                        message.lists.push($root.in_proto.List.decode(reader, reader.uint32()));
                        break;
                    }
                case 18: {
                        if (!(message.menubars && message.menubars.length))
                            message.menubars = [];
                        message.menubars.push($root.in_proto.Menubar.decode(reader, reader.uint32()));
                        break;
                    }
                case 19: {
                        if (!(message.menuButtons && message.menuButtons.length))
                            message.menuButtons = [];
                        message.menuButtons.push($root.in_proto.MenuButton.decode(reader, reader.uint32()));
                        break;
                    }
                case 20: {
                        if (!(message.messagebars && message.messagebars.length))
                            message.messagebars = [];
                        message.messagebars.push($root.in_proto.Messagebar.decode(reader, reader.uint32()));
                        break;
                    }
                case 22: {
                        if (!(message.navigators && message.navigators.length))
                            message.navigators = [];
                        message.navigators.push($root.in_proto.Navigator.decode(reader, reader.uint32()));
                        break;
                    }
                case 25: {
                        if (!(message.radios && message.radios.length))
                            message.radios = [];
                        message.radios.push($root.in_proto.Radio.decode(reader, reader.uint32()));
                        break;
                    }
                case 27: {
                        if (!(message.separators && message.separators.length))
                            message.separators = [];
                        message.separators.push($root.in_proto.Separator.decode(reader, reader.uint32()));
                        break;
                    }
                case 29: {
                        if (!(message.stretchs && message.stretchs.length))
                            message.stretchs = [];
                        message.stretchs.push($root.in_proto.Stretch.decode(reader, reader.uint32()));
                        break;
                    }
                case 30: {
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.in_proto.Table.decode(reader, reader.uint32()));
                        break;
                    }
                case 31: {
                        if (!(message.texts && message.texts.length))
                            message.texts = [];
                        message.texts.push($root.in_proto.Text.decode(reader, reader.uint32()));
                        break;
                    }
                case 32: {
                        if (!(message.dataFields && message.dataFields.length))
                            message.dataFields = [];
                        message.dataFields.push($root.in_proto.DataField.decode(reader, reader.uint32()));
                        break;
                    }
                case 33: {
                        if (!(message.thermos && message.thermos.length))
                            message.thermos = [];
                        message.thermos.push($root.in_proto.Thermo.decode(reader, reader.uint32()));
                        break;
                    }
                case 34: {
                        if (!(message.toggles && message.toggles.length))
                            message.toggles = [];
                        message.toggles.push($root.in_proto.Toggle.decode(reader, reader.uint32()));
                        break;
                    }
                case 35: {
                        if (!(message.voids && message.voids.length))
                            message.voids = [];
                        message.voids.push($root.in_proto.Void.decode(reader, reader.uint32()));
                        break;
                    }
                case 36: {
                        if (!(message.buttonfields && message.buttonfields.length))
                            message.buttonfields = [];
                        message.buttonfields.push($root.in_proto.ButtonField.decode(reader, reader.uint32()));
                        break;
                    }
                case 37: {
                        if (!(message.cyclebuttons && message.cyclebuttons.length))
                            message.cyclebuttons = [];
                        message.cyclebuttons.push($root.in_proto.CycleButton.decode(reader, reader.uint32()));
                        break;
                    }
                case 38: {
                        if (!(message.pulldownMenus && message.pulldownMenus.length))
                            message.pulldownMenus = [];
                        message.pulldownMenus.push($root.in_proto.PulldownMenu.decode(reader, reader.uint32()));
                        break;
                    }
                case 39: {
                        if (!(message.popupMenu && message.popupMenu.length))
                            message.popupMenu = [];
                        message.popupMenu.push($root.in_proto.PopupMenu.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ElementList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.ElementList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.ElementList} ElementList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ElementList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ElementList message.
         * @function verify
         * @memberof in_proto.ElementList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ElementList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.plot_2ds != null && message.hasOwnProperty("plot_2ds")) {
                if (!Array.isArray(message.plot_2ds))
                    return "plot_2ds: array expected";
                for (let i = 0; i < message.plot_2ds.length; ++i) {
                    let error = $root.in_proto.Plot2D.verify(message.plot_2ds[i]);
                    if (error)
                        return "plot_2ds." + error;
                }
            }
            if (message.plot_3ds != null && message.hasOwnProperty("plot_3ds")) {
                if (!Array.isArray(message.plot_3ds))
                    return "plot_3ds: array expected";
                for (let i = 0; i < message.plot_3ds.length; ++i) {
                    let error = $root.in_proto.Plot3D.verify(message.plot_3ds[i]);
                    if (error)
                        return "plot_3ds." + error;
                }
            }
            if (message.buttonbars != null && message.hasOwnProperty("buttonbars")) {
                if (!Array.isArray(message.buttonbars))
                    return "buttonbars: array expected";
                for (let i = 0; i < message.buttonbars.length; ++i) {
                    let error = $root.in_proto.Buttonbar.verify(message.buttonbars[i]);
                    if (error)
                        return "buttonbars." + error;
                }
            }
            if (message.buttons != null && message.hasOwnProperty("buttons")) {
                if (!Array.isArray(message.buttons))
                    return "buttons: array expected";
                for (let i = 0; i < message.buttons.length; ++i) {
                    let error = $root.in_proto.Button.verify(message.buttons[i]);
                    if (error)
                        return "buttons." + error;
                }
            }
            if (message.comboboxes != null && message.hasOwnProperty("comboboxes")) {
                if (!Array.isArray(message.comboboxes))
                    return "comboboxes: array expected";
                for (let i = 0; i < message.comboboxes.length; ++i) {
                    let error = $root.in_proto.ComboBox.verify(message.comboboxes[i]);
                    if (error)
                        return "comboboxes." + error;
                }
            }
            if (message.containers != null && message.hasOwnProperty("containers")) {
                if (!Array.isArray(message.containers))
                    return "containers: array expected";
                for (let i = 0; i < message.containers.length; ++i) {
                    let error = $root.in_proto.Container.verify(message.containers[i]);
                    if (error)
                        return "containers." + error;
                }
            }
            if (message.fieldGroups != null && message.hasOwnProperty("fieldGroups")) {
                if (!Array.isArray(message.fieldGroups))
                    return "fieldGroups: array expected";
                for (let i = 0; i < message.fieldGroups.length; ++i) {
                    let error = $root.in_proto.FieldGroup.verify(message.fieldGroups[i]);
                    if (error)
                        return "fieldGroups." + error;
                }
            }
            if (message.folders != null && message.hasOwnProperty("folders")) {
                if (!Array.isArray(message.folders))
                    return "folders: array expected";
                for (let i = 0; i < message.folders.length; ++i) {
                    let error = $root.in_proto.Folder.verify(message.folders[i]);
                    if (error)
                        return "folders." + error;
                }
            }
            if (message.forms != null && message.hasOwnProperty("forms")) {
                if (!Array.isArray(message.forms))
                    return "forms: array expected";
                for (let i = 0; i < message.forms.length; ++i) {
                    let error = $root.in_proto.Form.verify(message.forms[i]);
                    if (error)
                        return "forms." + error;
                }
            }
            if (message.headers != null && message.hasOwnProperty("headers")) {
                if (!Array.isArray(message.headers))
                    return "headers: array expected";
                for (let i = 0; i < message.headers.length; ++i) {
                    let error = $root.in_proto.Header.verify(message.headers[i]);
                    if (error)
                        return "headers." + error;
                }
            }
            if (message.indexs != null && message.hasOwnProperty("indexs")) {
                if (!Array.isArray(message.indexs))
                    return "indexs: array expected";
                for (let i = 0; i < message.indexs.length; ++i) {
                    let error = $root.in_proto.Index.verify(message.indexs[i]);
                    if (error)
                        return "indexs." + error;
                }
            }
            if (message.indexMenus != null && message.hasOwnProperty("indexMenus")) {
                if (!Array.isArray(message.indexMenus))
                    return "indexMenus: array expected";
                for (let i = 0; i < message.indexMenus.length; ++i) {
                    let error = $root.in_proto.IndexMenu.verify(message.indexMenus[i]);
                    if (error)
                        return "indexMenus." + error;
                }
            }
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (let i = 0; i < message.labels.length; ++i) {
                    let error = $root.in_proto.Label.verify(message.labels[i]);
                    if (error)
                        return "labels." + error;
                }
            }
            if (message.lists != null && message.hasOwnProperty("lists")) {
                if (!Array.isArray(message.lists))
                    return "lists: array expected";
                for (let i = 0; i < message.lists.length; ++i) {
                    let error = $root.in_proto.List.verify(message.lists[i]);
                    if (error)
                        return "lists." + error;
                }
            }
            if (message.menubars != null && message.hasOwnProperty("menubars")) {
                if (!Array.isArray(message.menubars))
                    return "menubars: array expected";
                for (let i = 0; i < message.menubars.length; ++i) {
                    let error = $root.in_proto.Menubar.verify(message.menubars[i]);
                    if (error)
                        return "menubars." + error;
                }
            }
            if (message.menuButtons != null && message.hasOwnProperty("menuButtons")) {
                if (!Array.isArray(message.menuButtons))
                    return "menuButtons: array expected";
                for (let i = 0; i < message.menuButtons.length; ++i) {
                    let error = $root.in_proto.MenuButton.verify(message.menuButtons[i]);
                    if (error)
                        return "menuButtons." + error;
                }
            }
            if (message.messagebars != null && message.hasOwnProperty("messagebars")) {
                if (!Array.isArray(message.messagebars))
                    return "messagebars: array expected";
                for (let i = 0; i < message.messagebars.length; ++i) {
                    let error = $root.in_proto.Messagebar.verify(message.messagebars[i]);
                    if (error)
                        return "messagebars." + error;
                }
            }
            if (message.navigators != null && message.hasOwnProperty("navigators")) {
                if (!Array.isArray(message.navigators))
                    return "navigators: array expected";
                for (let i = 0; i < message.navigators.length; ++i) {
                    let error = $root.in_proto.Navigator.verify(message.navigators[i]);
                    if (error)
                        return "navigators." + error;
                }
            }
            if (message.radios != null && message.hasOwnProperty("radios")) {
                if (!Array.isArray(message.radios))
                    return "radios: array expected";
                for (let i = 0; i < message.radios.length; ++i) {
                    let error = $root.in_proto.Radio.verify(message.radios[i]);
                    if (error)
                        return "radios." + error;
                }
            }
            if (message.separators != null && message.hasOwnProperty("separators")) {
                if (!Array.isArray(message.separators))
                    return "separators: array expected";
                for (let i = 0; i < message.separators.length; ++i) {
                    let error = $root.in_proto.Separator.verify(message.separators[i]);
                    if (error)
                        return "separators." + error;
                }
            }
            if (message.stretchs != null && message.hasOwnProperty("stretchs")) {
                if (!Array.isArray(message.stretchs))
                    return "stretchs: array expected";
                for (let i = 0; i < message.stretchs.length; ++i) {
                    let error = $root.in_proto.Stretch.verify(message.stretchs[i]);
                    if (error)
                        return "stretchs." + error;
                }
            }
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (!Array.isArray(message.tables))
                    return "tables: array expected";
                for (let i = 0; i < message.tables.length; ++i) {
                    let error = $root.in_proto.Table.verify(message.tables[i]);
                    if (error)
                        return "tables." + error;
                }
            }
            if (message.texts != null && message.hasOwnProperty("texts")) {
                if (!Array.isArray(message.texts))
                    return "texts: array expected";
                for (let i = 0; i < message.texts.length; ++i) {
                    let error = $root.in_proto.Text.verify(message.texts[i]);
                    if (error)
                        return "texts." + error;
                }
            }
            if (message.dataFields != null && message.hasOwnProperty("dataFields")) {
                if (!Array.isArray(message.dataFields))
                    return "dataFields: array expected";
                for (let i = 0; i < message.dataFields.length; ++i) {
                    let error = $root.in_proto.DataField.verify(message.dataFields[i]);
                    if (error)
                        return "dataFields." + error;
                }
            }
            if (message.thermos != null && message.hasOwnProperty("thermos")) {
                if (!Array.isArray(message.thermos))
                    return "thermos: array expected";
                for (let i = 0; i < message.thermos.length; ++i) {
                    let error = $root.in_proto.Thermo.verify(message.thermos[i]);
                    if (error)
                        return "thermos." + error;
                }
            }
            if (message.toggles != null && message.hasOwnProperty("toggles")) {
                if (!Array.isArray(message.toggles))
                    return "toggles: array expected";
                for (let i = 0; i < message.toggles.length; ++i) {
                    let error = $root.in_proto.Toggle.verify(message.toggles[i]);
                    if (error)
                        return "toggles." + error;
                }
            }
            if (message.voids != null && message.hasOwnProperty("voids")) {
                if (!Array.isArray(message.voids))
                    return "voids: array expected";
                for (let i = 0; i < message.voids.length; ++i) {
                    let error = $root.in_proto.Void.verify(message.voids[i]);
                    if (error)
                        return "voids." + error;
                }
            }
            if (message.buttonfields != null && message.hasOwnProperty("buttonfields")) {
                if (!Array.isArray(message.buttonfields))
                    return "buttonfields: array expected";
                for (let i = 0; i < message.buttonfields.length; ++i) {
                    let error = $root.in_proto.ButtonField.verify(message.buttonfields[i]);
                    if (error)
                        return "buttonfields." + error;
                }
            }
            if (message.cyclebuttons != null && message.hasOwnProperty("cyclebuttons")) {
                if (!Array.isArray(message.cyclebuttons))
                    return "cyclebuttons: array expected";
                for (let i = 0; i < message.cyclebuttons.length; ++i) {
                    let error = $root.in_proto.CycleButton.verify(message.cyclebuttons[i]);
                    if (error)
                        return "cyclebuttons." + error;
                }
            }
            if (message.pulldownMenus != null && message.hasOwnProperty("pulldownMenus")) {
                if (!Array.isArray(message.pulldownMenus))
                    return "pulldownMenus: array expected";
                for (let i = 0; i < message.pulldownMenus.length; ++i) {
                    let error = $root.in_proto.PulldownMenu.verify(message.pulldownMenus[i]);
                    if (error)
                        return "pulldownMenus." + error;
                }
            }
            if (message.popupMenu != null && message.hasOwnProperty("popupMenu")) {
                if (!Array.isArray(message.popupMenu))
                    return "popupMenu: array expected";
                for (let i = 0; i < message.popupMenu.length; ++i) {
                    let error = $root.in_proto.PopupMenu.verify(message.popupMenu[i]);
                    if (error)
                        return "popupMenu." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ElementList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.ElementList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.ElementList} ElementList
         */
        ElementList.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.ElementList)
                return object;
            let message = new $root.in_proto.ElementList();
            if (object.plot_2ds) {
                if (!Array.isArray(object.plot_2ds))
                    throw TypeError(".in_proto.ElementList.plot_2ds: array expected");
                message.plot_2ds = [];
                for (let i = 0; i < object.plot_2ds.length; ++i) {
                    if (typeof object.plot_2ds[i] !== "object")
                        throw TypeError(".in_proto.ElementList.plot_2ds: object expected");
                    message.plot_2ds[i] = $root.in_proto.Plot2D.fromObject(object.plot_2ds[i]);
                }
            }
            if (object.plot_3ds) {
                if (!Array.isArray(object.plot_3ds))
                    throw TypeError(".in_proto.ElementList.plot_3ds: array expected");
                message.plot_3ds = [];
                for (let i = 0; i < object.plot_3ds.length; ++i) {
                    if (typeof object.plot_3ds[i] !== "object")
                        throw TypeError(".in_proto.ElementList.plot_3ds: object expected");
                    message.plot_3ds[i] = $root.in_proto.Plot3D.fromObject(object.plot_3ds[i]);
                }
            }
            if (object.buttonbars) {
                if (!Array.isArray(object.buttonbars))
                    throw TypeError(".in_proto.ElementList.buttonbars: array expected");
                message.buttonbars = [];
                for (let i = 0; i < object.buttonbars.length; ++i) {
                    if (typeof object.buttonbars[i] !== "object")
                        throw TypeError(".in_proto.ElementList.buttonbars: object expected");
                    message.buttonbars[i] = $root.in_proto.Buttonbar.fromObject(object.buttonbars[i]);
                }
            }
            if (object.buttons) {
                if (!Array.isArray(object.buttons))
                    throw TypeError(".in_proto.ElementList.buttons: array expected");
                message.buttons = [];
                for (let i = 0; i < object.buttons.length; ++i) {
                    if (typeof object.buttons[i] !== "object")
                        throw TypeError(".in_proto.ElementList.buttons: object expected");
                    message.buttons[i] = $root.in_proto.Button.fromObject(object.buttons[i]);
                }
            }
            if (object.comboboxes) {
                if (!Array.isArray(object.comboboxes))
                    throw TypeError(".in_proto.ElementList.comboboxes: array expected");
                message.comboboxes = [];
                for (let i = 0; i < object.comboboxes.length; ++i) {
                    if (typeof object.comboboxes[i] !== "object")
                        throw TypeError(".in_proto.ElementList.comboboxes: object expected");
                    message.comboboxes[i] = $root.in_proto.ComboBox.fromObject(object.comboboxes[i]);
                }
            }
            if (object.containers) {
                if (!Array.isArray(object.containers))
                    throw TypeError(".in_proto.ElementList.containers: array expected");
                message.containers = [];
                for (let i = 0; i < object.containers.length; ++i) {
                    if (typeof object.containers[i] !== "object")
                        throw TypeError(".in_proto.ElementList.containers: object expected");
                    message.containers[i] = $root.in_proto.Container.fromObject(object.containers[i]);
                }
            }
            if (object.fieldGroups) {
                if (!Array.isArray(object.fieldGroups))
                    throw TypeError(".in_proto.ElementList.fieldGroups: array expected");
                message.fieldGroups = [];
                for (let i = 0; i < object.fieldGroups.length; ++i) {
                    if (typeof object.fieldGroups[i] !== "object")
                        throw TypeError(".in_proto.ElementList.fieldGroups: object expected");
                    message.fieldGroups[i] = $root.in_proto.FieldGroup.fromObject(object.fieldGroups[i]);
                }
            }
            if (object.folders) {
                if (!Array.isArray(object.folders))
                    throw TypeError(".in_proto.ElementList.folders: array expected");
                message.folders = [];
                for (let i = 0; i < object.folders.length; ++i) {
                    if (typeof object.folders[i] !== "object")
                        throw TypeError(".in_proto.ElementList.folders: object expected");
                    message.folders[i] = $root.in_proto.Folder.fromObject(object.folders[i]);
                }
            }
            if (object.forms) {
                if (!Array.isArray(object.forms))
                    throw TypeError(".in_proto.ElementList.forms: array expected");
                message.forms = [];
                for (let i = 0; i < object.forms.length; ++i) {
                    if (typeof object.forms[i] !== "object")
                        throw TypeError(".in_proto.ElementList.forms: object expected");
                    message.forms[i] = $root.in_proto.Form.fromObject(object.forms[i]);
                }
            }
            if (object.headers) {
                if (!Array.isArray(object.headers))
                    throw TypeError(".in_proto.ElementList.headers: array expected");
                message.headers = [];
                for (let i = 0; i < object.headers.length; ++i) {
                    if (typeof object.headers[i] !== "object")
                        throw TypeError(".in_proto.ElementList.headers: object expected");
                    message.headers[i] = $root.in_proto.Header.fromObject(object.headers[i]);
                }
            }
            if (object.indexs) {
                if (!Array.isArray(object.indexs))
                    throw TypeError(".in_proto.ElementList.indexs: array expected");
                message.indexs = [];
                for (let i = 0; i < object.indexs.length; ++i) {
                    if (typeof object.indexs[i] !== "object")
                        throw TypeError(".in_proto.ElementList.indexs: object expected");
                    message.indexs[i] = $root.in_proto.Index.fromObject(object.indexs[i]);
                }
            }
            if (object.indexMenus) {
                if (!Array.isArray(object.indexMenus))
                    throw TypeError(".in_proto.ElementList.indexMenus: array expected");
                message.indexMenus = [];
                for (let i = 0; i < object.indexMenus.length; ++i) {
                    if (typeof object.indexMenus[i] !== "object")
                        throw TypeError(".in_proto.ElementList.indexMenus: object expected");
                    message.indexMenus[i] = $root.in_proto.IndexMenu.fromObject(object.indexMenus[i]);
                }
            }
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".in_proto.ElementList.labels: array expected");
                message.labels = [];
                for (let i = 0; i < object.labels.length; ++i) {
                    if (typeof object.labels[i] !== "object")
                        throw TypeError(".in_proto.ElementList.labels: object expected");
                    message.labels[i] = $root.in_proto.Label.fromObject(object.labels[i]);
                }
            }
            if (object.lists) {
                if (!Array.isArray(object.lists))
                    throw TypeError(".in_proto.ElementList.lists: array expected");
                message.lists = [];
                for (let i = 0; i < object.lists.length; ++i) {
                    if (typeof object.lists[i] !== "object")
                        throw TypeError(".in_proto.ElementList.lists: object expected");
                    message.lists[i] = $root.in_proto.List.fromObject(object.lists[i]);
                }
            }
            if (object.menubars) {
                if (!Array.isArray(object.menubars))
                    throw TypeError(".in_proto.ElementList.menubars: array expected");
                message.menubars = [];
                for (let i = 0; i < object.menubars.length; ++i) {
                    if (typeof object.menubars[i] !== "object")
                        throw TypeError(".in_proto.ElementList.menubars: object expected");
                    message.menubars[i] = $root.in_proto.Menubar.fromObject(object.menubars[i]);
                }
            }
            if (object.menuButtons) {
                if (!Array.isArray(object.menuButtons))
                    throw TypeError(".in_proto.ElementList.menuButtons: array expected");
                message.menuButtons = [];
                for (let i = 0; i < object.menuButtons.length; ++i) {
                    if (typeof object.menuButtons[i] !== "object")
                        throw TypeError(".in_proto.ElementList.menuButtons: object expected");
                    message.menuButtons[i] = $root.in_proto.MenuButton.fromObject(object.menuButtons[i]);
                }
            }
            if (object.messagebars) {
                if (!Array.isArray(object.messagebars))
                    throw TypeError(".in_proto.ElementList.messagebars: array expected");
                message.messagebars = [];
                for (let i = 0; i < object.messagebars.length; ++i) {
                    if (typeof object.messagebars[i] !== "object")
                        throw TypeError(".in_proto.ElementList.messagebars: object expected");
                    message.messagebars[i] = $root.in_proto.Messagebar.fromObject(object.messagebars[i]);
                }
            }
            if (object.navigators) {
                if (!Array.isArray(object.navigators))
                    throw TypeError(".in_proto.ElementList.navigators: array expected");
                message.navigators = [];
                for (let i = 0; i < object.navigators.length; ++i) {
                    if (typeof object.navigators[i] !== "object")
                        throw TypeError(".in_proto.ElementList.navigators: object expected");
                    message.navigators[i] = $root.in_proto.Navigator.fromObject(object.navigators[i]);
                }
            }
            if (object.radios) {
                if (!Array.isArray(object.radios))
                    throw TypeError(".in_proto.ElementList.radios: array expected");
                message.radios = [];
                for (let i = 0; i < object.radios.length; ++i) {
                    if (typeof object.radios[i] !== "object")
                        throw TypeError(".in_proto.ElementList.radios: object expected");
                    message.radios[i] = $root.in_proto.Radio.fromObject(object.radios[i]);
                }
            }
            if (object.separators) {
                if (!Array.isArray(object.separators))
                    throw TypeError(".in_proto.ElementList.separators: array expected");
                message.separators = [];
                for (let i = 0; i < object.separators.length; ++i) {
                    if (typeof object.separators[i] !== "object")
                        throw TypeError(".in_proto.ElementList.separators: object expected");
                    message.separators[i] = $root.in_proto.Separator.fromObject(object.separators[i]);
                }
            }
            if (object.stretchs) {
                if (!Array.isArray(object.stretchs))
                    throw TypeError(".in_proto.ElementList.stretchs: array expected");
                message.stretchs = [];
                for (let i = 0; i < object.stretchs.length; ++i) {
                    if (typeof object.stretchs[i] !== "object")
                        throw TypeError(".in_proto.ElementList.stretchs: object expected");
                    message.stretchs[i] = $root.in_proto.Stretch.fromObject(object.stretchs[i]);
                }
            }
            if (object.tables) {
                if (!Array.isArray(object.tables))
                    throw TypeError(".in_proto.ElementList.tables: array expected");
                message.tables = [];
                for (let i = 0; i < object.tables.length; ++i) {
                    if (typeof object.tables[i] !== "object")
                        throw TypeError(".in_proto.ElementList.tables: object expected");
                    message.tables[i] = $root.in_proto.Table.fromObject(object.tables[i]);
                }
            }
            if (object.texts) {
                if (!Array.isArray(object.texts))
                    throw TypeError(".in_proto.ElementList.texts: array expected");
                message.texts = [];
                for (let i = 0; i < object.texts.length; ++i) {
                    if (typeof object.texts[i] !== "object")
                        throw TypeError(".in_proto.ElementList.texts: object expected");
                    message.texts[i] = $root.in_proto.Text.fromObject(object.texts[i]);
                }
            }
            if (object.dataFields) {
                if (!Array.isArray(object.dataFields))
                    throw TypeError(".in_proto.ElementList.dataFields: array expected");
                message.dataFields = [];
                for (let i = 0; i < object.dataFields.length; ++i) {
                    if (typeof object.dataFields[i] !== "object")
                        throw TypeError(".in_proto.ElementList.dataFields: object expected");
                    message.dataFields[i] = $root.in_proto.DataField.fromObject(object.dataFields[i]);
                }
            }
            if (object.thermos) {
                if (!Array.isArray(object.thermos))
                    throw TypeError(".in_proto.ElementList.thermos: array expected");
                message.thermos = [];
                for (let i = 0; i < object.thermos.length; ++i) {
                    if (typeof object.thermos[i] !== "object")
                        throw TypeError(".in_proto.ElementList.thermos: object expected");
                    message.thermos[i] = $root.in_proto.Thermo.fromObject(object.thermos[i]);
                }
            }
            if (object.toggles) {
                if (!Array.isArray(object.toggles))
                    throw TypeError(".in_proto.ElementList.toggles: array expected");
                message.toggles = [];
                for (let i = 0; i < object.toggles.length; ++i) {
                    if (typeof object.toggles[i] !== "object")
                        throw TypeError(".in_proto.ElementList.toggles: object expected");
                    message.toggles[i] = $root.in_proto.Toggle.fromObject(object.toggles[i]);
                }
            }
            if (object.voids) {
                if (!Array.isArray(object.voids))
                    throw TypeError(".in_proto.ElementList.voids: array expected");
                message.voids = [];
                for (let i = 0; i < object.voids.length; ++i) {
                    if (typeof object.voids[i] !== "object")
                        throw TypeError(".in_proto.ElementList.voids: object expected");
                    message.voids[i] = $root.in_proto.Void.fromObject(object.voids[i]);
                }
            }
            if (object.buttonfields) {
                if (!Array.isArray(object.buttonfields))
                    throw TypeError(".in_proto.ElementList.buttonfields: array expected");
                message.buttonfields = [];
                for (let i = 0; i < object.buttonfields.length; ++i) {
                    if (typeof object.buttonfields[i] !== "object")
                        throw TypeError(".in_proto.ElementList.buttonfields: object expected");
                    message.buttonfields[i] = $root.in_proto.ButtonField.fromObject(object.buttonfields[i]);
                }
            }
            if (object.cyclebuttons) {
                if (!Array.isArray(object.cyclebuttons))
                    throw TypeError(".in_proto.ElementList.cyclebuttons: array expected");
                message.cyclebuttons = [];
                for (let i = 0; i < object.cyclebuttons.length; ++i) {
                    if (typeof object.cyclebuttons[i] !== "object")
                        throw TypeError(".in_proto.ElementList.cyclebuttons: object expected");
                    message.cyclebuttons[i] = $root.in_proto.CycleButton.fromObject(object.cyclebuttons[i]);
                }
            }
            if (object.pulldownMenus) {
                if (!Array.isArray(object.pulldownMenus))
                    throw TypeError(".in_proto.ElementList.pulldownMenus: array expected");
                message.pulldownMenus = [];
                for (let i = 0; i < object.pulldownMenus.length; ++i) {
                    if (typeof object.pulldownMenus[i] !== "object")
                        throw TypeError(".in_proto.ElementList.pulldownMenus: object expected");
                    message.pulldownMenus[i] = $root.in_proto.PulldownMenu.fromObject(object.pulldownMenus[i]);
                }
            }
            if (object.popupMenu) {
                if (!Array.isArray(object.popupMenu))
                    throw TypeError(".in_proto.ElementList.popupMenu: array expected");
                message.popupMenu = [];
                for (let i = 0; i < object.popupMenu.length; ++i) {
                    if (typeof object.popupMenu[i] !== "object")
                        throw TypeError(".in_proto.ElementList.popupMenu: object expected");
                    message.popupMenu[i] = $root.in_proto.PopupMenu.fromObject(object.popupMenu[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ElementList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.ElementList
         * @static
         * @param {in_proto.ElementList} message ElementList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ElementList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.plot_2ds = [];
                object.plot_3ds = [];
                object.buttonbars = [];
                object.buttons = [];
                object.comboboxes = [];
                object.containers = [];
                object.fieldGroups = [];
                object.folders = [];
                object.forms = [];
                object.headers = [];
                object.indexs = [];
                object.indexMenus = [];
                object.labels = [];
                object.lists = [];
                object.menubars = [];
                object.menuButtons = [];
                object.messagebars = [];
                object.navigators = [];
                object.radios = [];
                object.separators = [];
                object.stretchs = [];
                object.tables = [];
                object.texts = [];
                object.dataFields = [];
                object.thermos = [];
                object.toggles = [];
                object.voids = [];
                object.buttonfields = [];
                object.cyclebuttons = [];
                object.pulldownMenus = [];
                object.popupMenu = [];
            }
            if (message.plot_2ds && message.plot_2ds.length) {
                object.plot_2ds = [];
                for (let j = 0; j < message.plot_2ds.length; ++j)
                    object.plot_2ds[j] = $root.in_proto.Plot2D.toObject(message.plot_2ds[j], options);
            }
            if (message.plot_3ds && message.plot_3ds.length) {
                object.plot_3ds = [];
                for (let j = 0; j < message.plot_3ds.length; ++j)
                    object.plot_3ds[j] = $root.in_proto.Plot3D.toObject(message.plot_3ds[j], options);
            }
            if (message.buttonbars && message.buttonbars.length) {
                object.buttonbars = [];
                for (let j = 0; j < message.buttonbars.length; ++j)
                    object.buttonbars[j] = $root.in_proto.Buttonbar.toObject(message.buttonbars[j], options);
            }
            if (message.buttons && message.buttons.length) {
                object.buttons = [];
                for (let j = 0; j < message.buttons.length; ++j)
                    object.buttons[j] = $root.in_proto.Button.toObject(message.buttons[j], options);
            }
            if (message.comboboxes && message.comboboxes.length) {
                object.comboboxes = [];
                for (let j = 0; j < message.comboboxes.length; ++j)
                    object.comboboxes[j] = $root.in_proto.ComboBox.toObject(message.comboboxes[j], options);
            }
            if (message.containers && message.containers.length) {
                object.containers = [];
                for (let j = 0; j < message.containers.length; ++j)
                    object.containers[j] = $root.in_proto.Container.toObject(message.containers[j], options);
            }
            if (message.fieldGroups && message.fieldGroups.length) {
                object.fieldGroups = [];
                for (let j = 0; j < message.fieldGroups.length; ++j)
                    object.fieldGroups[j] = $root.in_proto.FieldGroup.toObject(message.fieldGroups[j], options);
            }
            if (message.folders && message.folders.length) {
                object.folders = [];
                for (let j = 0; j < message.folders.length; ++j)
                    object.folders[j] = $root.in_proto.Folder.toObject(message.folders[j], options);
            }
            if (message.forms && message.forms.length) {
                object.forms = [];
                for (let j = 0; j < message.forms.length; ++j)
                    object.forms[j] = $root.in_proto.Form.toObject(message.forms[j], options);
            }
            if (message.headers && message.headers.length) {
                object.headers = [];
                for (let j = 0; j < message.headers.length; ++j)
                    object.headers[j] = $root.in_proto.Header.toObject(message.headers[j], options);
            }
            if (message.indexs && message.indexs.length) {
                object.indexs = [];
                for (let j = 0; j < message.indexs.length; ++j)
                    object.indexs[j] = $root.in_proto.Index.toObject(message.indexs[j], options);
            }
            if (message.indexMenus && message.indexMenus.length) {
                object.indexMenus = [];
                for (let j = 0; j < message.indexMenus.length; ++j)
                    object.indexMenus[j] = $root.in_proto.IndexMenu.toObject(message.indexMenus[j], options);
            }
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (let j = 0; j < message.labels.length; ++j)
                    object.labels[j] = $root.in_proto.Label.toObject(message.labels[j], options);
            }
            if (message.lists && message.lists.length) {
                object.lists = [];
                for (let j = 0; j < message.lists.length; ++j)
                    object.lists[j] = $root.in_proto.List.toObject(message.lists[j], options);
            }
            if (message.menubars && message.menubars.length) {
                object.menubars = [];
                for (let j = 0; j < message.menubars.length; ++j)
                    object.menubars[j] = $root.in_proto.Menubar.toObject(message.menubars[j], options);
            }
            if (message.menuButtons && message.menuButtons.length) {
                object.menuButtons = [];
                for (let j = 0; j < message.menuButtons.length; ++j)
                    object.menuButtons[j] = $root.in_proto.MenuButton.toObject(message.menuButtons[j], options);
            }
            if (message.messagebars && message.messagebars.length) {
                object.messagebars = [];
                for (let j = 0; j < message.messagebars.length; ++j)
                    object.messagebars[j] = $root.in_proto.Messagebar.toObject(message.messagebars[j], options);
            }
            if (message.navigators && message.navigators.length) {
                object.navigators = [];
                for (let j = 0; j < message.navigators.length; ++j)
                    object.navigators[j] = $root.in_proto.Navigator.toObject(message.navigators[j], options);
            }
            if (message.radios && message.radios.length) {
                object.radios = [];
                for (let j = 0; j < message.radios.length; ++j)
                    object.radios[j] = $root.in_proto.Radio.toObject(message.radios[j], options);
            }
            if (message.separators && message.separators.length) {
                object.separators = [];
                for (let j = 0; j < message.separators.length; ++j)
                    object.separators[j] = $root.in_proto.Separator.toObject(message.separators[j], options);
            }
            if (message.stretchs && message.stretchs.length) {
                object.stretchs = [];
                for (let j = 0; j < message.stretchs.length; ++j)
                    object.stretchs[j] = $root.in_proto.Stretch.toObject(message.stretchs[j], options);
            }
            if (message.tables && message.tables.length) {
                object.tables = [];
                for (let j = 0; j < message.tables.length; ++j)
                    object.tables[j] = $root.in_proto.Table.toObject(message.tables[j], options);
            }
            if (message.texts && message.texts.length) {
                object.texts = [];
                for (let j = 0; j < message.texts.length; ++j)
                    object.texts[j] = $root.in_proto.Text.toObject(message.texts[j], options);
            }
            if (message.dataFields && message.dataFields.length) {
                object.dataFields = [];
                for (let j = 0; j < message.dataFields.length; ++j)
                    object.dataFields[j] = $root.in_proto.DataField.toObject(message.dataFields[j], options);
            }
            if (message.thermos && message.thermos.length) {
                object.thermos = [];
                for (let j = 0; j < message.thermos.length; ++j)
                    object.thermos[j] = $root.in_proto.Thermo.toObject(message.thermos[j], options);
            }
            if (message.toggles && message.toggles.length) {
                object.toggles = [];
                for (let j = 0; j < message.toggles.length; ++j)
                    object.toggles[j] = $root.in_proto.Toggle.toObject(message.toggles[j], options);
            }
            if (message.voids && message.voids.length) {
                object.voids = [];
                for (let j = 0; j < message.voids.length; ++j)
                    object.voids[j] = $root.in_proto.Void.toObject(message.voids[j], options);
            }
            if (message.buttonfields && message.buttonfields.length) {
                object.buttonfields = [];
                for (let j = 0; j < message.buttonfields.length; ++j)
                    object.buttonfields[j] = $root.in_proto.ButtonField.toObject(message.buttonfields[j], options);
            }
            if (message.cyclebuttons && message.cyclebuttons.length) {
                object.cyclebuttons = [];
                for (let j = 0; j < message.cyclebuttons.length; ++j)
                    object.cyclebuttons[j] = $root.in_proto.CycleButton.toObject(message.cyclebuttons[j], options);
            }
            if (message.pulldownMenus && message.pulldownMenus.length) {
                object.pulldownMenus = [];
                for (let j = 0; j < message.pulldownMenus.length; ++j)
                    object.pulldownMenus[j] = $root.in_proto.PulldownMenu.toObject(message.pulldownMenus[j], options);
            }
            if (message.popupMenu && message.popupMenu.length) {
                object.popupMenu = [];
                for (let j = 0; j < message.popupMenu.length; ++j)
                    object.popupMenu[j] = $root.in_proto.PopupMenu.toObject(message.popupMenu[j], options);
            }
            return object;
        };

        /**
         * Converts this ElementList to JSON.
         * @function toJSON
         * @memberof in_proto.ElementList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ElementList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ElementList
         * @function getTypeUrl
         * @memberof in_proto.ElementList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ElementList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.ElementList";
        };

        return ElementList;
    })();

    in_proto.WebAPIResponse = (function() {

        /**
         * Properties of a WebAPIResponse.
         * @memberof in_proto
         * @interface IWebAPIResponse
         * @property {in_proto.IElementList|null} [elements] WebAPIResponse elements
         * @property {Array.<string>|null} [forms] WebAPIResponse forms
         * @property {string|null} [topForm] WebAPIResponse topForm
         * @property {Array.<string>|null} [cycles] WebAPIResponse cycles
         * @property {in_proto.WebAPIResponse.IFunctionStatus|null} ["function"] WebAPIResponse function
         * @property {Array.<in_proto.WebAPIResponse.IFolderUpdate>|null} [folders] WebAPIResponse folders
         * @property {string|null} [clipboard] WebAPIResponse clipboard
         * @property {Array.<string>|null} [formsReplaced] WebAPIResponse formsReplaced
         */

        /**
         * Constructs a new WebAPIResponse.
         * @memberof in_proto
         * @classdesc Represents a WebAPIResponse.
         * @implements IWebAPIResponse
         * @constructor
         * @param {in_proto.IWebAPIResponse=} [properties] Properties to set
         */
        function WebAPIResponse(properties) {
            this.forms = [];
            this.cycles = [];
            this.folders = [];
            this.formsReplaced = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebAPIResponse elements.
         * @member {in_proto.IElementList|null|undefined} elements
         * @memberof in_proto.WebAPIResponse
         * @instance
         */
        WebAPIResponse.prototype.elements = null;

        /**
         * WebAPIResponse forms.
         * @member {Array.<string>} forms
         * @memberof in_proto.WebAPIResponse
         * @instance
         */
        WebAPIResponse.prototype.forms = $util.emptyArray;

        /**
         * WebAPIResponse topForm.
         * @member {string} topForm
         * @memberof in_proto.WebAPIResponse
         * @instance
         */
        WebAPIResponse.prototype.topForm = "";

        /**
         * WebAPIResponse cycles.
         * @member {Array.<string>} cycles
         * @memberof in_proto.WebAPIResponse
         * @instance
         */
        WebAPIResponse.prototype.cycles = $util.emptyArray;

        /**
         * WebAPIResponse function.
         * @member {in_proto.WebAPIResponse.IFunctionStatus|null|undefined} function
         * @memberof in_proto.WebAPIResponse
         * @instance
         */
        WebAPIResponse.prototype["function"] = null;

        /**
         * WebAPIResponse folders.
         * @member {Array.<in_proto.WebAPIResponse.IFolderUpdate>} folders
         * @memberof in_proto.WebAPIResponse
         * @instance
         */
        WebAPIResponse.prototype.folders = $util.emptyArray;

        /**
         * WebAPIResponse clipboard.
         * @member {string} clipboard
         * @memberof in_proto.WebAPIResponse
         * @instance
         */
        WebAPIResponse.prototype.clipboard = "";

        /**
         * WebAPIResponse formsReplaced.
         * @member {Array.<string>} formsReplaced
         * @memberof in_proto.WebAPIResponse
         * @instance
         */
        WebAPIResponse.prototype.formsReplaced = $util.emptyArray;

        /**
         * Creates a new WebAPIResponse instance using the specified properties.
         * @function create
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {in_proto.IWebAPIResponse=} [properties] Properties to set
         * @returns {in_proto.WebAPIResponse} WebAPIResponse instance
         */
        WebAPIResponse.create = function create(properties) {
            return new WebAPIResponse(properties);
        };

        /**
         * Encodes the specified WebAPIResponse message. Does not implicitly {@link in_proto.WebAPIResponse.verify|verify} messages.
         * @function encode
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {in_proto.IWebAPIResponse} message WebAPIResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebAPIResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.elements != null && Object.hasOwnProperty.call(message, "elements"))
                $root.in_proto.ElementList.encode(message.elements, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.forms != null && message.forms.length)
                for (let i = 0; i < message.forms.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.forms[i]);
            if (message.topForm != null && Object.hasOwnProperty.call(message, "topForm"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.topForm);
            if (message.cycles != null && message.cycles.length)
                for (let i = 0; i < message.cycles.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.cycles[i]);
            if (message["function"] != null && Object.hasOwnProperty.call(message, "function"))
                $root.in_proto.WebAPIResponse.FunctionStatus.encode(message["function"], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.folders != null && message.folders.length)
                for (let i = 0; i < message.folders.length; ++i)
                    $root.in_proto.WebAPIResponse.FolderUpdate.encode(message.folders[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.clipboard != null && Object.hasOwnProperty.call(message, "clipboard"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.clipboard);
            if (message.formsReplaced != null && message.formsReplaced.length)
                for (let i = 0; i < message.formsReplaced.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.formsReplaced[i]);
            return writer;
        };

        /**
         * Encodes the specified WebAPIResponse message, length delimited. Does not implicitly {@link in_proto.WebAPIResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {in_proto.IWebAPIResponse} message WebAPIResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebAPIResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebAPIResponse message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.WebAPIResponse} WebAPIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebAPIResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.WebAPIResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.elements = $root.in_proto.ElementList.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.forms && message.forms.length))
                            message.forms = [];
                        message.forms.push(reader.string());
                        break;
                    }
                case 3: {
                        message.topForm = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.cycles && message.cycles.length))
                            message.cycles = [];
                        message.cycles.push(reader.string());
                        break;
                    }
                case 5: {
                        message["function"] = $root.in_proto.WebAPIResponse.FunctionStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        if (!(message.folders && message.folders.length))
                            message.folders = [];
                        message.folders.push($root.in_proto.WebAPIResponse.FolderUpdate.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.clipboard = reader.string();
                        break;
                    }
                case 8: {
                        if (!(message.formsReplaced && message.formsReplaced.length))
                            message.formsReplaced = [];
                        message.formsReplaced.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WebAPIResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.WebAPIResponse} WebAPIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebAPIResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebAPIResponse message.
         * @function verify
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebAPIResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                let error = $root.in_proto.ElementList.verify(message.elements);
                if (error)
                    return "elements." + error;
            }
            if (message.forms != null && message.hasOwnProperty("forms")) {
                if (!Array.isArray(message.forms))
                    return "forms: array expected";
                for (let i = 0; i < message.forms.length; ++i)
                    if (!$util.isString(message.forms[i]))
                        return "forms: string[] expected";
            }
            if (message.topForm != null && message.hasOwnProperty("topForm"))
                if (!$util.isString(message.topForm))
                    return "topForm: string expected";
            if (message.cycles != null && message.hasOwnProperty("cycles")) {
                if (!Array.isArray(message.cycles))
                    return "cycles: array expected";
                for (let i = 0; i < message.cycles.length; ++i)
                    if (!$util.isString(message.cycles[i]))
                        return "cycles: string[] expected";
            }
            if (message["function"] != null && message.hasOwnProperty("function")) {
                let error = $root.in_proto.WebAPIResponse.FunctionStatus.verify(message["function"]);
                if (error)
                    return "function." + error;
            }
            if (message.folders != null && message.hasOwnProperty("folders")) {
                if (!Array.isArray(message.folders))
                    return "folders: array expected";
                for (let i = 0; i < message.folders.length; ++i) {
                    let error = $root.in_proto.WebAPIResponse.FolderUpdate.verify(message.folders[i]);
                    if (error)
                        return "folders." + error;
                }
            }
            if (message.clipboard != null && message.hasOwnProperty("clipboard"))
                if (!$util.isString(message.clipboard))
                    return "clipboard: string expected";
            if (message.formsReplaced != null && message.hasOwnProperty("formsReplaced")) {
                if (!Array.isArray(message.formsReplaced))
                    return "formsReplaced: array expected";
                for (let i = 0; i < message.formsReplaced.length; ++i)
                    if (!$util.isString(message.formsReplaced[i]))
                        return "formsReplaced: string[] expected";
            }
            return null;
        };

        /**
         * Creates a WebAPIResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.WebAPIResponse} WebAPIResponse
         */
        WebAPIResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.WebAPIResponse)
                return object;
            let message = new $root.in_proto.WebAPIResponse();
            if (object.elements != null) {
                if (typeof object.elements !== "object")
                    throw TypeError(".in_proto.WebAPIResponse.elements: object expected");
                message.elements = $root.in_proto.ElementList.fromObject(object.elements);
            }
            if (object.forms) {
                if (!Array.isArray(object.forms))
                    throw TypeError(".in_proto.WebAPIResponse.forms: array expected");
                message.forms = [];
                for (let i = 0; i < object.forms.length; ++i)
                    message.forms[i] = String(object.forms[i]);
            }
            if (object.topForm != null)
                message.topForm = String(object.topForm);
            if (object.cycles) {
                if (!Array.isArray(object.cycles))
                    throw TypeError(".in_proto.WebAPIResponse.cycles: array expected");
                message.cycles = [];
                for (let i = 0; i < object.cycles.length; ++i)
                    message.cycles[i] = String(object.cycles[i]);
            }
            if (object["function"] != null) {
                if (typeof object["function"] !== "object")
                    throw TypeError(".in_proto.WebAPIResponse.function: object expected");
                message["function"] = $root.in_proto.WebAPIResponse.FunctionStatus.fromObject(object["function"]);
            }
            if (object.folders) {
                if (!Array.isArray(object.folders))
                    throw TypeError(".in_proto.WebAPIResponse.folders: array expected");
                message.folders = [];
                for (let i = 0; i < object.folders.length; ++i) {
                    if (typeof object.folders[i] !== "object")
                        throw TypeError(".in_proto.WebAPIResponse.folders: object expected");
                    message.folders[i] = $root.in_proto.WebAPIResponse.FolderUpdate.fromObject(object.folders[i]);
                }
            }
            if (object.clipboard != null)
                message.clipboard = String(object.clipboard);
            if (object.formsReplaced) {
                if (!Array.isArray(object.formsReplaced))
                    throw TypeError(".in_proto.WebAPIResponse.formsReplaced: array expected");
                message.formsReplaced = [];
                for (let i = 0; i < object.formsReplaced.length; ++i)
                    message.formsReplaced[i] = String(object.formsReplaced[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebAPIResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {in_proto.WebAPIResponse} message WebAPIResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebAPIResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.forms = [];
                object.cycles = [];
                object.folders = [];
                object.formsReplaced = [];
            }
            if (options.defaults) {
                object.elements = null;
                object.topForm = "";
                object["function"] = null;
                object.clipboard = "";
            }
            if (message.elements != null && message.hasOwnProperty("elements"))
                object.elements = $root.in_proto.ElementList.toObject(message.elements, options);
            if (message.forms && message.forms.length) {
                object.forms = [];
                for (let j = 0; j < message.forms.length; ++j)
                    object.forms[j] = message.forms[j];
            }
            if (message.topForm != null && message.hasOwnProperty("topForm"))
                object.topForm = message.topForm;
            if (message.cycles && message.cycles.length) {
                object.cycles = [];
                for (let j = 0; j < message.cycles.length; ++j)
                    object.cycles[j] = message.cycles[j];
            }
            if (message["function"] != null && message.hasOwnProperty("function"))
                object["function"] = $root.in_proto.WebAPIResponse.FunctionStatus.toObject(message["function"], options);
            if (message.folders && message.folders.length) {
                object.folders = [];
                for (let j = 0; j < message.folders.length; ++j)
                    object.folders[j] = $root.in_proto.WebAPIResponse.FolderUpdate.toObject(message.folders[j], options);
            }
            if (message.clipboard != null && message.hasOwnProperty("clipboard"))
                object.clipboard = message.clipboard;
            if (message.formsReplaced && message.formsReplaced.length) {
                object.formsReplaced = [];
                for (let j = 0; j < message.formsReplaced.length; ++j)
                    object.formsReplaced[j] = message.formsReplaced[j];
            }
            return object;
        };

        /**
         * Converts this WebAPIResponse to JSON.
         * @function toJSON
         * @memberof in_proto.WebAPIResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebAPIResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebAPIResponse
         * @function getTypeUrl
         * @memberof in_proto.WebAPIResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebAPIResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.WebAPIResponse";
        };

        WebAPIResponse.FunctionStatus = (function() {

            /**
             * Properties of a FunctionStatus.
             * @memberof in_proto.WebAPIResponse
             * @interface IFunctionStatus
             * @property {string|null} [status] FunctionStatus status
             * @property {string|null} [message] FunctionStatus message
             * @property {string|null} [name] FunctionStatus name
             * @property {boolean|null} [exit] FunctionStatus exit
             * @property {string|null} [openUrl] FunctionStatus openUrl
             */

            /**
             * Constructs a new FunctionStatus.
             * @memberof in_proto.WebAPIResponse
             * @classdesc Represents a FunctionStatus.
             * @implements IFunctionStatus
             * @constructor
             * @param {in_proto.WebAPIResponse.IFunctionStatus=} [properties] Properties to set
             */
            function FunctionStatus(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FunctionStatus status.
             * @member {string} status
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @instance
             */
            FunctionStatus.prototype.status = "";

            /**
             * FunctionStatus message.
             * @member {string} message
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @instance
             */
            FunctionStatus.prototype.message = "";

            /**
             * FunctionStatus name.
             * @member {string} name
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @instance
             */
            FunctionStatus.prototype.name = "";

            /**
             * FunctionStatus exit.
             * @member {boolean} exit
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @instance
             */
            FunctionStatus.prototype.exit = false;

            /**
             * FunctionStatus openUrl.
             * @member {string} openUrl
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @instance
             */
            FunctionStatus.prototype.openUrl = "";

            /**
             * Creates a new FunctionStatus instance using the specified properties.
             * @function create
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {in_proto.WebAPIResponse.IFunctionStatus=} [properties] Properties to set
             * @returns {in_proto.WebAPIResponse.FunctionStatus} FunctionStatus instance
             */
            FunctionStatus.create = function create(properties) {
                return new FunctionStatus(properties);
            };

            /**
             * Encodes the specified FunctionStatus message. Does not implicitly {@link in_proto.WebAPIResponse.FunctionStatus.verify|verify} messages.
             * @function encode
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {in_proto.WebAPIResponse.IFunctionStatus} message FunctionStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FunctionStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.exit != null && Object.hasOwnProperty.call(message, "exit"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.exit);
                if (message.openUrl != null && Object.hasOwnProperty.call(message, "openUrl"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.openUrl);
                return writer;
            };

            /**
             * Encodes the specified FunctionStatus message, length delimited. Does not implicitly {@link in_proto.WebAPIResponse.FunctionStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {in_proto.WebAPIResponse.IFunctionStatus} message FunctionStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FunctionStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FunctionStatus message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.WebAPIResponse.FunctionStatus} FunctionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FunctionStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.WebAPIResponse.FunctionStatus();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = reader.string();
                            break;
                        }
                    case 2: {
                            message.message = reader.string();
                            break;
                        }
                    case 3: {
                            message.name = reader.string();
                            break;
                        }
                    case 4: {
                            message.exit = reader.bool();
                            break;
                        }
                    case 5: {
                            message.openUrl = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FunctionStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.WebAPIResponse.FunctionStatus} FunctionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FunctionStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FunctionStatus message.
             * @function verify
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FunctionStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isString(message.status))
                        return "status: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.exit != null && message.hasOwnProperty("exit"))
                    if (typeof message.exit !== "boolean")
                        return "exit: boolean expected";
                if (message.openUrl != null && message.hasOwnProperty("openUrl"))
                    if (!$util.isString(message.openUrl))
                        return "openUrl: string expected";
                return null;
            };

            /**
             * Creates a FunctionStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.WebAPIResponse.FunctionStatus} FunctionStatus
             */
            FunctionStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.WebAPIResponse.FunctionStatus)
                    return object;
                let message = new $root.in_proto.WebAPIResponse.FunctionStatus();
                if (object.status != null)
                    message.status = String(object.status);
                if (object.message != null)
                    message.message = String(object.message);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.exit != null)
                    message.exit = Boolean(object.exit);
                if (object.openUrl != null)
                    message.openUrl = String(object.openUrl);
                return message;
            };

            /**
             * Creates a plain object from a FunctionStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {in_proto.WebAPIResponse.FunctionStatus} message FunctionStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FunctionStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = "";
                    object.message = "";
                    object.name = "";
                    object.exit = false;
                    object.openUrl = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.exit != null && message.hasOwnProperty("exit"))
                    object.exit = message.exit;
                if (message.openUrl != null && message.hasOwnProperty("openUrl"))
                    object.openUrl = message.openUrl;
                return object;
            };

            /**
             * Converts this FunctionStatus to JSON.
             * @function toJSON
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FunctionStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FunctionStatus
             * @function getTypeUrl
             * @memberof in_proto.WebAPIResponse.FunctionStatus
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FunctionStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.WebAPIResponse.FunctionStatus";
            };

            return FunctionStatus;
        })();

        WebAPIResponse.FolderUpdate = (function() {

            /**
             * Properties of a FolderUpdate.
             * @memberof in_proto.WebAPIResponse
             * @interface IFolderUpdate
             * @property {number|null} [active] FolderUpdate active
             * @property {string|null} [name] FolderUpdate name
             * @property {Array.<number>|null} [ids] FolderUpdate ids
             * @property {Array.<boolean>|null} [visiblePages] FolderUpdate visiblePages
             */

            /**
             * Constructs a new FolderUpdate.
             * @memberof in_proto.WebAPIResponse
             * @classdesc Represents a FolderUpdate.
             * @implements IFolderUpdate
             * @constructor
             * @param {in_proto.WebAPIResponse.IFolderUpdate=} [properties] Properties to set
             */
            function FolderUpdate(properties) {
                this.ids = [];
                this.visiblePages = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FolderUpdate active.
             * @member {number} active
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @instance
             */
            FolderUpdate.prototype.active = 0;

            /**
             * FolderUpdate name.
             * @member {string} name
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @instance
             */
            FolderUpdate.prototype.name = "";

            /**
             * FolderUpdate ids.
             * @member {Array.<number>} ids
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @instance
             */
            FolderUpdate.prototype.ids = $util.emptyArray;

            /**
             * FolderUpdate visiblePages.
             * @member {Array.<boolean>} visiblePages
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @instance
             */
            FolderUpdate.prototype.visiblePages = $util.emptyArray;

            /**
             * Creates a new FolderUpdate instance using the specified properties.
             * @function create
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {in_proto.WebAPIResponse.IFolderUpdate=} [properties] Properties to set
             * @returns {in_proto.WebAPIResponse.FolderUpdate} FolderUpdate instance
             */
            FolderUpdate.create = function create(properties) {
                return new FolderUpdate(properties);
            };

            /**
             * Encodes the specified FolderUpdate message. Does not implicitly {@link in_proto.WebAPIResponse.FolderUpdate.verify|verify} messages.
             * @function encode
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {in_proto.WebAPIResponse.IFolderUpdate} message FolderUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FolderUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.active != null && Object.hasOwnProperty.call(message, "active"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.active);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.ids != null && message.ids.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (let i = 0; i < message.ids.length; ++i)
                        writer.int32(message.ids[i]);
                    writer.ldelim();
                }
                if (message.visiblePages != null && message.visiblePages.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (let i = 0; i < message.visiblePages.length; ++i)
                        writer.bool(message.visiblePages[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified FolderUpdate message, length delimited. Does not implicitly {@link in_proto.WebAPIResponse.FolderUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {in_proto.WebAPIResponse.IFolderUpdate} message FolderUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FolderUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FolderUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.WebAPIResponse.FolderUpdate} FolderUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FolderUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.WebAPIResponse.FolderUpdate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.active = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.ids && message.ids.length))
                                message.ids = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.ids.push(reader.int32());
                            } else
                                message.ids.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.visiblePages && message.visiblePages.length))
                                message.visiblePages = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.visiblePages.push(reader.bool());
                            } else
                                message.visiblePages.push(reader.bool());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FolderUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.WebAPIResponse.FolderUpdate} FolderUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FolderUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FolderUpdate message.
             * @function verify
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FolderUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.active != null && message.hasOwnProperty("active"))
                    if (!$util.isInteger(message.active))
                        return "active: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.ids != null && message.hasOwnProperty("ids")) {
                    if (!Array.isArray(message.ids))
                        return "ids: array expected";
                    for (let i = 0; i < message.ids.length; ++i)
                        if (!$util.isInteger(message.ids[i]))
                            return "ids: integer[] expected";
                }
                if (message.visiblePages != null && message.hasOwnProperty("visiblePages")) {
                    if (!Array.isArray(message.visiblePages))
                        return "visiblePages: array expected";
                    for (let i = 0; i < message.visiblePages.length; ++i)
                        if (typeof message.visiblePages[i] !== "boolean")
                            return "visiblePages: boolean[] expected";
                }
                return null;
            };

            /**
             * Creates a FolderUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.WebAPIResponse.FolderUpdate} FolderUpdate
             */
            FolderUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.WebAPIResponse.FolderUpdate)
                    return object;
                let message = new $root.in_proto.WebAPIResponse.FolderUpdate();
                if (object.active != null)
                    message.active = object.active >>> 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.ids) {
                    if (!Array.isArray(object.ids))
                        throw TypeError(".in_proto.WebAPIResponse.FolderUpdate.ids: array expected");
                    message.ids = [];
                    for (let i = 0; i < object.ids.length; ++i)
                        message.ids[i] = object.ids[i] | 0;
                }
                if (object.visiblePages) {
                    if (!Array.isArray(object.visiblePages))
                        throw TypeError(".in_proto.WebAPIResponse.FolderUpdate.visiblePages: array expected");
                    message.visiblePages = [];
                    for (let i = 0; i < object.visiblePages.length; ++i)
                        message.visiblePages[i] = Boolean(object.visiblePages[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FolderUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {in_proto.WebAPIResponse.FolderUpdate} message FolderUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FolderUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.ids = [];
                    object.visiblePages = [];
                }
                if (options.defaults) {
                    object.active = 0;
                    object.name = "";
                }
                if (message.active != null && message.hasOwnProperty("active"))
                    object.active = message.active;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.ids && message.ids.length) {
                    object.ids = [];
                    for (let j = 0; j < message.ids.length; ++j)
                        object.ids[j] = message.ids[j];
                }
                if (message.visiblePages && message.visiblePages.length) {
                    object.visiblePages = [];
                    for (let j = 0; j < message.visiblePages.length; ++j)
                        object.visiblePages[j] = message.visiblePages[j];
                }
                return object;
            };

            /**
             * Converts this FolderUpdate to JSON.
             * @function toJSON
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FolderUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FolderUpdate
             * @function getTypeUrl
             * @memberof in_proto.WebAPIResponse.FolderUpdate
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FolderUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.WebAPIResponse.FolderUpdate";
            };

            return FolderUpdate;
        })();

        return WebAPIResponse;
    })();

    in_proto.ControlResponse = (function() {

        /**
         * Properties of a ControlResponse.
         * @memberof in_proto
         * @interface IControlResponse
         * @property {string|null} [status] ControlResponse status
         * @property {Array.<in_proto.Plot2D.IPlotItem>|null} [plotitems] ControlResponse plotitems
         */

        /**
         * Constructs a new ControlResponse.
         * @memberof in_proto
         * @classdesc Represents a ControlResponse.
         * @implements IControlResponse
         * @constructor
         * @param {in_proto.IControlResponse=} [properties] Properties to set
         */
        function ControlResponse(properties) {
            this.plotitems = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ControlResponse status.
         * @member {string} status
         * @memberof in_proto.ControlResponse
         * @instance
         */
        ControlResponse.prototype.status = "";

        /**
         * ControlResponse plotitems.
         * @member {Array.<in_proto.Plot2D.IPlotItem>} plotitems
         * @memberof in_proto.ControlResponse
         * @instance
         */
        ControlResponse.prototype.plotitems = $util.emptyArray;

        /**
         * Creates a new ControlResponse instance using the specified properties.
         * @function create
         * @memberof in_proto.ControlResponse
         * @static
         * @param {in_proto.IControlResponse=} [properties] Properties to set
         * @returns {in_proto.ControlResponse} ControlResponse instance
         */
        ControlResponse.create = function create(properties) {
            return new ControlResponse(properties);
        };

        /**
         * Encodes the specified ControlResponse message. Does not implicitly {@link in_proto.ControlResponse.verify|verify} messages.
         * @function encode
         * @memberof in_proto.ControlResponse
         * @static
         * @param {in_proto.IControlResponse} message ControlResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ControlResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
            if (message.plotitems != null && message.plotitems.length)
                for (let i = 0; i < message.plotitems.length; ++i)
                    $root.in_proto.Plot2D.PlotItem.encode(message.plotitems[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ControlResponse message, length delimited. Does not implicitly {@link in_proto.ControlResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.ControlResponse
         * @static
         * @param {in_proto.IControlResponse} message ControlResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ControlResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ControlResponse message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.ControlResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.ControlResponse} ControlResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ControlResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.ControlResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.plotitems && message.plotitems.length))
                            message.plotitems = [];
                        message.plotitems.push($root.in_proto.Plot2D.PlotItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ControlResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.ControlResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.ControlResponse} ControlResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ControlResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ControlResponse message.
         * @function verify
         * @memberof in_proto.ControlResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ControlResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.plotitems != null && message.hasOwnProperty("plotitems")) {
                if (!Array.isArray(message.plotitems))
                    return "plotitems: array expected";
                for (let i = 0; i < message.plotitems.length; ++i) {
                    let error = $root.in_proto.Plot2D.PlotItem.verify(message.plotitems[i]);
                    if (error)
                        return "plotitems." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ControlResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.ControlResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.ControlResponse} ControlResponse
         */
        ControlResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.ControlResponse)
                return object;
            let message = new $root.in_proto.ControlResponse();
            if (object.status != null)
                message.status = String(object.status);
            if (object.plotitems) {
                if (!Array.isArray(object.plotitems))
                    throw TypeError(".in_proto.ControlResponse.plotitems: array expected");
                message.plotitems = [];
                for (let i = 0; i < object.plotitems.length; ++i) {
                    if (typeof object.plotitems[i] !== "object")
                        throw TypeError(".in_proto.ControlResponse.plotitems: object expected");
                    message.plotitems[i] = $root.in_proto.Plot2D.PlotItem.fromObject(object.plotitems[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ControlResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.ControlResponse
         * @static
         * @param {in_proto.ControlResponse} message ControlResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ControlResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.plotitems = [];
            if (options.defaults)
                object.status = "";
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.plotitems && message.plotitems.length) {
                object.plotitems = [];
                for (let j = 0; j < message.plotitems.length; ++j)
                    object.plotitems[j] = $root.in_proto.Plot2D.PlotItem.toObject(message.plotitems[j], options);
            }
            return object;
        };

        /**
         * Converts this ControlResponse to JSON.
         * @function toJSON
         * @memberof in_proto.ControlResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ControlResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ControlResponse
         * @function getTypeUrl
         * @memberof in_proto.ControlResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ControlResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.ControlResponse";
        };

        return ControlResponse;
    })();

    in_proto.Plot2D = (function() {

        /**
         * Properties of a Plot2D.
         * @memberof in_proto
         * @interface IPlot2D
         * @property {in_proto.IGuiElement|null} [base] Plot2D base
         * @property {number|null} [fixedWidth] Plot2D fixedWidth
         * @property {number|null} [fixedHeight] Plot2D fixedHeight
         * @property {string|null} [headerText] Plot2D headerText
         * @property {string|null} [footerText] Plot2D footerText
         * @property {string|null} [menuLabel] Plot2D menuLabel
         * @property {in_proto.Plot2D.IAxis|null} [axisX] Plot2D axisX
         * @property {in_proto.Plot2D.IAxis|null} [axisY1] Plot2D axisY1
         * @property {in_proto.Plot2D.IAxis|null} [axisY2] Plot2D axisY2
         * @property {Array.<in_proto.Plot2D.IPlotItem>|null} [plotItems] Plot2D plotItems
         * @property {Array.<in_proto.Plot2D.IAnnotation>|null} [xAnnotation] Plot2D xAnnotation
         * @property {number|null} [minX] Plot2D minX
         * @property {number|null} [maxX] Plot2D maxX
         * @property {number|null} [minY] Plot2D minY
         * @property {number|null} [maxY] Plot2D maxY
         * @property {string|null} [action] Plot2D action
         */

        /**
         * Constructs a new Plot2D.
         * @memberof in_proto
         * @classdesc Represents a Plot2D.
         * @implements IPlot2D
         * @constructor
         * @param {in_proto.IPlot2D=} [properties] Properties to set
         */
        function Plot2D(properties) {
            this.plotItems = [];
            this.xAnnotation = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Plot2D base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.base = null;

        /**
         * Plot2D fixedWidth.
         * @member {number} fixedWidth
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.fixedWidth = 0;

        /**
         * Plot2D fixedHeight.
         * @member {number} fixedHeight
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.fixedHeight = 0;

        /**
         * Plot2D headerText.
         * @member {string} headerText
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.headerText = "";

        /**
         * Plot2D footerText.
         * @member {string} footerText
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.footerText = "";

        /**
         * Plot2D menuLabel.
         * @member {string} menuLabel
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.menuLabel = "";

        /**
         * Plot2D axisX.
         * @member {in_proto.Plot2D.IAxis|null|undefined} axisX
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.axisX = null;

        /**
         * Plot2D axisY1.
         * @member {in_proto.Plot2D.IAxis|null|undefined} axisY1
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.axisY1 = null;

        /**
         * Plot2D axisY2.
         * @member {in_proto.Plot2D.IAxis|null|undefined} axisY2
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.axisY2 = null;

        /**
         * Plot2D plotItems.
         * @member {Array.<in_proto.Plot2D.IPlotItem>} plotItems
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.plotItems = $util.emptyArray;

        /**
         * Plot2D xAnnotation.
         * @member {Array.<in_proto.Plot2D.IAnnotation>} xAnnotation
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.xAnnotation = $util.emptyArray;

        /**
         * Plot2D minX.
         * @member {number} minX
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.minX = 0;

        /**
         * Plot2D maxX.
         * @member {number} maxX
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.maxX = 0;

        /**
         * Plot2D minY.
         * @member {number} minY
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.minY = 0;

        /**
         * Plot2D maxY.
         * @member {number} maxY
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.maxY = 0;

        /**
         * Plot2D action.
         * @member {string} action
         * @memberof in_proto.Plot2D
         * @instance
         */
        Plot2D.prototype.action = "";

        /**
         * Creates a new Plot2D instance using the specified properties.
         * @function create
         * @memberof in_proto.Plot2D
         * @static
         * @param {in_proto.IPlot2D=} [properties] Properties to set
         * @returns {in_proto.Plot2D} Plot2D instance
         */
        Plot2D.create = function create(properties) {
            return new Plot2D(properties);
        };

        /**
         * Encodes the specified Plot2D message. Does not implicitly {@link in_proto.Plot2D.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Plot2D
         * @static
         * @param {in_proto.IPlot2D} message Plot2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Plot2D.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.fixedWidth != null && Object.hasOwnProperty.call(message, "fixedWidth"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.fixedWidth);
            if (message.fixedHeight != null && Object.hasOwnProperty.call(message, "fixedHeight"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.fixedHeight);
            if (message.headerText != null && Object.hasOwnProperty.call(message, "headerText"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.headerText);
            if (message.footerText != null && Object.hasOwnProperty.call(message, "footerText"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.footerText);
            if (message.menuLabel != null && Object.hasOwnProperty.call(message, "menuLabel"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.menuLabel);
            if (message.axisX != null && Object.hasOwnProperty.call(message, "axisX"))
                $root.in_proto.Plot2D.Axis.encode(message.axisX, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.axisY1 != null && Object.hasOwnProperty.call(message, "axisY1"))
                $root.in_proto.Plot2D.Axis.encode(message.axisY1, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.axisY2 != null && Object.hasOwnProperty.call(message, "axisY2"))
                $root.in_proto.Plot2D.Axis.encode(message.axisY2, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.plotItems != null && message.plotItems.length)
                for (let i = 0; i < message.plotItems.length; ++i)
                    $root.in_proto.Plot2D.PlotItem.encode(message.plotItems[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.xAnnotation != null && message.xAnnotation.length)
                for (let i = 0; i < message.xAnnotation.length; ++i)
                    $root.in_proto.Plot2D.Annotation.encode(message.xAnnotation[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.minX != null && Object.hasOwnProperty.call(message, "minX"))
                writer.uint32(/* id 12, wireType 1 =*/97).double(message.minX);
            if (message.maxX != null && Object.hasOwnProperty.call(message, "maxX"))
                writer.uint32(/* id 13, wireType 1 =*/105).double(message.maxX);
            if (message.minY != null && Object.hasOwnProperty.call(message, "minY"))
                writer.uint32(/* id 14, wireType 1 =*/113).double(message.minY);
            if (message.maxY != null && Object.hasOwnProperty.call(message, "maxY"))
                writer.uint32(/* id 15, wireType 1 =*/121).double(message.maxY);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified Plot2D message, length delimited. Does not implicitly {@link in_proto.Plot2D.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Plot2D
         * @static
         * @param {in_proto.IPlot2D} message Plot2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Plot2D.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Plot2D message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Plot2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Plot2D} Plot2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Plot2D.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Plot2D();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.fixedWidth = reader.uint32();
                        break;
                    }
                case 3: {
                        message.fixedHeight = reader.uint32();
                        break;
                    }
                case 4: {
                        message.headerText = reader.string();
                        break;
                    }
                case 5: {
                        message.footerText = reader.string();
                        break;
                    }
                case 6: {
                        message.menuLabel = reader.string();
                        break;
                    }
                case 7: {
                        message.axisX = $root.in_proto.Plot2D.Axis.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.axisY1 = $root.in_proto.Plot2D.Axis.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.axisY2 = $root.in_proto.Plot2D.Axis.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        if (!(message.plotItems && message.plotItems.length))
                            message.plotItems = [];
                        message.plotItems.push($root.in_proto.Plot2D.PlotItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 11: {
                        if (!(message.xAnnotation && message.xAnnotation.length))
                            message.xAnnotation = [];
                        message.xAnnotation.push($root.in_proto.Plot2D.Annotation.decode(reader, reader.uint32()));
                        break;
                    }
                case 12: {
                        message.minX = reader.double();
                        break;
                    }
                case 13: {
                        message.maxX = reader.double();
                        break;
                    }
                case 14: {
                        message.minY = reader.double();
                        break;
                    }
                case 15: {
                        message.maxY = reader.double();
                        break;
                    }
                case 16: {
                        message.action = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Plot2D message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Plot2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Plot2D} Plot2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Plot2D.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Plot2D message.
         * @function verify
         * @memberof in_proto.Plot2D
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Plot2D.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.fixedWidth != null && message.hasOwnProperty("fixedWidth"))
                if (!$util.isInteger(message.fixedWidth))
                    return "fixedWidth: integer expected";
            if (message.fixedHeight != null && message.hasOwnProperty("fixedHeight"))
                if (!$util.isInteger(message.fixedHeight))
                    return "fixedHeight: integer expected";
            if (message.headerText != null && message.hasOwnProperty("headerText"))
                if (!$util.isString(message.headerText))
                    return "headerText: string expected";
            if (message.footerText != null && message.hasOwnProperty("footerText"))
                if (!$util.isString(message.footerText))
                    return "footerText: string expected";
            if (message.menuLabel != null && message.hasOwnProperty("menuLabel"))
                if (!$util.isString(message.menuLabel))
                    return "menuLabel: string expected";
            if (message.axisX != null && message.hasOwnProperty("axisX")) {
                let error = $root.in_proto.Plot2D.Axis.verify(message.axisX);
                if (error)
                    return "axisX." + error;
            }
            if (message.axisY1 != null && message.hasOwnProperty("axisY1")) {
                let error = $root.in_proto.Plot2D.Axis.verify(message.axisY1);
                if (error)
                    return "axisY1." + error;
            }
            if (message.axisY2 != null && message.hasOwnProperty("axisY2")) {
                let error = $root.in_proto.Plot2D.Axis.verify(message.axisY2);
                if (error)
                    return "axisY2." + error;
            }
            if (message.plotItems != null && message.hasOwnProperty("plotItems")) {
                if (!Array.isArray(message.plotItems))
                    return "plotItems: array expected";
                for (let i = 0; i < message.plotItems.length; ++i) {
                    let error = $root.in_proto.Plot2D.PlotItem.verify(message.plotItems[i]);
                    if (error)
                        return "plotItems." + error;
                }
            }
            if (message.xAnnotation != null && message.hasOwnProperty("xAnnotation")) {
                if (!Array.isArray(message.xAnnotation))
                    return "xAnnotation: array expected";
                for (let i = 0; i < message.xAnnotation.length; ++i) {
                    let error = $root.in_proto.Plot2D.Annotation.verify(message.xAnnotation[i]);
                    if (error)
                        return "xAnnotation." + error;
                }
            }
            if (message.minX != null && message.hasOwnProperty("minX"))
                if (typeof message.minX !== "number")
                    return "minX: number expected";
            if (message.maxX != null && message.hasOwnProperty("maxX"))
                if (typeof message.maxX !== "number")
                    return "maxX: number expected";
            if (message.minY != null && message.hasOwnProperty("minY"))
                if (typeof message.minY !== "number")
                    return "minY: number expected";
            if (message.maxY != null && message.hasOwnProperty("maxY"))
                if (typeof message.maxY !== "number")
                    return "maxY: number expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates a Plot2D message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Plot2D
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Plot2D} Plot2D
         */
        Plot2D.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Plot2D)
                return object;
            let message = new $root.in_proto.Plot2D();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Plot2D.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.fixedWidth != null)
                message.fixedWidth = object.fixedWidth >>> 0;
            if (object.fixedHeight != null)
                message.fixedHeight = object.fixedHeight >>> 0;
            if (object.headerText != null)
                message.headerText = String(object.headerText);
            if (object.footerText != null)
                message.footerText = String(object.footerText);
            if (object.menuLabel != null)
                message.menuLabel = String(object.menuLabel);
            if (object.axisX != null) {
                if (typeof object.axisX !== "object")
                    throw TypeError(".in_proto.Plot2D.axisX: object expected");
                message.axisX = $root.in_proto.Plot2D.Axis.fromObject(object.axisX);
            }
            if (object.axisY1 != null) {
                if (typeof object.axisY1 !== "object")
                    throw TypeError(".in_proto.Plot2D.axisY1: object expected");
                message.axisY1 = $root.in_proto.Plot2D.Axis.fromObject(object.axisY1);
            }
            if (object.axisY2 != null) {
                if (typeof object.axisY2 !== "object")
                    throw TypeError(".in_proto.Plot2D.axisY2: object expected");
                message.axisY2 = $root.in_proto.Plot2D.Axis.fromObject(object.axisY2);
            }
            if (object.plotItems) {
                if (!Array.isArray(object.plotItems))
                    throw TypeError(".in_proto.Plot2D.plotItems: array expected");
                message.plotItems = [];
                for (let i = 0; i < object.plotItems.length; ++i) {
                    if (typeof object.plotItems[i] !== "object")
                        throw TypeError(".in_proto.Plot2D.plotItems: object expected");
                    message.plotItems[i] = $root.in_proto.Plot2D.PlotItem.fromObject(object.plotItems[i]);
                }
            }
            if (object.xAnnotation) {
                if (!Array.isArray(object.xAnnotation))
                    throw TypeError(".in_proto.Plot2D.xAnnotation: array expected");
                message.xAnnotation = [];
                for (let i = 0; i < object.xAnnotation.length; ++i) {
                    if (typeof object.xAnnotation[i] !== "object")
                        throw TypeError(".in_proto.Plot2D.xAnnotation: object expected");
                    message.xAnnotation[i] = $root.in_proto.Plot2D.Annotation.fromObject(object.xAnnotation[i]);
                }
            }
            if (object.minX != null)
                message.minX = Number(object.minX);
            if (object.maxX != null)
                message.maxX = Number(object.maxX);
            if (object.minY != null)
                message.minY = Number(object.minY);
            if (object.maxY != null)
                message.maxY = Number(object.maxY);
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from a Plot2D message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Plot2D
         * @static
         * @param {in_proto.Plot2D} message Plot2D
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Plot2D.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.plotItems = [];
                object.xAnnotation = [];
            }
            if (options.defaults) {
                object.base = null;
                object.fixedWidth = 0;
                object.fixedHeight = 0;
                object.headerText = "";
                object.footerText = "";
                object.menuLabel = "";
                object.axisX = null;
                object.axisY1 = null;
                object.axisY2 = null;
                object.minX = 0;
                object.maxX = 0;
                object.minY = 0;
                object.maxY = 0;
                object.action = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.fixedWidth != null && message.hasOwnProperty("fixedWidth"))
                object.fixedWidth = message.fixedWidth;
            if (message.fixedHeight != null && message.hasOwnProperty("fixedHeight"))
                object.fixedHeight = message.fixedHeight;
            if (message.headerText != null && message.hasOwnProperty("headerText"))
                object.headerText = message.headerText;
            if (message.footerText != null && message.hasOwnProperty("footerText"))
                object.footerText = message.footerText;
            if (message.menuLabel != null && message.hasOwnProperty("menuLabel"))
                object.menuLabel = message.menuLabel;
            if (message.axisX != null && message.hasOwnProperty("axisX"))
                object.axisX = $root.in_proto.Plot2D.Axis.toObject(message.axisX, options);
            if (message.axisY1 != null && message.hasOwnProperty("axisY1"))
                object.axisY1 = $root.in_proto.Plot2D.Axis.toObject(message.axisY1, options);
            if (message.axisY2 != null && message.hasOwnProperty("axisY2"))
                object.axisY2 = $root.in_proto.Plot2D.Axis.toObject(message.axisY2, options);
            if (message.plotItems && message.plotItems.length) {
                object.plotItems = [];
                for (let j = 0; j < message.plotItems.length; ++j)
                    object.plotItems[j] = $root.in_proto.Plot2D.PlotItem.toObject(message.plotItems[j], options);
            }
            if (message.xAnnotation && message.xAnnotation.length) {
                object.xAnnotation = [];
                for (let j = 0; j < message.xAnnotation.length; ++j)
                    object.xAnnotation[j] = $root.in_proto.Plot2D.Annotation.toObject(message.xAnnotation[j], options);
            }
            if (message.minX != null && message.hasOwnProperty("minX"))
                object.minX = options.json && !isFinite(message.minX) ? String(message.minX) : message.minX;
            if (message.maxX != null && message.hasOwnProperty("maxX"))
                object.maxX = options.json && !isFinite(message.maxX) ? String(message.maxX) : message.maxX;
            if (message.minY != null && message.hasOwnProperty("minY"))
                object.minY = options.json && !isFinite(message.minY) ? String(message.minY) : message.minY;
            if (message.maxY != null && message.hasOwnProperty("maxY"))
                object.maxY = options.json && !isFinite(message.maxY) ? String(message.maxY) : message.maxY;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this Plot2D to JSON.
         * @function toJSON
         * @memberof in_proto.Plot2D
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Plot2D.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Plot2D
         * @function getTypeUrl
         * @memberof in_proto.Plot2D
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Plot2D.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Plot2D";
        };

        Plot2D.Axis = (function() {

            /**
             * Properties of an Axis.
             * @memberof in_proto.Plot2D
             * @interface IAxis
             * @property {string|null} [title] Axis title
             * @property {boolean|null} [logarithmic] Axis logarithmic
             * @property {number|null} [min] Axis min
             * @property {number|null} [max] Axis max
             * @property {string|null} [style] Axis style
             */

            /**
             * Constructs a new Axis.
             * @memberof in_proto.Plot2D
             * @classdesc Represents an Axis.
             * @implements IAxis
             * @constructor
             * @param {in_proto.Plot2D.IAxis=} [properties] Properties to set
             */
            function Axis(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Axis title.
             * @member {string} title
             * @memberof in_proto.Plot2D.Axis
             * @instance
             */
            Axis.prototype.title = "";

            /**
             * Axis logarithmic.
             * @member {boolean} logarithmic
             * @memberof in_proto.Plot2D.Axis
             * @instance
             */
            Axis.prototype.logarithmic = false;

            /**
             * Axis min.
             * @member {number} min
             * @memberof in_proto.Plot2D.Axis
             * @instance
             */
            Axis.prototype.min = 0;

            /**
             * Axis max.
             * @member {number} max
             * @memberof in_proto.Plot2D.Axis
             * @instance
             */
            Axis.prototype.max = 0;

            /**
             * Axis style.
             * @member {string} style
             * @memberof in_proto.Plot2D.Axis
             * @instance
             */
            Axis.prototype.style = "";

            /**
             * Creates a new Axis instance using the specified properties.
             * @function create
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {in_proto.Plot2D.IAxis=} [properties] Properties to set
             * @returns {in_proto.Plot2D.Axis} Axis instance
             */
            Axis.create = function create(properties) {
                return new Axis(properties);
            };

            /**
             * Encodes the specified Axis message. Does not implicitly {@link in_proto.Plot2D.Axis.verify|verify} messages.
             * @function encode
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {in_proto.Plot2D.IAxis} message Axis message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Axis.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                if (message.logarithmic != null && Object.hasOwnProperty.call(message, "logarithmic"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.logarithmic);
                if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.min);
                if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.max);
                if (message.style != null && Object.hasOwnProperty.call(message, "style"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.style);
                return writer;
            };

            /**
             * Encodes the specified Axis message, length delimited. Does not implicitly {@link in_proto.Plot2D.Axis.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {in_proto.Plot2D.IAxis} message Axis message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Axis.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Axis message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.Plot2D.Axis} Axis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Axis.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Plot2D.Axis();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.title = reader.string();
                            break;
                        }
                    case 2: {
                            message.logarithmic = reader.bool();
                            break;
                        }
                    case 3: {
                            message.min = reader.double();
                            break;
                        }
                    case 4: {
                            message.max = reader.double();
                            break;
                        }
                    case 5: {
                            message.style = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Axis message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.Plot2D.Axis} Axis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Axis.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Axis message.
             * @function verify
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Axis.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.logarithmic != null && message.hasOwnProperty("logarithmic"))
                    if (typeof message.logarithmic !== "boolean")
                        return "logarithmic: boolean expected";
                if (message.min != null && message.hasOwnProperty("min"))
                    if (typeof message.min !== "number")
                        return "min: number expected";
                if (message.max != null && message.hasOwnProperty("max"))
                    if (typeof message.max !== "number")
                        return "max: number expected";
                if (message.style != null && message.hasOwnProperty("style"))
                    if (!$util.isString(message.style))
                        return "style: string expected";
                return null;
            };

            /**
             * Creates an Axis message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.Plot2D.Axis} Axis
             */
            Axis.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.Plot2D.Axis)
                    return object;
                let message = new $root.in_proto.Plot2D.Axis();
                if (object.title != null)
                    message.title = String(object.title);
                if (object.logarithmic != null)
                    message.logarithmic = Boolean(object.logarithmic);
                if (object.min != null)
                    message.min = Number(object.min);
                if (object.max != null)
                    message.max = Number(object.max);
                if (object.style != null)
                    message.style = String(object.style);
                return message;
            };

            /**
             * Creates a plain object from an Axis message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {in_proto.Plot2D.Axis} message Axis
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Axis.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.title = "";
                    object.logarithmic = false;
                    object.min = 0;
                    object.max = 0;
                    object.style = "";
                }
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.logarithmic != null && message.hasOwnProperty("logarithmic"))
                    object.logarithmic = message.logarithmic;
                if (message.min != null && message.hasOwnProperty("min"))
                    object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
                if (message.max != null && message.hasOwnProperty("max"))
                    object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
                if (message.style != null && message.hasOwnProperty("style"))
                    object.style = message.style;
                return object;
            };

            /**
             * Converts this Axis to JSON.
             * @function toJSON
             * @memberof in_proto.Plot2D.Axis
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Axis.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Axis
             * @function getTypeUrl
             * @memberof in_proto.Plot2D.Axis
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Axis.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.Plot2D.Axis";
            };

            return Axis;
        })();

        Plot2D.PlotItem = (function() {

            /**
             * Properties of a PlotItem.
             * @memberof in_proto.Plot2D
             * @interface IPlotItem
             * @property {string|null} [label] PlotItem label
             * @property {string|null} [axis] PlotItem axis
             * @property {boolean|null} [isMarker] PlotItem isMarker
             * @property {boolean|null} [legend] PlotItem legend
             * @property {string|null} [lineColor] PlotItem lineColor
             * @property {string|null} [symbolColor] PlotItem symbolColor
             * @property {string|null} [lineStyle] PlotItem lineStyle
             * @property {string|null} [symbolStyle] PlotItem symbolStyle
             * @property {number|null} [symbolSize] PlotItem symbolSize
             * @property {Array.<number>|null} [x] PlotItem x
             * @property {Array.<number>|null} [y] PlotItem y
             * @property {Array.<in_proto.Plot2D.PlotItem.IMarker>|null} [markerLabels] PlotItem markerLabels
             * @property {number|null} [minX] PlotItem minX
             * @property {number|null} [maxX] PlotItem maxX
             * @property {number|null} [minY] PlotItem minY
             * @property {number|null} [maxY] PlotItem maxY
             */

            /**
             * Constructs a new PlotItem.
             * @memberof in_proto.Plot2D
             * @classdesc Represents a PlotItem.
             * @implements IPlotItem
             * @constructor
             * @param {in_proto.Plot2D.IPlotItem=} [properties] Properties to set
             */
            function PlotItem(properties) {
                this.x = [];
                this.y = [];
                this.markerLabels = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlotItem label.
             * @member {string} label
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.label = "";

            /**
             * PlotItem axis.
             * @member {string} axis
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.axis = "";

            /**
             * PlotItem isMarker.
             * @member {boolean} isMarker
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.isMarker = false;

            /**
             * PlotItem legend.
             * @member {boolean} legend
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.legend = false;

            /**
             * PlotItem lineColor.
             * @member {string} lineColor
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.lineColor = "";

            /**
             * PlotItem symbolColor.
             * @member {string} symbolColor
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.symbolColor = "";

            /**
             * PlotItem lineStyle.
             * @member {string} lineStyle
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.lineStyle = "";

            /**
             * PlotItem symbolStyle.
             * @member {string} symbolStyle
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.symbolStyle = "";

            /**
             * PlotItem symbolSize.
             * @member {number} symbolSize
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.symbolSize = 0;

            /**
             * PlotItem x.
             * @member {Array.<number>} x
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.x = $util.emptyArray;

            /**
             * PlotItem y.
             * @member {Array.<number>} y
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.y = $util.emptyArray;

            /**
             * PlotItem markerLabels.
             * @member {Array.<in_proto.Plot2D.PlotItem.IMarker>} markerLabels
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.markerLabels = $util.emptyArray;

            /**
             * PlotItem minX.
             * @member {number} minX
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.minX = 0;

            /**
             * PlotItem maxX.
             * @member {number} maxX
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.maxX = 0;

            /**
             * PlotItem minY.
             * @member {number} minY
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.minY = 0;

            /**
             * PlotItem maxY.
             * @member {number} maxY
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             */
            PlotItem.prototype.maxY = 0;

            /**
             * Creates a new PlotItem instance using the specified properties.
             * @function create
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {in_proto.Plot2D.IPlotItem=} [properties] Properties to set
             * @returns {in_proto.Plot2D.PlotItem} PlotItem instance
             */
            PlotItem.create = function create(properties) {
                return new PlotItem(properties);
            };

            /**
             * Encodes the specified PlotItem message. Does not implicitly {@link in_proto.Plot2D.PlotItem.verify|verify} messages.
             * @function encode
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {in_proto.Plot2D.IPlotItem} message PlotItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlotItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.axis != null && Object.hasOwnProperty.call(message, "axis"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.axis);
                if (message.isMarker != null && Object.hasOwnProperty.call(message, "isMarker"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isMarker);
                if (message.legend != null && Object.hasOwnProperty.call(message, "legend"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.legend);
                if (message.lineColor != null && Object.hasOwnProperty.call(message, "lineColor"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.lineColor);
                if (message.symbolColor != null && Object.hasOwnProperty.call(message, "symbolColor"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.symbolColor);
                if (message.lineStyle != null && Object.hasOwnProperty.call(message, "lineStyle"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.lineStyle);
                if (message.symbolStyle != null && Object.hasOwnProperty.call(message, "symbolStyle"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.symbolStyle);
                if (message.symbolSize != null && Object.hasOwnProperty.call(message, "symbolSize"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.symbolSize);
                if (message.x != null && message.x.length) {
                    writer.uint32(/* id 10, wireType 2 =*/82).fork();
                    for (let i = 0; i < message.x.length; ++i)
                        writer.double(message.x[i]);
                    writer.ldelim();
                }
                if (message.y != null && message.y.length) {
                    writer.uint32(/* id 11, wireType 2 =*/90).fork();
                    for (let i = 0; i < message.y.length; ++i)
                        writer.double(message.y[i]);
                    writer.ldelim();
                }
                if (message.markerLabels != null && message.markerLabels.length)
                    for (let i = 0; i < message.markerLabels.length; ++i)
                        $root.in_proto.Plot2D.PlotItem.Marker.encode(message.markerLabels[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.minX != null && Object.hasOwnProperty.call(message, "minX"))
                    writer.uint32(/* id 13, wireType 1 =*/105).double(message.minX);
                if (message.maxX != null && Object.hasOwnProperty.call(message, "maxX"))
                    writer.uint32(/* id 14, wireType 1 =*/113).double(message.maxX);
                if (message.minY != null && Object.hasOwnProperty.call(message, "minY"))
                    writer.uint32(/* id 15, wireType 1 =*/121).double(message.minY);
                if (message.maxY != null && Object.hasOwnProperty.call(message, "maxY"))
                    writer.uint32(/* id 16, wireType 1 =*/129).double(message.maxY);
                return writer;
            };

            /**
             * Encodes the specified PlotItem message, length delimited. Does not implicitly {@link in_proto.Plot2D.PlotItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {in_proto.Plot2D.IPlotItem} message PlotItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlotItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlotItem message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.Plot2D.PlotItem} PlotItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlotItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Plot2D.PlotItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.label = reader.string();
                            break;
                        }
                    case 2: {
                            message.axis = reader.string();
                            break;
                        }
                    case 3: {
                            message.isMarker = reader.bool();
                            break;
                        }
                    case 4: {
                            message.legend = reader.bool();
                            break;
                        }
                    case 5: {
                            message.lineColor = reader.string();
                            break;
                        }
                    case 6: {
                            message.symbolColor = reader.string();
                            break;
                        }
                    case 7: {
                            message.lineStyle = reader.string();
                            break;
                        }
                    case 8: {
                            message.symbolStyle = reader.string();
                            break;
                        }
                    case 9: {
                            message.symbolSize = reader.uint32();
                            break;
                        }
                    case 10: {
                            if (!(message.x && message.x.length))
                                message.x = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.x.push(reader.double());
                            } else
                                message.x.push(reader.double());
                            break;
                        }
                    case 11: {
                            if (!(message.y && message.y.length))
                                message.y = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.y.push(reader.double());
                            } else
                                message.y.push(reader.double());
                            break;
                        }
                    case 12: {
                            if (!(message.markerLabels && message.markerLabels.length))
                                message.markerLabels = [];
                            message.markerLabels.push($root.in_proto.Plot2D.PlotItem.Marker.decode(reader, reader.uint32()));
                            break;
                        }
                    case 13: {
                            message.minX = reader.double();
                            break;
                        }
                    case 14: {
                            message.maxX = reader.double();
                            break;
                        }
                    case 15: {
                            message.minY = reader.double();
                            break;
                        }
                    case 16: {
                            message.maxY = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PlotItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.Plot2D.PlotItem} PlotItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlotItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlotItem message.
             * @function verify
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlotItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.axis != null && message.hasOwnProperty("axis"))
                    if (!$util.isString(message.axis))
                        return "axis: string expected";
                if (message.isMarker != null && message.hasOwnProperty("isMarker"))
                    if (typeof message.isMarker !== "boolean")
                        return "isMarker: boolean expected";
                if (message.legend != null && message.hasOwnProperty("legend"))
                    if (typeof message.legend !== "boolean")
                        return "legend: boolean expected";
                if (message.lineColor != null && message.hasOwnProperty("lineColor"))
                    if (!$util.isString(message.lineColor))
                        return "lineColor: string expected";
                if (message.symbolColor != null && message.hasOwnProperty("symbolColor"))
                    if (!$util.isString(message.symbolColor))
                        return "symbolColor: string expected";
                if (message.lineStyle != null && message.hasOwnProperty("lineStyle"))
                    if (!$util.isString(message.lineStyle))
                        return "lineStyle: string expected";
                if (message.symbolStyle != null && message.hasOwnProperty("symbolStyle"))
                    if (!$util.isString(message.symbolStyle))
                        return "symbolStyle: string expected";
                if (message.symbolSize != null && message.hasOwnProperty("symbolSize"))
                    if (!$util.isInteger(message.symbolSize))
                        return "symbolSize: integer expected";
                if (message.x != null && message.hasOwnProperty("x")) {
                    if (!Array.isArray(message.x))
                        return "x: array expected";
                    for (let i = 0; i < message.x.length; ++i)
                        if (typeof message.x[i] !== "number")
                            return "x: number[] expected";
                }
                if (message.y != null && message.hasOwnProperty("y")) {
                    if (!Array.isArray(message.y))
                        return "y: array expected";
                    for (let i = 0; i < message.y.length; ++i)
                        if (typeof message.y[i] !== "number")
                            return "y: number[] expected";
                }
                if (message.markerLabels != null && message.hasOwnProperty("markerLabels")) {
                    if (!Array.isArray(message.markerLabels))
                        return "markerLabels: array expected";
                    for (let i = 0; i < message.markerLabels.length; ++i) {
                        let error = $root.in_proto.Plot2D.PlotItem.Marker.verify(message.markerLabels[i]);
                        if (error)
                            return "markerLabels." + error;
                    }
                }
                if (message.minX != null && message.hasOwnProperty("minX"))
                    if (typeof message.minX !== "number")
                        return "minX: number expected";
                if (message.maxX != null && message.hasOwnProperty("maxX"))
                    if (typeof message.maxX !== "number")
                        return "maxX: number expected";
                if (message.minY != null && message.hasOwnProperty("minY"))
                    if (typeof message.minY !== "number")
                        return "minY: number expected";
                if (message.maxY != null && message.hasOwnProperty("maxY"))
                    if (typeof message.maxY !== "number")
                        return "maxY: number expected";
                return null;
            };

            /**
             * Creates a PlotItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.Plot2D.PlotItem} PlotItem
             */
            PlotItem.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.Plot2D.PlotItem)
                    return object;
                let message = new $root.in_proto.Plot2D.PlotItem();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.axis != null)
                    message.axis = String(object.axis);
                if (object.isMarker != null)
                    message.isMarker = Boolean(object.isMarker);
                if (object.legend != null)
                    message.legend = Boolean(object.legend);
                if (object.lineColor != null)
                    message.lineColor = String(object.lineColor);
                if (object.symbolColor != null)
                    message.symbolColor = String(object.symbolColor);
                if (object.lineStyle != null)
                    message.lineStyle = String(object.lineStyle);
                if (object.symbolStyle != null)
                    message.symbolStyle = String(object.symbolStyle);
                if (object.symbolSize != null)
                    message.symbolSize = object.symbolSize >>> 0;
                if (object.x) {
                    if (!Array.isArray(object.x))
                        throw TypeError(".in_proto.Plot2D.PlotItem.x: array expected");
                    message.x = [];
                    for (let i = 0; i < object.x.length; ++i)
                        message.x[i] = Number(object.x[i]);
                }
                if (object.y) {
                    if (!Array.isArray(object.y))
                        throw TypeError(".in_proto.Plot2D.PlotItem.y: array expected");
                    message.y = [];
                    for (let i = 0; i < object.y.length; ++i)
                        message.y[i] = Number(object.y[i]);
                }
                if (object.markerLabels) {
                    if (!Array.isArray(object.markerLabels))
                        throw TypeError(".in_proto.Plot2D.PlotItem.markerLabels: array expected");
                    message.markerLabels = [];
                    for (let i = 0; i < object.markerLabels.length; ++i) {
                        if (typeof object.markerLabels[i] !== "object")
                            throw TypeError(".in_proto.Plot2D.PlotItem.markerLabels: object expected");
                        message.markerLabels[i] = $root.in_proto.Plot2D.PlotItem.Marker.fromObject(object.markerLabels[i]);
                    }
                }
                if (object.minX != null)
                    message.minX = Number(object.minX);
                if (object.maxX != null)
                    message.maxX = Number(object.maxX);
                if (object.minY != null)
                    message.minY = Number(object.minY);
                if (object.maxY != null)
                    message.maxY = Number(object.maxY);
                return message;
            };

            /**
             * Creates a plain object from a PlotItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {in_proto.Plot2D.PlotItem} message PlotItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlotItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.x = [];
                    object.y = [];
                    object.markerLabels = [];
                }
                if (options.defaults) {
                    object.label = "";
                    object.axis = "";
                    object.isMarker = false;
                    object.legend = false;
                    object.lineColor = "";
                    object.symbolColor = "";
                    object.lineStyle = "";
                    object.symbolStyle = "";
                    object.symbolSize = 0;
                    object.minX = 0;
                    object.maxX = 0;
                    object.minY = 0;
                    object.maxY = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.axis != null && message.hasOwnProperty("axis"))
                    object.axis = message.axis;
                if (message.isMarker != null && message.hasOwnProperty("isMarker"))
                    object.isMarker = message.isMarker;
                if (message.legend != null && message.hasOwnProperty("legend"))
                    object.legend = message.legend;
                if (message.lineColor != null && message.hasOwnProperty("lineColor"))
                    object.lineColor = message.lineColor;
                if (message.symbolColor != null && message.hasOwnProperty("symbolColor"))
                    object.symbolColor = message.symbolColor;
                if (message.lineStyle != null && message.hasOwnProperty("lineStyle"))
                    object.lineStyle = message.lineStyle;
                if (message.symbolStyle != null && message.hasOwnProperty("symbolStyle"))
                    object.symbolStyle = message.symbolStyle;
                if (message.symbolSize != null && message.hasOwnProperty("symbolSize"))
                    object.symbolSize = message.symbolSize;
                if (message.x && message.x.length) {
                    object.x = [];
                    for (let j = 0; j < message.x.length; ++j)
                        object.x[j] = options.json && !isFinite(message.x[j]) ? String(message.x[j]) : message.x[j];
                }
                if (message.y && message.y.length) {
                    object.y = [];
                    for (let j = 0; j < message.y.length; ++j)
                        object.y[j] = options.json && !isFinite(message.y[j]) ? String(message.y[j]) : message.y[j];
                }
                if (message.markerLabels && message.markerLabels.length) {
                    object.markerLabels = [];
                    for (let j = 0; j < message.markerLabels.length; ++j)
                        object.markerLabels[j] = $root.in_proto.Plot2D.PlotItem.Marker.toObject(message.markerLabels[j], options);
                }
                if (message.minX != null && message.hasOwnProperty("minX"))
                    object.minX = options.json && !isFinite(message.minX) ? String(message.minX) : message.minX;
                if (message.maxX != null && message.hasOwnProperty("maxX"))
                    object.maxX = options.json && !isFinite(message.maxX) ? String(message.maxX) : message.maxX;
                if (message.minY != null && message.hasOwnProperty("minY"))
                    object.minY = options.json && !isFinite(message.minY) ? String(message.minY) : message.minY;
                if (message.maxY != null && message.hasOwnProperty("maxY"))
                    object.maxY = options.json && !isFinite(message.maxY) ? String(message.maxY) : message.maxY;
                return object;
            };

            /**
             * Converts this PlotItem to JSON.
             * @function toJSON
             * @memberof in_proto.Plot2D.PlotItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlotItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PlotItem
             * @function getTypeUrl
             * @memberof in_proto.Plot2D.PlotItem
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlotItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.Plot2D.PlotItem";
            };

            PlotItem.Marker = (function() {

                /**
                 * Properties of a Marker.
                 * @memberof in_proto.Plot2D.PlotItem
                 * @interface IMarker
                 * @property {string|null} [background] Marker background
                 * @property {string|null} [foreground] Marker foreground
                 * @property {string|null} [label] Marker label
                 */

                /**
                 * Constructs a new Marker.
                 * @memberof in_proto.Plot2D.PlotItem
                 * @classdesc Represents a Marker.
                 * @implements IMarker
                 * @constructor
                 * @param {in_proto.Plot2D.PlotItem.IMarker=} [properties] Properties to set
                 */
                function Marker(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Marker background.
                 * @member {string} background
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @instance
                 */
                Marker.prototype.background = "";

                /**
                 * Marker foreground.
                 * @member {string} foreground
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @instance
                 */
                Marker.prototype.foreground = "";

                /**
                 * Marker label.
                 * @member {string} label
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @instance
                 */
                Marker.prototype.label = "";

                /**
                 * Creates a new Marker instance using the specified properties.
                 * @function create
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {in_proto.Plot2D.PlotItem.IMarker=} [properties] Properties to set
                 * @returns {in_proto.Plot2D.PlotItem.Marker} Marker instance
                 */
                Marker.create = function create(properties) {
                    return new Marker(properties);
                };

                /**
                 * Encodes the specified Marker message. Does not implicitly {@link in_proto.Plot2D.PlotItem.Marker.verify|verify} messages.
                 * @function encode
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {in_proto.Plot2D.PlotItem.IMarker} message Marker message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Marker.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.background != null && Object.hasOwnProperty.call(message, "background"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.background);
                    if (message.foreground != null && Object.hasOwnProperty.call(message, "foreground"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.foreground);
                    if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.label);
                    return writer;
                };

                /**
                 * Encodes the specified Marker message, length delimited. Does not implicitly {@link in_proto.Plot2D.PlotItem.Marker.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {in_proto.Plot2D.PlotItem.IMarker} message Marker message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Marker.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Marker message from the specified reader or buffer.
                 * @function decode
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {in_proto.Plot2D.PlotItem.Marker} Marker
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Marker.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Plot2D.PlotItem.Marker();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.background = reader.string();
                                break;
                            }
                        case 2: {
                                message.foreground = reader.string();
                                break;
                            }
                        case 3: {
                                message.label = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Marker message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {in_proto.Plot2D.PlotItem.Marker} Marker
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Marker.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Marker message.
                 * @function verify
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Marker.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.background != null && message.hasOwnProperty("background"))
                        if (!$util.isString(message.background))
                            return "background: string expected";
                    if (message.foreground != null && message.hasOwnProperty("foreground"))
                        if (!$util.isString(message.foreground))
                            return "foreground: string expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        if (!$util.isString(message.label))
                            return "label: string expected";
                    return null;
                };

                /**
                 * Creates a Marker message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {in_proto.Plot2D.PlotItem.Marker} Marker
                 */
                Marker.fromObject = function fromObject(object) {
                    if (object instanceof $root.in_proto.Plot2D.PlotItem.Marker)
                        return object;
                    let message = new $root.in_proto.Plot2D.PlotItem.Marker();
                    if (object.background != null)
                        message.background = String(object.background);
                    if (object.foreground != null)
                        message.foreground = String(object.foreground);
                    if (object.label != null)
                        message.label = String(object.label);
                    return message;
                };

                /**
                 * Creates a plain object from a Marker message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {in_proto.Plot2D.PlotItem.Marker} message Marker
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Marker.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.background = "";
                        object.foreground = "";
                        object.label = "";
                    }
                    if (message.background != null && message.hasOwnProperty("background"))
                        object.background = message.background;
                    if (message.foreground != null && message.hasOwnProperty("foreground"))
                        object.foreground = message.foreground;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = message.label;
                    return object;
                };

                /**
                 * Converts this Marker to JSON.
                 * @function toJSON
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Marker.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Marker
                 * @function getTypeUrl
                 * @memberof in_proto.Plot2D.PlotItem.Marker
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Marker.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/in_proto.Plot2D.PlotItem.Marker";
                };

                return Marker;
            })();

            return PlotItem;
        })();

        Plot2D.Annotation = (function() {

            /**
             * Properties of an Annotation.
             * @memberof in_proto.Plot2D
             * @interface IAnnotation
             * @property {number|null} [pos] Annotation pos
             * @property {string|null} [label] Annotation label
             */

            /**
             * Constructs a new Annotation.
             * @memberof in_proto.Plot2D
             * @classdesc Represents an Annotation.
             * @implements IAnnotation
             * @constructor
             * @param {in_proto.Plot2D.IAnnotation=} [properties] Properties to set
             */
            function Annotation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Annotation pos.
             * @member {number} pos
             * @memberof in_proto.Plot2D.Annotation
             * @instance
             */
            Annotation.prototype.pos = 0;

            /**
             * Annotation label.
             * @member {string} label
             * @memberof in_proto.Plot2D.Annotation
             * @instance
             */
            Annotation.prototype.label = "";

            /**
             * Creates a new Annotation instance using the specified properties.
             * @function create
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {in_proto.Plot2D.IAnnotation=} [properties] Properties to set
             * @returns {in_proto.Plot2D.Annotation} Annotation instance
             */
            Annotation.create = function create(properties) {
                return new Annotation(properties);
            };

            /**
             * Encodes the specified Annotation message. Does not implicitly {@link in_proto.Plot2D.Annotation.verify|verify} messages.
             * @function encode
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {in_proto.Plot2D.IAnnotation} message Annotation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Annotation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.pos);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
                return writer;
            };

            /**
             * Encodes the specified Annotation message, length delimited. Does not implicitly {@link in_proto.Plot2D.Annotation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {in_proto.Plot2D.IAnnotation} message Annotation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Annotation message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.Plot2D.Annotation} Annotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Annotation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Plot2D.Annotation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.pos = reader.double();
                            break;
                        }
                    case 2: {
                            message.label = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Annotation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.Plot2D.Annotation} Annotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Annotation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Annotation message.
             * @function verify
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Annotation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pos != null && message.hasOwnProperty("pos"))
                    if (typeof message.pos !== "number")
                        return "pos: number expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                return null;
            };

            /**
             * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.Plot2D.Annotation} Annotation
             */
            Annotation.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.Plot2D.Annotation)
                    return object;
                let message = new $root.in_proto.Plot2D.Annotation();
                if (object.pos != null)
                    message.pos = Number(object.pos);
                if (object.label != null)
                    message.label = String(object.label);
                return message;
            };

            /**
             * Creates a plain object from an Annotation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {in_proto.Plot2D.Annotation} message Annotation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Annotation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.pos = 0;
                    object.label = "";
                }
                if (message.pos != null && message.hasOwnProperty("pos"))
                    object.pos = options.json && !isFinite(message.pos) ? String(message.pos) : message.pos;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                return object;
            };

            /**
             * Converts this Annotation to JSON.
             * @function toJSON
             * @memberof in_proto.Plot2D.Annotation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Annotation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Annotation
             * @function getTypeUrl
             * @memberof in_proto.Plot2D.Annotation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.Plot2D.Annotation";
            };

            return Annotation;
        })();

        return Plot2D;
    })();

    in_proto.Plot3D = (function() {

        /**
         * Properties of a Plot3D.
         * @memberof in_proto
         * @interface IPlot3D
         * @property {in_proto.IGuiElement|null} [base] Plot3D base
         * @property {in_proto.Plot3D.Plot3DStyle|null} [style] Plot3D style
         * @property {string|null} [headerText] Plot3D headerText
         * @property {boolean|null} [drawContour] Plot3D drawContour
         * @property {boolean|null} [drawInterpolated] Plot3D drawInterpolated
         * @property {in_proto.Plot3D.IAxis|null} [xAxis] Plot3D xAxis
         * @property {in_proto.Plot3D.IAxis|null} [yAxis] Plot3D yAxis
         * @property {in_proto.Plot3D.IAxis|null} [zAxis] Plot3D zAxis
         */

        /**
         * Constructs a new Plot3D.
         * @memberof in_proto
         * @classdesc Represents a Plot3D.
         * @implements IPlot3D
         * @constructor
         * @param {in_proto.IPlot3D=} [properties] Properties to set
         */
        function Plot3D(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Plot3D base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Plot3D
         * @instance
         */
        Plot3D.prototype.base = null;

        /**
         * Plot3D style.
         * @member {in_proto.Plot3D.Plot3DStyle} style
         * @memberof in_proto.Plot3D
         * @instance
         */
        Plot3D.prototype.style = 0;

        /**
         * Plot3D headerText.
         * @member {string} headerText
         * @memberof in_proto.Plot3D
         * @instance
         */
        Plot3D.prototype.headerText = "";

        /**
         * Plot3D drawContour.
         * @member {boolean} drawContour
         * @memberof in_proto.Plot3D
         * @instance
         */
        Plot3D.prototype.drawContour = false;

        /**
         * Plot3D drawInterpolated.
         * @member {boolean} drawInterpolated
         * @memberof in_proto.Plot3D
         * @instance
         */
        Plot3D.prototype.drawInterpolated = false;

        /**
         * Plot3D xAxis.
         * @member {in_proto.Plot3D.IAxis|null|undefined} xAxis
         * @memberof in_proto.Plot3D
         * @instance
         */
        Plot3D.prototype.xAxis = null;

        /**
         * Plot3D yAxis.
         * @member {in_proto.Plot3D.IAxis|null|undefined} yAxis
         * @memberof in_proto.Plot3D
         * @instance
         */
        Plot3D.prototype.yAxis = null;

        /**
         * Plot3D zAxis.
         * @member {in_proto.Plot3D.IAxis|null|undefined} zAxis
         * @memberof in_proto.Plot3D
         * @instance
         */
        Plot3D.prototype.zAxis = null;

        /**
         * Creates a new Plot3D instance using the specified properties.
         * @function create
         * @memberof in_proto.Plot3D
         * @static
         * @param {in_proto.IPlot3D=} [properties] Properties to set
         * @returns {in_proto.Plot3D} Plot3D instance
         */
        Plot3D.create = function create(properties) {
            return new Plot3D(properties);
        };

        /**
         * Encodes the specified Plot3D message. Does not implicitly {@link in_proto.Plot3D.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Plot3D
         * @static
         * @param {in_proto.IPlot3D} message Plot3D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Plot3D.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.style != null && Object.hasOwnProperty.call(message, "style"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.style);
            if (message.headerText != null && Object.hasOwnProperty.call(message, "headerText"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headerText);
            if (message.drawContour != null && Object.hasOwnProperty.call(message, "drawContour"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.drawContour);
            if (message.drawInterpolated != null && Object.hasOwnProperty.call(message, "drawInterpolated"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.drawInterpolated);
            if (message.xAxis != null && Object.hasOwnProperty.call(message, "xAxis"))
                $root.in_proto.Plot3D.Axis.encode(message.xAxis, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.yAxis != null && Object.hasOwnProperty.call(message, "yAxis"))
                $root.in_proto.Plot3D.Axis.encode(message.yAxis, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.zAxis != null && Object.hasOwnProperty.call(message, "zAxis"))
                $root.in_proto.Plot3D.Axis.encode(message.zAxis, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Plot3D message, length delimited. Does not implicitly {@link in_proto.Plot3D.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Plot3D
         * @static
         * @param {in_proto.IPlot3D} message Plot3D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Plot3D.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Plot3D message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Plot3D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Plot3D} Plot3D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Plot3D.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Plot3D();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.style = reader.int32();
                        break;
                    }
                case 3: {
                        message.headerText = reader.string();
                        break;
                    }
                case 4: {
                        message.drawContour = reader.bool();
                        break;
                    }
                case 5: {
                        message.drawInterpolated = reader.bool();
                        break;
                    }
                case 6: {
                        message.xAxis = $root.in_proto.Plot3D.Axis.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.yAxis = $root.in_proto.Plot3D.Axis.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.zAxis = $root.in_proto.Plot3D.Axis.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Plot3D message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Plot3D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Plot3D} Plot3D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Plot3D.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Plot3D message.
         * @function verify
         * @memberof in_proto.Plot3D
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Plot3D.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.style != null && message.hasOwnProperty("style"))
                switch (message.style) {
                default:
                    return "style: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.headerText != null && message.hasOwnProperty("headerText"))
                if (!$util.isString(message.headerText))
                    return "headerText: string expected";
            if (message.drawContour != null && message.hasOwnProperty("drawContour"))
                if (typeof message.drawContour !== "boolean")
                    return "drawContour: boolean expected";
            if (message.drawInterpolated != null && message.hasOwnProperty("drawInterpolated"))
                if (typeof message.drawInterpolated !== "boolean")
                    return "drawInterpolated: boolean expected";
            if (message.xAxis != null && message.hasOwnProperty("xAxis")) {
                let error = $root.in_proto.Plot3D.Axis.verify(message.xAxis);
                if (error)
                    return "xAxis." + error;
            }
            if (message.yAxis != null && message.hasOwnProperty("yAxis")) {
                let error = $root.in_proto.Plot3D.Axis.verify(message.yAxis);
                if (error)
                    return "yAxis." + error;
            }
            if (message.zAxis != null && message.hasOwnProperty("zAxis")) {
                let error = $root.in_proto.Plot3D.Axis.verify(message.zAxis);
                if (error)
                    return "zAxis." + error;
            }
            return null;
        };

        /**
         * Creates a Plot3D message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Plot3D
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Plot3D} Plot3D
         */
        Plot3D.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Plot3D)
                return object;
            let message = new $root.in_proto.Plot3D();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Plot3D.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            switch (object.style) {
            default:
                if (typeof object.style === "number") {
                    message.style = object.style;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.style = 0;
                break;
            case "Contour":
            case 1:
                message.style = 1;
                break;
            case "Surface":
            case 2:
                message.style = 2;
                break;
            case "Bar":
            case 3:
                message.style = 3;
                break;
            }
            if (object.headerText != null)
                message.headerText = String(object.headerText);
            if (object.drawContour != null)
                message.drawContour = Boolean(object.drawContour);
            if (object.drawInterpolated != null)
                message.drawInterpolated = Boolean(object.drawInterpolated);
            if (object.xAxis != null) {
                if (typeof object.xAxis !== "object")
                    throw TypeError(".in_proto.Plot3D.xAxis: object expected");
                message.xAxis = $root.in_proto.Plot3D.Axis.fromObject(object.xAxis);
            }
            if (object.yAxis != null) {
                if (typeof object.yAxis !== "object")
                    throw TypeError(".in_proto.Plot3D.yAxis: object expected");
                message.yAxis = $root.in_proto.Plot3D.Axis.fromObject(object.yAxis);
            }
            if (object.zAxis != null) {
                if (typeof object.zAxis !== "object")
                    throw TypeError(".in_proto.Plot3D.zAxis: object expected");
                message.zAxis = $root.in_proto.Plot3D.Axis.fromObject(object.zAxis);
            }
            return message;
        };

        /**
         * Creates a plain object from a Plot3D message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Plot3D
         * @static
         * @param {in_proto.Plot3D} message Plot3D
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Plot3D.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.style = options.enums === String ? "Unknown" : 0;
                object.headerText = "";
                object.drawContour = false;
                object.drawInterpolated = false;
                object.xAxis = null;
                object.yAxis = null;
                object.zAxis = null;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.style != null && message.hasOwnProperty("style"))
                object.style = options.enums === String ? $root.in_proto.Plot3D.Plot3DStyle[message.style] === undefined ? message.style : $root.in_proto.Plot3D.Plot3DStyle[message.style] : message.style;
            if (message.headerText != null && message.hasOwnProperty("headerText"))
                object.headerText = message.headerText;
            if (message.drawContour != null && message.hasOwnProperty("drawContour"))
                object.drawContour = message.drawContour;
            if (message.drawInterpolated != null && message.hasOwnProperty("drawInterpolated"))
                object.drawInterpolated = message.drawInterpolated;
            if (message.xAxis != null && message.hasOwnProperty("xAxis"))
                object.xAxis = $root.in_proto.Plot3D.Axis.toObject(message.xAxis, options);
            if (message.yAxis != null && message.hasOwnProperty("yAxis"))
                object.yAxis = $root.in_proto.Plot3D.Axis.toObject(message.yAxis, options);
            if (message.zAxis != null && message.hasOwnProperty("zAxis"))
                object.zAxis = $root.in_proto.Plot3D.Axis.toObject(message.zAxis, options);
            return object;
        };

        /**
         * Converts this Plot3D to JSON.
         * @function toJSON
         * @memberof in_proto.Plot3D
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Plot3D.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Plot3D
         * @function getTypeUrl
         * @memberof in_proto.Plot3D
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Plot3D.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Plot3D";
        };

        /**
         * Plot3DStyle enum.
         * @name in_proto.Plot3D.Plot3DStyle
         * @enum {number}
         * @property {number} Unknown=0 Unknown value
         * @property {number} Contour=1 Contour value
         * @property {number} Surface=2 Surface value
         * @property {number} Bar=3 Bar value
         */
        Plot3D.Plot3DStyle = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknown"] = 0;
            values[valuesById[1] = "Contour"] = 1;
            values[valuesById[2] = "Surface"] = 2;
            values[valuesById[3] = "Bar"] = 3;
            return values;
        })();

        Plot3D.Axis = (function() {

            /**
             * Properties of an Axis.
             * @memberof in_proto.Plot3D
             * @interface IAxis
             * @property {string|null} [label] Axis label
             * @property {number|null} [numwc] Axis numwc
             * @property {number|null} [numdims] Axis numdims
             * @property {number|null} [minRange] Axis minRange
             * @property {number|null} [maxRange] Axis maxRange
             * @property {number|null} [scale] Axis scale
             * @property {Array.<number>|null} [data] Axis data
             * @property {Array.<in_proto.Plot3D.Axis.IMatrixLine>|null} [matrix] Axis matrix
             */

            /**
             * Constructs a new Axis.
             * @memberof in_proto.Plot3D
             * @classdesc Represents an Axis.
             * @implements IAxis
             * @constructor
             * @param {in_proto.Plot3D.IAxis=} [properties] Properties to set
             */
            function Axis(properties) {
                this.data = [];
                this.matrix = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Axis label.
             * @member {string} label
             * @memberof in_proto.Plot3D.Axis
             * @instance
             */
            Axis.prototype.label = "";

            /**
             * Axis numwc.
             * @member {number} numwc
             * @memberof in_proto.Plot3D.Axis
             * @instance
             */
            Axis.prototype.numwc = 0;

            /**
             * Axis numdims.
             * @member {number} numdims
             * @memberof in_proto.Plot3D.Axis
             * @instance
             */
            Axis.prototype.numdims = 0;

            /**
             * Axis minRange.
             * @member {number} minRange
             * @memberof in_proto.Plot3D.Axis
             * @instance
             */
            Axis.prototype.minRange = 0;

            /**
             * Axis maxRange.
             * @member {number} maxRange
             * @memberof in_proto.Plot3D.Axis
             * @instance
             */
            Axis.prototype.maxRange = 0;

            /**
             * Axis scale.
             * @member {number} scale
             * @memberof in_proto.Plot3D.Axis
             * @instance
             */
            Axis.prototype.scale = 0;

            /**
             * Axis data.
             * @member {Array.<number>} data
             * @memberof in_proto.Plot3D.Axis
             * @instance
             */
            Axis.prototype.data = $util.emptyArray;

            /**
             * Axis matrix.
             * @member {Array.<in_proto.Plot3D.Axis.IMatrixLine>} matrix
             * @memberof in_proto.Plot3D.Axis
             * @instance
             */
            Axis.prototype.matrix = $util.emptyArray;

            /**
             * Creates a new Axis instance using the specified properties.
             * @function create
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {in_proto.Plot3D.IAxis=} [properties] Properties to set
             * @returns {in_proto.Plot3D.Axis} Axis instance
             */
            Axis.create = function create(properties) {
                return new Axis(properties);
            };

            /**
             * Encodes the specified Axis message. Does not implicitly {@link in_proto.Plot3D.Axis.verify|verify} messages.
             * @function encode
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {in_proto.Plot3D.IAxis} message Axis message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Axis.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.numwc != null && Object.hasOwnProperty.call(message, "numwc"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.numwc);
                if (message.numdims != null && Object.hasOwnProperty.call(message, "numdims"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.numdims);
                if (message.minRange != null && Object.hasOwnProperty.call(message, "minRange"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.minRange);
                if (message.maxRange != null && Object.hasOwnProperty.call(message, "maxRange"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.maxRange);
                if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.scale);
                if (message.data != null && message.data.length) {
                    writer.uint32(/* id 7, wireType 2 =*/58).fork();
                    for (let i = 0; i < message.data.length; ++i)
                        writer.double(message.data[i]);
                    writer.ldelim();
                }
                if (message.matrix != null && message.matrix.length)
                    for (let i = 0; i < message.matrix.length; ++i)
                        $root.in_proto.Plot3D.Axis.MatrixLine.encode(message.matrix[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Axis message, length delimited. Does not implicitly {@link in_proto.Plot3D.Axis.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {in_proto.Plot3D.IAxis} message Axis message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Axis.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Axis message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.Plot3D.Axis} Axis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Axis.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Plot3D.Axis();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.label = reader.string();
                            break;
                        }
                    case 2: {
                            message.numwc = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.numdims = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.minRange = reader.double();
                            break;
                        }
                    case 5: {
                            message.maxRange = reader.double();
                            break;
                        }
                    case 6: {
                            message.scale = reader.double();
                            break;
                        }
                    case 7: {
                            if (!(message.data && message.data.length))
                                message.data = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.data.push(reader.double());
                            } else
                                message.data.push(reader.double());
                            break;
                        }
                    case 8: {
                            if (!(message.matrix && message.matrix.length))
                                message.matrix = [];
                            message.matrix.push($root.in_proto.Plot3D.Axis.MatrixLine.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Axis message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.Plot3D.Axis} Axis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Axis.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Axis message.
             * @function verify
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Axis.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.numwc != null && message.hasOwnProperty("numwc"))
                    if (!$util.isInteger(message.numwc))
                        return "numwc: integer expected";
                if (message.numdims != null && message.hasOwnProperty("numdims"))
                    if (!$util.isInteger(message.numdims))
                        return "numdims: integer expected";
                if (message.minRange != null && message.hasOwnProperty("minRange"))
                    if (typeof message.minRange !== "number")
                        return "minRange: number expected";
                if (message.maxRange != null && message.hasOwnProperty("maxRange"))
                    if (typeof message.maxRange !== "number")
                        return "maxRange: number expected";
                if (message.scale != null && message.hasOwnProperty("scale"))
                    if (typeof message.scale !== "number")
                        return "scale: number expected";
                if (message.data != null && message.hasOwnProperty("data")) {
                    if (!Array.isArray(message.data))
                        return "data: array expected";
                    for (let i = 0; i < message.data.length; ++i)
                        if (typeof message.data[i] !== "number")
                            return "data: number[] expected";
                }
                if (message.matrix != null && message.hasOwnProperty("matrix")) {
                    if (!Array.isArray(message.matrix))
                        return "matrix: array expected";
                    for (let i = 0; i < message.matrix.length; ++i) {
                        let error = $root.in_proto.Plot3D.Axis.MatrixLine.verify(message.matrix[i]);
                        if (error)
                            return "matrix." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Axis message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.Plot3D.Axis} Axis
             */
            Axis.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.Plot3D.Axis)
                    return object;
                let message = new $root.in_proto.Plot3D.Axis();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.numwc != null)
                    message.numwc = object.numwc >>> 0;
                if (object.numdims != null)
                    message.numdims = object.numdims >>> 0;
                if (object.minRange != null)
                    message.minRange = Number(object.minRange);
                if (object.maxRange != null)
                    message.maxRange = Number(object.maxRange);
                if (object.scale != null)
                    message.scale = Number(object.scale);
                if (object.data) {
                    if (!Array.isArray(object.data))
                        throw TypeError(".in_proto.Plot3D.Axis.data: array expected");
                    message.data = [];
                    for (let i = 0; i < object.data.length; ++i)
                        message.data[i] = Number(object.data[i]);
                }
                if (object.matrix) {
                    if (!Array.isArray(object.matrix))
                        throw TypeError(".in_proto.Plot3D.Axis.matrix: array expected");
                    message.matrix = [];
                    for (let i = 0; i < object.matrix.length; ++i) {
                        if (typeof object.matrix[i] !== "object")
                            throw TypeError(".in_proto.Plot3D.Axis.matrix: object expected");
                        message.matrix[i] = $root.in_proto.Plot3D.Axis.MatrixLine.fromObject(object.matrix[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Axis message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {in_proto.Plot3D.Axis} message Axis
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Axis.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.data = [];
                    object.matrix = [];
                }
                if (options.defaults) {
                    object.label = "";
                    object.numwc = 0;
                    object.numdims = 0;
                    object.minRange = 0;
                    object.maxRange = 0;
                    object.scale = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.numwc != null && message.hasOwnProperty("numwc"))
                    object.numwc = message.numwc;
                if (message.numdims != null && message.hasOwnProperty("numdims"))
                    object.numdims = message.numdims;
                if (message.minRange != null && message.hasOwnProperty("minRange"))
                    object.minRange = options.json && !isFinite(message.minRange) ? String(message.minRange) : message.minRange;
                if (message.maxRange != null && message.hasOwnProperty("maxRange"))
                    object.maxRange = options.json && !isFinite(message.maxRange) ? String(message.maxRange) : message.maxRange;
                if (message.scale != null && message.hasOwnProperty("scale"))
                    object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
                if (message.data && message.data.length) {
                    object.data = [];
                    for (let j = 0; j < message.data.length; ++j)
                        object.data[j] = options.json && !isFinite(message.data[j]) ? String(message.data[j]) : message.data[j];
                }
                if (message.matrix && message.matrix.length) {
                    object.matrix = [];
                    for (let j = 0; j < message.matrix.length; ++j)
                        object.matrix[j] = $root.in_proto.Plot3D.Axis.MatrixLine.toObject(message.matrix[j], options);
                }
                return object;
            };

            /**
             * Converts this Axis to JSON.
             * @function toJSON
             * @memberof in_proto.Plot3D.Axis
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Axis.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Axis
             * @function getTypeUrl
             * @memberof in_proto.Plot3D.Axis
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Axis.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.Plot3D.Axis";
            };

            Axis.MatrixLine = (function() {

                /**
                 * Properties of a MatrixLine.
                 * @memberof in_proto.Plot3D.Axis
                 * @interface IMatrixLine
                 * @property {Array.<number>|null} [a] MatrixLine a
                 */

                /**
                 * Constructs a new MatrixLine.
                 * @memberof in_proto.Plot3D.Axis
                 * @classdesc Represents a MatrixLine.
                 * @implements IMatrixLine
                 * @constructor
                 * @param {in_proto.Plot3D.Axis.IMatrixLine=} [properties] Properties to set
                 */
                function MatrixLine(properties) {
                    this.a = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MatrixLine a.
                 * @member {Array.<number>} a
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @instance
                 */
                MatrixLine.prototype.a = $util.emptyArray;

                /**
                 * Creates a new MatrixLine instance using the specified properties.
                 * @function create
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {in_proto.Plot3D.Axis.IMatrixLine=} [properties] Properties to set
                 * @returns {in_proto.Plot3D.Axis.MatrixLine} MatrixLine instance
                 */
                MatrixLine.create = function create(properties) {
                    return new MatrixLine(properties);
                };

                /**
                 * Encodes the specified MatrixLine message. Does not implicitly {@link in_proto.Plot3D.Axis.MatrixLine.verify|verify} messages.
                 * @function encode
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {in_proto.Plot3D.Axis.IMatrixLine} message MatrixLine message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MatrixLine.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.a != null && message.a.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.a.length; ++i)
                            writer.double(message.a[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified MatrixLine message, length delimited. Does not implicitly {@link in_proto.Plot3D.Axis.MatrixLine.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {in_proto.Plot3D.Axis.IMatrixLine} message MatrixLine message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MatrixLine.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MatrixLine message from the specified reader or buffer.
                 * @function decode
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {in_proto.Plot3D.Axis.MatrixLine} MatrixLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MatrixLine.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Plot3D.Axis.MatrixLine();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.a && message.a.length))
                                    message.a = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.a.push(reader.double());
                                } else
                                    message.a.push(reader.double());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MatrixLine message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {in_proto.Plot3D.Axis.MatrixLine} MatrixLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MatrixLine.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MatrixLine message.
                 * @function verify
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MatrixLine.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.a != null && message.hasOwnProperty("a")) {
                        if (!Array.isArray(message.a))
                            return "a: array expected";
                        for (let i = 0; i < message.a.length; ++i)
                            if (typeof message.a[i] !== "number")
                                return "a: number[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a MatrixLine message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {in_proto.Plot3D.Axis.MatrixLine} MatrixLine
                 */
                MatrixLine.fromObject = function fromObject(object) {
                    if (object instanceof $root.in_proto.Plot3D.Axis.MatrixLine)
                        return object;
                    let message = new $root.in_proto.Plot3D.Axis.MatrixLine();
                    if (object.a) {
                        if (!Array.isArray(object.a))
                            throw TypeError(".in_proto.Plot3D.Axis.MatrixLine.a: array expected");
                        message.a = [];
                        for (let i = 0; i < object.a.length; ++i)
                            message.a[i] = Number(object.a[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MatrixLine message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {in_proto.Plot3D.Axis.MatrixLine} message MatrixLine
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MatrixLine.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.a = [];
                    if (message.a && message.a.length) {
                        object.a = [];
                        for (let j = 0; j < message.a.length; ++j)
                            object.a[j] = options.json && !isFinite(message.a[j]) ? String(message.a[j]) : message.a[j];
                    }
                    return object;
                };

                /**
                 * Converts this MatrixLine to JSON.
                 * @function toJSON
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MatrixLine.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MatrixLine
                 * @function getTypeUrl
                 * @memberof in_proto.Plot3D.Axis.MatrixLine
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MatrixLine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/in_proto.Plot3D.Axis.MatrixLine";
                };

                return MatrixLine;
            })();

            return Axis;
        })();

        return Plot3D;
    })();

    in_proto.Messagebar = (function() {

        /**
         * Properties of a Messagebar.
         * @memberof in_proto
         * @interface IMessagebar
         * @property {in_proto.IGuiElement|null} [base] Messagebar base
         */

        /**
         * Constructs a new Messagebar.
         * @memberof in_proto
         * @classdesc Represents a Messagebar.
         * @implements IMessagebar
         * @constructor
         * @param {in_proto.IMessagebar=} [properties] Properties to set
         */
        function Messagebar(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Messagebar base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Messagebar
         * @instance
         */
        Messagebar.prototype.base = null;

        /**
         * Creates a new Messagebar instance using the specified properties.
         * @function create
         * @memberof in_proto.Messagebar
         * @static
         * @param {in_proto.IMessagebar=} [properties] Properties to set
         * @returns {in_proto.Messagebar} Messagebar instance
         */
        Messagebar.create = function create(properties) {
            return new Messagebar(properties);
        };

        /**
         * Encodes the specified Messagebar message. Does not implicitly {@link in_proto.Messagebar.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Messagebar
         * @static
         * @param {in_proto.IMessagebar} message Messagebar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Messagebar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Messagebar message, length delimited. Does not implicitly {@link in_proto.Messagebar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Messagebar
         * @static
         * @param {in_proto.IMessagebar} message Messagebar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Messagebar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Messagebar message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Messagebar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Messagebar} Messagebar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Messagebar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Messagebar();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Messagebar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Messagebar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Messagebar} Messagebar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Messagebar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Messagebar message.
         * @function verify
         * @memberof in_proto.Messagebar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Messagebar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            return null;
        };

        /**
         * Creates a Messagebar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Messagebar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Messagebar} Messagebar
         */
        Messagebar.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Messagebar)
                return object;
            let message = new $root.in_proto.Messagebar();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Messagebar.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            return message;
        };

        /**
         * Creates a plain object from a Messagebar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Messagebar
         * @static
         * @param {in_proto.Messagebar} message Messagebar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Messagebar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.base = null;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            return object;
        };

        /**
         * Converts this Messagebar to JSON.
         * @function toJSON
         * @memberof in_proto.Messagebar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Messagebar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Messagebar
         * @function getTypeUrl
         * @memberof in_proto.Messagebar
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Messagebar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Messagebar";
        };

        return Messagebar;
    })();

    in_proto.Navigator = (function() {

        /**
         * Properties of a Navigator.
         * @memberof in_proto
         * @interface INavigator
         * @property {in_proto.IGuiElement|null} [base] Navigator base
         * @property {string|null} [fullName] Navigator fullName
         * @property {string|null} [action] Navigator action
         * @property {number|null} [width] Navigator width
         * @property {number|null} [height] Navigator height
         * @property {boolean|null} [expandable] Navigator expandable
         * @property {boolean|null} [scrollable] Navigator scrollable
         * @property {in_proto.INavigatorNode|null} [root] Navigator root
         * @property {Array.<in_proto.INavigatorColumn>|null} [columns] Navigator columns
         * @property {in_proto.IPopupMenu|null} [popupMenu] Navigator popupMenu
         * @property {number|null} [diagramConnectionRatio] Navigator diagramConnectionRatio
         * @property {Array.<in_proto.IConnection>|null} [connections] Navigator connections
         * @property {Array.<in_proto.IConnectionAttr>|null} [connectionAttrs] Navigator connectionAttrs
         * @property {Array.<string>|null} [selectItems] Navigator selectItems
         */

        /**
         * Constructs a new Navigator.
         * @memberof in_proto
         * @classdesc Represents a Navigator.
         * @implements INavigator
         * @constructor
         * @param {in_proto.INavigator=} [properties] Properties to set
         */
        function Navigator(properties) {
            this.columns = [];
            this.connections = [];
            this.connectionAttrs = [];
            this.selectItems = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Navigator base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.base = null;

        /**
         * Navigator fullName.
         * @member {string} fullName
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.fullName = "";

        /**
         * Navigator action.
         * @member {string} action
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.action = "";

        /**
         * Navigator width.
         * @member {number} width
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.width = 0;

        /**
         * Navigator height.
         * @member {number} height
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.height = 0;

        /**
         * Navigator expandable.
         * @member {boolean} expandable
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.expandable = false;

        /**
         * Navigator scrollable.
         * @member {boolean} scrollable
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.scrollable = false;

        /**
         * Navigator root.
         * @member {in_proto.INavigatorNode|null|undefined} root
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.root = null;

        /**
         * Navigator columns.
         * @member {Array.<in_proto.INavigatorColumn>} columns
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.columns = $util.emptyArray;

        /**
         * Navigator popupMenu.
         * @member {in_proto.IPopupMenu|null|undefined} popupMenu
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.popupMenu = null;

        /**
         * Navigator diagramConnectionRatio.
         * @member {number} diagramConnectionRatio
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.diagramConnectionRatio = 0;

        /**
         * Navigator connections.
         * @member {Array.<in_proto.IConnection>} connections
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.connections = $util.emptyArray;

        /**
         * Navigator connectionAttrs.
         * @member {Array.<in_proto.IConnectionAttr>} connectionAttrs
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.connectionAttrs = $util.emptyArray;

        /**
         * Navigator selectItems.
         * @member {Array.<string>} selectItems
         * @memberof in_proto.Navigator
         * @instance
         */
        Navigator.prototype.selectItems = $util.emptyArray;

        /**
         * Creates a new Navigator instance using the specified properties.
         * @function create
         * @memberof in_proto.Navigator
         * @static
         * @param {in_proto.INavigator=} [properties] Properties to set
         * @returns {in_proto.Navigator} Navigator instance
         */
        Navigator.create = function create(properties) {
            return new Navigator(properties);
        };

        /**
         * Encodes the specified Navigator message. Does not implicitly {@link in_proto.Navigator.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Navigator
         * @static
         * @param {in_proto.INavigator} message Navigator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Navigator.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fullName);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.action);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.height);
            if (message.expandable != null && Object.hasOwnProperty.call(message, "expandable"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.expandable);
            if (message.scrollable != null && Object.hasOwnProperty.call(message, "scrollable"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.scrollable);
            if (message.root != null && Object.hasOwnProperty.call(message, "root"))
                $root.in_proto.NavigatorNode.encode(message.root, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.columns != null && message.columns.length)
                for (let i = 0; i < message.columns.length; ++i)
                    $root.in_proto.NavigatorColumn.encode(message.columns[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.popupMenu != null && Object.hasOwnProperty.call(message, "popupMenu"))
                $root.in_proto.PopupMenu.encode(message.popupMenu, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.diagramConnectionRatio != null && Object.hasOwnProperty.call(message, "diagramConnectionRatio"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.diagramConnectionRatio);
            if (message.connections != null && message.connections.length)
                for (let i = 0; i < message.connections.length; ++i)
                    $root.in_proto.Connection.encode(message.connections[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.connectionAttrs != null && message.connectionAttrs.length)
                for (let i = 0; i < message.connectionAttrs.length; ++i)
                    $root.in_proto.ConnectionAttr.encode(message.connectionAttrs[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.selectItems != null && message.selectItems.length)
                for (let i = 0; i < message.selectItems.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.selectItems[i]);
            return writer;
        };

        /**
         * Encodes the specified Navigator message, length delimited. Does not implicitly {@link in_proto.Navigator.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Navigator
         * @static
         * @param {in_proto.INavigator} message Navigator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Navigator.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Navigator message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Navigator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Navigator} Navigator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Navigator.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Navigator();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.fullName = reader.string();
                        break;
                    }
                case 3: {
                        message.action = reader.string();
                        break;
                    }
                case 4: {
                        message.width = reader.uint32();
                        break;
                    }
                case 5: {
                        message.height = reader.uint32();
                        break;
                    }
                case 6: {
                        message.expandable = reader.bool();
                        break;
                    }
                case 7: {
                        message.root = $root.in_proto.NavigatorNode.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        if (!(message.columns && message.columns.length))
                            message.columns = [];
                        message.columns.push($root.in_proto.NavigatorColumn.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        message.popupMenu = $root.in_proto.PopupMenu.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.diagramConnectionRatio = reader.double();
                        break;
                    }
                case 11: {
                        if (!(message.connections && message.connections.length))
                            message.connections = [];
                        message.connections.push($root.in_proto.Connection.decode(reader, reader.uint32()));
                        break;
                    }
                case 12: {
                        if (!(message.connectionAttrs && message.connectionAttrs.length))
                            message.connectionAttrs = [];
                        message.connectionAttrs.push($root.in_proto.ConnectionAttr.decode(reader, reader.uint32()));
                        break;
                    }
                case 13: {
                        if (!(message.selectItems && message.selectItems.length))
                            message.selectItems = [];
                        message.selectItems.push(reader.string());
                        break;
                    }
                case 14: {
                        message.scrollable = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Navigator message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Navigator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Navigator} Navigator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Navigator.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Navigator message.
         * @function verify
         * @memberof in_proto.Navigator
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Navigator.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.expandable != null && message.hasOwnProperty("expandable"))
                if (typeof message.expandable !== "boolean")
                    return "expandable: boolean expected";
            if (message.scrollable != null && message.hasOwnProperty("scrollable"))
                if (typeof message.scrollable !== "boolean")
                    return "scrollable: boolean expected";
            if (message.root != null && message.hasOwnProperty("root")) {
                let error = $root.in_proto.NavigatorNode.verify(message.root);
                if (error)
                    return "root." + error;
            }
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i) {
                    let error = $root.in_proto.NavigatorColumn.verify(message.columns[i]);
                    if (error)
                        return "columns." + error;
                }
            }
            if (message.popupMenu != null && message.hasOwnProperty("popupMenu")) {
                let error = $root.in_proto.PopupMenu.verify(message.popupMenu);
                if (error)
                    return "popupMenu." + error;
            }
            if (message.diagramConnectionRatio != null && message.hasOwnProperty("diagramConnectionRatio"))
                if (typeof message.diagramConnectionRatio !== "number")
                    return "diagramConnectionRatio: number expected";
            if (message.connections != null && message.hasOwnProperty("connections")) {
                if (!Array.isArray(message.connections))
                    return "connections: array expected";
                for (let i = 0; i < message.connections.length; ++i) {
                    let error = $root.in_proto.Connection.verify(message.connections[i]);
                    if (error)
                        return "connections." + error;
                }
            }
            if (message.connectionAttrs != null && message.hasOwnProperty("connectionAttrs")) {
                if (!Array.isArray(message.connectionAttrs))
                    return "connectionAttrs: array expected";
                for (let i = 0; i < message.connectionAttrs.length; ++i) {
                    let error = $root.in_proto.ConnectionAttr.verify(message.connectionAttrs[i]);
                    if (error)
                        return "connectionAttrs." + error;
                }
            }
            if (message.selectItems != null && message.hasOwnProperty("selectItems")) {
                if (!Array.isArray(message.selectItems))
                    return "selectItems: array expected";
                for (let i = 0; i < message.selectItems.length; ++i)
                    if (!$util.isString(message.selectItems[i]))
                        return "selectItems: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Navigator message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Navigator
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Navigator} Navigator
         */
        Navigator.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Navigator)
                return object;
            let message = new $root.in_proto.Navigator();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Navigator.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            if (object.action != null)
                message.action = String(object.action);
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.expandable != null)
                message.expandable = Boolean(object.expandable);
            if (object.scrollable != null)
                message.scrollable = Boolean(object.scrollable);
            if (object.root != null) {
                if (typeof object.root !== "object")
                    throw TypeError(".in_proto.Navigator.root: object expected");
                message.root = $root.in_proto.NavigatorNode.fromObject(object.root);
            }
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".in_proto.Navigator.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i) {
                    if (typeof object.columns[i] !== "object")
                        throw TypeError(".in_proto.Navigator.columns: object expected");
                    message.columns[i] = $root.in_proto.NavigatorColumn.fromObject(object.columns[i]);
                }
            }
            if (object.popupMenu != null) {
                if (typeof object.popupMenu !== "object")
                    throw TypeError(".in_proto.Navigator.popupMenu: object expected");
                message.popupMenu = $root.in_proto.PopupMenu.fromObject(object.popupMenu);
            }
            if (object.diagramConnectionRatio != null)
                message.diagramConnectionRatio = Number(object.diagramConnectionRatio);
            if (object.connections) {
                if (!Array.isArray(object.connections))
                    throw TypeError(".in_proto.Navigator.connections: array expected");
                message.connections = [];
                for (let i = 0; i < object.connections.length; ++i) {
                    if (typeof object.connections[i] !== "object")
                        throw TypeError(".in_proto.Navigator.connections: object expected");
                    message.connections[i] = $root.in_proto.Connection.fromObject(object.connections[i]);
                }
            }
            if (object.connectionAttrs) {
                if (!Array.isArray(object.connectionAttrs))
                    throw TypeError(".in_proto.Navigator.connectionAttrs: array expected");
                message.connectionAttrs = [];
                for (let i = 0; i < object.connectionAttrs.length; ++i) {
                    if (typeof object.connectionAttrs[i] !== "object")
                        throw TypeError(".in_proto.Navigator.connectionAttrs: object expected");
                    message.connectionAttrs[i] = $root.in_proto.ConnectionAttr.fromObject(object.connectionAttrs[i]);
                }
            }
            if (object.selectItems) {
                if (!Array.isArray(object.selectItems))
                    throw TypeError(".in_proto.Navigator.selectItems: array expected");
                message.selectItems = [];
                for (let i = 0; i < object.selectItems.length; ++i)
                    message.selectItems[i] = String(object.selectItems[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Navigator message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Navigator
         * @static
         * @param {in_proto.Navigator} message Navigator
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Navigator.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.columns = [];
                object.connections = [];
                object.connectionAttrs = [];
                object.selectItems = [];
            }
            if (options.defaults) {
                object.base = null;
                object.fullName = "";
                object.action = "";
                object.width = 0;
                object.height = 0;
                object.expandable = false;
                object.scrollable = false;
                object.root = null;
                object.popupMenu = null;
                object.diagramConnectionRatio = 0;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.expandable != null && message.hasOwnProperty("expandable"))
                object.expandable = message.expandable;
            if (message.scrollable != null && message.hasOwnProperty("scrollable"))
                object.scrollable = message.scrollable;
            if (message.root != null && message.hasOwnProperty("root"))
                object.root = $root.in_proto.NavigatorNode.toObject(message.root, options);
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = $root.in_proto.NavigatorColumn.toObject(message.columns[j], options);
            }
            if (message.popupMenu != null && message.hasOwnProperty("popupMenu"))
                object.popupMenu = $root.in_proto.PopupMenu.toObject(message.popupMenu, options);
            if (message.diagramConnectionRatio != null && message.hasOwnProperty("diagramConnectionRatio"))
                object.diagramConnectionRatio = options.json && !isFinite(message.diagramConnectionRatio) ? String(message.diagramConnectionRatio) : message.diagramConnectionRatio;
            if (message.connections && message.connections.length) {
                object.connections = [];
                for (let j = 0; j < message.connections.length; ++j)
                    object.connections[j] = $root.in_proto.Connection.toObject(message.connections[j], options);
            }
            if (message.connectionAttrs && message.connectionAttrs.length) {
                object.connectionAttrs = [];
                for (let j = 0; j < message.connectionAttrs.length; ++j)
                    object.connectionAttrs[j] = $root.in_proto.ConnectionAttr.toObject(message.connectionAttrs[j], options);
            }
            if (message.selectItems && message.selectItems.length) {
                object.selectItems = [];
                for (let j = 0; j < message.selectItems.length; ++j)
                    object.selectItems[j] = message.selectItems[j];
            }
            return object;
        };

        /**
         * Converts this Navigator to JSON.
         * @function toJSON
         * @memberof in_proto.Navigator
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Navigator.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Navigator
         * @function getTypeUrl
         * @memberof in_proto.Navigator
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Navigator.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Navigator";
        };

        return Navigator;
    })();

    in_proto.Connection = (function() {

        /**
         * Properties of a Connection.
         * @memberof in_proto
         * @interface IConnection
         * @property {string|null} [a] Connection a
         * @property {string|null} [b] Connection b
         */

        /**
         * Constructs a new Connection.
         * @memberof in_proto
         * @classdesc Represents a Connection.
         * @implements IConnection
         * @constructor
         * @param {in_proto.IConnection=} [properties] Properties to set
         */
        function Connection(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Connection a.
         * @member {string} a
         * @memberof in_proto.Connection
         * @instance
         */
        Connection.prototype.a = "";

        /**
         * Connection b.
         * @member {string} b
         * @memberof in_proto.Connection
         * @instance
         */
        Connection.prototype.b = "";

        /**
         * Creates a new Connection instance using the specified properties.
         * @function create
         * @memberof in_proto.Connection
         * @static
         * @param {in_proto.IConnection=} [properties] Properties to set
         * @returns {in_proto.Connection} Connection instance
         */
        Connection.create = function create(properties) {
            return new Connection(properties);
        };

        /**
         * Encodes the specified Connection message. Does not implicitly {@link in_proto.Connection.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Connection
         * @static
         * @param {in_proto.IConnection} message Connection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Connection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.a);
            if (message.b != null && Object.hasOwnProperty.call(message, "b"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.b);
            return writer;
        };

        /**
         * Encodes the specified Connection message, length delimited. Does not implicitly {@link in_proto.Connection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Connection
         * @static
         * @param {in_proto.IConnection} message Connection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Connection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Connection message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Connection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Connection} Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Connection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Connection();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.a = reader.string();
                        break;
                    }
                case 2: {
                        message.b = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Connection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Connection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Connection} Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Connection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Connection message.
         * @function verify
         * @memberof in_proto.Connection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Connection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isString(message.a))
                    return "a: string expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isString(message.b))
                    return "b: string expected";
            return null;
        };

        /**
         * Creates a Connection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Connection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Connection} Connection
         */
        Connection.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Connection)
                return object;
            let message = new $root.in_proto.Connection();
            if (object.a != null)
                message.a = String(object.a);
            if (object.b != null)
                message.b = String(object.b);
            return message;
        };

        /**
         * Creates a plain object from a Connection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Connection
         * @static
         * @param {in_proto.Connection} message Connection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Connection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.a = "";
                object.b = "";
            }
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            return object;
        };

        /**
         * Converts this Connection to JSON.
         * @function toJSON
         * @memberof in_proto.Connection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Connection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Connection
         * @function getTypeUrl
         * @memberof in_proto.Connection
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Connection.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Connection";
        };

        return Connection;
    })();

    in_proto.ConnectionAttr = (function() {

        /**
         * Properties of a ConnectionAttr.
         * @memberof in_proto
         * @interface IConnectionAttr
         * @property {number|null} [lineWidth] ConnectionAttr lineWidth
         * @property {string|null} [lineStyle] ConnectionAttr lineStyle
         * @property {string|null} [lineColor] ConnectionAttr lineColor
         * @property {Array.<in_proto.IPosition>|null} [lineVectors] ConnectionAttr lineVectors
         */

        /**
         * Constructs a new ConnectionAttr.
         * @memberof in_proto
         * @classdesc Represents a ConnectionAttr.
         * @implements IConnectionAttr
         * @constructor
         * @param {in_proto.IConnectionAttr=} [properties] Properties to set
         */
        function ConnectionAttr(properties) {
            this.lineVectors = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectionAttr lineWidth.
         * @member {number} lineWidth
         * @memberof in_proto.ConnectionAttr
         * @instance
         */
        ConnectionAttr.prototype.lineWidth = 0;

        /**
         * ConnectionAttr lineStyle.
         * @member {string} lineStyle
         * @memberof in_proto.ConnectionAttr
         * @instance
         */
        ConnectionAttr.prototype.lineStyle = "";

        /**
         * ConnectionAttr lineColor.
         * @member {string} lineColor
         * @memberof in_proto.ConnectionAttr
         * @instance
         */
        ConnectionAttr.prototype.lineColor = "";

        /**
         * ConnectionAttr lineVectors.
         * @member {Array.<in_proto.IPosition>} lineVectors
         * @memberof in_proto.ConnectionAttr
         * @instance
         */
        ConnectionAttr.prototype.lineVectors = $util.emptyArray;

        /**
         * Creates a new ConnectionAttr instance using the specified properties.
         * @function create
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {in_proto.IConnectionAttr=} [properties] Properties to set
         * @returns {in_proto.ConnectionAttr} ConnectionAttr instance
         */
        ConnectionAttr.create = function create(properties) {
            return new ConnectionAttr(properties);
        };

        /**
         * Encodes the specified ConnectionAttr message. Does not implicitly {@link in_proto.ConnectionAttr.verify|verify} messages.
         * @function encode
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {in_proto.IConnectionAttr} message ConnectionAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectionAttr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lineWidth != null && Object.hasOwnProperty.call(message, "lineWidth"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.lineWidth);
            if (message.lineStyle != null && Object.hasOwnProperty.call(message, "lineStyle"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lineStyle);
            if (message.lineColor != null && Object.hasOwnProperty.call(message, "lineColor"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lineColor);
            if (message.lineVectors != null && message.lineVectors.length)
                for (let i = 0; i < message.lineVectors.length; ++i)
                    $root.in_proto.Position.encode(message.lineVectors[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ConnectionAttr message, length delimited. Does not implicitly {@link in_proto.ConnectionAttr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {in_proto.IConnectionAttr} message ConnectionAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectionAttr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectionAttr message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.ConnectionAttr} ConnectionAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectionAttr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.ConnectionAttr();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.lineWidth = reader.uint32();
                        break;
                    }
                case 2: {
                        message.lineStyle = reader.string();
                        break;
                    }
                case 3: {
                        message.lineColor = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.lineVectors && message.lineVectors.length))
                            message.lineVectors = [];
                        message.lineVectors.push($root.in_proto.Position.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectionAttr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.ConnectionAttr} ConnectionAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectionAttr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectionAttr message.
         * @function verify
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectionAttr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lineWidth != null && message.hasOwnProperty("lineWidth"))
                if (!$util.isInteger(message.lineWidth))
                    return "lineWidth: integer expected";
            if (message.lineStyle != null && message.hasOwnProperty("lineStyle"))
                if (!$util.isString(message.lineStyle))
                    return "lineStyle: string expected";
            if (message.lineColor != null && message.hasOwnProperty("lineColor"))
                if (!$util.isString(message.lineColor))
                    return "lineColor: string expected";
            if (message.lineVectors != null && message.hasOwnProperty("lineVectors")) {
                if (!Array.isArray(message.lineVectors))
                    return "lineVectors: array expected";
                for (let i = 0; i < message.lineVectors.length; ++i) {
                    let error = $root.in_proto.Position.verify(message.lineVectors[i]);
                    if (error)
                        return "lineVectors." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ConnectionAttr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.ConnectionAttr} ConnectionAttr
         */
        ConnectionAttr.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.ConnectionAttr)
                return object;
            let message = new $root.in_proto.ConnectionAttr();
            if (object.lineWidth != null)
                message.lineWidth = object.lineWidth >>> 0;
            if (object.lineStyle != null)
                message.lineStyle = String(object.lineStyle);
            if (object.lineColor != null)
                message.lineColor = String(object.lineColor);
            if (object.lineVectors) {
                if (!Array.isArray(object.lineVectors))
                    throw TypeError(".in_proto.ConnectionAttr.lineVectors: array expected");
                message.lineVectors = [];
                for (let i = 0; i < object.lineVectors.length; ++i) {
                    if (typeof object.lineVectors[i] !== "object")
                        throw TypeError(".in_proto.ConnectionAttr.lineVectors: object expected");
                    message.lineVectors[i] = $root.in_proto.Position.fromObject(object.lineVectors[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ConnectionAttr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {in_proto.ConnectionAttr} message ConnectionAttr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectionAttr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.lineVectors = [];
            if (options.defaults) {
                object.lineWidth = 0;
                object.lineStyle = "";
                object.lineColor = "";
            }
            if (message.lineWidth != null && message.hasOwnProperty("lineWidth"))
                object.lineWidth = message.lineWidth;
            if (message.lineStyle != null && message.hasOwnProperty("lineStyle"))
                object.lineStyle = message.lineStyle;
            if (message.lineColor != null && message.hasOwnProperty("lineColor"))
                object.lineColor = message.lineColor;
            if (message.lineVectors && message.lineVectors.length) {
                object.lineVectors = [];
                for (let j = 0; j < message.lineVectors.length; ++j)
                    object.lineVectors[j] = $root.in_proto.Position.toObject(message.lineVectors[j], options);
            }
            return object;
        };

        /**
         * Converts this ConnectionAttr to JSON.
         * @function toJSON
         * @memberof in_proto.ConnectionAttr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectionAttr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnectionAttr
         * @function getTypeUrl
         * @memberof in_proto.ConnectionAttr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnectionAttr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.ConnectionAttr";
        };

        return ConnectionAttr;
    })();

    in_proto.NavigatorNode = (function() {

        /**
         * Properties of a NavigatorNode.
         * @memberof in_proto
         * @interface INavigatorNode
         * @property {string|null} [name] NavigatorNode name
         * @property {in_proto.IPopupMenu|null} [popupMenu] NavigatorNode popupMenu
         * @property {number|null} [newCount] NavigatorNode newCount
         * @property {boolean|null} [visible] NavigatorNode visible
         * @property {boolean|null} [folder] NavigatorNode folder
         * @property {string|null} [tooltip] NavigatorNode tooltip
         * @property {string|null} [fullName] NavigatorNode fullName
         * @property {Array.<in_proto.INavigatorNode>|null} [nodes] NavigatorNode nodes
         * @property {string|null} [icon] NavigatorNode icon
         * @property {string|null} [action] NavigatorNode action
         * @property {string|null} [nodeName] NavigatorNode nodeName
         * @property {in_proto.IPosition|null} [position] NavigatorNode position
         * @property {Array.<string>|null} [labels] NavigatorNode labels
         * @property {string|null} [fgcolor] NavigatorNode fgcolor
         */

        /**
         * Constructs a new NavigatorNode.
         * @memberof in_proto
         * @classdesc Represents a NavigatorNode.
         * @implements INavigatorNode
         * @constructor
         * @param {in_proto.INavigatorNode=} [properties] Properties to set
         */
        function NavigatorNode(properties) {
            this.nodes = [];
            this.labels = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NavigatorNode name.
         * @member {string} name
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.name = "";

        /**
         * NavigatorNode popupMenu.
         * @member {in_proto.IPopupMenu|null|undefined} popupMenu
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.popupMenu = null;

        /**
         * NavigatorNode newCount.
         * @member {number} newCount
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.newCount = 0;

        /**
         * NavigatorNode visible.
         * @member {boolean} visible
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.visible = false;

        /**
         * NavigatorNode folder.
         * @member {boolean} folder
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.folder = false;

        /**
         * NavigatorNode tooltip.
         * @member {string} tooltip
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.tooltip = "";

        /**
         * NavigatorNode fullName.
         * @member {string} fullName
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.fullName = "";

        /**
         * NavigatorNode nodes.
         * @member {Array.<in_proto.INavigatorNode>} nodes
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.nodes = $util.emptyArray;

        /**
         * NavigatorNode icon.
         * @member {string} icon
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.icon = "";

        /**
         * NavigatorNode action.
         * @member {string} action
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.action = "";

        /**
         * NavigatorNode nodeName.
         * @member {string} nodeName
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.nodeName = "";

        /**
         * NavigatorNode position.
         * @member {in_proto.IPosition|null|undefined} position
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.position = null;

        /**
         * NavigatorNode labels.
         * @member {Array.<string>} labels
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.labels = $util.emptyArray;

        /**
         * NavigatorNode fgcolor.
         * @member {string} fgcolor
         * @memberof in_proto.NavigatorNode
         * @instance
         */
        NavigatorNode.prototype.fgcolor = "";

        /**
         * Creates a new NavigatorNode instance using the specified properties.
         * @function create
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {in_proto.INavigatorNode=} [properties] Properties to set
         * @returns {in_proto.NavigatorNode} NavigatorNode instance
         */
        NavigatorNode.create = function create(properties) {
            return new NavigatorNode(properties);
        };

        /**
         * Encodes the specified NavigatorNode message. Does not implicitly {@link in_proto.NavigatorNode.verify|verify} messages.
         * @function encode
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {in_proto.INavigatorNode} message NavigatorNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NavigatorNode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.popupMenu != null && Object.hasOwnProperty.call(message, "popupMenu"))
                $root.in_proto.PopupMenu.encode(message.popupMenu, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.newCount != null && Object.hasOwnProperty.call(message, "newCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.newCount);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.visible);
            if (message.folder != null && Object.hasOwnProperty.call(message, "folder"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.folder);
            if (message.tooltip != null && Object.hasOwnProperty.call(message, "tooltip"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tooltip);
            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.fullName);
            if (message.nodes != null && message.nodes.length)
                for (let i = 0; i < message.nodes.length; ++i)
                    $root.in_proto.NavigatorNode.encode(message.nodes[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.icon);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.action);
            if (message.nodeName != null && Object.hasOwnProperty.call(message, "nodeName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.nodeName);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.in_proto.Position.encode(message.position, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.labels != null && message.labels.length)
                for (let i = 0; i < message.labels.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.labels[i]);
            if (message.fgcolor != null && Object.hasOwnProperty.call(message, "fgcolor"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.fgcolor);
            return writer;
        };

        /**
         * Encodes the specified NavigatorNode message, length delimited. Does not implicitly {@link in_proto.NavigatorNode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {in_proto.INavigatorNode} message NavigatorNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NavigatorNode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NavigatorNode message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.NavigatorNode} NavigatorNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NavigatorNode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.NavigatorNode();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.popupMenu = $root.in_proto.PopupMenu.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.newCount = reader.uint32();
                        break;
                    }
                case 4: {
                        message.visible = reader.bool();
                        break;
                    }
                case 5: {
                        message.folder = reader.bool();
                        break;
                    }
                case 6: {
                        message.tooltip = reader.string();
                        break;
                    }
                case 7: {
                        message.fullName = reader.string();
                        break;
                    }
                case 8: {
                        if (!(message.nodes && message.nodes.length))
                            message.nodes = [];
                        message.nodes.push($root.in_proto.NavigatorNode.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        message.icon = reader.string();
                        break;
                    }
                case 10: {
                        message.action = reader.string();
                        break;
                    }
                case 11: {
                        message.nodeName = reader.string();
                        break;
                    }
                case 12: {
                        message.position = $root.in_proto.Position.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push(reader.string());
                        break;
                    }
                case 14: {
                        message.fgcolor = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NavigatorNode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.NavigatorNode} NavigatorNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NavigatorNode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NavigatorNode message.
         * @function verify
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NavigatorNode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.popupMenu != null && message.hasOwnProperty("popupMenu")) {
                let error = $root.in_proto.PopupMenu.verify(message.popupMenu);
                if (error)
                    return "popupMenu." + error;
            }
            if (message.newCount != null && message.hasOwnProperty("newCount"))
                if (!$util.isInteger(message.newCount))
                    return "newCount: integer expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            if (message.folder != null && message.hasOwnProperty("folder"))
                if (typeof message.folder !== "boolean")
                    return "folder: boolean expected";
            if (message.tooltip != null && message.hasOwnProperty("tooltip"))
                if (!$util.isString(message.tooltip))
                    return "tooltip: string expected";
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                if (!$util.isString(message.fullName))
                    return "fullName: string expected";
            if (message.nodes != null && message.hasOwnProperty("nodes")) {
                if (!Array.isArray(message.nodes))
                    return "nodes: array expected";
                for (let i = 0; i < message.nodes.length; ++i) {
                    let error = $root.in_proto.NavigatorNode.verify(message.nodes[i]);
                    if (error)
                        return "nodes." + error;
                }
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                if (!$util.isString(message.nodeName))
                    return "nodeName: string expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                let error = $root.in_proto.Position.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (let i = 0; i < message.labels.length; ++i)
                    if (!$util.isString(message.labels[i]))
                        return "labels: string[] expected";
            }
            if (message.fgcolor != null && message.hasOwnProperty("fgcolor"))
                if (!$util.isString(message.fgcolor))
                    return "fgcolor: string expected";
            return null;
        };

        /**
         * Creates a NavigatorNode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.NavigatorNode} NavigatorNode
         */
        NavigatorNode.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.NavigatorNode)
                return object;
            let message = new $root.in_proto.NavigatorNode();
            if (object.name != null)
                message.name = String(object.name);
            if (object.popupMenu != null) {
                if (typeof object.popupMenu !== "object")
                    throw TypeError(".in_proto.NavigatorNode.popupMenu: object expected");
                message.popupMenu = $root.in_proto.PopupMenu.fromObject(object.popupMenu);
            }
            if (object.newCount != null)
                message.newCount = object.newCount >>> 0;
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            if (object.folder != null)
                message.folder = Boolean(object.folder);
            if (object.tooltip != null)
                message.tooltip = String(object.tooltip);
            if (object.fullName != null)
                message.fullName = String(object.fullName);
            if (object.nodes) {
                if (!Array.isArray(object.nodes))
                    throw TypeError(".in_proto.NavigatorNode.nodes: array expected");
                message.nodes = [];
                for (let i = 0; i < object.nodes.length; ++i) {
                    if (typeof object.nodes[i] !== "object")
                        throw TypeError(".in_proto.NavigatorNode.nodes: object expected");
                    message.nodes[i] = $root.in_proto.NavigatorNode.fromObject(object.nodes[i]);
                }
            }
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.action != null)
                message.action = String(object.action);
            if (object.nodeName != null)
                message.nodeName = String(object.nodeName);
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".in_proto.NavigatorNode.position: object expected");
                message.position = $root.in_proto.Position.fromObject(object.position);
            }
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".in_proto.NavigatorNode.labels: array expected");
                message.labels = [];
                for (let i = 0; i < object.labels.length; ++i)
                    message.labels[i] = String(object.labels[i]);
            }
            if (object.fgcolor != null)
                message.fgcolor = String(object.fgcolor);
            return message;
        };

        /**
         * Creates a plain object from a NavigatorNode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {in_proto.NavigatorNode} message NavigatorNode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NavigatorNode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.nodes = [];
                object.labels = [];
            }
            if (options.defaults) {
                object.name = "";
                object.popupMenu = null;
                object.newCount = 0;
                object.visible = false;
                object.folder = false;
                object.tooltip = "";
                object.fullName = "";
                object.icon = "";
                object.action = "";
                object.nodeName = "";
                object.position = null;
                object.fgcolor = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.popupMenu != null && message.hasOwnProperty("popupMenu"))
                object.popupMenu = $root.in_proto.PopupMenu.toObject(message.popupMenu, options);
            if (message.newCount != null && message.hasOwnProperty("newCount"))
                object.newCount = message.newCount;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            if (message.folder != null && message.hasOwnProperty("folder"))
                object.folder = message.folder;
            if (message.tooltip != null && message.hasOwnProperty("tooltip"))
                object.tooltip = message.tooltip;
            if (message.fullName != null && message.hasOwnProperty("fullName"))
                object.fullName = message.fullName;
            if (message.nodes && message.nodes.length) {
                object.nodes = [];
                for (let j = 0; j < message.nodes.length; ++j)
                    object.nodes[j] = $root.in_proto.NavigatorNode.toObject(message.nodes[j], options);
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                object.nodeName = message.nodeName;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.in_proto.Position.toObject(message.position, options);
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (let j = 0; j < message.labels.length; ++j)
                    object.labels[j] = message.labels[j];
            }
            if (message.fgcolor != null && message.hasOwnProperty("fgcolor"))
                object.fgcolor = message.fgcolor;
            return object;
        };

        /**
         * Converts this NavigatorNode to JSON.
         * @function toJSON
         * @memberof in_proto.NavigatorNode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NavigatorNode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NavigatorNode
         * @function getTypeUrl
         * @memberof in_proto.NavigatorNode
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NavigatorNode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.NavigatorNode";
        };

        return NavigatorNode;
    })();

    in_proto.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof in_proto
         * @interface IPosition
         * @property {number|null} [x] Position x
         * @property {number|null} [y] Position y
         */

        /**
         * Constructs a new Position.
         * @memberof in_proto
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {in_proto.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position x.
         * @member {number} x
         * @memberof in_proto.Position
         * @instance
         */
        Position.prototype.x = 0;

        /**
         * Position y.
         * @member {number} y
         * @memberof in_proto.Position
         * @instance
         */
        Position.prototype.y = 0;

        /**
         * Creates a new Position instance using the specified properties.
         * @function create
         * @memberof in_proto.Position
         * @static
         * @param {in_proto.IPosition=} [properties] Properties to set
         * @returns {in_proto.Position} Position instance
         */
        Position.create = function create(properties) {
            return new Position(properties);
        };

        /**
         * Encodes the specified Position message. Does not implicitly {@link in_proto.Position.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Position
         * @static
         * @param {in_proto.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            return writer;
        };

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link in_proto.Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Position
         * @static
         * @param {in_proto.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Position();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.int32();
                        break;
                    }
                case 2: {
                        message.y = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Position message.
         * @function verify
         * @memberof in_proto.Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Position.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Position)
                return object;
            let message = new $root.in_proto.Position();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Position
         * @static
         * @param {in_proto.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof in_proto.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Position
         * @function getTypeUrl
         * @memberof in_proto.Position
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Position.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Position";
        };

        return Position;
    })();

    in_proto.NavigatorColumn = (function() {

        /**
         * Properties of a NavigatorColumn.
         * @memberof in_proto
         * @interface INavigatorColumn
         * @property {string|null} [tag] NavigatorColumn tag
         * @property {number|null} [width] NavigatorColumn width
         * @property {number|null} [scale] NavigatorColumn scale
         * @property {number|null} [style] NavigatorColumn style
         * @property {string|null} [label] NavigatorColumn label
         */

        /**
         * Constructs a new NavigatorColumn.
         * @memberof in_proto
         * @classdesc Represents a NavigatorColumn.
         * @implements INavigatorColumn
         * @constructor
         * @param {in_proto.INavigatorColumn=} [properties] Properties to set
         */
        function NavigatorColumn(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NavigatorColumn tag.
         * @member {string} tag
         * @memberof in_proto.NavigatorColumn
         * @instance
         */
        NavigatorColumn.prototype.tag = "";

        /**
         * NavigatorColumn width.
         * @member {number} width
         * @memberof in_proto.NavigatorColumn
         * @instance
         */
        NavigatorColumn.prototype.width = 0;

        /**
         * NavigatorColumn scale.
         * @member {number} scale
         * @memberof in_proto.NavigatorColumn
         * @instance
         */
        NavigatorColumn.prototype.scale = 0;

        /**
         * NavigatorColumn style.
         * @member {number} style
         * @memberof in_proto.NavigatorColumn
         * @instance
         */
        NavigatorColumn.prototype.style = 0;

        /**
         * NavigatorColumn label.
         * @member {string} label
         * @memberof in_proto.NavigatorColumn
         * @instance
         */
        NavigatorColumn.prototype.label = "";

        /**
         * Creates a new NavigatorColumn instance using the specified properties.
         * @function create
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {in_proto.INavigatorColumn=} [properties] Properties to set
         * @returns {in_proto.NavigatorColumn} NavigatorColumn instance
         */
        NavigatorColumn.create = function create(properties) {
            return new NavigatorColumn(properties);
        };

        /**
         * Encodes the specified NavigatorColumn message. Does not implicitly {@link in_proto.NavigatorColumn.verify|verify} messages.
         * @function encode
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {in_proto.INavigatorColumn} message NavigatorColumn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NavigatorColumn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.width);
            if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.scale);
            if (message.style != null && Object.hasOwnProperty.call(message, "style"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.style);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.label);
            return writer;
        };

        /**
         * Encodes the specified NavigatorColumn message, length delimited. Does not implicitly {@link in_proto.NavigatorColumn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {in_proto.INavigatorColumn} message NavigatorColumn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NavigatorColumn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NavigatorColumn message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.NavigatorColumn} NavigatorColumn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NavigatorColumn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.NavigatorColumn();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tag = reader.string();
                        break;
                    }
                case 2: {
                        message.width = reader.uint32();
                        break;
                    }
                case 3: {
                        message.scale = reader.double();
                        break;
                    }
                case 4: {
                        message.style = reader.uint32();
                        break;
                    }
                case 5: {
                        message.label = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NavigatorColumn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.NavigatorColumn} NavigatorColumn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NavigatorColumn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NavigatorColumn message.
         * @function verify
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NavigatorColumn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.scale != null && message.hasOwnProperty("scale"))
                if (typeof message.scale !== "number")
                    return "scale: number expected";
            if (message.style != null && message.hasOwnProperty("style"))
                if (!$util.isInteger(message.style))
                    return "style: integer expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            return null;
        };

        /**
         * Creates a NavigatorColumn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.NavigatorColumn} NavigatorColumn
         */
        NavigatorColumn.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.NavigatorColumn)
                return object;
            let message = new $root.in_proto.NavigatorColumn();
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.scale != null)
                message.scale = Number(object.scale);
            if (object.style != null)
                message.style = object.style >>> 0;
            if (object.label != null)
                message.label = String(object.label);
            return message;
        };

        /**
         * Creates a plain object from a NavigatorColumn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {in_proto.NavigatorColumn} message NavigatorColumn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NavigatorColumn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tag = "";
                object.width = 0;
                object.scale = 0;
                object.style = 0;
                object.label = "";
            }
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
            if (message.style != null && message.hasOwnProperty("style"))
                object.style = message.style;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            return object;
        };

        /**
         * Converts this NavigatorColumn to JSON.
         * @function toJSON
         * @memberof in_proto.NavigatorColumn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NavigatorColumn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NavigatorColumn
         * @function getTypeUrl
         * @memberof in_proto.NavigatorColumn
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NavigatorColumn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.NavigatorColumn";
        };

        return NavigatorColumn;
    })();

    in_proto.Radio = (function() {

        /**
         * Properties of a Radio.
         * @memberof in_proto
         * @interface IRadio
         * @property {in_proto.IGuiElement|null} [base] Radio base
         */

        /**
         * Constructs a new Radio.
         * @memberof in_proto
         * @classdesc Represents a Radio.
         * @implements IRadio
         * @constructor
         * @param {in_proto.IRadio=} [properties] Properties to set
         */
        function Radio(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Radio base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Radio
         * @instance
         */
        Radio.prototype.base = null;

        /**
         * Creates a new Radio instance using the specified properties.
         * @function create
         * @memberof in_proto.Radio
         * @static
         * @param {in_proto.IRadio=} [properties] Properties to set
         * @returns {in_proto.Radio} Radio instance
         */
        Radio.create = function create(properties) {
            return new Radio(properties);
        };

        /**
         * Encodes the specified Radio message. Does not implicitly {@link in_proto.Radio.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Radio
         * @static
         * @param {in_proto.IRadio} message Radio message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Radio.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Radio message, length delimited. Does not implicitly {@link in_proto.Radio.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Radio
         * @static
         * @param {in_proto.IRadio} message Radio message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Radio.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Radio message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Radio
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Radio} Radio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Radio.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Radio();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Radio message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Radio
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Radio} Radio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Radio.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Radio message.
         * @function verify
         * @memberof in_proto.Radio
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Radio.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            return null;
        };

        /**
         * Creates a Radio message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Radio
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Radio} Radio
         */
        Radio.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Radio)
                return object;
            let message = new $root.in_proto.Radio();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Radio.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            return message;
        };

        /**
         * Creates a plain object from a Radio message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Radio
         * @static
         * @param {in_proto.Radio} message Radio
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Radio.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.base = null;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            return object;
        };

        /**
         * Converts this Radio to JSON.
         * @function toJSON
         * @memberof in_proto.Radio
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Radio.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Radio
         * @function getTypeUrl
         * @memberof in_proto.Radio
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Radio.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Radio";
        };

        return Radio;
    })();

    in_proto.Separator = (function() {

        /**
         * Properties of a Separator.
         * @memberof in_proto
         * @interface ISeparator
         * @property {in_proto.GuiElement.Orientation|null} [orientation] Separator orientation
         * @property {number|null} [id] Separator id
         * @property {string|null} [styleClass] Separator styleClass
         */

        /**
         * Constructs a new Separator.
         * @memberof in_proto
         * @classdesc Represents a Separator.
         * @implements ISeparator
         * @constructor
         * @param {in_proto.ISeparator=} [properties] Properties to set
         */
        function Separator(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Separator orientation.
         * @member {in_proto.GuiElement.Orientation} orientation
         * @memberof in_proto.Separator
         * @instance
         */
        Separator.prototype.orientation = 0;

        /**
         * Separator id.
         * @member {number} id
         * @memberof in_proto.Separator
         * @instance
         */
        Separator.prototype.id = 0;

        /**
         * Separator styleClass.
         * @member {string} styleClass
         * @memberof in_proto.Separator
         * @instance
         */
        Separator.prototype.styleClass = "";

        /**
         * Creates a new Separator instance using the specified properties.
         * @function create
         * @memberof in_proto.Separator
         * @static
         * @param {in_proto.ISeparator=} [properties] Properties to set
         * @returns {in_proto.Separator} Separator instance
         */
        Separator.create = function create(properties) {
            return new Separator(properties);
        };

        /**
         * Encodes the specified Separator message. Does not implicitly {@link in_proto.Separator.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Separator
         * @static
         * @param {in_proto.ISeparator} message Separator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Separator.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.orientation);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.id);
            if (message.styleClass != null && Object.hasOwnProperty.call(message, "styleClass"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.styleClass);
            return writer;
        };

        /**
         * Encodes the specified Separator message, length delimited. Does not implicitly {@link in_proto.Separator.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Separator
         * @static
         * @param {in_proto.ISeparator} message Separator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Separator.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Separator message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Separator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Separator} Separator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Separator.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Separator();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.orientation = reader.int32();
                        break;
                    }
                case 2: {
                        message.id = reader.uint32();
                        break;
                    }
                case 3: {
                        message.styleClass = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Separator message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Separator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Separator} Separator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Separator.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Separator message.
         * @function verify
         * @memberof in_proto.Separator
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Separator.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                switch (message.orientation) {
                default:
                    return "orientation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.styleClass != null && message.hasOwnProperty("styleClass"))
                if (!$util.isString(message.styleClass))
                    return "styleClass: string expected";
            return null;
        };

        /**
         * Creates a Separator message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Separator
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Separator} Separator
         */
        Separator.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Separator)
                return object;
            let message = new $root.in_proto.Separator();
            switch (object.orientation) {
            default:
                if (typeof object.orientation === "number") {
                    message.orientation = object.orientation;
                    break;
                }
                break;
            case "None":
            case 0:
                message.orientation = 0;
                break;
            case "Horizontal":
            case 1:
                message.orientation = 1;
                break;
            case "Vertical":
            case 2:
                message.orientation = 2;
                break;
            case "Both":
            case 3:
                message.orientation = 3;
                break;
            }
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.styleClass != null)
                message.styleClass = String(object.styleClass);
            return message;
        };

        /**
         * Creates a plain object from a Separator message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Separator
         * @static
         * @param {in_proto.Separator} message Separator
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Separator.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.orientation = options.enums === String ? "None" : 0;
                object.id = 0;
                object.styleClass = "";
            }
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = options.enums === String ? $root.in_proto.GuiElement.Orientation[message.orientation] === undefined ? message.orientation : $root.in_proto.GuiElement.Orientation[message.orientation] : message.orientation;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.styleClass != null && message.hasOwnProperty("styleClass"))
                object.styleClass = message.styleClass;
            return object;
        };

        /**
         * Converts this Separator to JSON.
         * @function toJSON
         * @memberof in_proto.Separator
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Separator.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Separator
         * @function getTypeUrl
         * @memberof in_proto.Separator
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Separator.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Separator";
        };

        return Separator;
    })();

    in_proto.Stretch = (function() {

        /**
         * Properties of a Stretch.
         * @memberof in_proto
         * @interface IStretch
         * @property {number|null} [horizontalFactor] Stretch horizontalFactor
         * @property {number|null} [verticalFactor] Stretch verticalFactor
         * @property {number|null} [id] Stretch id
         */

        /**
         * Constructs a new Stretch.
         * @memberof in_proto
         * @classdesc Represents a Stretch.
         * @implements IStretch
         * @constructor
         * @param {in_proto.IStretch=} [properties] Properties to set
         */
        function Stretch(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Stretch horizontalFactor.
         * @member {number} horizontalFactor
         * @memberof in_proto.Stretch
         * @instance
         */
        Stretch.prototype.horizontalFactor = 0;

        /**
         * Stretch verticalFactor.
         * @member {number} verticalFactor
         * @memberof in_proto.Stretch
         * @instance
         */
        Stretch.prototype.verticalFactor = 0;

        /**
         * Stretch id.
         * @member {number} id
         * @memberof in_proto.Stretch
         * @instance
         */
        Stretch.prototype.id = 0;

        /**
         * Creates a new Stretch instance using the specified properties.
         * @function create
         * @memberof in_proto.Stretch
         * @static
         * @param {in_proto.IStretch=} [properties] Properties to set
         * @returns {in_proto.Stretch} Stretch instance
         */
        Stretch.create = function create(properties) {
            return new Stretch(properties);
        };

        /**
         * Encodes the specified Stretch message. Does not implicitly {@link in_proto.Stretch.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Stretch
         * @static
         * @param {in_proto.IStretch} message Stretch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Stretch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.horizontalFactor != null && Object.hasOwnProperty.call(message, "horizontalFactor"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.horizontalFactor);
            if (message.verticalFactor != null && Object.hasOwnProperty.call(message, "verticalFactor"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.verticalFactor);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified Stretch message, length delimited. Does not implicitly {@link in_proto.Stretch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Stretch
         * @static
         * @param {in_proto.IStretch} message Stretch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Stretch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Stretch message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Stretch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Stretch} Stretch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Stretch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Stretch();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.horizontalFactor = reader.uint32();
                        break;
                    }
                case 2: {
                        message.verticalFactor = reader.uint32();
                        break;
                    }
                case 3: {
                        message.id = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Stretch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Stretch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Stretch} Stretch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Stretch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Stretch message.
         * @function verify
         * @memberof in_proto.Stretch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Stretch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.horizontalFactor != null && message.hasOwnProperty("horizontalFactor"))
                if (!$util.isInteger(message.horizontalFactor))
                    return "horizontalFactor: integer expected";
            if (message.verticalFactor != null && message.hasOwnProperty("verticalFactor"))
                if (!$util.isInteger(message.verticalFactor))
                    return "verticalFactor: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a Stretch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Stretch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Stretch} Stretch
         */
        Stretch.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Stretch)
                return object;
            let message = new $root.in_proto.Stretch();
            if (object.horizontalFactor != null)
                message.horizontalFactor = object.horizontalFactor >>> 0;
            if (object.verticalFactor != null)
                message.verticalFactor = object.verticalFactor >>> 0;
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Stretch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Stretch
         * @static
         * @param {in_proto.Stretch} message Stretch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Stretch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.horizontalFactor = 0;
                object.verticalFactor = 0;
                object.id = 0;
            }
            if (message.horizontalFactor != null && message.hasOwnProperty("horizontalFactor"))
                object.horizontalFactor = message.horizontalFactor;
            if (message.verticalFactor != null && message.hasOwnProperty("verticalFactor"))
                object.verticalFactor = message.verticalFactor;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this Stretch to JSON.
         * @function toJSON
         * @memberof in_proto.Stretch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Stretch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Stretch
         * @function getTypeUrl
         * @memberof in_proto.Stretch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Stretch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Stretch";
        };

        return Stretch;
    })();

    in_proto.Table = (function() {

        /**
         * Properties of a Table.
         * @memberof in_proto
         * @interface ITable
         * @property {in_proto.IGuiElement|null} [base] Table base
         * @property {in_proto.IPopupMenu|null} [popupBaseMenu] Table popupBaseMenu
         * @property {in_proto.IPopupMenu|null} [popupHeaderMenu] Table popupHeaderMenu
         * @property {in_proto.IPopupMenu|null} [popupHeaderMenuCol] Table popupHeaderMenuCol
         * @property {string|null} [title] Table title
         * @property {string|null} [titleHorizontal] Table titleHorizontal
         * @property {string|null} [titleVertical] Table titleVertical
         * @property {in_proto.GuiElement.Alignment|null} [titleAlignment] Table titleAlignment
         * @property {in_proto.GuiElement.Alignment|null} [placementHorizontal] Table placementHorizontal
         * @property {in_proto.GuiElement.Alignment|null} [placementVertical] Table placementVertical
         * @property {Array.<string>|null} [rowHeader] Table rowHeader
         * @property {boolean|null} [rowHeaderHidden] Table rowHeaderHidden
         * @property {number|null} [rowHeaderMaxLength] Table rowHeaderMaxLength
         * @property {number|null} [rowHeaderLength] Table rowHeaderLength
         * @property {number|null} [rowOffset] Table rowOffset
         * @property {Array.<string>|null} [columnHeader] Table columnHeader
         * @property {boolean|null} [columnHeaderHidden] Table columnHeaderHidden
         * @property {number|null} [columnHeaderMaxLength] Table columnHeaderMaxLength
         * @property {Array.<number>|null} [columnLength] Table columnLength
         * @property {number|null} [columnOffset] Table columnOffset
         * @property {in_proto.GuiElement.Orientation|null} [orientation] Table orientation
         * @property {in_proto.GuiElement.Orientation|null} [navigation] Table navigation
         * @property {boolean|null} [isMatrix] Table isMatrix
         * @property {number|null} [numRows] Table numRows
         * @property {number|null} [numColumns] Table numColumns
         * @property {number|null} [numRowsVisible] Table numRowsVisible
         * @property {number|null} [numColumnsVisible] Table numColumnsVisible
         * @property {number|null} [numFrozenRows] Table numFrozenRows
         * @property {number|null} [numFrozenColumns] Table numFrozenColumns
         * @property {number|null} [numRowsFixed] Table numRowsFixed
         * @property {number|null} [numColumnsFixed] Table numColumnsFixed
         * @property {Array.<in_proto.Table.IMatrixEntry>|null} [matrix] Table matrix
         */

        /**
         * Constructs a new Table.
         * @memberof in_proto
         * @classdesc Represents a Table.
         * @implements ITable
         * @constructor
         * @param {in_proto.ITable=} [properties] Properties to set
         */
        function Table(properties) {
            this.rowHeader = [];
            this.columnHeader = [];
            this.columnLength = [];
            this.matrix = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Table base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.base = null;

        /**
         * Table popupBaseMenu.
         * @member {in_proto.IPopupMenu|null|undefined} popupBaseMenu
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.popupBaseMenu = null;

        /**
         * Table popupHeaderMenu.
         * @member {in_proto.IPopupMenu|null|undefined} popupHeaderMenu
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.popupHeaderMenu = null;

        /**
         * Table popupHeaderMenuCol.
         * @member {in_proto.IPopupMenu|null|undefined} popupHeaderMenuCol
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.popupHeaderMenuCol = null;

        /**
         * Table title.
         * @member {string} title
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.title = "";

        /**
         * Table titleHorizontal.
         * @member {string} titleHorizontal
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.titleHorizontal = "";

        /**
         * Table titleVertical.
         * @member {string} titleVertical
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.titleVertical = "";

        /**
         * Table titleAlignment.
         * @member {in_proto.GuiElement.Alignment} titleAlignment
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.titleAlignment = 0;

        /**
         * Table placementHorizontal.
         * @member {in_proto.GuiElement.Alignment} placementHorizontal
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.placementHorizontal = 0;

        /**
         * Table placementVertical.
         * @member {in_proto.GuiElement.Alignment} placementVertical
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.placementVertical = 0;

        /**
         * Table rowHeader.
         * @member {Array.<string>} rowHeader
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.rowHeader = $util.emptyArray;

        /**
         * Table rowHeaderHidden.
         * @member {boolean} rowHeaderHidden
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.rowHeaderHidden = false;

        /**
         * Table rowHeaderMaxLength.
         * @member {number} rowHeaderMaxLength
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.rowHeaderMaxLength = 0;

        /**
         * Table rowHeaderLength.
         * @member {number} rowHeaderLength
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.rowHeaderLength = 0;

        /**
         * Table rowOffset.
         * @member {number} rowOffset
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.rowOffset = 0;

        /**
         * Table columnHeader.
         * @member {Array.<string>} columnHeader
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.columnHeader = $util.emptyArray;

        /**
         * Table columnHeaderHidden.
         * @member {boolean} columnHeaderHidden
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.columnHeaderHidden = false;

        /**
         * Table columnHeaderMaxLength.
         * @member {number} columnHeaderMaxLength
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.columnHeaderMaxLength = 0;

        /**
         * Table columnLength.
         * @member {Array.<number>} columnLength
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.columnLength = $util.emptyArray;

        /**
         * Table columnOffset.
         * @member {number} columnOffset
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.columnOffset = 0;

        /**
         * Table orientation.
         * @member {in_proto.GuiElement.Orientation} orientation
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.orientation = 0;

        /**
         * Table navigation.
         * @member {in_proto.GuiElement.Orientation} navigation
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.navigation = 0;

        /**
         * Table isMatrix.
         * @member {boolean} isMatrix
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.isMatrix = false;

        /**
         * Table numRows.
         * @member {number} numRows
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.numRows = 0;

        /**
         * Table numColumns.
         * @member {number} numColumns
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.numColumns = 0;

        /**
         * Table numRowsVisible.
         * @member {number} numRowsVisible
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.numRowsVisible = 0;

        /**
         * Table numColumnsVisible.
         * @member {number} numColumnsVisible
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.numColumnsVisible = 0;

        /**
         * Table numFrozenRows.
         * @member {number} numFrozenRows
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.numFrozenRows = 0;

        /**
         * Table numFrozenColumns.
         * @member {number} numFrozenColumns
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.numFrozenColumns = 0;

        /**
         * Table numRowsFixed.
         * @member {number} numRowsFixed
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.numRowsFixed = 0;

        /**
         * Table numColumnsFixed.
         * @member {number} numColumnsFixed
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.numColumnsFixed = 0;

        /**
         * Table matrix.
         * @member {Array.<in_proto.Table.IMatrixEntry>} matrix
         * @memberof in_proto.Table
         * @instance
         */
        Table.prototype.matrix = $util.emptyArray;

        /**
         * Creates a new Table instance using the specified properties.
         * @function create
         * @memberof in_proto.Table
         * @static
         * @param {in_proto.ITable=} [properties] Properties to set
         * @returns {in_proto.Table} Table instance
         */
        Table.create = function create(properties) {
            return new Table(properties);
        };

        /**
         * Encodes the specified Table message. Does not implicitly {@link in_proto.Table.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Table
         * @static
         * @param {in_proto.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.popupBaseMenu != null && Object.hasOwnProperty.call(message, "popupBaseMenu"))
                $root.in_proto.PopupMenu.encode(message.popupBaseMenu, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.popupHeaderMenu != null && Object.hasOwnProperty.call(message, "popupHeaderMenu"))
                $root.in_proto.PopupMenu.encode(message.popupHeaderMenu, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.popupHeaderMenuCol != null && Object.hasOwnProperty.call(message, "popupHeaderMenuCol"))
                $root.in_proto.PopupMenu.encode(message.popupHeaderMenuCol, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.titleHorizontal != null && Object.hasOwnProperty.call(message, "titleHorizontal"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.titleHorizontal);
            if (message.titleVertical != null && Object.hasOwnProperty.call(message, "titleVertical"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.titleVertical);
            if (message.titleAlignment != null && Object.hasOwnProperty.call(message, "titleAlignment"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.titleAlignment);
            if (message.placementHorizontal != null && Object.hasOwnProperty.call(message, "placementHorizontal"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.placementHorizontal);
            if (message.placementVertical != null && Object.hasOwnProperty.call(message, "placementVertical"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.placementVertical);
            if (message.rowHeader != null && message.rowHeader.length)
                for (let i = 0; i < message.rowHeader.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.rowHeader[i]);
            if (message.rowHeaderHidden != null && Object.hasOwnProperty.call(message, "rowHeaderHidden"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.rowHeaderHidden);
            if (message.rowHeaderMaxLength != null && Object.hasOwnProperty.call(message, "rowHeaderMaxLength"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.rowHeaderMaxLength);
            if (message.rowHeaderLength != null && Object.hasOwnProperty.call(message, "rowHeaderLength"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.rowHeaderLength);
            if (message.rowOffset != null && Object.hasOwnProperty.call(message, "rowOffset"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.rowOffset);
            if (message.columnHeader != null && message.columnHeader.length)
                for (let i = 0; i < message.columnHeader.length; ++i)
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.columnHeader[i]);
            if (message.columnHeaderHidden != null && Object.hasOwnProperty.call(message, "columnHeaderHidden"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.columnHeaderHidden);
            if (message.columnHeaderMaxLength != null && Object.hasOwnProperty.call(message, "columnHeaderMaxLength"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.columnHeaderMaxLength);
            if (message.columnLength != null && message.columnLength.length) {
                writer.uint32(/* id 19, wireType 2 =*/154).fork();
                for (let i = 0; i < message.columnLength.length; ++i)
                    writer.uint32(message.columnLength[i]);
                writer.ldelim();
            }
            if (message.columnOffset != null && Object.hasOwnProperty.call(message, "columnOffset"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.columnOffset);
            if (message.orientation != null && Object.hasOwnProperty.call(message, "orientation"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.orientation);
            if (message.navigation != null && Object.hasOwnProperty.call(message, "navigation"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.navigation);
            if (message.isMatrix != null && Object.hasOwnProperty.call(message, "isMatrix"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.isMatrix);
            if (message.numRows != null && Object.hasOwnProperty.call(message, "numRows"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.numRows);
            if (message.numColumns != null && Object.hasOwnProperty.call(message, "numColumns"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.numColumns);
            if (message.numRowsVisible != null && Object.hasOwnProperty.call(message, "numRowsVisible"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.numRowsVisible);
            if (message.numColumnsVisible != null && Object.hasOwnProperty.call(message, "numColumnsVisible"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.numColumnsVisible);
            if (message.numFrozenRows != null && Object.hasOwnProperty.call(message, "numFrozenRows"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.numFrozenRows);
            if (message.numFrozenColumns != null && Object.hasOwnProperty.call(message, "numFrozenColumns"))
                writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.numFrozenColumns);
            if (message.numRowsFixed != null && Object.hasOwnProperty.call(message, "numRowsFixed"))
                writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.numRowsFixed);
            if (message.numColumnsFixed != null && Object.hasOwnProperty.call(message, "numColumnsFixed"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.numColumnsFixed);
            if (message.matrix != null && message.matrix.length)
                for (let i = 0; i < message.matrix.length; ++i)
                    $root.in_proto.Table.MatrixEntry.encode(message.matrix[i], writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link in_proto.Table.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Table
         * @static
         * @param {in_proto.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Table();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.popupBaseMenu = $root.in_proto.PopupMenu.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.popupHeaderMenu = $root.in_proto.PopupMenu.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.popupHeaderMenuCol = $root.in_proto.PopupMenu.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.title = reader.string();
                        break;
                    }
                case 6: {
                        message.titleHorizontal = reader.string();
                        break;
                    }
                case 7: {
                        message.titleVertical = reader.string();
                        break;
                    }
                case 8: {
                        message.titleAlignment = reader.int32();
                        break;
                    }
                case 9: {
                        message.placementHorizontal = reader.int32();
                        break;
                    }
                case 10: {
                        message.placementVertical = reader.int32();
                        break;
                    }
                case 11: {
                        if (!(message.rowHeader && message.rowHeader.length))
                            message.rowHeader = [];
                        message.rowHeader.push(reader.string());
                        break;
                    }
                case 12: {
                        message.rowHeaderHidden = reader.bool();
                        break;
                    }
                case 13: {
                        message.rowHeaderMaxLength = reader.uint32();
                        break;
                    }
                case 14: {
                        message.rowHeaderLength = reader.uint32();
                        break;
                    }
                case 15: {
                        message.rowOffset = reader.uint32();
                        break;
                    }
                case 16: {
                        if (!(message.columnHeader && message.columnHeader.length))
                            message.columnHeader = [];
                        message.columnHeader.push(reader.string());
                        break;
                    }
                case 17: {
                        message.columnHeaderHidden = reader.bool();
                        break;
                    }
                case 18: {
                        message.columnHeaderMaxLength = reader.uint32();
                        break;
                    }
                case 19: {
                        if (!(message.columnLength && message.columnLength.length))
                            message.columnLength = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.columnLength.push(reader.uint32());
                        } else
                            message.columnLength.push(reader.uint32());
                        break;
                    }
                case 20: {
                        message.columnOffset = reader.uint32();
                        break;
                    }
                case 21: {
                        message.orientation = reader.int32();
                        break;
                    }
                case 22: {
                        message.navigation = reader.int32();
                        break;
                    }
                case 23: {
                        message.isMatrix = reader.bool();
                        break;
                    }
                case 24: {
                        message.numRows = reader.uint32();
                        break;
                    }
                case 25: {
                        message.numColumns = reader.uint32();
                        break;
                    }
                case 26: {
                        message.numRowsVisible = reader.uint32();
                        break;
                    }
                case 27: {
                        message.numColumnsVisible = reader.uint32();
                        break;
                    }
                case 28: {
                        message.numFrozenRows = reader.uint32();
                        break;
                    }
                case 29: {
                        message.numFrozenColumns = reader.uint32();
                        break;
                    }
                case 30: {
                        message.numRowsFixed = reader.uint32();
                        break;
                    }
                case 31: {
                        message.numColumnsFixed = reader.uint32();
                        break;
                    }
                case 32: {
                        if (!(message.matrix && message.matrix.length))
                            message.matrix = [];
                        message.matrix.push($root.in_proto.Table.MatrixEntry.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Table message.
         * @function verify
         * @memberof in_proto.Table
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Table.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.popupBaseMenu != null && message.hasOwnProperty("popupBaseMenu")) {
                let error = $root.in_proto.PopupMenu.verify(message.popupBaseMenu);
                if (error)
                    return "popupBaseMenu." + error;
            }
            if (message.popupHeaderMenu != null && message.hasOwnProperty("popupHeaderMenu")) {
                let error = $root.in_proto.PopupMenu.verify(message.popupHeaderMenu);
                if (error)
                    return "popupHeaderMenu." + error;
            }
            if (message.popupHeaderMenuCol != null && message.hasOwnProperty("popupHeaderMenuCol")) {
                let error = $root.in_proto.PopupMenu.verify(message.popupHeaderMenuCol);
                if (error)
                    return "popupHeaderMenuCol." + error;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.titleHorizontal != null && message.hasOwnProperty("titleHorizontal"))
                if (!$util.isString(message.titleHorizontal))
                    return "titleHorizontal: string expected";
            if (message.titleVertical != null && message.hasOwnProperty("titleVertical"))
                if (!$util.isString(message.titleVertical))
                    return "titleVertical: string expected";
            if (message.titleAlignment != null && message.hasOwnProperty("titleAlignment"))
                switch (message.titleAlignment) {
                default:
                    return "titleAlignment: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.placementHorizontal != null && message.hasOwnProperty("placementHorizontal"))
                switch (message.placementHorizontal) {
                default:
                    return "placementHorizontal: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.placementVertical != null && message.hasOwnProperty("placementVertical"))
                switch (message.placementVertical) {
                default:
                    return "placementVertical: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.rowHeader != null && message.hasOwnProperty("rowHeader")) {
                if (!Array.isArray(message.rowHeader))
                    return "rowHeader: array expected";
                for (let i = 0; i < message.rowHeader.length; ++i)
                    if (!$util.isString(message.rowHeader[i]))
                        return "rowHeader: string[] expected";
            }
            if (message.rowHeaderHidden != null && message.hasOwnProperty("rowHeaderHidden"))
                if (typeof message.rowHeaderHidden !== "boolean")
                    return "rowHeaderHidden: boolean expected";
            if (message.rowHeaderMaxLength != null && message.hasOwnProperty("rowHeaderMaxLength"))
                if (!$util.isInteger(message.rowHeaderMaxLength))
                    return "rowHeaderMaxLength: integer expected";
            if (message.rowHeaderLength != null && message.hasOwnProperty("rowHeaderLength"))
                if (!$util.isInteger(message.rowHeaderLength))
                    return "rowHeaderLength: integer expected";
            if (message.rowOffset != null && message.hasOwnProperty("rowOffset"))
                if (!$util.isInteger(message.rowOffset))
                    return "rowOffset: integer expected";
            if (message.columnHeader != null && message.hasOwnProperty("columnHeader")) {
                if (!Array.isArray(message.columnHeader))
                    return "columnHeader: array expected";
                for (let i = 0; i < message.columnHeader.length; ++i)
                    if (!$util.isString(message.columnHeader[i]))
                        return "columnHeader: string[] expected";
            }
            if (message.columnHeaderHidden != null && message.hasOwnProperty("columnHeaderHidden"))
                if (typeof message.columnHeaderHidden !== "boolean")
                    return "columnHeaderHidden: boolean expected";
            if (message.columnHeaderMaxLength != null && message.hasOwnProperty("columnHeaderMaxLength"))
                if (!$util.isInteger(message.columnHeaderMaxLength))
                    return "columnHeaderMaxLength: integer expected";
            if (message.columnLength != null && message.hasOwnProperty("columnLength")) {
                if (!Array.isArray(message.columnLength))
                    return "columnLength: array expected";
                for (let i = 0; i < message.columnLength.length; ++i)
                    if (!$util.isInteger(message.columnLength[i]))
                        return "columnLength: integer[] expected";
            }
            if (message.columnOffset != null && message.hasOwnProperty("columnOffset"))
                if (!$util.isInteger(message.columnOffset))
                    return "columnOffset: integer expected";
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                switch (message.orientation) {
                default:
                    return "orientation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.navigation != null && message.hasOwnProperty("navigation"))
                switch (message.navigation) {
                default:
                    return "navigation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.isMatrix != null && message.hasOwnProperty("isMatrix"))
                if (typeof message.isMatrix !== "boolean")
                    return "isMatrix: boolean expected";
            if (message.numRows != null && message.hasOwnProperty("numRows"))
                if (!$util.isInteger(message.numRows))
                    return "numRows: integer expected";
            if (message.numColumns != null && message.hasOwnProperty("numColumns"))
                if (!$util.isInteger(message.numColumns))
                    return "numColumns: integer expected";
            if (message.numRowsVisible != null && message.hasOwnProperty("numRowsVisible"))
                if (!$util.isInteger(message.numRowsVisible))
                    return "numRowsVisible: integer expected";
            if (message.numColumnsVisible != null && message.hasOwnProperty("numColumnsVisible"))
                if (!$util.isInteger(message.numColumnsVisible))
                    return "numColumnsVisible: integer expected";
            if (message.numFrozenRows != null && message.hasOwnProperty("numFrozenRows"))
                if (!$util.isInteger(message.numFrozenRows))
                    return "numFrozenRows: integer expected";
            if (message.numFrozenColumns != null && message.hasOwnProperty("numFrozenColumns"))
                if (!$util.isInteger(message.numFrozenColumns))
                    return "numFrozenColumns: integer expected";
            if (message.numRowsFixed != null && message.hasOwnProperty("numRowsFixed"))
                if (!$util.isInteger(message.numRowsFixed))
                    return "numRowsFixed: integer expected";
            if (message.numColumnsFixed != null && message.hasOwnProperty("numColumnsFixed"))
                if (!$util.isInteger(message.numColumnsFixed))
                    return "numColumnsFixed: integer expected";
            if (message.matrix != null && message.hasOwnProperty("matrix")) {
                if (!Array.isArray(message.matrix))
                    return "matrix: array expected";
                for (let i = 0; i < message.matrix.length; ++i) {
                    let error = $root.in_proto.Table.MatrixEntry.verify(message.matrix[i]);
                    if (error)
                        return "matrix." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Table message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Table
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Table} Table
         */
        Table.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Table)
                return object;
            let message = new $root.in_proto.Table();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Table.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.popupBaseMenu != null) {
                if (typeof object.popupBaseMenu !== "object")
                    throw TypeError(".in_proto.Table.popupBaseMenu: object expected");
                message.popupBaseMenu = $root.in_proto.PopupMenu.fromObject(object.popupBaseMenu);
            }
            if (object.popupHeaderMenu != null) {
                if (typeof object.popupHeaderMenu !== "object")
                    throw TypeError(".in_proto.Table.popupHeaderMenu: object expected");
                message.popupHeaderMenu = $root.in_proto.PopupMenu.fromObject(object.popupHeaderMenu);
            }
            if (object.popupHeaderMenuCol != null) {
                if (typeof object.popupHeaderMenuCol !== "object")
                    throw TypeError(".in_proto.Table.popupHeaderMenuCol: object expected");
                message.popupHeaderMenuCol = $root.in_proto.PopupMenu.fromObject(object.popupHeaderMenuCol);
            }
            if (object.title != null)
                message.title = String(object.title);
            if (object.titleHorizontal != null)
                message.titleHorizontal = String(object.titleHorizontal);
            if (object.titleVertical != null)
                message.titleVertical = String(object.titleVertical);
            switch (object.titleAlignment) {
            default:
                if (typeof object.titleAlignment === "number") {
                    message.titleAlignment = object.titleAlignment;
                    break;
                }
                break;
            case "Default":
            case 0:
                message.titleAlignment = 0;
                break;
            case "Left":
            case 1:
                message.titleAlignment = 1;
                break;
            case "Right":
            case 2:
                message.titleAlignment = 2;
                break;
            case "Center":
            case 3:
                message.titleAlignment = 3;
                break;
            case "Top":
            case 4:
                message.titleAlignment = 4;
                break;
            case "Bottom":
            case 5:
                message.titleAlignment = 5;
                break;
            case "Stretch":
            case 6:
                message.titleAlignment = 6;
                break;
            case "Justify":
            case 7:
                message.titleAlignment = 7;
                break;
            }
            switch (object.placementHorizontal) {
            default:
                if (typeof object.placementHorizontal === "number") {
                    message.placementHorizontal = object.placementHorizontal;
                    break;
                }
                break;
            case "Default":
            case 0:
                message.placementHorizontal = 0;
                break;
            case "Left":
            case 1:
                message.placementHorizontal = 1;
                break;
            case "Right":
            case 2:
                message.placementHorizontal = 2;
                break;
            case "Center":
            case 3:
                message.placementHorizontal = 3;
                break;
            case "Top":
            case 4:
                message.placementHorizontal = 4;
                break;
            case "Bottom":
            case 5:
                message.placementHorizontal = 5;
                break;
            case "Stretch":
            case 6:
                message.placementHorizontal = 6;
                break;
            case "Justify":
            case 7:
                message.placementHorizontal = 7;
                break;
            }
            switch (object.placementVertical) {
            default:
                if (typeof object.placementVertical === "number") {
                    message.placementVertical = object.placementVertical;
                    break;
                }
                break;
            case "Default":
            case 0:
                message.placementVertical = 0;
                break;
            case "Left":
            case 1:
                message.placementVertical = 1;
                break;
            case "Right":
            case 2:
                message.placementVertical = 2;
                break;
            case "Center":
            case 3:
                message.placementVertical = 3;
                break;
            case "Top":
            case 4:
                message.placementVertical = 4;
                break;
            case "Bottom":
            case 5:
                message.placementVertical = 5;
                break;
            case "Stretch":
            case 6:
                message.placementVertical = 6;
                break;
            case "Justify":
            case 7:
                message.placementVertical = 7;
                break;
            }
            if (object.rowHeader) {
                if (!Array.isArray(object.rowHeader))
                    throw TypeError(".in_proto.Table.rowHeader: array expected");
                message.rowHeader = [];
                for (let i = 0; i < object.rowHeader.length; ++i)
                    message.rowHeader[i] = String(object.rowHeader[i]);
            }
            if (object.rowHeaderHidden != null)
                message.rowHeaderHidden = Boolean(object.rowHeaderHidden);
            if (object.rowHeaderMaxLength != null)
                message.rowHeaderMaxLength = object.rowHeaderMaxLength >>> 0;
            if (object.rowHeaderLength != null)
                message.rowHeaderLength = object.rowHeaderLength >>> 0;
            if (object.rowOffset != null)
                message.rowOffset = object.rowOffset >>> 0;
            if (object.columnHeader) {
                if (!Array.isArray(object.columnHeader))
                    throw TypeError(".in_proto.Table.columnHeader: array expected");
                message.columnHeader = [];
                for (let i = 0; i < object.columnHeader.length; ++i)
                    message.columnHeader[i] = String(object.columnHeader[i]);
            }
            if (object.columnHeaderHidden != null)
                message.columnHeaderHidden = Boolean(object.columnHeaderHidden);
            if (object.columnHeaderMaxLength != null)
                message.columnHeaderMaxLength = object.columnHeaderMaxLength >>> 0;
            if (object.columnLength) {
                if (!Array.isArray(object.columnLength))
                    throw TypeError(".in_proto.Table.columnLength: array expected");
                message.columnLength = [];
                for (let i = 0; i < object.columnLength.length; ++i)
                    message.columnLength[i] = object.columnLength[i] >>> 0;
            }
            if (object.columnOffset != null)
                message.columnOffset = object.columnOffset >>> 0;
            switch (object.orientation) {
            default:
                if (typeof object.orientation === "number") {
                    message.orientation = object.orientation;
                    break;
                }
                break;
            case "None":
            case 0:
                message.orientation = 0;
                break;
            case "Horizontal":
            case 1:
                message.orientation = 1;
                break;
            case "Vertical":
            case 2:
                message.orientation = 2;
                break;
            case "Both":
            case 3:
                message.orientation = 3;
                break;
            }
            switch (object.navigation) {
            default:
                if (typeof object.navigation === "number") {
                    message.navigation = object.navigation;
                    break;
                }
                break;
            case "None":
            case 0:
                message.navigation = 0;
                break;
            case "Horizontal":
            case 1:
                message.navigation = 1;
                break;
            case "Vertical":
            case 2:
                message.navigation = 2;
                break;
            case "Both":
            case 3:
                message.navigation = 3;
                break;
            }
            if (object.isMatrix != null)
                message.isMatrix = Boolean(object.isMatrix);
            if (object.numRows != null)
                message.numRows = object.numRows >>> 0;
            if (object.numColumns != null)
                message.numColumns = object.numColumns >>> 0;
            if (object.numRowsVisible != null)
                message.numRowsVisible = object.numRowsVisible >>> 0;
            if (object.numColumnsVisible != null)
                message.numColumnsVisible = object.numColumnsVisible >>> 0;
            if (object.numFrozenRows != null)
                message.numFrozenRows = object.numFrozenRows >>> 0;
            if (object.numFrozenColumns != null)
                message.numFrozenColumns = object.numFrozenColumns >>> 0;
            if (object.numRowsFixed != null)
                message.numRowsFixed = object.numRowsFixed >>> 0;
            if (object.numColumnsFixed != null)
                message.numColumnsFixed = object.numColumnsFixed >>> 0;
            if (object.matrix) {
                if (!Array.isArray(object.matrix))
                    throw TypeError(".in_proto.Table.matrix: array expected");
                message.matrix = [];
                for (let i = 0; i < object.matrix.length; ++i) {
                    if (typeof object.matrix[i] !== "object")
                        throw TypeError(".in_proto.Table.matrix: object expected");
                    message.matrix[i] = $root.in_proto.Table.MatrixEntry.fromObject(object.matrix[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Table message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Table
         * @static
         * @param {in_proto.Table} message Table
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Table.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.rowHeader = [];
                object.columnHeader = [];
                object.columnLength = [];
                object.matrix = [];
            }
            if (options.defaults) {
                object.base = null;
                object.popupBaseMenu = null;
                object.popupHeaderMenu = null;
                object.popupHeaderMenuCol = null;
                object.title = "";
                object.titleHorizontal = "";
                object.titleVertical = "";
                object.titleAlignment = options.enums === String ? "Default" : 0;
                object.placementHorizontal = options.enums === String ? "Default" : 0;
                object.placementVertical = options.enums === String ? "Default" : 0;
                object.rowHeaderHidden = false;
                object.rowHeaderMaxLength = 0;
                object.rowHeaderLength = 0;
                object.rowOffset = 0;
                object.columnHeaderHidden = false;
                object.columnHeaderMaxLength = 0;
                object.columnOffset = 0;
                object.orientation = options.enums === String ? "None" : 0;
                object.navigation = options.enums === String ? "None" : 0;
                object.isMatrix = false;
                object.numRows = 0;
                object.numColumns = 0;
                object.numRowsVisible = 0;
                object.numColumnsVisible = 0;
                object.numFrozenRows = 0;
                object.numFrozenColumns = 0;
                object.numRowsFixed = 0;
                object.numColumnsFixed = 0;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.popupBaseMenu != null && message.hasOwnProperty("popupBaseMenu"))
                object.popupBaseMenu = $root.in_proto.PopupMenu.toObject(message.popupBaseMenu, options);
            if (message.popupHeaderMenu != null && message.hasOwnProperty("popupHeaderMenu"))
                object.popupHeaderMenu = $root.in_proto.PopupMenu.toObject(message.popupHeaderMenu, options);
            if (message.popupHeaderMenuCol != null && message.hasOwnProperty("popupHeaderMenuCol"))
                object.popupHeaderMenuCol = $root.in_proto.PopupMenu.toObject(message.popupHeaderMenuCol, options);
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.titleHorizontal != null && message.hasOwnProperty("titleHorizontal"))
                object.titleHorizontal = message.titleHorizontal;
            if (message.titleVertical != null && message.hasOwnProperty("titleVertical"))
                object.titleVertical = message.titleVertical;
            if (message.titleAlignment != null && message.hasOwnProperty("titleAlignment"))
                object.titleAlignment = options.enums === String ? $root.in_proto.GuiElement.Alignment[message.titleAlignment] === undefined ? message.titleAlignment : $root.in_proto.GuiElement.Alignment[message.titleAlignment] : message.titleAlignment;
            if (message.placementHorizontal != null && message.hasOwnProperty("placementHorizontal"))
                object.placementHorizontal = options.enums === String ? $root.in_proto.GuiElement.Alignment[message.placementHorizontal] === undefined ? message.placementHorizontal : $root.in_proto.GuiElement.Alignment[message.placementHorizontal] : message.placementHorizontal;
            if (message.placementVertical != null && message.hasOwnProperty("placementVertical"))
                object.placementVertical = options.enums === String ? $root.in_proto.GuiElement.Alignment[message.placementVertical] === undefined ? message.placementVertical : $root.in_proto.GuiElement.Alignment[message.placementVertical] : message.placementVertical;
            if (message.rowHeader && message.rowHeader.length) {
                object.rowHeader = [];
                for (let j = 0; j < message.rowHeader.length; ++j)
                    object.rowHeader[j] = message.rowHeader[j];
            }
            if (message.rowHeaderHidden != null && message.hasOwnProperty("rowHeaderHidden"))
                object.rowHeaderHidden = message.rowHeaderHidden;
            if (message.rowHeaderMaxLength != null && message.hasOwnProperty("rowHeaderMaxLength"))
                object.rowHeaderMaxLength = message.rowHeaderMaxLength;
            if (message.rowHeaderLength != null && message.hasOwnProperty("rowHeaderLength"))
                object.rowHeaderLength = message.rowHeaderLength;
            if (message.rowOffset != null && message.hasOwnProperty("rowOffset"))
                object.rowOffset = message.rowOffset;
            if (message.columnHeader && message.columnHeader.length) {
                object.columnHeader = [];
                for (let j = 0; j < message.columnHeader.length; ++j)
                    object.columnHeader[j] = message.columnHeader[j];
            }
            if (message.columnHeaderHidden != null && message.hasOwnProperty("columnHeaderHidden"))
                object.columnHeaderHidden = message.columnHeaderHidden;
            if (message.columnHeaderMaxLength != null && message.hasOwnProperty("columnHeaderMaxLength"))
                object.columnHeaderMaxLength = message.columnHeaderMaxLength;
            if (message.columnLength && message.columnLength.length) {
                object.columnLength = [];
                for (let j = 0; j < message.columnLength.length; ++j)
                    object.columnLength[j] = message.columnLength[j];
            }
            if (message.columnOffset != null && message.hasOwnProperty("columnOffset"))
                object.columnOffset = message.columnOffset;
            if (message.orientation != null && message.hasOwnProperty("orientation"))
                object.orientation = options.enums === String ? $root.in_proto.GuiElement.Orientation[message.orientation] === undefined ? message.orientation : $root.in_proto.GuiElement.Orientation[message.orientation] : message.orientation;
            if (message.navigation != null && message.hasOwnProperty("navigation"))
                object.navigation = options.enums === String ? $root.in_proto.GuiElement.Orientation[message.navigation] === undefined ? message.navigation : $root.in_proto.GuiElement.Orientation[message.navigation] : message.navigation;
            if (message.isMatrix != null && message.hasOwnProperty("isMatrix"))
                object.isMatrix = message.isMatrix;
            if (message.numRows != null && message.hasOwnProperty("numRows"))
                object.numRows = message.numRows;
            if (message.numColumns != null && message.hasOwnProperty("numColumns"))
                object.numColumns = message.numColumns;
            if (message.numRowsVisible != null && message.hasOwnProperty("numRowsVisible"))
                object.numRowsVisible = message.numRowsVisible;
            if (message.numColumnsVisible != null && message.hasOwnProperty("numColumnsVisible"))
                object.numColumnsVisible = message.numColumnsVisible;
            if (message.numFrozenRows != null && message.hasOwnProperty("numFrozenRows"))
                object.numFrozenRows = message.numFrozenRows;
            if (message.numFrozenColumns != null && message.hasOwnProperty("numFrozenColumns"))
                object.numFrozenColumns = message.numFrozenColumns;
            if (message.numRowsFixed != null && message.hasOwnProperty("numRowsFixed"))
                object.numRowsFixed = message.numRowsFixed;
            if (message.numColumnsFixed != null && message.hasOwnProperty("numColumnsFixed"))
                object.numColumnsFixed = message.numColumnsFixed;
            if (message.matrix && message.matrix.length) {
                object.matrix = [];
                for (let j = 0; j < message.matrix.length; ++j)
                    object.matrix[j] = $root.in_proto.Table.MatrixEntry.toObject(message.matrix[j], options);
            }
            return object;
        };

        /**
         * Converts this Table to JSON.
         * @function toJSON
         * @memberof in_proto.Table
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Table.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Table
         * @function getTypeUrl
         * @memberof in_proto.Table
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Table.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Table";
        };

        Table.MatrixEntry = (function() {

            /**
             * Properties of a MatrixEntry.
             * @memberof in_proto.Table
             * @interface IMatrixEntry
             * @property {Array.<in_proto.Table.MatrixEntry.IElementEntry>|null} [a] MatrixEntry a
             */

            /**
             * Constructs a new MatrixEntry.
             * @memberof in_proto.Table
             * @classdesc Represents a MatrixEntry.
             * @implements IMatrixEntry
             * @constructor
             * @param {in_proto.Table.IMatrixEntry=} [properties] Properties to set
             */
            function MatrixEntry(properties) {
                this.a = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MatrixEntry a.
             * @member {Array.<in_proto.Table.MatrixEntry.IElementEntry>} a
             * @memberof in_proto.Table.MatrixEntry
             * @instance
             */
            MatrixEntry.prototype.a = $util.emptyArray;

            /**
             * Creates a new MatrixEntry instance using the specified properties.
             * @function create
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {in_proto.Table.IMatrixEntry=} [properties] Properties to set
             * @returns {in_proto.Table.MatrixEntry} MatrixEntry instance
             */
            MatrixEntry.create = function create(properties) {
                return new MatrixEntry(properties);
            };

            /**
             * Encodes the specified MatrixEntry message. Does not implicitly {@link in_proto.Table.MatrixEntry.verify|verify} messages.
             * @function encode
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {in_proto.Table.IMatrixEntry} message MatrixEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MatrixEntry.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.a != null && message.a.length)
                    for (let i = 0; i < message.a.length; ++i)
                        $root.in_proto.Table.MatrixEntry.ElementEntry.encode(message.a[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MatrixEntry message, length delimited. Does not implicitly {@link in_proto.Table.MatrixEntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {in_proto.Table.IMatrixEntry} message MatrixEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MatrixEntry.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MatrixEntry message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.Table.MatrixEntry} MatrixEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MatrixEntry.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Table.MatrixEntry();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.a && message.a.length))
                                message.a = [];
                            message.a.push($root.in_proto.Table.MatrixEntry.ElementEntry.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MatrixEntry message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.Table.MatrixEntry} MatrixEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MatrixEntry.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MatrixEntry message.
             * @function verify
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MatrixEntry.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.a != null && message.hasOwnProperty("a")) {
                    if (!Array.isArray(message.a))
                        return "a: array expected";
                    for (let i = 0; i < message.a.length; ++i) {
                        let error = $root.in_proto.Table.MatrixEntry.ElementEntry.verify(message.a[i]);
                        if (error)
                            return "a." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MatrixEntry message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.Table.MatrixEntry} MatrixEntry
             */
            MatrixEntry.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.Table.MatrixEntry)
                    return object;
                let message = new $root.in_proto.Table.MatrixEntry();
                if (object.a) {
                    if (!Array.isArray(object.a))
                        throw TypeError(".in_proto.Table.MatrixEntry.a: array expected");
                    message.a = [];
                    for (let i = 0; i < object.a.length; ++i) {
                        if (typeof object.a[i] !== "object")
                            throw TypeError(".in_proto.Table.MatrixEntry.a: object expected");
                        message.a[i] = $root.in_proto.Table.MatrixEntry.ElementEntry.fromObject(object.a[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MatrixEntry message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {in_proto.Table.MatrixEntry} message MatrixEntry
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MatrixEntry.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.a = [];
                if (message.a && message.a.length) {
                    object.a = [];
                    for (let j = 0; j < message.a.length; ++j)
                        object.a[j] = $root.in_proto.Table.MatrixEntry.ElementEntry.toObject(message.a[j], options);
                }
                return object;
            };

            /**
             * Converts this MatrixEntry to JSON.
             * @function toJSON
             * @memberof in_proto.Table.MatrixEntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MatrixEntry.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MatrixEntry
             * @function getTypeUrl
             * @memberof in_proto.Table.MatrixEntry
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MatrixEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.Table.MatrixEntry";
            };

            MatrixEntry.ElementEntry = (function() {

                /**
                 * Properties of an ElementEntry.
                 * @memberof in_proto.Table.MatrixEntry
                 * @interface IElementEntry
                 * @property {in_proto.IComboBox|null} [element] ElementEntry element
                 * @property {in_proto.GuiElement.Type|null} [type] ElementEntry type
                 * @property {string|null} [bgcolor] ElementEntry bgcolor
                 */

                /**
                 * Constructs a new ElementEntry.
                 * @memberof in_proto.Table.MatrixEntry
                 * @classdesc Represents an ElementEntry.
                 * @implements IElementEntry
                 * @constructor
                 * @param {in_proto.Table.MatrixEntry.IElementEntry=} [properties] Properties to set
                 */
                function ElementEntry(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ElementEntry element.
                 * @member {in_proto.IComboBox|null|undefined} element
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @instance
                 */
                ElementEntry.prototype.element = null;

                /**
                 * ElementEntry type.
                 * @member {in_proto.GuiElement.Type} type
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @instance
                 */
                ElementEntry.prototype.type = 0;

                /**
                 * ElementEntry bgcolor.
                 * @member {string} bgcolor
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @instance
                 */
                ElementEntry.prototype.bgcolor = "";

                /**
                 * Creates a new ElementEntry instance using the specified properties.
                 * @function create
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {in_proto.Table.MatrixEntry.IElementEntry=} [properties] Properties to set
                 * @returns {in_proto.Table.MatrixEntry.ElementEntry} ElementEntry instance
                 */
                ElementEntry.create = function create(properties) {
                    return new ElementEntry(properties);
                };

                /**
                 * Encodes the specified ElementEntry message. Does not implicitly {@link in_proto.Table.MatrixEntry.ElementEntry.verify|verify} messages.
                 * @function encode
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {in_proto.Table.MatrixEntry.IElementEntry} message ElementEntry message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ElementEntry.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.element != null && Object.hasOwnProperty.call(message, "element"))
                        $root.in_proto.ComboBox.encode(message.element, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    if (message.bgcolor != null && Object.hasOwnProperty.call(message, "bgcolor"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.bgcolor);
                    return writer;
                };

                /**
                 * Encodes the specified ElementEntry message, length delimited. Does not implicitly {@link in_proto.Table.MatrixEntry.ElementEntry.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {in_proto.Table.MatrixEntry.IElementEntry} message ElementEntry message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ElementEntry.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ElementEntry message from the specified reader or buffer.
                 * @function decode
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {in_proto.Table.MatrixEntry.ElementEntry} ElementEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ElementEntry.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Table.MatrixEntry.ElementEntry();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.element = $root.in_proto.ComboBox.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.type = reader.int32();
                                break;
                            }
                        case 3: {
                                message.bgcolor = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ElementEntry message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {in_proto.Table.MatrixEntry.ElementEntry} ElementEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ElementEntry.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ElementEntry message.
                 * @function verify
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ElementEntry.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.element != null && message.hasOwnProperty("element")) {
                        let error = $root.in_proto.ComboBox.verify(message.element);
                        if (error)
                            return "element." + error;
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 24:
                        case 25:
                        case 26:
                        case 27:
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                        case 41:
                        case 42:
                        case 43:
                        case 44:
                            break;
                        }
                    if (message.bgcolor != null && message.hasOwnProperty("bgcolor"))
                        if (!$util.isString(message.bgcolor))
                            return "bgcolor: string expected";
                    return null;
                };

                /**
                 * Creates an ElementEntry message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {in_proto.Table.MatrixEntry.ElementEntry} ElementEntry
                 */
                ElementEntry.fromObject = function fromObject(object) {
                    if (object instanceof $root.in_proto.Table.MatrixEntry.ElementEntry)
                        return object;
                    let message = new $root.in_proto.Table.MatrixEntry.ElementEntry();
                    if (object.element != null) {
                        if (typeof object.element !== "object")
                            throw TypeError(".in_proto.Table.MatrixEntry.ElementEntry.element: object expected");
                        message.element = $root.in_proto.ComboBox.fromObject(object.element);
                    }
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "Unknown":
                    case 0:
                        message.type = 0;
                        break;
                    case "EPlot2D":
                    case 1:
                        message.type = 1;
                        break;
                    case "EPlot3D":
                    case 2:
                        message.type = 2;
                        break;
                    case "EButtonbar":
                    case 3:
                        message.type = 3;
                        break;
                    case "EButton":
                    case 4:
                        message.type = 4;
                        break;
                    case "EComboBox":
                    case 5:
                        message.type = 5;
                        break;
                    case "EContainer":
                    case 6:
                        message.type = 6;
                        break;
                    case "EDiagram":
                    case 7:
                        message.type = 7;
                        break;
                    case "EFieldGroup":
                    case 8:
                        message.type = 8;
                        break;
                    case "EFolder":
                    case 9:
                        message.type = 9;
                        break;
                    case "EForm":
                    case 10:
                        message.type = 10;
                        break;
                    case "EHeader":
                    case 11:
                        message.type = 11;
                        break;
                    case "EIconView":
                    case 12:
                        message.type = 12;
                        break;
                    case "EIndex":
                    case 13:
                        message.type = 13;
                        break;
                    case "EIndexMenu":
                    case 14:
                        message.type = 14;
                        break;
                    case "ELabel":
                    case 15:
                        message.type = 15;
                        break;
                    case "EList":
                    case 16:
                        message.type = 16;
                        break;
                    case "EMenubar":
                    case 17:
                        message.type = 17;
                        break;
                    case "EMenuButton":
                    case 18:
                        message.type = 18;
                        break;
                    case "EMessagebar":
                    case 19:
                        message.type = 19;
                        break;
                    case "EMessage":
                    case 20:
                        message.type = 20;
                        break;
                    case "ENavigator":
                    case 21:
                        message.type = 21;
                        break;
                    case "ENavigatorNode":
                    case 22:
                        message.type = 22;
                        break;
                    case "EPixmap":
                    case 23:
                        message.type = 23;
                        break;
                    case "ERadio":
                    case 24:
                        message.type = 24;
                        break;
                    case "EScrolledText":
                    case 25:
                        message.type = 25;
                        break;
                    case "ESeparator":
                    case 26:
                        message.type = 26;
                        break;
                    case "ESlider":
                    case 27:
                        message.type = 27;
                        break;
                    case "EStretch":
                    case 28:
                        message.type = 28;
                        break;
                    case "ETable":
                    case 29:
                        message.type = 29;
                        break;
                    case "EText":
                    case 30:
                        message.type = 30;
                        break;
                    case "ETextfield":
                    case 31:
                        message.type = 31;
                        break;
                    case "EThermo":
                    case 32:
                        message.type = 32;
                        break;
                    case "EToggle":
                    case 33:
                        message.type = 33;
                        break;
                    case "EVoid":
                    case 34:
                        message.type = 34;
                        break;
                    case "EFieldGroupLine":
                    case 35:
                        message.type = 35;
                        break;
                    case "EPulldownMenu":
                    case 36:
                        message.type = 36;
                        break;
                    case "EMenuToggle":
                    case 37:
                        message.type = 37;
                        break;
                    case "ETableDataItem":
                    case 38:
                        message.type = 38;
                        break;
                    case "ETableComboBoxDataItem":
                    case 39:
                        message.type = 39;
                        break;
                    case "ETableRadioDataItem":
                    case 40:
                        message.type = 40;
                        break;
                    case "ETableToggleDataItem":
                    case 41:
                        message.type = 41;
                        break;
                    case "ETableColorPickerDataItem":
                    case 42:
                        message.type = 42;
                        break;
                    case "ETableButtonDataItem":
                    case 43:
                        message.type = 43;
                        break;
                    case "ECycleButton":
                    case 44:
                        message.type = 44;
                        break;
                    }
                    if (object.bgcolor != null)
                        message.bgcolor = String(object.bgcolor);
                    return message;
                };

                /**
                 * Creates a plain object from an ElementEntry message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {in_proto.Table.MatrixEntry.ElementEntry} message ElementEntry
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ElementEntry.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.element = null;
                        object.type = options.enums === String ? "Unknown" : 0;
                        object.bgcolor = "";
                    }
                    if (message.element != null && message.hasOwnProperty("element"))
                        object.element = $root.in_proto.ComboBox.toObject(message.element, options);
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.in_proto.GuiElement.Type[message.type] === undefined ? message.type : $root.in_proto.GuiElement.Type[message.type] : message.type;
                    if (message.bgcolor != null && message.hasOwnProperty("bgcolor"))
                        object.bgcolor = message.bgcolor;
                    return object;
                };

                /**
                 * Converts this ElementEntry to JSON.
                 * @function toJSON
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ElementEntry.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ElementEntry
                 * @function getTypeUrl
                 * @memberof in_proto.Table.MatrixEntry.ElementEntry
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ElementEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/in_proto.Table.MatrixEntry.ElementEntry";
                };

                return ElementEntry;
            })();

            return MatrixEntry;
        })();

        return Table;
    })();

    in_proto.Text = (function() {

        /**
         * Properties of a Text.
         * @memberof in_proto
         * @interface IText
         * @property {in_proto.IDataField|null} [base] Text base
         * @property {in_proto.IPopupMenu|null} [popupBaseMenu] Text popupBaseMenu
         */

        /**
         * Constructs a new Text.
         * @memberof in_proto
         * @classdesc Represents a Text.
         * @implements IText
         * @constructor
         * @param {in_proto.IText=} [properties] Properties to set
         */
        function Text(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Text base.
         * @member {in_proto.IDataField|null|undefined} base
         * @memberof in_proto.Text
         * @instance
         */
        Text.prototype.base = null;

        /**
         * Text popupBaseMenu.
         * @member {in_proto.IPopupMenu|null|undefined} popupBaseMenu
         * @memberof in_proto.Text
         * @instance
         */
        Text.prototype.popupBaseMenu = null;

        /**
         * Creates a new Text instance using the specified properties.
         * @function create
         * @memberof in_proto.Text
         * @static
         * @param {in_proto.IText=} [properties] Properties to set
         * @returns {in_proto.Text} Text instance
         */
        Text.create = function create(properties) {
            return new Text(properties);
        };

        /**
         * Encodes the specified Text message. Does not implicitly {@link in_proto.Text.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Text
         * @static
         * @param {in_proto.IText} message Text message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Text.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.DataField.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.popupBaseMenu != null && Object.hasOwnProperty.call(message, "popupBaseMenu"))
                $root.in_proto.PopupMenu.encode(message.popupBaseMenu, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Text message, length delimited. Does not implicitly {@link in_proto.Text.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Text
         * @static
         * @param {in_proto.IText} message Text message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Text.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Text message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Text
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Text} Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Text.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Text();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.DataField.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.popupBaseMenu = $root.in_proto.PopupMenu.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Text message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Text
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Text} Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Text.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Text message.
         * @function verify
         * @memberof in_proto.Text
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Text.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.DataField.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.popupBaseMenu != null && message.hasOwnProperty("popupBaseMenu")) {
                let error = $root.in_proto.PopupMenu.verify(message.popupBaseMenu);
                if (error)
                    return "popupBaseMenu." + error;
            }
            return null;
        };

        /**
         * Creates a Text message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Text
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Text} Text
         */
        Text.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Text)
                return object;
            let message = new $root.in_proto.Text();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Text.base: object expected");
                message.base = $root.in_proto.DataField.fromObject(object.base);
            }
            if (object.popupBaseMenu != null) {
                if (typeof object.popupBaseMenu !== "object")
                    throw TypeError(".in_proto.Text.popupBaseMenu: object expected");
                message.popupBaseMenu = $root.in_proto.PopupMenu.fromObject(object.popupBaseMenu);
            }
            return message;
        };

        /**
         * Creates a plain object from a Text message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Text
         * @static
         * @param {in_proto.Text} message Text
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Text.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.popupBaseMenu = null;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.DataField.toObject(message.base, options);
            if (message.popupBaseMenu != null && message.hasOwnProperty("popupBaseMenu"))
                object.popupBaseMenu = $root.in_proto.PopupMenu.toObject(message.popupBaseMenu, options);
            return object;
        };

        /**
         * Converts this Text to JSON.
         * @function toJSON
         * @memberof in_proto.Text
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Text.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Text
         * @function getTypeUrl
         * @memberof in_proto.Text
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Text.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Text";
        };

        return Text;
    })();

    in_proto.Thermo = (function() {

        /**
         * Properties of a Thermo.
         * @memberof in_proto
         * @interface IThermo
         * @property {in_proto.IGuiElement|null} [base] Thermo base
         * @property {string|null} [label] Thermo label
         * @property {number|null} [scale] Thermo scale
         * @property {Array.<in_proto.Thermo.IColorEntry>|null} [colorList] Thermo colorList
         */

        /**
         * Constructs a new Thermo.
         * @memberof in_proto
         * @classdesc Represents a Thermo.
         * @implements IThermo
         * @constructor
         * @param {in_proto.IThermo=} [properties] Properties to set
         */
        function Thermo(properties) {
            this.colorList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Thermo base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Thermo
         * @instance
         */
        Thermo.prototype.base = null;

        /**
         * Thermo label.
         * @member {string} label
         * @memberof in_proto.Thermo
         * @instance
         */
        Thermo.prototype.label = "";

        /**
         * Thermo scale.
         * @member {number} scale
         * @memberof in_proto.Thermo
         * @instance
         */
        Thermo.prototype.scale = 0;

        /**
         * Thermo colorList.
         * @member {Array.<in_proto.Thermo.IColorEntry>} colorList
         * @memberof in_proto.Thermo
         * @instance
         */
        Thermo.prototype.colorList = $util.emptyArray;

        /**
         * Creates a new Thermo instance using the specified properties.
         * @function create
         * @memberof in_proto.Thermo
         * @static
         * @param {in_proto.IThermo=} [properties] Properties to set
         * @returns {in_proto.Thermo} Thermo instance
         */
        Thermo.create = function create(properties) {
            return new Thermo(properties);
        };

        /**
         * Encodes the specified Thermo message. Does not implicitly {@link in_proto.Thermo.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Thermo
         * @static
         * @param {in_proto.IThermo} message Thermo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Thermo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.scale);
            if (message.colorList != null && message.colorList.length)
                for (let i = 0; i < message.colorList.length; ++i)
                    $root.in_proto.Thermo.ColorEntry.encode(message.colorList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Thermo message, length delimited. Does not implicitly {@link in_proto.Thermo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Thermo
         * @static
         * @param {in_proto.IThermo} message Thermo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Thermo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Thermo message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Thermo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Thermo} Thermo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Thermo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Thermo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.scale = reader.double();
                        break;
                    }
                case 4: {
                        if (!(message.colorList && message.colorList.length))
                            message.colorList = [];
                        message.colorList.push($root.in_proto.Thermo.ColorEntry.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Thermo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Thermo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Thermo} Thermo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Thermo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Thermo message.
         * @function verify
         * @memberof in_proto.Thermo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Thermo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.scale != null && message.hasOwnProperty("scale"))
                if (typeof message.scale !== "number")
                    return "scale: number expected";
            if (message.colorList != null && message.hasOwnProperty("colorList")) {
                if (!Array.isArray(message.colorList))
                    return "colorList: array expected";
                for (let i = 0; i < message.colorList.length; ++i) {
                    let error = $root.in_proto.Thermo.ColorEntry.verify(message.colorList[i]);
                    if (error)
                        return "colorList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Thermo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Thermo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Thermo} Thermo
         */
        Thermo.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Thermo)
                return object;
            let message = new $root.in_proto.Thermo();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Thermo.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.label != null)
                message.label = String(object.label);
            if (object.scale != null)
                message.scale = Number(object.scale);
            if (object.colorList) {
                if (!Array.isArray(object.colorList))
                    throw TypeError(".in_proto.Thermo.colorList: array expected");
                message.colorList = [];
                for (let i = 0; i < object.colorList.length; ++i) {
                    if (typeof object.colorList[i] !== "object")
                        throw TypeError(".in_proto.Thermo.colorList: object expected");
                    message.colorList[i] = $root.in_proto.Thermo.ColorEntry.fromObject(object.colorList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Thermo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Thermo
         * @static
         * @param {in_proto.Thermo} message Thermo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Thermo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.colorList = [];
            if (options.defaults) {
                object.base = null;
                object.label = "";
                object.scale = 0;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.scale != null && message.hasOwnProperty("scale"))
                object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
            if (message.colorList && message.colorList.length) {
                object.colorList = [];
                for (let j = 0; j < message.colorList.length; ++j)
                    object.colorList[j] = $root.in_proto.Thermo.ColorEntry.toObject(message.colorList[j], options);
            }
            return object;
        };

        /**
         * Converts this Thermo to JSON.
         * @function toJSON
         * @memberof in_proto.Thermo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Thermo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Thermo
         * @function getTypeUrl
         * @memberof in_proto.Thermo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Thermo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Thermo";
        };

        Thermo.ColorEntry = (function() {

            /**
             * Properties of a ColorEntry.
             * @memberof in_proto.Thermo
             * @interface IColorEntry
             * @property {number|null} [value] ColorEntry value
             * @property {string|null} [color] ColorEntry color
             */

            /**
             * Constructs a new ColorEntry.
             * @memberof in_proto.Thermo
             * @classdesc Represents a ColorEntry.
             * @implements IColorEntry
             * @constructor
             * @param {in_proto.Thermo.IColorEntry=} [properties] Properties to set
             */
            function ColorEntry(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ColorEntry value.
             * @member {number} value
             * @memberof in_proto.Thermo.ColorEntry
             * @instance
             */
            ColorEntry.prototype.value = 0;

            /**
             * ColorEntry color.
             * @member {string} color
             * @memberof in_proto.Thermo.ColorEntry
             * @instance
             */
            ColorEntry.prototype.color = "";

            /**
             * Creates a new ColorEntry instance using the specified properties.
             * @function create
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {in_proto.Thermo.IColorEntry=} [properties] Properties to set
             * @returns {in_proto.Thermo.ColorEntry} ColorEntry instance
             */
            ColorEntry.create = function create(properties) {
                return new ColorEntry(properties);
            };

            /**
             * Encodes the specified ColorEntry message. Does not implicitly {@link in_proto.Thermo.ColorEntry.verify|verify} messages.
             * @function encode
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {in_proto.Thermo.IColorEntry} message ColorEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorEntry.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.color);
                return writer;
            };

            /**
             * Encodes the specified ColorEntry message, length delimited. Does not implicitly {@link in_proto.Thermo.ColorEntry.verify|verify} messages.
             * @function encodeDelimited
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {in_proto.Thermo.IColorEntry} message ColorEntry message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ColorEntry.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ColorEntry message from the specified reader or buffer.
             * @function decode
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {in_proto.Thermo.ColorEntry} ColorEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorEntry.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Thermo.ColorEntry();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.double();
                            break;
                        }
                    case 2: {
                            message.color = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ColorEntry message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {in_proto.Thermo.ColorEntry} ColorEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ColorEntry.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ColorEntry message.
             * @function verify
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ColorEntry.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                if (message.color != null && message.hasOwnProperty("color"))
                    if (!$util.isString(message.color))
                        return "color: string expected";
                return null;
            };

            /**
             * Creates a ColorEntry message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {in_proto.Thermo.ColorEntry} ColorEntry
             */
            ColorEntry.fromObject = function fromObject(object) {
                if (object instanceof $root.in_proto.Thermo.ColorEntry)
                    return object;
                let message = new $root.in_proto.Thermo.ColorEntry();
                if (object.value != null)
                    message.value = Number(object.value);
                if (object.color != null)
                    message.color = String(object.color);
                return message;
            };

            /**
             * Creates a plain object from a ColorEntry message. Also converts values to other types if specified.
             * @function toObject
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {in_proto.Thermo.ColorEntry} message ColorEntry
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ColorEntry.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.value = 0;
                    object.color = "";
                }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                if (message.color != null && message.hasOwnProperty("color"))
                    object.color = message.color;
                return object;
            };

            /**
             * Converts this ColorEntry to JSON.
             * @function toJSON
             * @memberof in_proto.Thermo.ColorEntry
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ColorEntry.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ColorEntry
             * @function getTypeUrl
             * @memberof in_proto.Thermo.ColorEntry
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ColorEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/in_proto.Thermo.ColorEntry";
            };

            return ColorEntry;
        })();

        return Thermo;
    })();

    in_proto.Toggle = (function() {

        /**
         * Properties of a Toggle.
         * @memberof in_proto
         * @interface IToggle
         * @property {in_proto.IGuiElement|null} [base] Toggle base
         * @property {string|null} [label] Toggle label
         * @property {boolean|null} [checked] Toggle checked
         * @property {boolean|null} [disable] Toggle disable
         * @property {string|null} [action] Toggle action
         */

        /**
         * Constructs a new Toggle.
         * @memberof in_proto
         * @classdesc Represents a Toggle.
         * @implements IToggle
         * @constructor
         * @param {in_proto.IToggle=} [properties] Properties to set
         */
        function Toggle(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Toggle base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Toggle
         * @instance
         */
        Toggle.prototype.base = null;

        /**
         * Toggle label.
         * @member {string} label
         * @memberof in_proto.Toggle
         * @instance
         */
        Toggle.prototype.label = "";

        /**
         * Toggle checked.
         * @member {boolean} checked
         * @memberof in_proto.Toggle
         * @instance
         */
        Toggle.prototype.checked = false;

        /**
         * Toggle disable.
         * @member {boolean} disable
         * @memberof in_proto.Toggle
         * @instance
         */
        Toggle.prototype.disable = false;

        /**
         * Toggle action.
         * @member {string} action
         * @memberof in_proto.Toggle
         * @instance
         */
        Toggle.prototype.action = "";

        /**
         * Creates a new Toggle instance using the specified properties.
         * @function create
         * @memberof in_proto.Toggle
         * @static
         * @param {in_proto.IToggle=} [properties] Properties to set
         * @returns {in_proto.Toggle} Toggle instance
         */
        Toggle.create = function create(properties) {
            return new Toggle(properties);
        };

        /**
         * Encodes the specified Toggle message. Does not implicitly {@link in_proto.Toggle.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Toggle
         * @static
         * @param {in_proto.IToggle} message Toggle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Toggle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.checked != null && Object.hasOwnProperty.call(message, "checked"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.checked);
            if (message.disable != null && Object.hasOwnProperty.call(message, "disable"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.disable);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.action);
            return writer;
        };

        /**
         * Encodes the specified Toggle message, length delimited. Does not implicitly {@link in_proto.Toggle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Toggle
         * @static
         * @param {in_proto.IToggle} message Toggle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Toggle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Toggle message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Toggle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Toggle} Toggle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Toggle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Toggle();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.checked = reader.bool();
                        break;
                    }
                case 4: {
                        message.disable = reader.bool();
                        break;
                    }
                case 5: {
                        message.action = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Toggle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Toggle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Toggle} Toggle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Toggle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Toggle message.
         * @function verify
         * @memberof in_proto.Toggle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Toggle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.checked != null && message.hasOwnProperty("checked"))
                if (typeof message.checked !== "boolean")
                    return "checked: boolean expected";
            if (message.disable != null && message.hasOwnProperty("disable"))
                if (typeof message.disable !== "boolean")
                    return "disable: boolean expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            return null;
        };

        /**
         * Creates a Toggle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Toggle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Toggle} Toggle
         */
        Toggle.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Toggle)
                return object;
            let message = new $root.in_proto.Toggle();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Toggle.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.label != null)
                message.label = String(object.label);
            if (object.checked != null)
                message.checked = Boolean(object.checked);
            if (object.disable != null)
                message.disable = Boolean(object.disable);
            if (object.action != null)
                message.action = String(object.action);
            return message;
        };

        /**
         * Creates a plain object from a Toggle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Toggle
         * @static
         * @param {in_proto.Toggle} message Toggle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Toggle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.label = "";
                object.checked = false;
                object.disable = false;
                object.action = "";
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.checked != null && message.hasOwnProperty("checked"))
                object.checked = message.checked;
            if (message.disable != null && message.hasOwnProperty("disable"))
                object.disable = message.disable;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this Toggle to JSON.
         * @function toJSON
         * @memberof in_proto.Toggle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Toggle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Toggle
         * @function getTypeUrl
         * @memberof in_proto.Toggle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Toggle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Toggle";
        };

        return Toggle;
    })();

    in_proto.Void = (function() {

        /**
         * Properties of a Void.
         * @memberof in_proto
         * @interface IVoid
         * @property {in_proto.IGuiElement|null} [base] Void base
         * @property {number|null} [width] Void width
         * @property {number|null} [height] Void height
         * @property {number|null} [colspan] Void colspan
         */

        /**
         * Constructs a new Void.
         * @memberof in_proto
         * @classdesc Represents a Void.
         * @implements IVoid
         * @constructor
         * @param {in_proto.IVoid=} [properties] Properties to set
         */
        function Void(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Void base.
         * @member {in_proto.IGuiElement|null|undefined} base
         * @memberof in_proto.Void
         * @instance
         */
        Void.prototype.base = null;

        /**
         * Void width.
         * @member {number} width
         * @memberof in_proto.Void
         * @instance
         */
        Void.prototype.width = 0;

        /**
         * Void height.
         * @member {number} height
         * @memberof in_proto.Void
         * @instance
         */
        Void.prototype.height = 0;

        /**
         * Void colspan.
         * @member {number} colspan
         * @memberof in_proto.Void
         * @instance
         */
        Void.prototype.colspan = 0;

        /**
         * Creates a new Void instance using the specified properties.
         * @function create
         * @memberof in_proto.Void
         * @static
         * @param {in_proto.IVoid=} [properties] Properties to set
         * @returns {in_proto.Void} Void instance
         */
        Void.create = function create(properties) {
            return new Void(properties);
        };

        /**
         * Encodes the specified Void message. Does not implicitly {@link in_proto.Void.verify|verify} messages.
         * @function encode
         * @memberof in_proto.Void
         * @static
         * @param {in_proto.IVoid} message Void message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Void.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                $root.in_proto.GuiElement.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.height);
            if (message.colspan != null && Object.hasOwnProperty.call(message, "colspan"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.colspan);
            return writer;
        };

        /**
         * Encodes the specified Void message, length delimited. Does not implicitly {@link in_proto.Void.verify|verify} messages.
         * @function encodeDelimited
         * @memberof in_proto.Void
         * @static
         * @param {in_proto.IVoid} message Void message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Void.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Void message from the specified reader or buffer.
         * @function decode
         * @memberof in_proto.Void
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {in_proto.Void} Void
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Void.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.in_proto.Void();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.base = $root.in_proto.GuiElement.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.width = reader.uint32();
                        break;
                    }
                case 3: {
                        message.height = reader.uint32();
                        break;
                    }
                case 4: {
                        message.colspan = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Void message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof in_proto.Void
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {in_proto.Void} Void
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Void.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Void message.
         * @function verify
         * @memberof in_proto.Void
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Void.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                let error = $root.in_proto.GuiElement.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.colspan != null && message.hasOwnProperty("colspan"))
                if (!$util.isInteger(message.colspan))
                    return "colspan: integer expected";
            return null;
        };

        /**
         * Creates a Void message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof in_proto.Void
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {in_proto.Void} Void
         */
        Void.fromObject = function fromObject(object) {
            if (object instanceof $root.in_proto.Void)
                return object;
            let message = new $root.in_proto.Void();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".in_proto.Void.base: object expected");
                message.base = $root.in_proto.GuiElement.fromObject(object.base);
            }
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.colspan != null)
                message.colspan = object.colspan >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Void message. Also converts values to other types if specified.
         * @function toObject
         * @memberof in_proto.Void
         * @static
         * @param {in_proto.Void} message Void
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Void.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.base = null;
                object.width = 0;
                object.height = 0;
                object.colspan = 0;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.in_proto.GuiElement.toObject(message.base, options);
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.colspan != null && message.hasOwnProperty("colspan"))
                object.colspan = message.colspan;
            return object;
        };

        /**
         * Converts this Void to JSON.
         * @function toJSON
         * @memberof in_proto.Void
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Void.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Void
         * @function getTypeUrl
         * @memberof in_proto.Void
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Void.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/in_proto.Void";
        };

        return Void;
    })();

    return in_proto;
})();

export { $root as default };
