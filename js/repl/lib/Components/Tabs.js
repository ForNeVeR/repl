import { List, declare, Union } from "../fable-library.2.4.2/Types.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { bool, union, list, type, string } from "../fable-library.2.4.2/Reflection.js";
import { createObj } from "../fable-library.2.4.2/Util.js";
export const Option = declare(function Fulma_Tabs_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Tabs.Option", [], Option, () => [["Size", [Size$0024002EISize$0024reflection()]], "is-centered", "is-right", "is-boxed", "is-toggle", "is-toggle-rounded", "is-fullwidth", ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Tab$002EOption = declare(function Fulma_Tabs_Tab_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Tab$002EOption$reflection() {
  return union("Fulma.Tabs.Tab.Option", [], Tab$002EOption, () => [["is-active", [bool]], ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function tabs(options, children) {
  var props$$4;
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 0:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }

      case 8:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 9:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  }, "tabs"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, new List((props$$4 = [], React.createElement("ul", createObj(props$$4, 1), ...children)), new List()));
}
export function tab(options$$1, children$$6) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, option$$1.fields[0]);
        }

      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, option$$1.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, option$$1.fields[0]);
        }

      default:
        {
          if (option$$1.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
          } else {
            return result$$1;
          }
        }
    }
  }), function (props$$7, children$$7) {
    const props$$8 = props$$7;
    const children$$8 = children$$7;
    return React.createElement("li", createObj(props$$8, 1), ...children$$8);
  }, children$$6);
}