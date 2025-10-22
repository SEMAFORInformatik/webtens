import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace in_proto. */
export namespace in_proto {

    /** Properties of a Button. */
    interface IButton {

        /** Button base */
        base?: (in_proto.IGuiElement|null);

        /** Button pixmap */
        pixmap?: (boolean|null);

        /** Button label */
        label?: (string|null);

        /** Button editable */
        editable?: (boolean|null);

        /** Button action */
        action?: (string|null);
    }

    /** Represents a Button. */
    class Button implements IButton {

        /**
         * Constructs a new Button.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IButton);

        /** Button base. */
        public base?: (in_proto.IGuiElement|null);

        /** Button pixmap. */
        public pixmap: boolean;

        /** Button label. */
        public label: string;

        /** Button editable. */
        public editable: boolean;

        /** Button action. */
        public action: string;

        /**
         * Creates a new Button instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Button instance
         */
        public static create(properties?: in_proto.IButton): in_proto.Button;

        /**
         * Encodes the specified Button message. Does not implicitly {@link in_proto.Button.verify|verify} messages.
         * @param message Button message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Button message, length delimited. Does not implicitly {@link in_proto.Button.verify|verify} messages.
         * @param message Button message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Button message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Button
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Button;

        /**
         * Decodes a Button message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Button
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Button;

        /**
         * Verifies a Button message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Button message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Button
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Button;

        /**
         * Creates a plain object from a Button message. Also converts values to other types if specified.
         * @param message Button
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Button, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Button to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Button
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ButtonField. */
    interface IButtonField {

        /** ButtonField field */
        field?: (in_proto.IDataField|null);

        /** ButtonField pixmap */
        pixmap?: (boolean|null);

        /** ButtonField icon */
        icon?: (string|null);
    }

    /** Represents a ButtonField. */
    class ButtonField implements IButtonField {

        /**
         * Constructs a new ButtonField.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IButtonField);

        /** ButtonField field. */
        public field?: (in_proto.IDataField|null);

        /** ButtonField pixmap. */
        public pixmap: boolean;

        /** ButtonField icon. */
        public icon: string;

        /**
         * Creates a new ButtonField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ButtonField instance
         */
        public static create(properties?: in_proto.IButtonField): in_proto.ButtonField;

        /**
         * Encodes the specified ButtonField message. Does not implicitly {@link in_proto.ButtonField.verify|verify} messages.
         * @param message ButtonField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IButtonField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ButtonField message, length delimited. Does not implicitly {@link in_proto.ButtonField.verify|verify} messages.
         * @param message ButtonField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IButtonField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ButtonField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ButtonField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.ButtonField;

        /**
         * Decodes a ButtonField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ButtonField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.ButtonField;

        /**
         * Verifies a ButtonField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ButtonField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ButtonField
         */
        public static fromObject(object: { [k: string]: any }): in_proto.ButtonField;

        /**
         * Creates a plain object from a ButtonField message. Also converts values to other types if specified.
         * @param message ButtonField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.ButtonField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ButtonField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ButtonField
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ElementRef. */
    interface IElementRef {

        /** ElementRef id */
        id?: (number|null);

        /** ElementRef type */
        type?: (in_proto.GuiElement.Type|null);
    }

    /** Represents an ElementRef. */
    class ElementRef implements IElementRef {

        /**
         * Constructs a new ElementRef.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IElementRef);

        /** ElementRef id. */
        public id: number;

        /** ElementRef type. */
        public type: in_proto.GuiElement.Type;

        /**
         * Creates a new ElementRef instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ElementRef instance
         */
        public static create(properties?: in_proto.IElementRef): in_proto.ElementRef;

        /**
         * Encodes the specified ElementRef message. Does not implicitly {@link in_proto.ElementRef.verify|verify} messages.
         * @param message ElementRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IElementRef, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ElementRef message, length delimited. Does not implicitly {@link in_proto.ElementRef.verify|verify} messages.
         * @param message ElementRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IElementRef, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ElementRef message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ElementRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.ElementRef;

        /**
         * Decodes an ElementRef message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ElementRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.ElementRef;

        /**
         * Verifies an ElementRef message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ElementRef message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ElementRef
         */
        public static fromObject(object: { [k: string]: any }): in_proto.ElementRef;

        /**
         * Creates a plain object from an ElementRef message. Also converts values to other types if specified.
         * @param message ElementRef
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.ElementRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ElementRef to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ElementRef
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GuiElement. */
    interface IGuiElement {

        /** GuiElement id */
        id?: (number|null);

        /** GuiElement type */
        type?: (in_proto.GuiElement.Type|null);

        /** GuiElement Name */
        Name?: (string|null);

        /** GuiElement enabled */
        enabled?: (boolean|null);

        /** GuiElement width */
        width?: (number|null);

        /** GuiElement height */
        height?: (number|null);

        /** GuiElement expand */
        expand?: (in_proto.GuiElement.Orientation|null);

        /** GuiElement alignment */
        alignment?: (in_proto.GuiElement.Alignment|null);

        /** GuiElement helptext */
        helptext?: (string|null);

        /** GuiElement visible */
        visible?: (boolean|null);

        /** GuiElement rowspan */
        rowspan?: (number|null);

        /** GuiElement colspan */
        colspan?: (number|null);

        /** GuiElement styleClass */
        styleClass?: (string|null);
    }

    /** Represents a GuiElement. */
    class GuiElement implements IGuiElement {

        /**
         * Constructs a new GuiElement.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IGuiElement);

        /** GuiElement id. */
        public id: number;

        /** GuiElement type. */
        public type: in_proto.GuiElement.Type;

        /** GuiElement Name. */
        public Name: string;

        /** GuiElement enabled. */
        public enabled: boolean;

        /** GuiElement width. */
        public width: number;

        /** GuiElement height. */
        public height: number;

        /** GuiElement expand. */
        public expand: in_proto.GuiElement.Orientation;

        /** GuiElement alignment. */
        public alignment: in_proto.GuiElement.Alignment;

        /** GuiElement helptext. */
        public helptext: string;

        /** GuiElement visible. */
        public visible: boolean;

        /** GuiElement rowspan. */
        public rowspan: number;

        /** GuiElement colspan. */
        public colspan: number;

        /** GuiElement styleClass. */
        public styleClass: string;

        /**
         * Creates a new GuiElement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuiElement instance
         */
        public static create(properties?: in_proto.IGuiElement): in_proto.GuiElement;

        /**
         * Encodes the specified GuiElement message. Does not implicitly {@link in_proto.GuiElement.verify|verify} messages.
         * @param message GuiElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IGuiElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuiElement message, length delimited. Does not implicitly {@link in_proto.GuiElement.verify|verify} messages.
         * @param message GuiElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IGuiElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuiElement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuiElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.GuiElement;

        /**
         * Decodes a GuiElement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuiElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.GuiElement;

        /**
         * Verifies a GuiElement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuiElement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuiElement
         */
        public static fromObject(object: { [k: string]: any }): in_proto.GuiElement;

        /**
         * Creates a plain object from a GuiElement message. Also converts values to other types if specified.
         * @param message GuiElement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.GuiElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuiElement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuiElement
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace GuiElement {

        /** Type enum. */
        enum Type {
            Unknown = 0,
            EPlot2D = 1,
            EPlot3D = 2,
            EButtonbar = 3,
            EButton = 4,
            EComboBox = 5,
            EContainer = 6,
            EDiagram = 7,
            EFieldGroup = 8,
            EFolder = 9,
            EForm = 10,
            EHeader = 11,
            EIconView = 12,
            EIndex = 13,
            EIndexMenu = 14,
            ELabel = 15,
            EList = 16,
            EMenubar = 17,
            EMenuButton = 18,
            EMessagebar = 19,
            EMessage = 20,
            ENavigator = 21,
            ENavigatorNode = 22,
            EPixmap = 23,
            ERadio = 24,
            EScrolledText = 25,
            ESeparator = 26,
            ESlider = 27,
            EStretch = 28,
            ETable = 29,
            EText = 30,
            ETextfield = 31,
            EThermo = 32,
            EToggle = 33,
            EVoid = 34,
            EFieldGroupLine = 35,
            EPulldownMenu = 36,
            EMenuToggle = 37,
            ETableDataItem = 38,
            ETableComboBoxDataItem = 39,
            ETableRadioDataItem = 40,
            ETableToggleDataItem = 41,
            ETableColorPickerDataItem = 42,
            ETableButtonDataItem = 43,
            ECycleButton = 44
        }

        /** Orientation enum. */
        enum Orientation {
            None = 0,
            Horizontal = 1,
            Vertical = 2,
            Both = 3
        }

        /** Alignment enum. */
        enum Alignment {
            Default = 0,
            Left = 1,
            Right = 2,
            Center = 3,
            Top = 4,
            Bottom = 5,
            Stretch = 6,
            Justify = 7
        }
    }

    /** Properties of a DataField. */
    interface IDataField {

        /** DataField base */
        base?: (in_proto.IGuiElement|null);

        /** DataField typeLabel */
        typeLabel?: (boolean|null);

        /** DataField editable */
        editable?: (boolean|null);

        /** DataField length */
        length?: (number|null);

        /** DataField precision */
        precision?: (number|null);

        /** DataField scale */
        scale?: (number|null);

        /** DataField checked */
        checked?: (boolean|null);

        /** DataField range */
        range?: (in_proto.DataField.IRange|null);

        /** DataField fullName */
        fullName?: (string|null);

        /** DataField action */
        action?: (string|null);

        /** DataField icon */
        icon?: (string|null);

        /** DataField visible */
        visible?: (boolean|null);

        /** DataField label */
        label?: (string|null);

        /** DataField helptext */
        helptext?: (string|null);

        /** DataField placeholder */
        placeholder?: (string|null);

        /** DataField value */
        value?: (in_proto.IValueInfo|null);

        /** DataField bgColor */
        bgColor?: (string|null);

        /** DataField fgColor */
        fgColor?: (string|null);
    }

    /** Represents a DataField. */
    class DataField implements IDataField {

        /**
         * Constructs a new DataField.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IDataField);

        /** DataField base. */
        public base?: (in_proto.IGuiElement|null);

        /** DataField typeLabel. */
        public typeLabel: boolean;

        /** DataField editable. */
        public editable: boolean;

        /** DataField length. */
        public length: number;

        /** DataField precision. */
        public precision: number;

        /** DataField scale. */
        public scale: number;

        /** DataField checked. */
        public checked: boolean;

        /** DataField range. */
        public range?: (in_proto.DataField.IRange|null);

        /** DataField fullName. */
        public fullName: string;

        /** DataField action. */
        public action: string;

        /** DataField icon. */
        public icon: string;

        /** DataField visible. */
        public visible: boolean;

        /** DataField label. */
        public label: string;

        /** DataField helptext. */
        public helptext: string;

        /** DataField placeholder. */
        public placeholder: string;

        /** DataField value. */
        public value?: (in_proto.IValueInfo|null);

        /** DataField bgColor. */
        public bgColor: string;

        /** DataField fgColor. */
        public fgColor: string;

        /**
         * Creates a new DataField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DataField instance
         */
        public static create(properties?: in_proto.IDataField): in_proto.DataField;

        /**
         * Encodes the specified DataField message. Does not implicitly {@link in_proto.DataField.verify|verify} messages.
         * @param message DataField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IDataField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DataField message, length delimited. Does not implicitly {@link in_proto.DataField.verify|verify} messages.
         * @param message DataField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IDataField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DataField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.DataField;

        /**
         * Decodes a DataField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DataField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.DataField;

        /**
         * Verifies a DataField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DataField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DataField
         */
        public static fromObject(object: { [k: string]: any }): in_proto.DataField;

        /**
         * Creates a plain object from a DataField message. Also converts values to other types if specified.
         * @param message DataField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.DataField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DataField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DataField
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DataField {

        /** Properties of a Range. */
        interface IRange {

            /** Range min */
            min?: (number|null);

            /** Range max */
            max?: (number|null);

            /** Range step */
            step?: (number|null);
        }

        /** Represents a Range. */
        class Range implements IRange {

            /**
             * Constructs a new Range.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.DataField.IRange);

            /** Range min. */
            public min: number;

            /** Range max. */
            public max: number;

            /** Range step. */
            public step: number;

            /**
             * Creates a new Range instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Range instance
             */
            public static create(properties?: in_proto.DataField.IRange): in_proto.DataField.Range;

            /**
             * Encodes the specified Range message. Does not implicitly {@link in_proto.DataField.Range.verify|verify} messages.
             * @param message Range message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.DataField.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Range message, length delimited. Does not implicitly {@link in_proto.DataField.Range.verify|verify} messages.
             * @param message Range message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.DataField.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Range message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.DataField.Range;

            /**
             * Decodes a Range message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.DataField.Range;

            /**
             * Verifies a Range message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Range message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Range
             */
            public static fromObject(object: { [k: string]: any }): in_proto.DataField.Range;

            /**
             * Creates a plain object from a Range message. Also converts values to other types if specified.
             * @param message Range
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.DataField.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Range to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Range
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ValueInfo. */
    interface IValueInfo {

        /** ValueInfo stringValue */
        stringValue?: (string|null);

        /** ValueInfo doubleValue */
        doubleValue?: (number|null);

        /** ValueInfo intValue */
        intValue?: (number|null);

        /** ValueInfo patternValue */
        patternValue?: (string|null);

        /** ValueInfo formattedValue */
        formattedValue?: (string|null);

        /** ValueInfo minValue */
        minValue?: (number|null);

        /** ValueInfo maxValue */
        maxValue?: (number|null);

        /** ValueInfo precision */
        precision?: (number|null);

        /** ValueInfo datatype */
        datatype?: (in_proto.ValueInfo.DataType|null);

        /** ValueInfo filename */
        filename?: (string|null);

        /** ValueInfo mimetype */
        mimetype?: (string|null);
    }

    /** Represents a ValueInfo. */
    class ValueInfo implements IValueInfo {

        /**
         * Constructs a new ValueInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IValueInfo);

        /** ValueInfo stringValue. */
        public stringValue: string;

        /** ValueInfo doubleValue. */
        public doubleValue: number;

        /** ValueInfo intValue. */
        public intValue: number;

        /** ValueInfo patternValue. */
        public patternValue: string;

