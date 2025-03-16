import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../components/About/About';

type MenuState = {
  activeCategory: Category;
}

const initialState: MenuState = {
  activeCategory: 'weddings'
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<Category>) => {
      state.activeCategory = action.payload;
    }
  }
});

export const { setCategory } = menuSlice.actions;
export default menuSlice.reducer;