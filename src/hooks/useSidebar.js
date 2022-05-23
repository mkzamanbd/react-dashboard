const { useRef } = require('react');

export function useSidebar() {
    const isOpen = useRef(false);
    return {
        isOpen,
    };
}

export default {};