        /** ValueInfo formattedValue. */
        public formattedValue: string;

        /** ValueInfo minValue. */
        public minValue: number;

        /** ValueInfo maxValue. */
        public maxValue: number;

        /** ValueInfo precision. */
        public precision: number;

        /** ValueInfo datatype. */
        public datatype: in_proto.ValueInfo.DataType;

        /** ValueInfo filename. */
        public filename: string;

        /** ValueInfo mimetype. */
        public mimetype: string;

        /**
         * Creates a new ValueInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValueInfo instance
         */
        public static create(properties?: in_proto.IValueInfo): in_proto.ValueInfo;

        /**
         * Encodes the specified ValueInfo message. Does not implicitly {@link in_proto.ValueInfo.verify|verify} messages.
         * @param message ValueInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IValueInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValueInfo message, length delimited. Does not implicitly {@link in_proto.ValueInfo.verify|verify} messages.
         * @param message ValueInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IValueInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValueInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValueInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.ValueInfo;

        /**
         * Decodes a ValueInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValueInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.ValueInfo;

        /**
         * Verifies a ValueInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValueInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValueInfo
         */
        public static fromObject(object: { [k: string]: any }): in_proto.ValueInfo;

        /**
         * Creates a plain object from a ValueInfo message. Also converts values to other types if specified.
         * @param message ValueInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.ValueInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValueInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ValueInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ValueInfo {

        /** DataType enum. */
        enum DataType {
            Unknown = 0,
            Integer = 1,
            Double = 2,
            StringDate = 3,
            StringTime = 4,
            StringDateTime = 5,
            StringValue = 6,
            StringPassword = 7,
            String = 8,
            CDATA = 9,
            Complex = 10
        }
    }

    /** Properties of a Buttonbar. */
    interface IButtonbar {

        /** Buttonbar base */
        base?: (in_proto.IGuiElement|null);

        /** Buttonbar elements */
        elements?: (in_proto.IElementRef[]|null);
    }

    /** Represents a Buttonbar. */
    class Buttonbar implements IButtonbar {

        /**
         * Constructs a new Buttonbar.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IButtonbar);

        /** Buttonbar base. */
        public base?: (in_proto.IGuiElement|null);

        /** Buttonbar elements. */
        public elements: in_proto.IElementRef[];

        /**
         * Creates a new Buttonbar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Buttonbar instance
         */
        public static create(properties?: in_proto.IButtonbar): in_proto.Buttonbar;

        /**
         * Encodes the specified Buttonbar message. Does not implicitly {@link in_proto.Buttonbar.verify|verify} messages.
         * @param message Buttonbar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IButtonbar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Buttonbar message, length delimited. Does not implicitly {@link in_proto.Buttonbar.verify|verify} messages.
         * @param message Buttonbar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IButtonbar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Buttonbar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Buttonbar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Buttonbar;

        /**
         * Decodes a Buttonbar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Buttonbar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Buttonbar;

        /**
         * Verifies a Buttonbar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Buttonbar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Buttonbar
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Buttonbar;

        /**
         * Creates a plain object from a Buttonbar message. Also converts values to other types if specified.
         * @param message Buttonbar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Buttonbar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Buttonbar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Buttonbar
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ComboBox. */
    interface IComboBox {

        /** ComboBox base */
        base?: (in_proto.IDataField|null);

        /** ComboBox inputDataset */
        inputDataset?: (string[]|null);

        /** ComboBox outputDataset */
        outputDataset?: (string[]|null);
    }

    /** Represents a ComboBox. */
    class ComboBox implements IComboBox {

        /**
         * Constructs a new ComboBox.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IComboBox);

        /** ComboBox base. */
        public base?: (in_proto.IDataField|null);

        /** ComboBox inputDataset. */
        public inputDataset: string[];

        /** ComboBox outputDataset. */
        public outputDataset: string[];

        /**
         * Creates a new ComboBox instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComboBox instance
         */
        public static create(properties?: in_proto.IComboBox): in_proto.ComboBox;

        /**
         * Encodes the specified ComboBox message. Does not implicitly {@link in_proto.ComboBox.verify|verify} messages.
         * @param message ComboBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IComboBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComboBox message, length delimited. Does not implicitly {@link in_proto.ComboBox.verify|verify} messages.
         * @param message ComboBox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IComboBox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComboBox message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComboBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.ComboBox;

        /**
         * Decodes a ComboBox message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComboBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.ComboBox;

        /**
         * Verifies a ComboBox message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComboBox message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComboBox
         */
        public static fromObject(object: { [k: string]: any }): in_proto.ComboBox;

        /**
         * Creates a plain object from a ComboBox message. Also converts values to other types if specified.
         * @param message ComboBox
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.ComboBox, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComboBox to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ComboBox
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Container. */
    interface IContainer {

        /** Container base */
        base?: (in_proto.IGuiElement|null);

        /** Container orientation */
        orientation?: (in_proto.GuiElement.Orientation|null);

        /** Container scrollbars */
        scrollbars?: (boolean|null);

        /** Container panedWindow */
        panedWindow?: (boolean|null);

        /** Container frame */
        frame?: (boolean|null);

        /** Container title */
        title?: (string|null);

        /** Container elements */
        elements?: (in_proto.IElementRef[]|null);
    }

    /** Represents a Container. */
    class Container implements IContainer {

        /**
         * Constructs a new Container.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IContainer);

        /** Container base. */
        public base?: (in_proto.IGuiElement|null);

        /** Container orientation. */
        public orientation: in_proto.GuiElement.Orientation;

        /** Container scrollbars. */
        public scrollbars: boolean;

        /** Container panedWindow. */
        public panedWindow: boolean;

        /** Container frame. */
        public frame: boolean;

        /** Container title. */
        public title: string;

        /** Container elements. */
        public elements: in_proto.IElementRef[];

        /**
         * Creates a new Container instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Container instance
         */
        public static create(properties?: in_proto.IContainer): in_proto.Container;

        /**
         * Encodes the specified Container message. Does not implicitly {@link in_proto.Container.verify|verify} messages.
         * @param message Container message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Container message, length delimited. Does not implicitly {@link in_proto.Container.verify|verify} messages.
         * @param message Container message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Container message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Container
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Container;

        /**
         * Decodes a Container message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Container
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Container;

        /**
         * Verifies a Container message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Container message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Container
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Container;

        /**
         * Creates a plain object from a Container message. Also converts values to other types if specified.
         * @param message Container
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Container, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Container to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Container
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CycleButton. */
    interface ICycleButton {

        /** CycleButton base */
        base?: (in_proto.IGuiElement|null);

        /** CycleButton label */
        label?: (string|null);

        /** CycleButton cycle */
        cycle?: (number|null);

        /** CycleButton numCycle */
        numCycle?: (number|null);

        /** CycleButton cycles */
        cycles?: (string[]|null);
    }

    /** Represents a CycleButton. */
    class CycleButton implements ICycleButton {

        /**
         * Constructs a new CycleButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.ICycleButton);

        /** CycleButton base. */
        public base?: (in_proto.IGuiElement|null);

        /** CycleButton label. */
        public label: string;

        /** CycleButton cycle. */
        public cycle: number;

        /** CycleButton numCycle. */
        public numCycle: number;

        /** CycleButton cycles. */
        public cycles: string[];

        /**
         * Creates a new CycleButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CycleButton instance
         */
        public static create(properties?: in_proto.ICycleButton): in_proto.CycleButton;

        /**
         * Encodes the specified CycleButton message. Does not implicitly {@link in_proto.CycleButton.verify|verify} messages.
         * @param message CycleButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.ICycleButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CycleButton message, length delimited. Does not implicitly {@link in_proto.CycleButton.verify|verify} messages.
         * @param message CycleButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.ICycleButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CycleButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CycleButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.CycleButton;

        /**
         * Decodes a CycleButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CycleButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.CycleButton;

        /**
         * Verifies a CycleButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CycleButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CycleButton
         */
        public static fromObject(object: { [k: string]: any }): in_proto.CycleButton;

        /**
         * Creates a plain object from a CycleButton message. Also converts values to other types if specified.
         * @param message CycleButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.CycleButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CycleButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CycleButton
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FieldGroup. */
    interface IFieldGroup {

        /** FieldGroup base */
        base?: (in_proto.IGuiElement|null);

        /** FieldGroup label */
        label?: (string|null);

        /** FieldGroup labelAlignment */
        labelAlignment?: (in_proto.GuiElement.Alignment|null);

        /** FieldGroup orientation */
        orientation?: (in_proto.GuiElement.Orientation|null);

        /** FieldGroup frame */
        frame?: (boolean|null);

        /** FieldGroup gridTemplateColumns */
        gridTemplateColumns?: (in_proto.FieldGroup.IGridTemplateField[]|null);

        /** FieldGroup lines */
        lines?: (in_proto.IFieldGroupLine[]|null);
    }

    /** Represents a FieldGroup. */
    class FieldGroup implements IFieldGroup {

        /**
         * Constructs a new FieldGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IFieldGroup);

        /** FieldGroup base. */
        public base?: (in_proto.IGuiElement|null);

        /** FieldGroup label. */
        public label: string;

        /** FieldGroup labelAlignment. */
        public labelAlignment: in_proto.GuiElement.Alignment;

        /** FieldGroup orientation. */
        public orientation: in_proto.GuiElement.Orientation;

        /** FieldGroup frame. */
        public frame: boolean;

        /** FieldGroup gridTemplateColumns. */
        public gridTemplateColumns: in_proto.FieldGroup.IGridTemplateField[];

        /** FieldGroup lines. */
        public lines: in_proto.IFieldGroupLine[];

        /**
         * Creates a new FieldGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FieldGroup instance
         */
        public static create(properties?: in_proto.IFieldGroup): in_proto.FieldGroup;

        /**
         * Encodes the specified FieldGroup message. Does not implicitly {@link in_proto.FieldGroup.verify|verify} messages.
         * @param message FieldGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IFieldGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FieldGroup message, length delimited. Does not implicitly {@link in_proto.FieldGroup.verify|verify} messages.
         * @param message FieldGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IFieldGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FieldGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FieldGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.FieldGroup;

        /**
         * Decodes a FieldGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FieldGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.FieldGroup;

        /**
         * Verifies a FieldGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FieldGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FieldGroup
         */
        public static fromObject(object: { [k: string]: any }): in_proto.FieldGroup;

        /**
         * Creates a plain object from a FieldGroup message. Also converts values to other types if specified.
         * @param message FieldGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.FieldGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FieldGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FieldGroup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FieldGroup {

        /** Properties of a GridTemplateField. */
        interface IGridTemplateField {

            /** GridTemplateField minMax */
            minMax?: (number|null);
        }

        /** Represents a GridTemplateField. */
        class GridTemplateField implements IGridTemplateField {

            /**
             * Constructs a new GridTemplateField.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.FieldGroup.IGridTemplateField);

            /** GridTemplateField minMax. */
            public minMax: number;

            /**
             * Creates a new GridTemplateField instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GridTemplateField instance
             */
            public static create(properties?: in_proto.FieldGroup.IGridTemplateField): in_proto.FieldGroup.GridTemplateField;

            /**
             * Encodes the specified GridTemplateField message. Does not implicitly {@link in_proto.FieldGroup.GridTemplateField.verify|verify} messages.
             * @param message GridTemplateField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.FieldGroup.IGridTemplateField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GridTemplateField message, length delimited. Does not implicitly {@link in_proto.FieldGroup.GridTemplateField.verify|verify} messages.
             * @param message GridTemplateField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.FieldGroup.IGridTemplateField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GridTemplateField message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GridTemplateField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.FieldGroup.GridTemplateField;

            /**
             * Decodes a GridTemplateField message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GridTemplateField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.FieldGroup.GridTemplateField;

            /**
             * Verifies a GridTemplateField message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GridTemplateField message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GridTemplateField
             */
            public static fromObject(object: { [k: string]: any }): in_proto.FieldGroup.GridTemplateField;

            /**
             * Creates a plain object from a GridTemplateField message. Also converts values to other types if specified.
             * @param message GridTemplateField
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.FieldGroup.GridTemplateField, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GridTemplateField to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GridTemplateField
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a FieldGroupLine. */
    interface IFieldGroupLine {

        /** FieldGroupLine id */
        id?: (number|null);

        /** FieldGroupLine elements */
        elements?: (in_proto.IElementRef[]|null);
    }

    /** Represents a FieldGroupLine. */
    class FieldGroupLine implements IFieldGroupLine {

        /**
         * Constructs a new FieldGroupLine.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IFieldGroupLine);

        /** FieldGroupLine id. */
        public id: number;

        /** FieldGroupLine elements. */
        public elements: in_proto.IElementRef[];

        /**
         * Creates a new FieldGroupLine instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FieldGroupLine instance
         */
        public static create(properties?: in_proto.IFieldGroupLine): in_proto.FieldGroupLine;

        /**
         * Encodes the specified FieldGroupLine message. Does not implicitly {@link in_proto.FieldGroupLine.verify|verify} messages.
         * @param message FieldGroupLine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IFieldGroupLine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FieldGroupLine message, length delimited. Does not implicitly {@link in_proto.FieldGroupLine.verify|verify} messages.
         * @param message FieldGroupLine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IFieldGroupLine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FieldGroupLine message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FieldGroupLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.FieldGroupLine;

        /**
         * Decodes a FieldGroupLine message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FieldGroupLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.FieldGroupLine;

        /**
         * Verifies a FieldGroupLine message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FieldGroupLine message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FieldGroupLine
         */
        public static fromObject(object: { [k: string]: any }): in_proto.FieldGroupLine;

        /**
         * Creates a plain object from a FieldGroupLine message. Also converts values to other types if specified.
         * @param message FieldGroupLine
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.FieldGroupLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FieldGroupLine to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FieldGroupLine
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Folder. */
    interface IFolder {

        /** Folder base */
        base?: (in_proto.IGuiElement|null);

        /** Folder buttons */
        buttons?: (boolean|null);

        /** Folder pages */
        pages?: (in_proto.Folder.IPage[]|null);

        /** Folder active */
        active?: (number|null);

        /** Folder buttonAlignment */
        buttonAlignment?: (in_proto.GuiElement.Alignment|null);

