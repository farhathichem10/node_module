import { WizardStep } from './wizard-step.interface';
/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param value The value to be checked
 * @returns True if the given value implements [[StepId]] and false otherwise
 */
export function isStepId(value) {
    return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1pZC5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWwvc3RlcC1pZC5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBY25EOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFVO0lBQ2pDLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDO0FBQzFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBBbiB1bmlxdWUgaWRlbnRpZmllciBvZiBhIHdpemFyZCBzdGVwXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcElkIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKi9cbiAgc3RlcElkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcElkXV0uXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpbXBsZW1lbnRzIFtbU3RlcElkXV0gYW5kIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdGVwSWQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBJZCB7XG4gIHJldHVybiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RlcElkJykgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIFdpemFyZFN0ZXApO1xufVxuIl19