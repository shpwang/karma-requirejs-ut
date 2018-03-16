define(['jquery'], ($) => {
    const methods = {
        selfAppend: ($tar, arg) => {
            $tar.append(arg);
        }
    };

    return methods;
});