        /** Folder width */
        width?: (number|null);
    }

    /** Represents a Folder. */
    class Folder implements IFolder {

        /**
         * Constructs a new Folder.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IFolder);

        /** Folder base. */
        public base?: (in_proto.IGuiElement|null);

        /** Folder buttons. */
        public buttons: boolean;

        /** Folder pages. */
        public pages: in_proto.Folder.IPage[];

        /** Folder active. */
        public active: number;

        /** Folder buttonAlignment. */
        public buttonAlignment: in_proto.GuiElement.Alignment;

        /** Folder width. */
        public width: number;

        /**
         * Creates a new Folder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Folder instance
         */
        public static create(properties?: in_proto.IFolder): in_proto.Folder;

        /**
         * Encodes the specified Folder message. Does not implicitly {@link in_proto.Folder.verify|verify} messages.
         * @param message Folder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IFolder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Folder message, length delimited. Does not implicitly {@link in_proto.Folder.verify|verify} messages.
         * @param message Folder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IFolder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Folder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Folder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Folder;

        /**
         * Decodes a Folder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Folder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Folder;

        /**
         * Verifies a Folder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Folder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Folder
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Folder;

        /**
         * Creates a plain object from a Folder message. Also converts values to other types if specified.
         * @param message Folder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Folder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Folder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Folder
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Folder {

        /** Properties of a Page. */
        interface IPage {

            /** Page pageId */
            pageId?: (number|null);

            /** Page label */
            label?: (string|null);

            /** Page active */
            active?: (boolean|null);

            /** Page container */
            container?: (in_proto.IContainer|null);
        }

        /** Represents a Page. */
        class Page implements IPage {

            /**
             * Constructs a new Page.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.Folder.IPage);

            /** Page pageId. */
            public pageId: number;

            /** Page label. */
            public label: string;

            /** Page active. */
            public active: boolean;

            /** Page container. */
            public container?: (in_proto.IContainer|null);

            /**
             * Creates a new Page instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Page instance
             */
            public static create(properties?: in_proto.Folder.IPage): in_proto.Folder.Page;

            /**
             * Encodes the specified Page message. Does not implicitly {@link in_proto.Folder.Page.verify|verify} messages.
             * @param message Page message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.Folder.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Page message, length delimited. Does not implicitly {@link in_proto.Folder.Page.verify|verify} messages.
             * @param message Page message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.Folder.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Page message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Page
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Folder.Page;

            /**
             * Decodes a Page message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Page
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Folder.Page;

            /**
             * Verifies a Page message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Page message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Page
             */
            public static fromObject(object: { [k: string]: any }): in_proto.Folder.Page;

            /**
             * Creates a plain object from a Page message. Also converts values to other types if specified.
             * @param message Page
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.Folder.Page, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Page to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Page
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Form. */
    interface IForm {

        /** Form base */
        base?: (in_proto.IGuiElement|null);

        /** Form title */
        title?: (string|null);

        /** Form main */
        main?: (boolean|null);

        /** Form modal */
        modal?: (boolean|null);

        /** Form elements */
        elements?: (in_proto.IElementRef[]|null);
    }

    /** Represents a Form. */
    class Form implements IForm {

        /**
         * Constructs a new Form.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IForm);

        /** Form base. */
        public base?: (in_proto.IGuiElement|null);

        /** Form title. */
        public title: string;

        /** Form main. */
        public main: boolean;

        /** Form modal. */
        public modal: boolean;

        /** Form elements. */
        public elements: in_proto.IElementRef[];

        /**
         * Creates a new Form instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Form instance
         */
        public static create(properties?: in_proto.IForm): in_proto.Form;

        /**
         * Encodes the specified Form message. Does not implicitly {@link in_proto.Form.verify|verify} messages.
         * @param message Form message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IForm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Form message, length delimited. Does not implicitly {@link in_proto.Form.verify|verify} messages.
         * @param message Form message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IForm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Form message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Form
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Form;

        /**
         * Decodes a Form message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Form
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Form;

        /**
         * Verifies a Form message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Form message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Form
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Form;

        /**
         * Creates a plain object from a Form message. Also converts values to other types if specified.
         * @param message Form
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Form, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Form to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Form
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Header. */
    interface IHeader {

        /** Header base */
        base?: (in_proto.IGuiElement|null);

        /** Header title */
        title?: (string|null);

        /** Header subtitle */
        subtitle?: (string|null);

        /** Header leftIcon */
        leftIcon?: (string|null);

        /** Header rightIcon */
        rightIcon?: (string|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IHeader);

        /** Header base. */
        public base?: (in_proto.IGuiElement|null);

        /** Header title. */
        public title: string;

        /** Header subtitle. */
        public subtitle: string;

        /** Header leftIcon. */
        public leftIcon: string;

        /** Header rightIcon. */
        public rightIcon: string;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: in_proto.IHeader): in_proto.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link in_proto.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link in_proto.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Header;

        /**
         * Verifies a Header message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Header
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Header to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Header
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Index. */
    interface IIndex {

        /** Index base */
        base?: (in_proto.IGuiElement|null);

        /** Index enabled */
        enabled?: (boolean|null);

        /** Index range */
        range?: (in_proto.DataField.IRange|null);

        /** Index index */
        index?: (number|null);

        /** Index newIndex */
        newIndex?: (number|null);

        /** Index orientation */
        orientation?: (in_proto.GuiElement.Orientation|null);

        /** Index visible */
        visible?: (boolean|null);

        /** Index fullName */
        fullName?: (string|null);

        /** Index action */
        action?: (string|null);
    }

    /** Represents an Index. */
    class Index implements IIndex {

        /**
         * Constructs a new Index.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IIndex);

        /** Index base. */
        public base?: (in_proto.IGuiElement|null);

        /** Index enabled. */
        public enabled: boolean;

        /** Index range. */
        public range?: (in_proto.DataField.IRange|null);

        /** Index index. */
        public index: number;

        /** Index newIndex. */
        public newIndex: number;

        /** Index orientation. */
        public orientation: in_proto.GuiElement.Orientation;

        /** Index visible. */
        public visible: boolean;

        /** Index fullName. */
        public fullName: string;

        /** Index action. */
        public action: string;

        /**
         * Creates a new Index instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Index instance
         */
        public static create(properties?: in_proto.IIndex): in_proto.Index;

        /**
         * Encodes the specified Index message. Does not implicitly {@link in_proto.Index.verify|verify} messages.
         * @param message Index message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Index message, length delimited. Does not implicitly {@link in_proto.Index.verify|verify} messages.
         * @param message Index message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Index message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Index
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Index;

        /**
         * Decodes an Index message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Index
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Index;

        /**
         * Verifies an Index message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Index message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Index
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Index;

        /**
         * Creates a plain object from an Index message. Also converts values to other types if specified.
         * @param message Index
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Index, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Index to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Index
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IndexMenu. */
    interface IIndexMenu {

        /** IndexMenu base */
        base?: (in_proto.IGuiElement|null);

        /** IndexMenu label */
        label?: (string|null);

        /** IndexMenu menu */
        menu?: (boolean|null);

        /** IndexMenu popupMenu */
        popupMenu?: (in_proto.IPopupMenu|null);

        /** IndexMenu guielement */
        guielement?: (string|null);
    }

    /** Represents an IndexMenu. */
    class IndexMenu implements IIndexMenu {

        /**
         * Constructs a new IndexMenu.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IIndexMenu);

        /** IndexMenu base. */
        public base?: (in_proto.IGuiElement|null);

        /** IndexMenu label. */
        public label: string;

        /** IndexMenu menu. */
        public menu: boolean;

        /** IndexMenu popupMenu. */
        public popupMenu?: (in_proto.IPopupMenu|null);

        /** IndexMenu guielement. */
        public guielement: string;

        /**
         * Creates a new IndexMenu instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IndexMenu instance
         */
        public static create(properties?: in_proto.IIndexMenu): in_proto.IndexMenu;

        /**
         * Encodes the specified IndexMenu message. Does not implicitly {@link in_proto.IndexMenu.verify|verify} messages.
         * @param message IndexMenu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IIndexMenu, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IndexMenu message, length delimited. Does not implicitly {@link in_proto.IndexMenu.verify|verify} messages.
         * @param message IndexMenu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IIndexMenu, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IndexMenu message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IndexMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.IndexMenu;

        /**
         * Decodes an IndexMenu message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IndexMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.IndexMenu;

        /**
         * Verifies an IndexMenu message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IndexMenu message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IndexMenu
         */
        public static fromObject(object: { [k: string]: any }): in_proto.IndexMenu;

        /**
         * Creates a plain object from an IndexMenu message. Also converts values to other types if specified.
         * @param message IndexMenu
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.IndexMenu, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IndexMenu to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IndexMenu
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PopupMenu. */
    interface IPopupMenu {

        /** PopupMenu title */
        title?: (string|null);

        /** PopupMenu elements */
        elements?: (in_proto.IElementRef[]|null);

        /** PopupMenu tearOff */
        tearOff?: (boolean|null);

        /** PopupMenu clearDefaultMenu */
        clearDefaultMenu?: (boolean|null);
    }

    /** Represents a PopupMenu. */
    class PopupMenu implements IPopupMenu {

        /**
         * Constructs a new PopupMenu.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IPopupMenu);

        /** PopupMenu title. */
        public title: string;

        /** PopupMenu elements. */
        public elements: in_proto.IElementRef[];

        /** PopupMenu tearOff. */
        public tearOff: boolean;

        /** PopupMenu clearDefaultMenu. */
        public clearDefaultMenu: boolean;

        /**
         * Creates a new PopupMenu instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PopupMenu instance
         */
        public static create(properties?: in_proto.IPopupMenu): in_proto.PopupMenu;

        /**
         * Encodes the specified PopupMenu message. Does not implicitly {@link in_proto.PopupMenu.verify|verify} messages.
         * @param message PopupMenu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IPopupMenu, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PopupMenu message, length delimited. Does not implicitly {@link in_proto.PopupMenu.verify|verify} messages.
         * @param message PopupMenu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IPopupMenu, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PopupMenu message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PopupMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.PopupMenu;

        /**
         * Decodes a PopupMenu message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PopupMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.PopupMenu;

        /**
         * Verifies a PopupMenu message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PopupMenu message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PopupMenu
         */
        public static fromObject(object: { [k: string]: any }): in_proto.PopupMenu;

        /**
         * Creates a plain object from a PopupMenu message. Also converts values to other types if specified.
         * @param message PopupMenu
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.PopupMenu, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PopupMenu to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PopupMenu
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Label. */
    interface ILabel {

        /** Label base */
        base?: (in_proto.IGuiElement|null);

        /** Label icon */
        icon?: (string|null);

        /** Label label */
        label?: (string|null);
    }

    /** Represents a Label. */
    class Label implements ILabel {

        /**
         * Constructs a new Label.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.ILabel);

        /** Label base. */
        public base?: (in_proto.IGuiElement|null);

        /** Label icon. */
        public icon: string;

        /** Label label. */
        public label: string;

        /**
         * Creates a new Label instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Label instance
         */
        public static create(properties?: in_proto.ILabel): in_proto.Label;

        /**
         * Encodes the specified Label message. Does not implicitly {@link in_proto.Label.verify|verify} messages.
         * @param message Label message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Label message, length delimited. Does not implicitly {@link in_proto.Label.verify|verify} messages.
         * @param message Label message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Label message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Label
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Label;

        /**
         * Decodes a Label message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Label
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Label;

        /**
         * Verifies a Label message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Label message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Label
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Label;

        /**
         * Creates a plain object from a Label message. Also converts values to other types if specified.
         * @param message Label
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Label, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Label to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Label
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a List. */
    interface IList {

        /** List base */
        base?: (in_proto.IGuiElement|null);

        /** List title */
        title?: (string|null);

        /** List titleAlignment */
        titleAlignment?: (in_proto.GuiElement.Alignment|null);

        /** List rowCount */
        rowCount?: (number|null);

        /** List selected */
        selected?: (number[]|null);

        /** List multiSelection */
        multiSelection?: (boolean|null);

        /** List action */
        action?: (string|null);

        /** List bgcolor */
        bgcolor?: (string[]|null);

        /** List fgcolor */
        fgcolor?: (string[]|null);

        /** List entries */
        entries?: (in_proto.List.IListElement[]|null);

        /** List popupBaseMenu */
        popupBaseMenu?: (in_proto.IPopupMenu|null);
    }

    /** Represents a List. */
    class List implements IList {

        /**
         * Constructs a new List.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IList);

        /** List base. */
        public base?: (in_proto.IGuiElement|null);

        /** List title. */
        public title: string;

        /** List titleAlignment. */
        public titleAlignment: in_proto.GuiElement.Alignment;

        /** List rowCount. */
        public rowCount: number;

        /** List selected. */
        public selected: number[];

        /** List multiSelection. */
        public multiSelection: boolean;

        /** List action. */
        public action: string;

        /** List bgcolor. */
        public bgcolor: string[];

        /** List fgcolor. */
        public fgcolor: string[];

        /** List entries. */
        public entries: in_proto.List.IListElement[];

        /** List popupBaseMenu. */
        public popupBaseMenu?: (in_proto.IPopupMenu|null);

        /**
         * Creates a new List instance using the specified properties.
         * @param [properties] Properties to set
         * @returns List instance
         */
        public static create(properties?: in_proto.IList): in_proto.List;

        /**
         * Encodes the specified List message. Does not implicitly {@link in_proto.List.verify|verify} messages.
         * @param message List message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified List message, length delimited. Does not implicitly {@link in_proto.List.verify|verify} messages.
         * @param message List message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a List message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns List
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.List;

        /**
         * Decodes a List message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns List
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.List;

        /**
         * Verifies a List message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a List message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns List
         */
        public static fromObject(object: { [k: string]: any }): in_proto.List;

        /**
         * Creates a plain object from a List message. Also converts values to other types if specified.
         * @param message List
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.List, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this List to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for List
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace List {

        /** Properties of a ListElement. */
        interface IListElement {

            /** ListElement values */
            values?: (string[]|null);

            /** ListElement label */
            label?: (string|null);

            /** ListElement alignment */
            alignment?: (in_proto.GuiElement.Alignment|null);

            /** ListElement optional */
            optional?: (boolean|null);

            /** ListElement width */
            width?: (number|null);

