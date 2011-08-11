/*
---
name: Locale.fr-FR.Chosen
description: Frech Language File for Chosen
authors: Grégoire Morpain
requires: [More/Locale]
provides: Locale.fr-FR.Chosen
...
*/
Locale.define('fr-FR', 'Chosen', {
	placeholder: function(multiple) {
		return (multiple ? 'Sélectionnez Des Options' : 'Sélectionnez Une Option');
	},
	noResults: 'Aucun résultat ne correspond'
});