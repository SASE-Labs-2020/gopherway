import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Direction from './src/components/Direction';
import styles from './src/style';
import RouteSelection from './src/components/RouteSelection';

const url = 'https://sase-labs-2020.github.io/assets/directions/coffman_yudof.json'
import MapView, {Marker} from 'react-native-maps';

export default class BuildingMarker extends Component {
render() {
  return (
    <MapView
      style={{ flex: 1 }}
      showsUserLocation
      initialRegion={{
          latitude: 44.9727,
          longitude: -93.2354,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
      }}>
     
      <Marker
          coordinate={{
          latitude: 44.9727,
          longitude: -93.2354}}
          title={'Coffman Union'}
          description={''}
          />

      <Marker
          coordinate={{
          latitude: 44.978062,
          longitude: -93.233431}}
          title={'10 Church St SE'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.975499,
          longitude: -93.232331 }}
          title={'Akerman Hall'}
          description={''}
          />
          
          <Marker
          coordinate={{
          latitude: 44.974120,
          longitude: -93.233068 }}
          title={'Amundson Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.972201,
          longitude:-93.234412}}
          title={'Boynton Health'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.971557,
          longitude: -93.234113}}
          title={"Children's Rehabilitation Center" }
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.976204,
          longitude: -93.231426}}
          title={'Civil Engineering Building'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.971723,
          longitude: -93.231379}}
          title={'Diehl Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.971191,
          longitude:-93.232616 }}
          title={'Masonic Cancer Research Building'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude:44.971833 ,
          longitude:-93.234901}}
          title={'East River Road Garage'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude:44.978180 ,
          longitude: -93.234291}}
          title={'Folwell Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude:44.973928 ,
          longitude: -93.234462}}
          title={'Ford Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.974362,
          longitude: -93.229588}}
          title={'Graduate Minneapolis'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.973179,
          longitude:  -93.233511}}
          title={'Jackson Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude:44.975836 ,
          longitude: -93.236400}}
          title={'Johnston Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.974282,
          longitude: -93.232306}}
          title={'Keller Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.973917,
          longitude: -93.236280}}
          title={'Kolthoff Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude:44.974520 ,
          longitude: -93.233489}}
          title={'Lind Hall'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.972561,
          longitude: -93.232841}}
          title={'Mayo Memorial Auditorium'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.972122,
          longitude: -93.233253}}
          title={'Mayo Building & Additions'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.972122,
          longitude: -93.233253}}
          title={'Molecular and Cellular Biology Building (MCB)'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.974827,
          longitude:-93.227786 }}
          title={'McNamara Alumni Center'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude:44.975473 ,
          longitude: -93.233213}}
          title={'Mechanical Engineering Building'}
          description={''}
          />

          <Marker
          coordinate={{
          latitude: 44.973046, 
          longitude: -93.231808}}
          title={'Moos Tower'}
          description={''}
          />

            <Marker
          coordinate={{
          latitude: 44.975872,
          longitude: -93.234610}}
          title={'Morrill Hall'}
          description={''}
          />


            <Marker
          coordinate={{
          latitude: 44.974496,
          longitude:-93.234234}}
          title={'Murphy Hall'}
          description={''}
          />

            <Marker
          coordinate={{
          latitude: 44.972848,
          longitude: -93.234199}}
          title={'Nils Hasselmo Hall'}
          description={''}
          />

            <Marker
          coordinate={{
          latitude: 44.977211, 
          longitude: -93.233616}}
          title={'Nolte Center'}
          description={''}
          />

            <Marker
          coordinate={{
          latitude: 44.977398,
          longitude: 44.977398}}
          title={'Nolte Center Garage'}
          description={''}
          />

            <Marker
          coordinate={{
          latitude: 44.976443, 
          longitude: -93.235393}}
          title={'Northrop Auditorium'}
          description={''}
          />


            <Marker
          coordinate={{
          latitude: 44.976082,
          longitude: -93.235406}}
          title={'Northrop Garage'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.972301,
          longitude: -93.231545}}
          title={'Phillips-Wangensteen Building'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.976294,
          longitude: -93.233195}}
          title={'Ralph Rapson Hall'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.975849,
          longitude: -93.232404}}
          title={'Shepherd Lab'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude:44.974487 ,
          longitude: -93.236320}}
          title={'Smith Hall'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude:44.975268 ,
          longitude: -93.234538}}
          title={'Tate Hall'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.973903,
          longitude: -93.230896}}
          title={'Transportation and Safty Building'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.972268,
          longitude: -93.231575}}
          title={'UMN Medical Center'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.975985,
          longitude: -93.228655}}
          title={'University Ave Ramp'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.971172,
          longitude: -93.233524}}
          title={'Variety Club Research Center'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude:44.974526 ,
          longitude: -93.234734}}
          title={'Vincent Hall'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.975261,
          longitude: -93.236215}}
          title={'Walter Library'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.974263,
          longitude: -93.231681}}
          title={'Washinton Ave Parking Ramp'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.973371,
          longitude: -93.231007}}
          title={'Weaver-Densford Hall'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.977607,
          longitude: -93.234552}}
          title={'Williamson Hall'}
          description={''}
          />

           <Marker
          coordinate={{
          latitude: 44.972233,
          longitude: -93.235814}}
          title={'Yudof Hall'}
          description={''}
          />
    
  </MapView> 
  );
 }
}


