define ([
        'underscore',
        'backbone']
    , function (_, Backbone) {

    return Backbone.Model.extend({

        fields: {
            id: 'NAMESCIEN',
            name: 'NAMECOMMON',
            DPaWRegion: 'DPAWREGION',
            dist: 'DIST'
        },
        // shortcut methods
        id: function () {
            return this.get(this.fields.id);
        },

        name: function () {
            return this.get(this.fields.name);
        },

        DPaWRegion: function () {
            return this.get(this.fields.DPaWRegion);
        },

        dist: function () {
            return this.get(this.fields.dist);
        },

        records: function () {
            return this.get('records');
        },

        recordsByRegion: function () {
            return _(this.records())
                .groupBy(function (r) {
                    return r.get('SCALE');
                })
                .value();
        }
    });
});