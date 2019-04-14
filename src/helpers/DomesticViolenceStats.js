import React, { Component } from 'react';

export default const DomesticViolenceStats (
    <Grid container spacing={40} style={styles.Grid}>
        <Grid item xs>
            <FeatureCard title="Our Vision" image={Vision} content="We envision communities where there is an abundance of sustainable organizations available to provide social and mental health services to children and youth affected by family trauma and personal crises."/>
        </Grid>
        <Grid item xs>
            <FeatureCard title="Our Mission" image={Mission} content="Creating partnerships with organizations to help build resilience in children and youth experiencing adversity and trauma."/>
        </Grid>
        <Grid item xs>
            <FeatureCard title="Our Values" image={Values} content="Core Values are the building blocks of which our organization is built on; the principles that align our decisions and actions with our mission to impact positive change for those we serve."/>
        </Grid>
    </Grid>
);