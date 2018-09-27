// Type definitions for v-click-outside-x
// Project: https://github.com/Xotic750/v-click-outside-x
// Definitions by: Lars Eggert <https://github.com/webforgeeu>
import {PluginFunction} from 'vue';

declare class vClickOutsideX {
    static install: PluginFunction<never>;
}

declare namespace vClickOutsideX {
    /**
     * Capitalize each word in a string
     * @param input the string to capitalize
     */

    const directive;
}
export = vClickOutsideX;