/**
 * Extensión de ejemplo para MakeCode Micro:bit
 */
//% weight=100 color=#0fbc11 icon="\uf1ec"
namespace miextension {
    /**
     * Saluda por consola serial.
     */
    //% block
    export function saludar(): void {
        serial.writeLine("¡Hola desde la extensión!");
    }
}