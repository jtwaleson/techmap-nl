<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <gmap-map :center="center" :options="options" :zoom="10" style="width: 500px; height: 500px">
            <gmap-cluster>
                <gmap-marker v-for="(m, index) in markers"
                             :position="m.position"
                             :title="m.text"
                             :clickable="true"
                             :draggable="false"
                             @click="center=m.position"
                             :key="index"
                             ></gmap-marker>
            </gmap-cluster>
        </gmap-map>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            center: {
                lat: 52.101,
                lng: 5.1,
            },
            options: {
                clickableIcons: false,
                fullscreenControl: false,
                minZoom: 8,
                rotateControl: false,
                panControl: false,
                restriction: {
                    latLngBounds: {
                        north: 53.7,
                        south: 50.7,
                        west: 3,
                        east: 7.6,
                    },
                    strictBounds: true,
                },
                mapTypeId: "terrain",
                streetViewControl: false,
            },
            markers: [
            {
                position: {lat: 52.111287, lng: 5.111602},
                text: 'x'
            }, {
                position: {lat: 52.091287, lng: 5.111602},
                text: 'y'
            }, {
                position: {lat: 52.338977, lng: 4.913475},
                text: 'z'
            }
            ]
        };
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
