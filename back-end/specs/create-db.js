var db = connect('127.0.0.1:27017/space');
print('* Vocabulary docuemnts loading ...');

//create the names collection and add documents to it

//ENERGY FACTORIES
db.structuretypes.insert({
'name': 'energy_factory_001',
'stats': {'baseAttack': 0, 'baseDefense': 10, 'baseEnergy': 10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});
db.structuretypes.insert({
'name': 'energy_factory_002',
'stats': {'baseAttack': 0, 'baseDefense': 10, 'baseEnergy': 10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});
db.structuretypes.insert({
'name': 'energy_factory_003',
'stats': {'baseAttack': 0, 'baseDefense': 10, 'baseEnergy': 10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});

//DEFENSE
db.structuretypes.insert({
'name': 'defense_tower_001',
'stats': {'baseAttack': 0, 'baseDefense': 100, 'baseEnergy': -10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});
db.structuretypes.insert({
'name': 'defense_tower_002',
'stats': {'baseAttack': 0, 'baseDefense': 100, 'baseEnergy': -10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});
db.structuretypes.insert({
'name': 'defense_tower_003',
'stats': {'baseAttack': 0, 'baseDefense': 100, 'baseEnergy': -10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});

//ATTACK
db.structuretypes.insert({
'name': 'attack_vessel_001',
'stats': {'baseAttack': 10, 'baseDefense': 10, 'baseEnergy': -10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});
db.structuretypes.insert({
'name': 'attack_vessel_002',
'stats': {'baseAttack': 10, 'baseDefense': 10, 'baseEnergy': -10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});
db.structuretypes.insert({
'name': 'attack_vessel_003',
'stats': {'baseAttack': 10, 'baseDefense': 10, 'baseEnergy': -10},
'cost':{'baseMetalCost': 10, 'baseEnergyCost': 100, 'baseSpaceCost': 10 }
});


print('* Documents created');