            /** ListElement value */
            value?: (in_proto.IValueInfo|null);

            /** ListElement fullName */
            fullName?: (string|null);

            /** ListElement bgColors */
            bgColors?: (string[]|null);

            /** ListElement fgColors */
            fgColors?: (string[]|null);
        }

        /** Represents a ListElement. */
        class ListElement implements IListElement {

            /**
             * Constructs a new ListElement.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.List.IListElement);

            /** ListElement values. */
            public values: string[];

            /** ListElement label. */
            public label: string;

            /** ListElement alignment. */
            public alignment: in_proto.GuiElement.Alignment;

            /** ListElement optional. */
            public optional: boolean;

            /** ListElement width. */
            public width: number;

            /** ListElement value. */
            public value?: (in_proto.IValueInfo|null);

            /** ListElement fullName. */
            public fullName: string;

            /** ListElement bgColors. */
            public bgColors: string[];

            /** ListElement fgColors. */
            public fgColors: string[];

            /**
             * Creates a new ListElement instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListElement instance
             */
            public static create(properties?: in_proto.List.IListElement): in_proto.List.ListElement;

            /**
             * Encodes the specified ListElement message. Does not implicitly {@link in_proto.List.ListElement.verify|verify} messages.
             * @param message ListElement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.List.IListElement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListElement message, length delimited. Does not implicitly {@link in_proto.List.ListElement.verify|verify} messages.
             * @param message ListElement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.List.IListElement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListElement message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.List.ListElement;

            /**
             * Decodes a ListElement message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.List.ListElement;

            /**
             * Verifies a ListElement message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListElement message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListElement
             */
            public static fromObject(object: { [k: string]: any }): in_proto.List.ListElement;

            /**
             * Creates a plain object from a ListElement message. Also converts values to other types if specified.
             * @param message ListElement
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.List.ListElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListElement to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListElement
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Menubar. */
    interface IMenubar {

        /** Menubar base */
        base?: (in_proto.IGuiElement|null);

        /** Menubar elements */
        elements?: (in_proto.IElementRef[]|null);
    }

    /** Represents a Menubar. */
    class Menubar implements IMenubar {

        /**
         * Constructs a new Menubar.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IMenubar);

        /** Menubar base. */
        public base?: (in_proto.IGuiElement|null);

        /** Menubar elements. */
        public elements: in_proto.IElementRef[];

        /**
         * Creates a new Menubar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Menubar instance
         */
        public static create(properties?: in_proto.IMenubar): in_proto.Menubar;

        /**
         * Encodes the specified Menubar message. Does not implicitly {@link in_proto.Menubar.verify|verify} messages.
         * @param message Menubar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IMenubar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Menubar message, length delimited. Does not implicitly {@link in_proto.Menubar.verify|verify} messages.
         * @param message Menubar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IMenubar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Menubar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Menubar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Menubar;

        /**
         * Decodes a Menubar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Menubar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Menubar;

        /**
         * Verifies a Menubar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Menubar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Menubar
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Menubar;

        /**
         * Creates a plain object from a Menubar message. Also converts values to other types if specified.
         * @param message Menubar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Menubar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Menubar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Menubar
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PulldownMenu. */
    interface IPulldownMenu {

        /** PulldownMenu base */
        base?: (in_proto.IGuiElement|null);

        /** PulldownMenu elements */
        elements?: (in_proto.IElementRef[]|null);

        /** PulldownMenu label */
        label?: (string|null);

        /** PulldownMenu mnemonic */
        mnemonic?: (string|null);

        /** PulldownMenu radio */
        radio?: (boolean|null);

        /** PulldownMenu tearOff */
        tearOff?: (boolean|null);
    }

    /** Represents a PulldownMenu. */
    class PulldownMenu implements IPulldownMenu {

        /**
         * Constructs a new PulldownMenu.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IPulldownMenu);

        /** PulldownMenu base. */
        public base?: (in_proto.IGuiElement|null);

        /** PulldownMenu elements. */
        public elements: in_proto.IElementRef[];

        /** PulldownMenu label. */
        public label: string;

        /** PulldownMenu mnemonic. */
        public mnemonic: string;

        /** PulldownMenu radio. */
        public radio: boolean;

        /** PulldownMenu tearOff. */
        public tearOff: boolean;

        /**
         * Creates a new PulldownMenu instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PulldownMenu instance
         */
        public static create(properties?: in_proto.IPulldownMenu): in_proto.PulldownMenu;

        /**
         * Encodes the specified PulldownMenu message. Does not implicitly {@link in_proto.PulldownMenu.verify|verify} messages.
         * @param message PulldownMenu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IPulldownMenu, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PulldownMenu message, length delimited. Does not implicitly {@link in_proto.PulldownMenu.verify|verify} messages.
         * @param message PulldownMenu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IPulldownMenu, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PulldownMenu message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PulldownMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.PulldownMenu;

        /**
         * Decodes a PulldownMenu message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PulldownMenu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.PulldownMenu;

        /**
         * Verifies a PulldownMenu message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PulldownMenu message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PulldownMenu
         */
        public static fromObject(object: { [k: string]: any }): in_proto.PulldownMenu;

        /**
         * Creates a plain object from a PulldownMenu message. Also converts values to other types if specified.
         * @param message PulldownMenu
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.PulldownMenu, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PulldownMenu to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PulldownMenu
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MenuButton. */
    interface IMenuButton {

        /** MenuButton base */
        base?: (in_proto.IGuiElement|null);

        /** MenuButton mapAction */
        mapAction?: (string|null);

        /** MenuButton label */
        label?: (string|null);

        /** MenuButton action */
        action?: (string|null);
    }

    /** Represents a MenuButton. */
    class MenuButton implements IMenuButton {

        /**
         * Constructs a new MenuButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IMenuButton);

        /** MenuButton base. */
        public base?: (in_proto.IGuiElement|null);

        /** MenuButton mapAction. */
        public mapAction: string;

        /** MenuButton label. */
        public label: string;

        /** MenuButton action. */
        public action: string;

        /**
         * Creates a new MenuButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MenuButton instance
         */
        public static create(properties?: in_proto.IMenuButton): in_proto.MenuButton;

        /**
         * Encodes the specified MenuButton message. Does not implicitly {@link in_proto.MenuButton.verify|verify} messages.
         * @param message MenuButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IMenuButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MenuButton message, length delimited. Does not implicitly {@link in_proto.MenuButton.verify|verify} messages.
         * @param message MenuButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IMenuButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MenuButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MenuButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.MenuButton;

        /**
         * Decodes a MenuButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MenuButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.MenuButton;

        /**
         * Verifies a MenuButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MenuButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MenuButton
         */
        public static fromObject(object: { [k: string]: any }): in_proto.MenuButton;

        /**
         * Creates a plain object from a MenuButton message. Also converts values to other types if specified.
         * @param message MenuButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.MenuButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MenuButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MenuButton
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ElementList. */
    interface IElementList {

        /** ElementList plot_2ds */
        plot_2ds?: (in_proto.IPlot2D[]|null);

        /** ElementList plot_3ds */
        plot_3ds?: (in_proto.IPlot3D[]|null);

        /** ElementList buttonbars */
        buttonbars?: (in_proto.IButtonbar[]|null);

        /** ElementList buttons */
        buttons?: (in_proto.IButton[]|null);

        /** ElementList comboboxes */
        comboboxes?: (in_proto.IComboBox[]|null);

        /** ElementList containers */
        containers?: (in_proto.IContainer[]|null);

        /** ElementList fieldGroups */
        fieldGroups?: (in_proto.IFieldGroup[]|null);

        /** ElementList folders */
        folders?: (in_proto.IFolder[]|null);

        /** ElementList forms */
        forms?: (in_proto.IForm[]|null);

        /** ElementList headers */
        headers?: (in_proto.IHeader[]|null);

        /** ElementList indexs */
        indexs?: (in_proto.IIndex[]|null);

        /** ElementList indexMenus */
        indexMenus?: (in_proto.IIndexMenu[]|null);

        /** ElementList labels */
        labels?: (in_proto.ILabel[]|null);

        /** ElementList lists */
        lists?: (in_proto.IList[]|null);

        /** ElementList menubars */
        menubars?: (in_proto.IMenubar[]|null);

        /** ElementList menuButtons */
        menuButtons?: (in_proto.IMenuButton[]|null);

        /** ElementList messagebars */
        messagebars?: (in_proto.IMessagebar[]|null);

        /** ElementList navigators */
        navigators?: (in_proto.INavigator[]|null);

        /** ElementList radios */
        radios?: (in_proto.IRadio[]|null);

        /** ElementList separators */
        separators?: (in_proto.ISeparator[]|null);

        /** ElementList stretchs */
        stretchs?: (in_proto.IStretch[]|null);

        /** ElementList tables */
        tables?: (in_proto.ITable[]|null);

        /** ElementList texts */
        texts?: (in_proto.IText[]|null);

        /** ElementList dataFields */
        dataFields?: (in_proto.IDataField[]|null);

        /** ElementList thermos */
        thermos?: (in_proto.IThermo[]|null);

        /** ElementList toggles */
        toggles?: (in_proto.IToggle[]|null);

        /** ElementList voids */
        voids?: (in_proto.IVoid[]|null);

        /** ElementList buttonfields */
        buttonfields?: (in_proto.IButtonField[]|null);

        /** ElementList cyclebuttons */
        cyclebuttons?: (in_proto.ICycleButton[]|null);

        /** ElementList pulldownMenus */
        pulldownMenus?: (in_proto.IPulldownMenu[]|null);

        /** ElementList popupMenu */
        popupMenu?: (in_proto.IPopupMenu[]|null);
    }

    /** Represents an ElementList. */
    class ElementList implements IElementList {

        /**
         * Constructs a new ElementList.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IElementList);

        /** ElementList plot_2ds. */
        public plot_2ds: in_proto.IPlot2D[];

        /** ElementList plot_3ds. */
        public plot_3ds: in_proto.IPlot3D[];

        /** ElementList buttonbars. */
        public buttonbars: in_proto.IButtonbar[];

        /** ElementList buttons. */
        public buttons: in_proto.IButton[];

        /** ElementList comboboxes. */
        public comboboxes: in_proto.IComboBox[];

        /** ElementList containers. */
        public containers: in_proto.IContainer[];

        /** ElementList fieldGroups. */
        public fieldGroups: in_proto.IFieldGroup[];

        /** ElementList folders. */
        public folders: in_proto.IFolder[];

        /** ElementList forms. */
        public forms: in_proto.IForm[];

        /** ElementList headers. */
        public headers: in_proto.IHeader[];

        /** ElementList indexs. */
        public indexs: in_proto.IIndex[];

        /** ElementList indexMenus. */
        public indexMenus: in_proto.IIndexMenu[];

        /** ElementList labels. */
        public labels: in_proto.ILabel[];

        /** ElementList lists. */
        public lists: in_proto.IList[];

        /** ElementList menubars. */
        public menubars: in_proto.IMenubar[];

        /** ElementList menuButtons. */
        public menuButtons: in_proto.IMenuButton[];

        /** ElementList messagebars. */
        public messagebars: in_proto.IMessagebar[];

        /** ElementList navigators. */
        public navigators: in_proto.INavigator[];

        /** ElementList radios. */
        public radios: in_proto.IRadio[];

        /** ElementList separators. */
        public separators: in_proto.ISeparator[];

        /** ElementList stretchs. */
        public stretchs: in_proto.IStretch[];

        /** ElementList tables. */
        public tables: in_proto.ITable[];

        /** ElementList texts. */
        public texts: in_proto.IText[];

        /** ElementList dataFields. */
        public dataFields: in_proto.IDataField[];

        /** ElementList thermos. */
        public thermos: in_proto.IThermo[];

        /** ElementList toggles. */
        public toggles: in_proto.IToggle[];

        /** ElementList voids. */
        public voids: in_proto.IVoid[];

        /** ElementList buttonfields. */
        public buttonfields: in_proto.IButtonField[];

        /** ElementList cyclebuttons. */
        public cyclebuttons: in_proto.ICycleButton[];

        /** ElementList pulldownMenus. */
        public pulldownMenus: in_proto.IPulldownMenu[];

        /** ElementList popupMenu. */
        public popupMenu: in_proto.IPopupMenu[];

        /**
         * Creates a new ElementList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ElementList instance
         */
        public static create(properties?: in_proto.IElementList): in_proto.ElementList;

        /**
         * Encodes the specified ElementList message. Does not implicitly {@link in_proto.ElementList.verify|verify} messages.
         * @param message ElementList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IElementList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ElementList message, length delimited. Does not implicitly {@link in_proto.ElementList.verify|verify} messages.
         * @param message ElementList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IElementList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ElementList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ElementList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.ElementList;

        /**
         * Decodes an ElementList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ElementList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.ElementList;

        /**
         * Verifies an ElementList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ElementList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ElementList
         */
        public static fromObject(object: { [k: string]: any }): in_proto.ElementList;

        /**
         * Creates a plain object from an ElementList message. Also converts values to other types if specified.
         * @param message ElementList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.ElementList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ElementList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ElementList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WebAPIResponse. */
    interface IWebAPIResponse {

        /** WebAPIResponse elements */
        elements?: (in_proto.IElementList|null);

        /** WebAPIResponse forms */
        forms?: (string[]|null);

        /** WebAPIResponse topForm */
        topForm?: (string|null);

        /** WebAPIResponse cycles */
        cycles?: (string[]|null);

        /** WebAPIResponse function */
        "function"?: (in_proto.WebAPIResponse.IFunctionStatus|null);

        /** WebAPIResponse folders */
        folders?: (in_proto.WebAPIResponse.IFolderUpdate[]|null);

        /** WebAPIResponse clipboard */
        clipboard?: (string|null);

        /** WebAPIResponse formsReplaced */
        formsReplaced?: (string[]|null);
    }

    /** Represents a WebAPIResponse. */
    class WebAPIResponse implements IWebAPIResponse {

        /**
         * Constructs a new WebAPIResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IWebAPIResponse);

        /** WebAPIResponse elements. */
        public elements?: (in_proto.IElementList|null);

        /** WebAPIResponse forms. */
        public forms: string[];

        /** WebAPIResponse topForm. */
        public topForm: string;

