Feature: Navegacion de la pagina

  Scenario: Cargar la página principal
    Given estoy en la página principal
    Then debería ver el título AppEvalua

  Scenario: Hacer clic en Empezar ahora
    Given estoy en la página Evalua
    When hago clic en el botón Empezar ahora
    Then debería estar en la página de destino

  Scenario: Hacer clic en Aroma
    Given estoy en la página Evaluacion
    When hago clic en el botón Aroma
    Then debería estar en la página de Aroma

  Scenario: Hacer clic en Apariencia
    Given estoy en la página Evaluacion 2
    When hago clic en el botón Apariencia
    Then debería estar en la página Apariencia

 Scenario: Hacer clic en Sabor
    Given estoy en la página Evaluacion 3
    When hago clic en el botón Sabor
    Then debería estar en la página Sabor

 Scenario: Hacer clic en Sensacion
    Given estoy en la página Evaluacion 4
    When hago clic en el botón Sensacion
    Then debería estar en la página Sensacion

 Scenario: Hacer clic en Fallas
    Given estoy en la página Evaluacion 5
    When hago clic en el botón Fallas
    Then debería estar en la página Fallas

 Scenario: Hacer clic en General
    Given estoy en la página Evaluacion 6
    When hago clic en el botón General
    Then debería estar en la página General