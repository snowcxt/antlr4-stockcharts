import ace from 'brace';
import 'brace/theme/chrome';
import debounce from 'lodash/debounce';
import './my-mode';
import validate from '../lib/validate';

var editor = ace.edit("editor");
var session = editor.getSession();
editor.setTheme("ace/theme/chrome");
session.setMode("ace/mode/my-mode");
var Range = ace.acequire('ace/range').Range;

var markers = [];

function validateInput() {
    var errors = validate(editor.getValue());
    markers.forEach(marker => session.removeMarker(marker));
    markers = [];
    session.setAnnotations(errors.map(error => ({
        row: error.line,
        column: error.column,
        text: error.text,
        type: "error" // also warning and information
    })));

    errors.forEach((error) => {
        markers.push(session.addMarker(new Range(error.line, error.column, error.line, error.column + error.length), "lint-mark-error", false));
    });
}

var debounced = debounce(validateInput, 500);
session.on('change', debounced);

// document.getElementById('btnRun').onclick = () => {
//     run(editor.getValue()).then(val => alert('result: ' + val));
// };