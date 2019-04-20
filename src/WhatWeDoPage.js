import React from 'react';
import Grid from '@material-ui/core/Grid';

import FeatureCard from './helpers/FeatureCard';
import TextCenterContainer from './components/containers/TextCenterContainer';
import ImageBannerContainer from './components/containers/ImageBannerContainer';

import CelebrationBox from './assets/img/celebration_box.png';
import BrushBlue from './assets/img/brush_pink.png';
import SummerReading from './assets/img/summer_reading.png';
import ThanksGiving from './assets/img/thanksgiving.png';
import CookingClass from './assets/img/cooking_class.png';
import ComfortAndJoy from './assets/img/comfort_and_joy.png';
import MothersDay from './assets/img/mothers_day.png';
import Background from  './assets/img/cupcakes.png';

const styles = {
    Grid: {marginTop: 5, marginBottom: 20},
    Paper: {padding: 25, marginTop: 20, marginBottom: 20},
    Brush: {backgroundImage:`url(${BrushBlue})`},
    Background: {backgroundImage: `url(${Background})`}
}

const WhatWeDoPage = () => (
    <div className="who-page-container">
        <ImageBannerContainer BackgroundImage={styles.Background} Header="What We Do"/>
        <div class="page-wrapper" id="home-page-wrapper">
            <TextCenterContainer text="CPKC fosters collaborations with community partners to maximize positive impact with one goal in mind; to ensure that the children and youth who are experiencing trauma in our community can still become healthy productive adults. We are achieving this goal through resiliency building programs we call - Compassionate Projects"/>
            <Grid container spacing={24}>
                <Grid item xs>
                    <FeatureCard title="Celebration Box" image={CelebrationBox} content="CPKC’s hallmark project - this project was created for children and youth in domestic violence shelters and transitional housing programs. The Celebration Box is an instant party in a box that’s delivered each month for birthday celebrations, holidays and special occasions. It contains colorful and festive decorations, cupcakes, treats bags, party favors, gifts and cards for the person(s) being celebrated."/>
                </Grid>
                <Grid item xs>
                    <FeatureCard title="Comfort &amp; Joy Care Packages" image={ComfortAndJoy} content="CPKC provides age appropriate Christmas gifts for every child to open on Christmas morning. Each child receives a tote bag with a pair of pajamas, a book, coloring books, crayons, a personal size blanket, gloves, hat, scarf, socks, sweet treats and a stuffed animal for the younger children ages 8 and under."/>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs>
                    <FeatureCard title="Summer Reading Program" image={SummerReading} content="Summers are difficult for children in domestic violence shelters.  CPKC sponsors an eight-week summer reading program exclusively for children in domestic violence shelters.  Our goals are to prevent summer learning loss, improve reading proficiency and provide entertainment through the magic that only reading provides."/>
                </Grid>
                <Grid item xs>
                    <FeatureCard title="Mother's Day Tea" image={MothersDay} content="As we honor our mothers each year on Mother’s Day, CPKC does not forget the hundreds of mothers and children seeking safe shelter in domestic violence shelters in Kansas (link) and Missouri (link). CPKC shows our support to Mothers in domestic violence shelters by giving every mother a vintage teacup floral arrangement. We want them to know there are people in our community praying they find strength and courage to provide the best they can for themselves and their children."/>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs>
                    <FeatureCard title="Thanksgiving Celebration" image={ThanksGiving} content="We host an annual Thanksgiving Day dinner for the residents of Hillcrest Transitional Housing program. Hillcrest Transitional Housing provides a 2 year life skills program for young adults, ages 18-24, aimed at helping youth transition to successful adult independence. Compassionate Partners KC prepares and enjoys the meal on Thanksgiving day with the residents of the program."/>
                </Grid>
                <Grid item xs>
                    <FeatureCard title="4 Seasons Cooking Series" image={CookingClass} content="Hillcrest Transitional Housing offers a 2 year life skills program for young adults, ages 18-24, aimed at helping youth transition to successful adult independence. CPKC provides evidence based nutritional cooking classes that teach how to prepare healthy meals on a limited budget. The goal is to encourage healthy eating and life style changes that could potentially eliminate or decrease chronic diseases associated with poor eating habits and unhealthy diets."/>
                </Grid>
            </Grid>
        </div>
    </div>
);

export default WhatWeDoPage;