        /** WebAPIResponse cycles. */
        public cycles: string[];

        /** WebAPIResponse function. */
        public function?: (in_proto.WebAPIResponse.IFunctionStatus|null);

        /** WebAPIResponse folders. */
        public folders: in_proto.WebAPIResponse.IFolderUpdate[];

        /** WebAPIResponse clipboard. */
        public clipboard: string;

        /** WebAPIResponse formsReplaced. */
        public formsReplaced: string[];

        /**
         * Creates a new WebAPIResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebAPIResponse instance
         */
        public static create(properties?: in_proto.IWebAPIResponse): in_proto.WebAPIResponse;

        /**
         * Encodes the specified WebAPIResponse message. Does not implicitly {@link in_proto.WebAPIResponse.verify|verify} messages.
         * @param message WebAPIResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IWebAPIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebAPIResponse message, length delimited. Does not implicitly {@link in_proto.WebAPIResponse.verify|verify} messages.
         * @param message WebAPIResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IWebAPIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebAPIResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebAPIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.WebAPIResponse;

        /**
         * Decodes a WebAPIResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebAPIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.WebAPIResponse;

        /**
         * Verifies a WebAPIResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebAPIResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebAPIResponse
         */
        public static fromObject(object: { [k: string]: any }): in_proto.WebAPIResponse;

        /**
         * Creates a plain object from a WebAPIResponse message. Also converts values to other types if specified.
         * @param message WebAPIResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.WebAPIResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebAPIResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WebAPIResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace WebAPIResponse {

        /** Properties of a FunctionStatus. */
        interface IFunctionStatus {

            /** FunctionStatus status */
            status?: (string|null);

            /** FunctionStatus message */
            message?: (string|null);

            /** FunctionStatus name */
            name?: (string|null);

            /** FunctionStatus exit */
            exit?: (boolean|null);

            /** FunctionStatus openUrl */
            openUrl?: (string|null);
        }

        /** Represents a FunctionStatus. */
        class FunctionStatus implements IFunctionStatus {

            /**
             * Constructs a new FunctionStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.WebAPIResponse.IFunctionStatus);

            /** FunctionStatus status. */
            public status: string;

            /** FunctionStatus message. */
            public message: string;

            /** FunctionStatus name. */
            public name: string;

            /** FunctionStatus exit. */
            public exit: boolean;

            /** FunctionStatus openUrl. */
            public openUrl: string;

            /**
             * Creates a new FunctionStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FunctionStatus instance
             */
            public static create(properties?: in_proto.WebAPIResponse.IFunctionStatus): in_proto.WebAPIResponse.FunctionStatus;

            /**
             * Encodes the specified FunctionStatus message. Does not implicitly {@link in_proto.WebAPIResponse.FunctionStatus.verify|verify} messages.
             * @param message FunctionStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.WebAPIResponse.IFunctionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FunctionStatus message, length delimited. Does not implicitly {@link in_proto.WebAPIResponse.FunctionStatus.verify|verify} messages.
             * @param message FunctionStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.WebAPIResponse.IFunctionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FunctionStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FunctionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.WebAPIResponse.FunctionStatus;

            /**
             * Decodes a FunctionStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FunctionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.WebAPIResponse.FunctionStatus;

            /**
             * Verifies a FunctionStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FunctionStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FunctionStatus
             */
            public static fromObject(object: { [k: string]: any }): in_proto.WebAPIResponse.FunctionStatus;

            /**
             * Creates a plain object from a FunctionStatus message. Also converts values to other types if specified.
             * @param message FunctionStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.WebAPIResponse.FunctionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FunctionStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FunctionStatus
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FolderUpdate. */
        interface IFolderUpdate {

            /** FolderUpdate active */
            active?: (number|null);

            /** FolderUpdate name */
            name?: (string|null);

            /** FolderUpdate ids */
            ids?: (number[]|null);

            /** FolderUpdate visiblePages */
            visiblePages?: (boolean[]|null);
        }

        /** Represents a FolderUpdate. */
        class FolderUpdate implements IFolderUpdate {

            /**
             * Constructs a new FolderUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.WebAPIResponse.IFolderUpdate);

            /** FolderUpdate active. */
            public active: number;

            /** FolderUpdate name. */
            public name: string;

            /** FolderUpdate ids. */
            public ids: number[];

            /** FolderUpdate visiblePages. */
            public visiblePages: boolean[];

            /**
             * Creates a new FolderUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FolderUpdate instance
             */
            public static create(properties?: in_proto.WebAPIResponse.IFolderUpdate): in_proto.WebAPIResponse.FolderUpdate;

            /**
             * Encodes the specified FolderUpdate message. Does not implicitly {@link in_proto.WebAPIResponse.FolderUpdate.verify|verify} messages.
             * @param message FolderUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.WebAPIResponse.IFolderUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FolderUpdate message, length delimited. Does not implicitly {@link in_proto.WebAPIResponse.FolderUpdate.verify|verify} messages.
             * @param message FolderUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.WebAPIResponse.IFolderUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FolderUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FolderUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.WebAPIResponse.FolderUpdate;

            /**
             * Decodes a FolderUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FolderUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.WebAPIResponse.FolderUpdate;

            /**
             * Verifies a FolderUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FolderUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FolderUpdate
             */
            public static fromObject(object: { [k: string]: any }): in_proto.WebAPIResponse.FolderUpdate;

            /**
             * Creates a plain object from a FolderUpdate message. Also converts values to other types if specified.
             * @param message FolderUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.WebAPIResponse.FolderUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FolderUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FolderUpdate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ControlResponse. */
    interface IControlResponse {

        /** ControlResponse status */
        status?: (string|null);

        /** ControlResponse plotitems */
        plotitems?: (in_proto.Plot2D.IPlotItem[]|null);
    }

    /** Represents a ControlResponse. */
    class ControlResponse implements IControlResponse {

        /**
         * Constructs a new ControlResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IControlResponse);

        /** ControlResponse status. */
        public status: string;

        /** ControlResponse plotitems. */
        public plotitems: in_proto.Plot2D.IPlotItem[];

        /**
         * Creates a new ControlResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ControlResponse instance
         */
        public static create(properties?: in_proto.IControlResponse): in_proto.ControlResponse;

        /**
         * Encodes the specified ControlResponse message. Does not implicitly {@link in_proto.ControlResponse.verify|verify} messages.
         * @param message ControlResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IControlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ControlResponse message, length delimited. Does not implicitly {@link in_proto.ControlResponse.verify|verify} messages.
         * @param message ControlResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IControlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ControlResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ControlResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.ControlResponse;

        /**
         * Decodes a ControlResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ControlResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.ControlResponse;

        /**
         * Verifies a ControlResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ControlResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ControlResponse
         */
        public static fromObject(object: { [k: string]: any }): in_proto.ControlResponse;

        /**
         * Creates a plain object from a ControlResponse message. Also converts values to other types if specified.
         * @param message ControlResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.ControlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ControlResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ControlResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Plot2D. */
    interface IPlot2D {

        /** Plot2D base */
        base?: (in_proto.IGuiElement|null);

        /** Plot2D fixedWidth */
        fixedWidth?: (number|null);

        /** Plot2D fixedHeight */
        fixedHeight?: (number|null);

        /** Plot2D headerText */
        headerText?: (string|null);

        /** Plot2D footerText */
        footerText?: (string|null);

        /** Plot2D menuLabel */
        menuLabel?: (string|null);

        /** Plot2D axisX */
        axisX?: (in_proto.Plot2D.IAxis|null);

        /** Plot2D axisY1 */
        axisY1?: (in_proto.Plot2D.IAxis|null);

        /** Plot2D axisY2 */
        axisY2?: (in_proto.Plot2D.IAxis|null);

        /** Plot2D plotItems */
        plotItems?: (in_proto.Plot2D.IPlotItem[]|null);

        /** Plot2D xAnnotation */
        xAnnotation?: (in_proto.Plot2D.IAnnotation[]|null);

        /** Plot2D minX */
        minX?: (number|null);

        /** Plot2D maxX */
        maxX?: (number|null);

        /** Plot2D minY */
        minY?: (number|null);

        /** Plot2D maxY */
        maxY?: (number|null);

        /** Plot2D action */
        action?: (string|null);
    }

    /** Represents a Plot2D. */
    class Plot2D implements IPlot2D {

        /**
         * Constructs a new Plot2D.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IPlot2D);

        /** Plot2D base. */
        public base?: (in_proto.IGuiElement|null);

        /** Plot2D fixedWidth. */
        public fixedWidth: number;

        /** Plot2D fixedHeight. */
        public fixedHeight: number;

        /** Plot2D headerText. */
        public headerText: string;

        /** Plot2D footerText. */
        public footerText: string;

        /** Plot2D menuLabel. */
        public menuLabel: string;

        /** Plot2D axisX. */
        public axisX?: (in_proto.Plot2D.IAxis|null);

        /** Plot2D axisY1. */
        public axisY1?: (in_proto.Plot2D.IAxis|null);

        /** Plot2D axisY2. */
        public axisY2?: (in_proto.Plot2D.IAxis|null);

        /** Plot2D plotItems. */
        public plotItems: in_proto.Plot2D.IPlotItem[];

        /** Plot2D xAnnotation. */
        public xAnnotation: in_proto.Plot2D.IAnnotation[];

        /** Plot2D minX. */
        public minX: number;

        /** Plot2D maxX. */
        public maxX: number;

        /** Plot2D minY. */
        public minY: number;

        /** Plot2D maxY. */
        public maxY: number;

        /** Plot2D action. */
        public action: string;

        /**
         * Creates a new Plot2D instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Plot2D instance
         */
        public static create(properties?: in_proto.IPlot2D): in_proto.Plot2D;

        /**
         * Encodes the specified Plot2D message. Does not implicitly {@link in_proto.Plot2D.verify|verify} messages.
         * @param message Plot2D message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IPlot2D, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Plot2D message, length delimited. Does not implicitly {@link in_proto.Plot2D.verify|verify} messages.
         * @param message Plot2D message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IPlot2D, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Plot2D message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Plot2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Plot2D;

        /**
         * Decodes a Plot2D message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Plot2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Plot2D;

        /**
         * Verifies a Plot2D message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Plot2D message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Plot2D
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Plot2D;

        /**
         * Creates a plain object from a Plot2D message. Also converts values to other types if specified.
         * @param message Plot2D
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Plot2D, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Plot2D to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Plot2D
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Plot2D {

        /** Properties of an Axis. */
        interface IAxis {

            /** Axis title */
            title?: (string|null);

            /** Axis logarithmic */
            logarithmic?: (boolean|null);

            /** Axis min */
            min?: (number|null);

            /** Axis max */
            max?: (number|null);

            /** Axis style */
            style?: (string|null);
        }

        /** Represents an Axis. */
        class Axis implements IAxis {

            /**
             * Constructs a new Axis.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.Plot2D.IAxis);

            /** Axis title. */
            public title: string;

            /** Axis logarithmic. */
            public logarithmic: boolean;

            /** Axis min. */
            public min: number;

            /** Axis max. */
            public max: number;

            /** Axis style. */
            public style: string;

            /**
             * Creates a new Axis instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Axis instance
             */
            public static create(properties?: in_proto.Plot2D.IAxis): in_proto.Plot2D.Axis;

            /**
             * Encodes the specified Axis message. Does not implicitly {@link in_proto.Plot2D.Axis.verify|verify} messages.
             * @param message Axis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.Plot2D.IAxis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Axis message, length delimited. Does not implicitly {@link in_proto.Plot2D.Axis.verify|verify} messages.
             * @param message Axis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.Plot2D.IAxis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Axis message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Axis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Plot2D.Axis;

            /**
             * Decodes an Axis message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Axis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Plot2D.Axis;

            /**
             * Verifies an Axis message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Axis message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Axis
             */
            public static fromObject(object: { [k: string]: any }): in_proto.Plot2D.Axis;

            /**
             * Creates a plain object from an Axis message. Also converts values to other types if specified.
             * @param message Axis
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.Plot2D.Axis, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Axis to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Axis
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlotItem. */
        interface IPlotItem {

            /** PlotItem label */
            label?: (string|null);

            /** PlotItem axis */
            axis?: (string|null);

            /** PlotItem isMarker */
            isMarker?: (boolean|null);

            /** PlotItem legend */
            legend?: (boolean|null);

            /** PlotItem lineColor */
            lineColor?: (string|null);

            /** PlotItem symbolColor */
            symbolColor?: (string|null);

            /** PlotItem lineStyle */
            lineStyle?: (string|null);

            /** PlotItem symbolStyle */
            symbolStyle?: (string|null);

            /** PlotItem symbolSize */
            symbolSize?: (number|null);

            /** PlotItem x */
            x?: (number[]|null);

            /** PlotItem y */
            y?: (number[]|null);

            /** PlotItem markerLabels */
            markerLabels?: (in_proto.Plot2D.PlotItem.IMarker[]|null);

            /** PlotItem minX */
            minX?: (number|null);

            /** PlotItem maxX */
            maxX?: (number|null);

            /** PlotItem minY */
            minY?: (number|null);

            /** PlotItem maxY */
            maxY?: (number|null);
        }

        /** Represents a PlotItem. */
        class PlotItem implements IPlotItem {

            /**
             * Constructs a new PlotItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.Plot2D.IPlotItem);

            /** PlotItem label. */
            public label: string;

            /** PlotItem axis. */
            public axis: string;

            /** PlotItem isMarker. */
            public isMarker: boolean;

            /** PlotItem legend. */
            public legend: boolean;

            /** PlotItem lineColor. */
            public lineColor: string;

            /** PlotItem symbolColor. */
            public symbolColor: string;

            /** PlotItem lineStyle. */
            public lineStyle: string;

            /** PlotItem symbolStyle. */
            public symbolStyle: string;

            /** PlotItem symbolSize. */
            public symbolSize: number;

            /** PlotItem x. */
            public x: number[];

            /** PlotItem y. */
            public y: number[];

            /** PlotItem markerLabels. */
            public markerLabels: in_proto.Plot2D.PlotItem.IMarker[];

            /** PlotItem minX. */
            public minX: number;

            /** PlotItem maxX. */
            public maxX: number;

            /** PlotItem minY. */
            public minY: number;

