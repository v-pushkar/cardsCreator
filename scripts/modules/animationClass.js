export default function animationClass(param) {

    var classesForBox = "";
    // ----------------------------------------------
    if (param.hover_animation) {
        switch (param.hover_animation) {
            case "scale":
                classesForBox = classesForBox + 'animation-scale ';
                break;
            default:
                classesForBox = classesForBox + 'animation-def ';
        }
    }

    // ------------- return result ------------------
    return classesForBox
}