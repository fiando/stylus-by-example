#[cfg(feature = "export-abi")]
fn main() {
    stylus_variable_example::print_abi("MIT-OR-APACHE-2.0", "pragma solidity ^0.8.23;");
}