            /** PlotItem maxY. */
            public maxY: number;

            /**
             * Creates a new PlotItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlotItem instance
             */
            public static create(properties?: in_proto.Plot2D.IPlotItem): in_proto.Plot2D.PlotItem;

            /**
             * Encodes the specified PlotItem message. Does not implicitly {@link in_proto.Plot2D.PlotItem.verify|verify} messages.
             * @param message PlotItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.Plot2D.IPlotItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlotItem message, length delimited. Does not implicitly {@link in_proto.Plot2D.PlotItem.verify|verify} messages.
             * @param message PlotItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.Plot2D.IPlotItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlotItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlotItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Plot2D.PlotItem;

            /**
             * Decodes a PlotItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlotItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Plot2D.PlotItem;

            /**
             * Verifies a PlotItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlotItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlotItem
             */
            public static fromObject(object: { [k: string]: any }): in_proto.Plot2D.PlotItem;

            /**
             * Creates a plain object from a PlotItem message. Also converts values to other types if specified.
             * @param message PlotItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.Plot2D.PlotItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlotItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlotItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PlotItem {

            /** Properties of a Marker. */
            interface IMarker {

                /** Marker background */
                background?: (string|null);

                /** Marker foreground */
                foreground?: (string|null);

                /** Marker label */
                label?: (string|null);
            }

            /** Represents a Marker. */
            class Marker implements IMarker {

                /**
                 * Constructs a new Marker.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: in_proto.Plot2D.PlotItem.IMarker);

                /** Marker background. */
                public background: string;

                /** Marker foreground. */
                public foreground: string;

                /** Marker label. */
                public label: string;

                /**
                 * Creates a new Marker instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Marker instance
                 */
                public static create(properties?: in_proto.Plot2D.PlotItem.IMarker): in_proto.Plot2D.PlotItem.Marker;

                /**
                 * Encodes the specified Marker message. Does not implicitly {@link in_proto.Plot2D.PlotItem.Marker.verify|verify} messages.
                 * @param message Marker message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: in_proto.Plot2D.PlotItem.IMarker, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Marker message, length delimited. Does not implicitly {@link in_proto.Plot2D.PlotItem.Marker.verify|verify} messages.
                 * @param message Marker message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: in_proto.Plot2D.PlotItem.IMarker, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Marker message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Marker
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Plot2D.PlotItem.Marker;

                /**
                 * Decodes a Marker message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Marker
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Plot2D.PlotItem.Marker;

                /**
                 * Verifies a Marker message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Marker message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Marker
                 */
                public static fromObject(object: { [k: string]: any }): in_proto.Plot2D.PlotItem.Marker;

                /**
                 * Creates a plain object from a Marker message. Also converts values to other types if specified.
                 * @param message Marker
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: in_proto.Plot2D.PlotItem.Marker, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Marker to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Marker
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an Annotation. */
        interface IAnnotation {

            /** Annotation pos */
            pos?: (number|null);

            /** Annotation label */
            label?: (string|null);
        }

        /** Represents an Annotation. */
        class Annotation implements IAnnotation {

            /**
             * Constructs a new Annotation.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.Plot2D.IAnnotation);

            /** Annotation pos. */
            public pos: number;

            /** Annotation label. */
            public label: string;

            /**
             * Creates a new Annotation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Annotation instance
             */
            public static create(properties?: in_proto.Plot2D.IAnnotation): in_proto.Plot2D.Annotation;

            /**
             * Encodes the specified Annotation message. Does not implicitly {@link in_proto.Plot2D.Annotation.verify|verify} messages.
             * @param message Annotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.Plot2D.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Annotation message, length delimited. Does not implicitly {@link in_proto.Plot2D.Annotation.verify|verify} messages.
             * @param message Annotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.Plot2D.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Annotation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Annotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Plot2D.Annotation;

            /**
             * Decodes an Annotation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Annotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Plot2D.Annotation;

            /**
             * Verifies an Annotation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Annotation
             */
            public static fromObject(object: { [k: string]: any }): in_proto.Plot2D.Annotation;

            /**
             * Creates a plain object from an Annotation message. Also converts values to other types if specified.
             * @param message Annotation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.Plot2D.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Annotation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Annotation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Plot3D. */
    interface IPlot3D {

        /** Plot3D base */
        base?: (in_proto.IGuiElement|null);

        /** Plot3D style */
        style?: (in_proto.Plot3D.Plot3DStyle|null);

        /** Plot3D headerText */
        headerText?: (string|null);

        /** Plot3D drawContour */
        drawContour?: (boolean|null);

        /** Plot3D drawInterpolated */
        drawInterpolated?: (boolean|null);

        /** Plot3D xAxis */
        xAxis?: (in_proto.Plot3D.IAxis|null);

        /** Plot3D yAxis */
        yAxis?: (in_proto.Plot3D.IAxis|null);

        /** Plot3D zAxis */
        zAxis?: (in_proto.Plot3D.IAxis|null);
    }

    /** Represents a Plot3D. */
    class Plot3D implements IPlot3D {

        /**
         * Constructs a new Plot3D.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IPlot3D);

        /** Plot3D base. */
        public base?: (in_proto.IGuiElement|null);

        /** Plot3D style. */
        public style: in_proto.Plot3D.Plot3DStyle;

        /** Plot3D headerText. */
        public headerText: string;

        /** Plot3D drawContour. */
        public drawContour: boolean;

        /** Plot3D drawInterpolated. */
        public drawInterpolated: boolean;

        /** Plot3D xAxis. */
        public xAxis?: (in_proto.Plot3D.IAxis|null);

        /** Plot3D yAxis. */
        public yAxis?: (in_proto.Plot3D.IAxis|null);

        /** Plot3D zAxis. */
        public zAxis?: (in_proto.Plot3D.IAxis|null);

        /**
         * Creates a new Plot3D instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Plot3D instance
         */
        public static create(properties?: in_proto.IPlot3D): in_proto.Plot3D;

        /**
         * Encodes the specified Plot3D message. Does not implicitly {@link in_proto.Plot3D.verify|verify} messages.
         * @param message Plot3D message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IPlot3D, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Plot3D message, length delimited. Does not implicitly {@link in_proto.Plot3D.verify|verify} messages.
         * @param message Plot3D message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IPlot3D, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Plot3D message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Plot3D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Plot3D;

        /**
         * Decodes a Plot3D message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Plot3D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Plot3D;

        /**
         * Verifies a Plot3D message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Plot3D message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Plot3D
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Plot3D;

        /**
         * Creates a plain object from a Plot3D message. Also converts values to other types if specified.
         * @param message Plot3D
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Plot3D, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Plot3D to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Plot3D
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Plot3D {

        /** Plot3DStyle enum. */
        enum Plot3DStyle {
            Unknown = 0,
            Contour = 1,
            Surface = 2,
            Bar = 3
        }

        /** Properties of an Axis. */
        interface IAxis {

            /** Axis label */
            label?: (string|null);

            /** Axis numwc */
            numwc?: (number|null);

            /** Axis numdims */
            numdims?: (number|null);

            /** Axis minRange */
            minRange?: (number|null);

            /** Axis maxRange */
            maxRange?: (number|null);

            /** Axis scale */
            scale?: (number|null);

            /** Axis data */
            data?: (number[]|null);

            /** Axis matrix */
            matrix?: (in_proto.Plot3D.Axis.IMatrixLine[]|null);
        }

        /** Represents an Axis. */
        class Axis implements IAxis {

            /**
             * Constructs a new Axis.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.Plot3D.IAxis);

            /** Axis label. */
            public label: string;

            /** Axis numwc. */
            public numwc: number;

            /** Axis numdims. */
            public numdims: number;

            /** Axis minRange. */
            public minRange: number;

            /** Axis maxRange. */
            public maxRange: number;

            /** Axis scale. */
            public scale: number;

            /** Axis data. */
            public data: number[];

            /** Axis matrix. */
            public matrix: in_proto.Plot3D.Axis.IMatrixLine[];

            /**
             * Creates a new Axis instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Axis instance
             */
            public static create(properties?: in_proto.Plot3D.IAxis): in_proto.Plot3D.Axis;

            /**
             * Encodes the specified Axis message. Does not implicitly {@link in_proto.Plot3D.Axis.verify|verify} messages.
             * @param message Axis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.Plot3D.IAxis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Axis message, length delimited. Does not implicitly {@link in_proto.Plot3D.Axis.verify|verify} messages.
             * @param message Axis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.Plot3D.IAxis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Axis message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Axis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Plot3D.Axis;

            /**
             * Decodes an Axis message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Axis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Plot3D.Axis;

            /**
             * Verifies an Axis message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Axis message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Axis
             */
            public static fromObject(object: { [k: string]: any }): in_proto.Plot3D.Axis;

            /**
             * Creates a plain object from an Axis message. Also converts values to other types if specified.
             * @param message Axis
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.Plot3D.Axis, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Axis to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Axis
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Axis {

            /** Properties of a MatrixLine. */
            interface IMatrixLine {

                /** MatrixLine a */
                a?: (number[]|null);
            }

            /** Represents a MatrixLine. */
            class MatrixLine implements IMatrixLine {

                /**
                 * Constructs a new MatrixLine.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: in_proto.Plot3D.Axis.IMatrixLine);

                /** MatrixLine a. */
                public a: number[];

                /**
                 * Creates a new MatrixLine instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MatrixLine instance
                 */
                public static create(properties?: in_proto.Plot3D.Axis.IMatrixLine): in_proto.Plot3D.Axis.MatrixLine;

                /**
                 * Encodes the specified MatrixLine message. Does not implicitly {@link in_proto.Plot3D.Axis.MatrixLine.verify|verify} messages.
                 * @param message MatrixLine message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: in_proto.Plot3D.Axis.IMatrixLine, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MatrixLine message, length delimited. Does not implicitly {@link in_proto.Plot3D.Axis.MatrixLine.verify|verify} messages.
                 * @param message MatrixLine message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: in_proto.Plot3D.Axis.IMatrixLine, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MatrixLine message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MatrixLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Plot3D.Axis.MatrixLine;

                /**
                 * Decodes a MatrixLine message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MatrixLine
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Plot3D.Axis.MatrixLine;

                /**
                 * Verifies a MatrixLine message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MatrixLine message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MatrixLine
                 */
                public static fromObject(object: { [k: string]: any }): in_proto.Plot3D.Axis.MatrixLine;

                /**
                 * Creates a plain object from a MatrixLine message. Also converts values to other types if specified.
                 * @param message MatrixLine
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: in_proto.Plot3D.Axis.MatrixLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MatrixLine to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MatrixLine
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Properties of a Messagebar. */
    interface IMessagebar {

        /** Messagebar base */
        base?: (in_proto.IGuiElement|null);
    }

    /** Represents a Messagebar. */
    class Messagebar implements IMessagebar {

        /**
         * Constructs a new Messagebar.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IMessagebar);

        /** Messagebar base. */
        public base?: (in_proto.IGuiElement|null);

        /**
         * Creates a new Messagebar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Messagebar instance
         */
        public static create(properties?: in_proto.IMessagebar): in_proto.Messagebar;

        /**
         * Encodes the specified Messagebar message. Does not implicitly {@link in_proto.Messagebar.verify|verify} messages.
         * @param message Messagebar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IMessagebar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Messagebar message, length delimited. Does not implicitly {@link in_proto.Messagebar.verify|verify} messages.
         * @param message Messagebar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IMessagebar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Messagebar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Messagebar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Messagebar;

        /**
         * Decodes a Messagebar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Messagebar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Messagebar;

        /**
         * Verifies a Messagebar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Messagebar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Messagebar
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Messagebar;

        /**
         * Creates a plain object from a Messagebar message. Also converts values to other types if specified.
         * @param message Messagebar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Messagebar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Messagebar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Messagebar
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Navigator. */
    interface INavigator {

        /** Navigator base */
        base?: (in_proto.IGuiElement|null);

        /** Navigator fullName */
        fullName?: (string|null);

        /** Navigator action */
        action?: (string|null);

        /** Navigator width */
        width?: (number|null);

        /** Navigator height */
        height?: (number|null);

        /** Navigator expandable */
        expandable?: (boolean|null);

        /** Navigator scrollable */
        scrollable?: (boolean|null);

        /** Navigator root */
        root?: (in_proto.INavigatorNode|null);

        /** Navigator columns */
        columns?: (in_proto.INavigatorColumn[]|null);

        /** Navigator popupMenu */
        popupMenu?: (in_proto.IPopupMenu|null);

        /** Navigator diagramConnectionRatio */
        diagramConnectionRatio?: (number|null);

        /** Navigator connections */
        connections?: (in_proto.IConnection[]|null);

        /** Navigator connectionAttrs */
        connectionAttrs?: (in_proto.IConnectionAttr[]|null);

        /** Navigator selectItems */
        selectItems?: (string[]|null);
    }

    /** Represents a Navigator. */
    class Navigator implements INavigator {

        /**
         * Constructs a new Navigator.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.INavigator);

        /** Navigator base. */
        public base?: (in_proto.IGuiElement|null);

        /** Navigator fullName. */
        public fullName: string;

        /** Navigator action. */
        public action: string;

        /** Navigator width. */
        public width: number;

        /** Navigator height. */
        public height: number;

        /** Navigator expandable. */
        public expandable: boolean;

        /** Navigator scrollable. */
        public scrollable: boolean;

        /** Navigator root. */
        public root?: (in_proto.INavigatorNode|null);

        /** Navigator columns. */
        public columns: in_proto.INavigatorColumn[];

        /** Navigator popupMenu. */
        public popupMenu?: (in_proto.IPopupMenu|null);

        /** Navigator diagramConnectionRatio. */
        public diagramConnectionRatio: number;

        /** Navigator connections. */
        public connections: in_proto.IConnection[];

        /** Navigator connectionAttrs. */
        public connectionAttrs: in_proto.IConnectionAttr[];

        /** Navigator selectItems. */
        public selectItems: string[];

        /**
         * Creates a new Navigator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Navigator instance
         */
        public static create(properties?: in_proto.INavigator): in_proto.Navigator;

