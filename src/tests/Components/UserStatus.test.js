
import React from "react";
import { create } from "react-test-renderer";
import UserStatus from "../../components/Mainpage/Content/UserInfo/UserStatus";

describe("UserStatus component", () => {

   test("status from props mast be in local state", () => {
      const component = create(<UserStatus userStatus='hi hi hi' />);
      const instance = component.root;
      expect(instance.props.userStatus).toBe('hi hi hi');

   })
   test('after render component,mast be correct status <span>', () => {
      const component = create(<UserStatus userStatus='hi hi hi' />);
      const instance = component.root;
      let span = instance.findByType('span')
      expect(span).not.toBeNull()
   })
   test(`after render component,<input> shouldn't be showed`, () => {
      const component = create(<UserStatus userStatus='hi hi hi' />);
      const instance = component.root;

      expect(() => {
         let input = instance.findByType('input')
      }).toThrow();
   })
   test('doubleClick on <span>,mast be changed in <input>', () => {
      const component = create(<UserStatus userStatus='hi hi hi' />);
      const instance = component.root;
      let span = instance.findByType('span')
      span.props.onDoubleClick()
      let input = instance.findByType('input')

      expect(input.props.value).toBe('hi hi hi');
   })
   test('callback function should be called', () => {
      const mockCallback = jest.fn();
      const component = create(<UserStatus userStatus='hi hi hi' updateStatus={mockCallback} />);
      const instance = component.getInstance();
      // instance.deactivateEditMode();

      expect(mockCallback).toHaveBeenCalled()
   })
})