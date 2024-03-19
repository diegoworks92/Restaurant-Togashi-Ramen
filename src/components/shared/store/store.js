import { create } from 'zustand';

// Group the state related to the menu
export const useMenuStore = create((set) => ({
	showMenu: false,
	setShowMenu: (value) => set({ showMenu: value }),
	activeButton: 1,
	setActiveButton: (value) => set({ activeButton: value }),
	whereToEat: 0,
	setWhereToEat: (value) => set({ whereToEat: value }),

	isActive: true,
	setIsActive: (value) => set({ isActive: value }),
}));

// Group the state related to the orders
export const useOrdersStore = create((set) => ({
	isOrdersActive: false,
	setIsOrdersActive: (value) => set({ isOrdersActive: value }),
	showOrdersTab: false,
	setShowOrdersTab: (value) => set({ showOrdersTab: value }),

	showOrder: false,
	setShowOrder: (value) => set({ showOrder: value }),
}));

// Group the state related to the cart
export const useCartStore = create((set) => ({
	allProducts: [],
	setAllProducts: (value) => set({ allProducts: value }),
	total: 0,
	setTotal: (value) => set({ total: value }),
	countProducts: 0,
	setCountProducts: (value) => set({ countProducts: value }),
}));

// Group the state related to the user
export const useUserStore = create((set) => ({
	name: '',
	setName: (value) => set({ name: value }),
	showModal: true,
	setShowModal: (value) => set({ showModal: value }),
}));