        /**
         * Encodes the specified Navigator message. Does not implicitly {@link in_proto.Navigator.verify|verify} messages.
         * @param message Navigator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.INavigator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Navigator message, length delimited. Does not implicitly {@link in_proto.Navigator.verify|verify} messages.
         * @param message Navigator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.INavigator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Navigator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Navigator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Navigator;

        /**
         * Decodes a Navigator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Navigator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Navigator;

        /**
         * Verifies a Navigator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Navigator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Navigator
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Navigator;

        /**
         * Creates a plain object from a Navigator message. Also converts values to other types if specified.
         * @param message Navigator
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Navigator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Navigator to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Navigator
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Connection. */
    interface IConnection {

        /** Connection a */
        a?: (string|null);

        /** Connection b */
        b?: (string|null);
    }

    /** Represents a Connection. */
    class Connection implements IConnection {

        /**
         * Constructs a new Connection.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IConnection);

        /** Connection a. */
        public a: string;

        /** Connection b. */
        public b: string;

        /**
         * Creates a new Connection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Connection instance
         */
        public static create(properties?: in_proto.IConnection): in_proto.Connection;

        /**
         * Encodes the specified Connection message. Does not implicitly {@link in_proto.Connection.verify|verify} messages.
         * @param message Connection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Connection message, length delimited. Does not implicitly {@link in_proto.Connection.verify|verify} messages.
         * @param message Connection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Connection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Connection;

        /**
         * Decodes a Connection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Connection;

        /**
         * Verifies a Connection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Connection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Connection
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Connection;

        /**
         * Creates a plain object from a Connection message. Also converts values to other types if specified.
         * @param message Connection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Connection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Connection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Connection
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ConnectionAttr. */
    interface IConnectionAttr {

        /** ConnectionAttr lineWidth */
        lineWidth?: (number|null);

        /** ConnectionAttr lineStyle */
        lineStyle?: (string|null);

        /** ConnectionAttr lineColor */
        lineColor?: (string|null);

        /** ConnectionAttr lineVectors */
        lineVectors?: (in_proto.IPosition[]|null);
    }

    /** Represents a ConnectionAttr. */
    class ConnectionAttr implements IConnectionAttr {

        /**
         * Constructs a new ConnectionAttr.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IConnectionAttr);

        /** ConnectionAttr lineWidth. */
        public lineWidth: number;

        /** ConnectionAttr lineStyle. */
        public lineStyle: string;

        /** ConnectionAttr lineColor. */
        public lineColor: string;

        /** ConnectionAttr lineVectors. */
        public lineVectors: in_proto.IPosition[];

        /**
         * Creates a new ConnectionAttr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectionAttr instance
         */
        public static create(properties?: in_proto.IConnectionAttr): in_proto.ConnectionAttr;

        /**
         * Encodes the specified ConnectionAttr message. Does not implicitly {@link in_proto.ConnectionAttr.verify|verify} messages.
         * @param message ConnectionAttr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IConnectionAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectionAttr message, length delimited. Does not implicitly {@link in_proto.ConnectionAttr.verify|verify} messages.
         * @param message ConnectionAttr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IConnectionAttr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectionAttr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectionAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.ConnectionAttr;

        /**
         * Decodes a ConnectionAttr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectionAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.ConnectionAttr;

        /**
         * Verifies a ConnectionAttr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectionAttr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectionAttr
         */
        public static fromObject(object: { [k: string]: any }): in_proto.ConnectionAttr;

        /**
         * Creates a plain object from a ConnectionAttr message. Also converts values to other types if specified.
         * @param message ConnectionAttr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.ConnectionAttr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectionAttr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConnectionAttr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NavigatorNode. */
    interface INavigatorNode {

        /** NavigatorNode name */
        name?: (string|null);

        /** NavigatorNode popupMenu */
        popupMenu?: (in_proto.IPopupMenu|null);

        /** NavigatorNode newCount */
        newCount?: (number|null);

        /** NavigatorNode visible */
        visible?: (boolean|null);

        /** NavigatorNode folder */
        folder?: (boolean|null);

        /** NavigatorNode tooltip */
        tooltip?: (string|null);

        /** NavigatorNode fullName */
        fullName?: (string|null);

        /** NavigatorNode nodes */
        nodes?: (in_proto.INavigatorNode[]|null);

        /** NavigatorNode icon */
        icon?: (string|null);

        /** NavigatorNode action */
        action?: (string|null);

        /** NavigatorNode nodeName */
        nodeName?: (string|null);

        /** NavigatorNode position */
        position?: (in_proto.IPosition|null);

        /** NavigatorNode labels */
        labels?: (string[]|null);

        /** NavigatorNode fgcolor */
        fgcolor?: (string|null);
    }

    /** Represents a NavigatorNode. */
    class NavigatorNode implements INavigatorNode {

        /**
         * Constructs a new NavigatorNode.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.INavigatorNode);

        /** NavigatorNode name. */
        public name: string;

        /** NavigatorNode popupMenu. */
        public popupMenu?: (in_proto.IPopupMenu|null);

        /** NavigatorNode newCount. */
        public newCount: number;

        /** NavigatorNode visible. */
        public visible: boolean;

        /** NavigatorNode folder. */
        public folder: boolean;

        /** NavigatorNode tooltip. */
        public tooltip: string;

        /** NavigatorNode fullName. */
        public fullName: string;

        /** NavigatorNode nodes. */
        public nodes: in_proto.INavigatorNode[];

        /** NavigatorNode icon. */
        public icon: string;

        /** NavigatorNode action. */
        public action: string;

        /** NavigatorNode nodeName. */
        public nodeName: string;

        /** NavigatorNode position. */
        public position?: (in_proto.IPosition|null);

        /** NavigatorNode labels. */
        public labels: string[];

        /** NavigatorNode fgcolor. */
        public fgcolor: string;

        /**
         * Creates a new NavigatorNode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NavigatorNode instance
         */
        public static create(properties?: in_proto.INavigatorNode): in_proto.NavigatorNode;

        /**
         * Encodes the specified NavigatorNode message. Does not implicitly {@link in_proto.NavigatorNode.verify|verify} messages.
         * @param message NavigatorNode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.INavigatorNode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NavigatorNode message, length delimited. Does not implicitly {@link in_proto.NavigatorNode.verify|verify} messages.
         * @param message NavigatorNode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.INavigatorNode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NavigatorNode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NavigatorNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.NavigatorNode;

        /**
         * Decodes a NavigatorNode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NavigatorNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.NavigatorNode;

        /**
         * Verifies a NavigatorNode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NavigatorNode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NavigatorNode
         */
        public static fromObject(object: { [k: string]: any }): in_proto.NavigatorNode;

        /**
         * Creates a plain object from a NavigatorNode message. Also converts values to other types if specified.
         * @param message NavigatorNode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.NavigatorNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NavigatorNode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NavigatorNode
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position x */
        x?: (number|null);

        /** Position y */
        y?: (number|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IPosition);

        /** Position x. */
        public x: number;

        /** Position y. */
        public y: number;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: in_proto.IPosition): in_proto.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link in_proto.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link in_proto.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Position
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NavigatorColumn. */
    interface INavigatorColumn {

        /** NavigatorColumn tag */
        tag?: (string|null);

        /** NavigatorColumn width */
        width?: (number|null);

        /** NavigatorColumn scale */
        scale?: (number|null);

        /** NavigatorColumn style */
        style?: (number|null);

        /** NavigatorColumn label */
        label?: (string|null);
    }

    /** Represents a NavigatorColumn. */
    class NavigatorColumn implements INavigatorColumn {

        /**
         * Constructs a new NavigatorColumn.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.INavigatorColumn);

        /** NavigatorColumn tag. */
        public tag: string;

        /** NavigatorColumn width. */
        public width: number;

        /** NavigatorColumn scale. */
        public scale: number;

        /** NavigatorColumn style. */
        public style: number;

        /** NavigatorColumn label. */
        public label: string;

        /**
         * Creates a new NavigatorColumn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NavigatorColumn instance
         */
        public static create(properties?: in_proto.INavigatorColumn): in_proto.NavigatorColumn;

        /**
         * Encodes the specified NavigatorColumn message. Does not implicitly {@link in_proto.NavigatorColumn.verify|verify} messages.
         * @param message NavigatorColumn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.INavigatorColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NavigatorColumn message, length delimited. Does not implicitly {@link in_proto.NavigatorColumn.verify|verify} messages.
         * @param message NavigatorColumn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.INavigatorColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NavigatorColumn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NavigatorColumn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.NavigatorColumn;

        /**
         * Decodes a NavigatorColumn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NavigatorColumn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.NavigatorColumn;

        /**
         * Verifies a NavigatorColumn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NavigatorColumn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NavigatorColumn
         */
        public static fromObject(object: { [k: string]: any }): in_proto.NavigatorColumn;

        /**
         * Creates a plain object from a NavigatorColumn message. Also converts values to other types if specified.
         * @param message NavigatorColumn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.NavigatorColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NavigatorColumn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NavigatorColumn
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Radio. */
    interface IRadio {

        /** Radio base */
        base?: (in_proto.IGuiElement|null);
    }

    /** Represents a Radio. */
    class Radio implements IRadio {

        /**
         * Constructs a new Radio.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IRadio);

        /** Radio base. */
        public base?: (in_proto.IGuiElement|null);

        /**
         * Creates a new Radio instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Radio instance
         */
        public static create(properties?: in_proto.IRadio): in_proto.Radio;

        /**
         * Encodes the specified Radio message. Does not implicitly {@link in_proto.Radio.verify|verify} messages.
         * @param message Radio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IRadio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Radio message, length delimited. Does not implicitly {@link in_proto.Radio.verify|verify} messages.
         * @param message Radio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IRadio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Radio message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Radio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Radio;

        /**
         * Decodes a Radio message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Radio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Radio;

        /**
         * Verifies a Radio message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Radio message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Radio
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Radio;

        /**
         * Creates a plain object from a Radio message. Also converts values to other types if specified.
         * @param message Radio
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Radio, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Radio to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Radio
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Separator. */
    interface ISeparator {

        /** Separator orientation */
        orientation?: (in_proto.GuiElement.Orientation|null);

        /** Separator id */
        id?: (number|null);

        /** Separator styleClass */
        styleClass?: (string|null);
    }

    /** Represents a Separator. */
    class Separator implements ISeparator {

        /**
         * Constructs a new Separator.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.ISeparator);

        /** Separator orientation. */
        public orientation: in_proto.GuiElement.Orientation;

        /** Separator id. */
        public id: number;

        /** Separator styleClass. */
        public styleClass: string;

        /**
         * Creates a new Separator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Separator instance
         */
        public static create(properties?: in_proto.ISeparator): in_proto.Separator;

        /**
         * Encodes the specified Separator message. Does not implicitly {@link in_proto.Separator.verify|verify} messages.
         * @param message Separator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.ISeparator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Separator message, length delimited. Does not implicitly {@link in_proto.Separator.verify|verify} messages.
         * @param message Separator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.ISeparator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Separator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Separator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Separator;

        /**
         * Decodes a Separator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Separator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Separator;

        /**
         * Verifies a Separator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Separator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Separator
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Separator;

        /**
         * Creates a plain object from a Separator message. Also converts values to other types if specified.
         * @param message Separator
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Separator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Separator to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Separator
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Stretch. */
    interface IStretch {

        /** Stretch horizontalFactor */
        horizontalFactor?: (number|null);

        /** Stretch verticalFactor */
        verticalFactor?: (number|null);

        /** Stretch id */
        id?: (number|null);
    }

    /** Represents a Stretch. */
    class Stretch implements IStretch {

        /**
         * Constructs a new Stretch.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IStretch);

        /** Stretch horizontalFactor. */
        public horizontalFactor: number;

        /** Stretch verticalFactor. */
        public verticalFactor: number;

        /** Stretch id. */
        public id: number;

        /**
         * Creates a new Stretch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Stretch instance
         */
        public static create(properties?: in_proto.IStretch): in_proto.Stretch;

        /**
         * Encodes the specified Stretch message. Does not implicitly {@link in_proto.Stretch.verify|verify} messages.
         * @param message Stretch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IStretch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Stretch message, length delimited. Does not implicitly {@link in_proto.Stretch.verify|verify} messages.
         * @param message Stretch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IStretch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Stretch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Stretch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Stretch;

        /**
         * Decodes a Stretch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Stretch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Stretch;

        /**
         * Verifies a Stretch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Stretch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Stretch
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Stretch;

        /**
         * Creates a plain object from a Stretch message. Also converts values to other types if specified.
         * @param message Stretch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Stretch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Stretch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Stretch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Table. */
    interface ITable {

        /** Table base */
        base?: (in_proto.IGuiElement|null);

        /** Table popupBaseMenu */
        popupBaseMenu?: (in_proto.IPopupMenu|null);

        /** Table popupHeaderMenu */
        popupHeaderMenu?: (in_proto.IPopupMenu|null);

        /** Table popupHeaderMenuCol */
        popupHeaderMenuCol?: (in_proto.IPopupMenu|null);

        /** Table title */
        title?: (string|null);

        /** Table titleHorizontal */
        titleHorizontal?: (string|null);

        /** Table titleVertical */
        titleVertical?: (string|null);

        /** Table titleAlignment */
        titleAlignment?: (in_proto.GuiElement.Alignment|null);

        /** Table placementHorizontal */
        placementHorizontal?: (in_proto.GuiElement.Alignment|null);

        /** Table placementVertical */
        placementVertical?: (in_proto.GuiElement.Alignment|null);

        /** Table rowHeader */
        rowHeader?: (string[]|null);

        /** Table rowHeaderHidden */
        rowHeaderHidden?: (boolean|null);

        /** Table rowHeaderMaxLength */
        rowHeaderMaxLength?: (number|null);

        /** Table rowHeaderLength */
        rowHeaderLength?: (number|null);

        /** Table rowOffset */
        rowOffset?: (number|null);

        /** Table columnHeader */
        columnHeader?: (string[]|null);

        /** Table columnHeaderHidden */
        columnHeaderHidden?: (boolean|null);

        /** Table columnHeaderMaxLength */
        columnHeaderMaxLength?: (number|null);

        /** Table columnLength */
        columnLength?: (number[]|null);

        /** Table columnOffset */
        columnOffset?: (number|null);

        /** Table orientation */
        orientation?: (in_proto.GuiElement.Orientation|null);

        /** Table navigation */
        navigation?: (in_proto.GuiElement.Orientation|null);

