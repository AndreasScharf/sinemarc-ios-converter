import { configureStore, createSlice } from "@reduxjs/toolkit";
import makeUsableIOSOpenVPN from './utils.js'

// Initial state
const initialState = {
  configOpenVPN: null,
  profilName: '',
  pemFile: null,

  outputFile: null,
};

// Create a slice
const vpnSlice = createSlice({
  name: "vpn",
  initialState,
  reducers: {
    setProfilName: (state, action) => {
        state.profilName = action.payload;
    },
    setConfigOpenVPN: (state, action) => {
      state.configOpenVPN = action.payload;

      state.outputFile = makeUsableIOSOpenVPN(state.configOpenVPN, state.pemFile);

    },
    setPemFile: (state, action) => {
      state.pemFile = action.payload;

      state.outputFile = makeUsableIOSOpenVPN(state.configOpenVPN, state.pemFile);

    },
    resetVPNConfig: (state) => {
      state.configOpenVPN = null;
      state.pemFile = null;
    },
  },
});

// Export actions
export const { setConfigOpenVPN, setPemFile, setProfilName, resetVPNConfig } = vpnSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    vpn: vpnSlice.reducer,
  },
});

export default store;
