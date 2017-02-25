import Tube from './tube'
import config from './config'
import data from './data'
import './index.css'

const tube = new Tube()

config.transit = data;
config.transit.labels = 1;
config.transit.legend = 1;
tube.render(config)