        /** Table isMatrix */
        isMatrix?: (boolean|null);

        /** Table numRows */
        numRows?: (number|null);

        /** Table numColumns */
        numColumns?: (number|null);

        /** Table numRowsVisible */
        numRowsVisible?: (number|null);

        /** Table numColumnsVisible */
        numColumnsVisible?: (number|null);

        /** Table numFrozenRows */
        numFrozenRows?: (number|null);

        /** Table numFrozenColumns */
        numFrozenColumns?: (number|null);

        /** Table numRowsFixed */
        numRowsFixed?: (number|null);

        /** Table numColumnsFixed */
        numColumnsFixed?: (number|null);

        /** Table matrix */
        matrix?: (in_proto.Table.IMatrixEntry[]|null);
    }

    /** Represents a Table. */
    class Table implements ITable {

        /**
         * Constructs a new Table.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.ITable);

        /** Table base. */
        public base?: (in_proto.IGuiElement|null);

        /** Table popupBaseMenu. */
        public popupBaseMenu?: (in_proto.IPopupMenu|null);

        /** Table popupHeaderMenu. */
        public popupHeaderMenu?: (in_proto.IPopupMenu|null);

        /** Table popupHeaderMenuCol. */
        public popupHeaderMenuCol?: (in_proto.IPopupMenu|null);

        /** Table title. */
        public title: string;

        /** Table titleHorizontal. */
        public titleHorizontal: string;

        /** Table titleVertical. */
        public titleVertical: string;

        /** Table titleAlignment. */
        public titleAlignment: in_proto.GuiElement.Alignment;

        /** Table placementHorizontal. */
        public placementHorizontal: in_proto.GuiElement.Alignment;

        /** Table placementVertical. */
        public placementVertical: in_proto.GuiElement.Alignment;

        /** Table rowHeader. */
        public rowHeader: string[];

        /** Table rowHeaderHidden. */
        public rowHeaderHidden: boolean;

        /** Table rowHeaderMaxLength. */
        public rowHeaderMaxLength: number;

        /** Table rowHeaderLength. */
        public rowHeaderLength: number;

        /** Table rowOffset. */
        public rowOffset: number;

        /** Table columnHeader. */
        public columnHeader: string[];

        /** Table columnHeaderHidden. */
        public columnHeaderHidden: boolean;

        /** Table columnHeaderMaxLength. */
        public columnHeaderMaxLength: number;

        /** Table columnLength. */
        public columnLength: number[];

        /** Table columnOffset. */
        public columnOffset: number;

        /** Table orientation. */
        public orientation: in_proto.GuiElement.Orientation;

        /** Table navigation. */
        public navigation: in_proto.GuiElement.Orientation;

        /** Table isMatrix. */
        public isMatrix: boolean;

        /** Table numRows. */
        public numRows: number;

        /** Table numColumns. */
        public numColumns: number;

        /** Table numRowsVisible. */
        public numRowsVisible: number;

        /** Table numColumnsVisible. */
        public numColumnsVisible: number;

        /** Table numFrozenRows. */
        public numFrozenRows: number;

        /** Table numFrozenColumns. */
        public numFrozenColumns: number;

        /** Table numRowsFixed. */
        public numRowsFixed: number;

        /** Table numColumnsFixed. */
        public numColumnsFixed: number;

        /** Table matrix. */
        public matrix: in_proto.Table.IMatrixEntry[];

        /**
         * Creates a new Table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Table instance
         */
        public static create(properties?: in_proto.ITable): in_proto.Table;

        /**
         * Encodes the specified Table message. Does not implicitly {@link in_proto.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link in_proto.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Table;

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Table;

        /**
         * Verifies a Table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Table
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Table;

        /**
         * Creates a plain object from a Table message. Also converts values to other types if specified.
         * @param message Table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Table
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Table {

        /** Properties of a MatrixEntry. */
        interface IMatrixEntry {

            /** MatrixEntry a */
            a?: (in_proto.Table.MatrixEntry.IElementEntry[]|null);
        }

        /** Represents a MatrixEntry. */
        class MatrixEntry implements IMatrixEntry {

            /**
             * Constructs a new MatrixEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.Table.IMatrixEntry);

            /** MatrixEntry a. */
            public a: in_proto.Table.MatrixEntry.IElementEntry[];

            /**
             * Creates a new MatrixEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MatrixEntry instance
             */
            public static create(properties?: in_proto.Table.IMatrixEntry): in_proto.Table.MatrixEntry;

            /**
             * Encodes the specified MatrixEntry message. Does not implicitly {@link in_proto.Table.MatrixEntry.verify|verify} messages.
             * @param message MatrixEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.Table.IMatrixEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MatrixEntry message, length delimited. Does not implicitly {@link in_proto.Table.MatrixEntry.verify|verify} messages.
             * @param message MatrixEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.Table.IMatrixEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MatrixEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MatrixEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Table.MatrixEntry;

            /**
             * Decodes a MatrixEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MatrixEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Table.MatrixEntry;

            /**
             * Verifies a MatrixEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MatrixEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MatrixEntry
             */
            public static fromObject(object: { [k: string]: any }): in_proto.Table.MatrixEntry;

            /**
             * Creates a plain object from a MatrixEntry message. Also converts values to other types if specified.
             * @param message MatrixEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.Table.MatrixEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MatrixEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MatrixEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MatrixEntry {

            /** Properties of an ElementEntry. */
            interface IElementEntry {

                /** ElementEntry element */
                element?: (in_proto.IComboBox|null);

                /** ElementEntry type */
                type?: (in_proto.GuiElement.Type|null);

                /** ElementEntry bgcolor */
                bgcolor?: (string|null);
            }

            /** Represents an ElementEntry. */
            class ElementEntry implements IElementEntry {

                /**
                 * Constructs a new ElementEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: in_proto.Table.MatrixEntry.IElementEntry);

                /** ElementEntry element. */
                public element?: (in_proto.IComboBox|null);

                /** ElementEntry type. */
                public type: in_proto.GuiElement.Type;

                /** ElementEntry bgcolor. */
                public bgcolor: string;

                /**
                 * Creates a new ElementEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ElementEntry instance
                 */
                public static create(properties?: in_proto.Table.MatrixEntry.IElementEntry): in_proto.Table.MatrixEntry.ElementEntry;

                /**
                 * Encodes the specified ElementEntry message. Does not implicitly {@link in_proto.Table.MatrixEntry.ElementEntry.verify|verify} messages.
                 * @param message ElementEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: in_proto.Table.MatrixEntry.IElementEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ElementEntry message, length delimited. Does not implicitly {@link in_proto.Table.MatrixEntry.ElementEntry.verify|verify} messages.
                 * @param message ElementEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: in_proto.Table.MatrixEntry.IElementEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ElementEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ElementEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Table.MatrixEntry.ElementEntry;

                /**
                 * Decodes an ElementEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ElementEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Table.MatrixEntry.ElementEntry;

                /**
                 * Verifies an ElementEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ElementEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ElementEntry
                 */
                public static fromObject(object: { [k: string]: any }): in_proto.Table.MatrixEntry.ElementEntry;

                /**
                 * Creates a plain object from an ElementEntry message. Also converts values to other types if specified.
                 * @param message ElementEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: in_proto.Table.MatrixEntry.ElementEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ElementEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ElementEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Properties of a Text. */
    interface IText {

        /** Text base */
        base?: (in_proto.IDataField|null);

        /** Text popupBaseMenu */
        popupBaseMenu?: (in_proto.IPopupMenu|null);
    }

    /** Represents a Text. */
    class Text implements IText {

        /**
         * Constructs a new Text.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IText);

        /** Text base. */
        public base?: (in_proto.IDataField|null);

        /** Text popupBaseMenu. */
        public popupBaseMenu?: (in_proto.IPopupMenu|null);

        /**
         * Creates a new Text instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Text instance
         */
        public static create(properties?: in_proto.IText): in_proto.Text;

        /**
         * Encodes the specified Text message. Does not implicitly {@link in_proto.Text.verify|verify} messages.
         * @param message Text message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Text message, length delimited. Does not implicitly {@link in_proto.Text.verify|verify} messages.
         * @param message Text message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Text message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Text;

        /**
         * Decodes a Text message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Text;

        /**
         * Verifies a Text message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Text message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Text
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Text;

        /**
         * Creates a plain object from a Text message. Also converts values to other types if specified.
         * @param message Text
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Text, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Text to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Text
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Thermo. */
    interface IThermo {

        /** Thermo base */
        base?: (in_proto.IGuiElement|null);

        /** Thermo label */
        label?: (string|null);

        /** Thermo scale */
        scale?: (number|null);

        /** Thermo colorList */
        colorList?: (in_proto.Thermo.IColorEntry[]|null);
    }

    /** Represents a Thermo. */
    class Thermo implements IThermo {

        /**
         * Constructs a new Thermo.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IThermo);

        /** Thermo base. */
        public base?: (in_proto.IGuiElement|null);

        /** Thermo label. */
        public label: string;

        /** Thermo scale. */
        public scale: number;

        /** Thermo colorList. */
        public colorList: in_proto.Thermo.IColorEntry[];

        /**
         * Creates a new Thermo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Thermo instance
         */
        public static create(properties?: in_proto.IThermo): in_proto.Thermo;

        /**
         * Encodes the specified Thermo message. Does not implicitly {@link in_proto.Thermo.verify|verify} messages.
         * @param message Thermo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IThermo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Thermo message, length delimited. Does not implicitly {@link in_proto.Thermo.verify|verify} messages.
         * @param message Thermo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IThermo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Thermo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Thermo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Thermo;

        /**
         * Decodes a Thermo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Thermo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Thermo;

        /**
         * Verifies a Thermo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Thermo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Thermo
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Thermo;

        /**
         * Creates a plain object from a Thermo message. Also converts values to other types if specified.
         * @param message Thermo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Thermo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Thermo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Thermo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Thermo {

        /** Properties of a ColorEntry. */
        interface IColorEntry {

            /** ColorEntry value */
            value?: (number|null);

            /** ColorEntry color */
            color?: (string|null);
        }

        /** Represents a ColorEntry. */
        class ColorEntry implements IColorEntry {

            /**
             * Constructs a new ColorEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: in_proto.Thermo.IColorEntry);

            /** ColorEntry value. */
            public value: number;

            /** ColorEntry color. */
            public color: string;

            /**
             * Creates a new ColorEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ColorEntry instance
             */
            public static create(properties?: in_proto.Thermo.IColorEntry): in_proto.Thermo.ColorEntry;

            /**
             * Encodes the specified ColorEntry message. Does not implicitly {@link in_proto.Thermo.ColorEntry.verify|verify} messages.
             * @param message ColorEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: in_proto.Thermo.IColorEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ColorEntry message, length delimited. Does not implicitly {@link in_proto.Thermo.ColorEntry.verify|verify} messages.
             * @param message ColorEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: in_proto.Thermo.IColorEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ColorEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ColorEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Thermo.ColorEntry;

            /**
             * Decodes a ColorEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ColorEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Thermo.ColorEntry;

            /**
             * Verifies a ColorEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ColorEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ColorEntry
             */
            public static fromObject(object: { [k: string]: any }): in_proto.Thermo.ColorEntry;

            /**
             * Creates a plain object from a ColorEntry message. Also converts values to other types if specified.
             * @param message ColorEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: in_proto.Thermo.ColorEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ColorEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ColorEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Toggle. */
    interface IToggle {

        /** Toggle base */
        base?: (in_proto.IGuiElement|null);

        /** Toggle label */
        label?: (string|null);

        /** Toggle checked */
        checked?: (boolean|null);

        /** Toggle disable */
        disable?: (boolean|null);

        /** Toggle action */
        action?: (string|null);
    }

    /** Represents a Toggle. */
    class Toggle implements IToggle {

        /**
         * Constructs a new Toggle.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IToggle);

        /** Toggle base. */
        public base?: (in_proto.IGuiElement|null);

        /** Toggle label. */
        public label: string;

        /** Toggle checked. */
        public checked: boolean;

        /** Toggle disable. */
        public disable: boolean;

        /** Toggle action. */
        public action: string;

        /**
         * Creates a new Toggle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Toggle instance
         */
        public static create(properties?: in_proto.IToggle): in_proto.Toggle;

        /**
         * Encodes the specified Toggle message. Does not implicitly {@link in_proto.Toggle.verify|verify} messages.
         * @param message Toggle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IToggle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Toggle message, length delimited. Does not implicitly {@link in_proto.Toggle.verify|verify} messages.
         * @param message Toggle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IToggle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Toggle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Toggle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Toggle;

        /**
         * Decodes a Toggle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Toggle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Toggle;

        /**
         * Verifies a Toggle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Toggle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Toggle
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Toggle;

        /**
         * Creates a plain object from a Toggle message. Also converts values to other types if specified.
         * @param message Toggle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Toggle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Toggle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Toggle
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Void. */
    interface IVoid {

        /** Void base */
        base?: (in_proto.IGuiElement|null);

        /** Void width */
        width?: (number|null);

        /** Void height */
        height?: (number|null);

        /** Void colspan */
        colspan?: (number|null);
    }

    /** Represents a Void. */
    class Void implements IVoid {

        /**
         * Constructs a new Void.
         * @param [properties] Properties to set
         */
        constructor(properties?: in_proto.IVoid);

        /** Void base. */
        public base?: (in_proto.IGuiElement|null);

        /** Void width. */
        public width: number;

        /** Void height. */
        public height: number;

        /** Void colspan. */
        public colspan: number;

        /**
         * Creates a new Void instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Void instance
         */
        public static create(properties?: in_proto.IVoid): in_proto.Void;

        /**
         * Encodes the specified Void message. Does not implicitly {@link in_proto.Void.verify|verify} messages.
         * @param message Void message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: in_proto.IVoid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Void message, length delimited. Does not implicitly {@link in_proto.Void.verify|verify} messages.
         * @param message Void message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: in_proto.IVoid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Void message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Void
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): in_proto.Void;

        /**
         * Decodes a Void message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Void
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): in_proto.Void;

        /**
         * Verifies a Void message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Void message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Void
         */
        public static fromObject(object: { [k: string]: any }): in_proto.Void;

        /**
         * Creates a plain object from a Void message. Also converts values to other types if specified.
         * @param message Void
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: in_proto.Void, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Void to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Void
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
