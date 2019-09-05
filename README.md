This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run project:

* install dependencies: `npm i`
* run local webserver: `npm start`

## Tasks

src/data.json contains data about an entity and its time series over 11 months.

* display the reference data for this entity in a small block
    * include: name, id, industry, country and region
    * by default, also include the most recent PD, PDMedianProxyBps, Rating, PDContributionCount and SP data. Regardless of the charting value (PD/LGD)
    * when the user hovers over data points on the graph, update the PD, PDMedianProxyBps, Rating, PDContributionCount and SP data for the active month, regardless of the charting value (PD/LGD)
* For this entity, over the 11 months, plot the PD and LGD (one or the other, not both at the same time
    * use the charting library of your choice
    * when charting the PD, the graph needs to be plotted by the PD value, but the label for each point needs to be the Rating
    * when charting the LGD, the graph needs to be plotted by the LGD value and the label for each point needs to be the LGD
    * use a button or control to flip between PD/LGD charting
* in a table, display the time serie points for each month and for each, display the PD, Rating, PDContributionCount, PDMedianProxyBps, LGD, and LGDContributionCount.
