// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    // Whether the current instance was started with `tauri dev` or not.
    #[cfg(dev)]
    {
        // `tauri dev` only code
    }
    if cfg!(dev) {
        // `tauri dev` only code
    } else {
        // `tauri build` only code
    }
    let _is_dev: bool = tauri::is_dev();

    // Whether debug assertions are enabled or not. This is true for `tauri dev` and `tauri build --debug`.
    #[cfg(debug_assertions)]
    {
        // Debug only code
    }
    if cfg!(debug_assertions) {
        // Debug only code
    } else {
        // Production only code
    }
    ivn_app_lib::run()
}
