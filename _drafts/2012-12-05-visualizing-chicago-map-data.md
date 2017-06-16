---
title: Visualizing Cambridge Chicago's Data with jQuery and Google Maps + Charts + Refine + Fusion Tables
comments: true
layout: post
tags: [datavis]
---

## "What story do I want to tell?"

That question lies at the heart of every visualization.  
After two things were stolen in my first two weeks in Cambridge, I got curious about thefts trends.

[Questions help](http://flowingdata.com/2010/04/29/visualizing-data-ask-a-question-first/) me clarify stories. In this case there are two:
 - How does total theft in some areas compare to total theft in others?
 - How does each area's theft trend over time compare with others around it?

My initial intent was to map the two questions using Cambridge and/or Boston metro area data.  
The closest I found was a reference from the [Cambridge data links](http://www2.cambridgema.gov/cdd/data/datalinks.html) page to some pre-made [2005 maps](http://www.caliper.com/Maptitude/MassStats/Map.aspx).  Mapping the questions sounded fun despite Cambridge data availability issues (apparently a <a href="http://bostonography.com/2011/autumn-streets/" target="_blank">shared problem</a>), so I went ahead using data from <a href="https://data.cityofchicago.org/">Chicago's awesome city data portal</a>  
The resulting map is on the right.

<div style="width:50%; float:right; clear:none;">
  <h4>2003-2010 total Chicago thefts under $300 by ward</h4>
  <div>
    <dl id="thefts-map-legend">
      <div>
        <dt id="legend-totals">
          <img style="background-color: #61536e" height="30" src="//maps.gstatic.com/mapfiles/transparent.png" width="30" /> Total per Ward
        </dt>
        <dd>- Darker == more total theft</dd>
      </div>
      <div>
        <dt id="legend-trends"> Theft Trend</dt>
        <dd>- % change from 2003 on a 20%-120% scale</dd>
      </div>
    </dl>
  </div>
  <figure>
    <div id="chicago-theft-yrs">![chicago theft visualization by ward](//images/chicago-theft-map.png)</div>
    <figcaption class="clear-none">
    <p>
      2003-2010 total Chicago thefts under $300 US dollars by ward and year, including ID thefts.  
      Whether $300 is adjusted for inflation is unknown.  
       Reporting procedures and other potential bias sources are also unknown.  
        Excludes 2001-2002 due to irregular/infrequent entries, and a small number of entries lacking wards. From <a href="https://data.cityofchicago.org/Public-Safety/2001-present-Theft-300-by-ward-year/jq8x-ret8">City of Chicago crime data view</a> on 2011/09/22. Originally from <a href="https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present/ijzp-q8t2">2001-Present full crime data table</a>.
    </p>
    </figcaption>
  </figure>
<div>

##  Crafting the Stories 
Time series and spatial relationships are a challenge to combine in a single visualization. Three options include animation, small multiples, and embedded charts.

### Animation 
One solution is <a href="http://www.youtube.com/watch?v=pM8XbzdlZIg" target="_blank">motion</a> - i.e., representing change over eight years by showing eight maps over eight seconds. I'm not a huge fan of animated choropleths since <a href="http://thecartofish.com/fish_thesis.pdf" target="_blank">humans cannot effectively comprehend color transitions in fifty polygons</a> (7.84MB).

### Small Multiples
Another option advocated by Edward Tufte is <a href="http://www.juiceanalytics.com/writing/better-know-visualization-small-multiples/" target="_blank">small multiple maps</a>.  
In this scenario, it requires substantial effort to compare many proximal polygons over time, so it wasn't my first choice.

### Embedded Charts
Embedded charts are ideal.  
The combination of line charts and geographically positioned wards shows both spatial relationships and trends effectively.  
Still, they require some tweaking to get there - desaturation, map feature removal, selective recoloring, hiding polygon boundaries to emphasize the trend charts, and varying theft total saturation and lightness all help both stories stand out depending on focus. While absent polygon borders make individual wards differentiation harder, the major areas are more visible - a reasonable tradeoff of low-level details for high-level patterns and trends.

## Results
Assuming the data is valid for this purpose, reported thefts in all wards showed net declines between 2003 and 2010.  Contrasts between wards with high and low total theft are easy to see - higher theft in the city center extends to the Northwest, West, and South.

Overall I'm happy with the outcome and had fun creating it. In fact, If you're reading this and you happened to steal a fridge in front of my steps a few weeks ago, consider it a gift.  
Cheers!

## Supporting Technologies
Technologies that went into this visualization (roughly in order applied):
<ul>
<li><a href="https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present/ijzp-q8t2">Chicago Theft Data</a> (CSV)</li>
<li><a href="https://data.cityofchicago.org/browse?limitTo=blob">Chicago Ward Boundaries</a> (ESRI Shapefiles)</li>
<li><a title="http://www.shpescape.com/" href="http://www.shpescape.com/">Shpescape.com</a> (Convert ESRI shapefiles to ward Fusion Tables)</li>
<li><a href="www.google.com/fusiontables/Home" target="_blank">Fusion Tables</a> (Merge ward geo data and thefts data. Export to Google Refine for cleaning. Re-import cleaned data. Format KML via handy style formatter in visualize&gt;map menu)</li>
<li><a href="http://code.google.com/p/google-refine/" target="_blank">Google Refine</a> (Import merged data as CSV. Remove irrelevant rows, including rows with no ward and years with spotty data.  
Export merged table as CSV for Fusion Tables re-import. Export years, thefts per year, and ward centroids as JSON for JavaScript to create line and bar charts)</li>
<li><a href="http://code.google.com/apis/loader/">Google API Loader</a> (Load the maps API)</li>
<li><a href="http://code.google.com/apis/maps/documentation/javascript/" target="_blank">Google Maps API</a> (Framework for interacting with Google Maps)</li>
<li><a href="http://code.google.com/apis/chart/image/" target="_blank">Google Charts API - Image Charts</a> (Info window bar charts and embedded line charts)</li>
<li>JavaScript / jQuery (File loading, API interaction, and general display)</li>
</ul>
