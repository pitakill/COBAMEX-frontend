<script>
  import { InnerGrid, Cell } from '@smui/layout-grid';
  import Card, { Content } from '@smui/card';

  import Folio from '../../lib/containers/Folio/index.svelte';
  import CURP from '../../lib/containers/CURP/index.svelte';
  import FirstName from '../../lib/containers/FirstName/index.svelte';
  import LastName from '../../lib/containers/LastName/index.svelte';
  import SecondName from '../../lib/containers/SecondName/index.svelte';
  import Nationality from '../../lib/containers/Nationality/index.svelte';
  import BornCountry from '../../lib/containers/BornCountry/index.svelte';
  import FederalEntityOfBorn from '../../lib/containers/FederalEntityOfBorn/index.svelte';
  import Sex from '../../lib/containers/Sex/index.svelte';
  import Gender from '../../lib/containers/Gender/index.svelte';
  import BirthDate from '../../lib/containers/BirthDate/index.svelte';
  import Date from '../../lib/containers/Date/index.svelte';
  import Age from '../../lib/containers/Age/index.svelte';
  import OtherLanguage from '../../lib/containers/OtherLanguage/index.svelte';
  import Language from '../../lib/containers/Language/index.svelte';
  import Indigenous from '../../lib/containers/Indigenous/index.svelte';
  import Afrodescendant from '../../lib/containers/Afrodescendant/index.svelte';
  import FederalEntity from '../../lib/containers/FederalEntity/index.svelte';
  import Municipality from '../../lib/containers/Municipality/index.svelte';
  import Locality from '../../lib/containers/Locality/index.svelte';
  import RoadType from '../../lib/containers/RoadType/index.svelte';
  import RoadName from '../../lib/containers/RoadName/index.svelte';
  import OutdoorNumber from '../../lib/containers/OutdoorNumber/index.svelte';
  import IndoorNumber from '../../lib/containers/IndoorNumber/index.svelte';
  import HousingType from '../../lib/containers/HousingType/index.svelte';
  import HousingClassification from '../../lib/containers/HousingClassification/index.svelte';
  import HumanSettlementType from '../../lib/containers/HumanSettlementType/index.svelte';
  import HumanSettlementName from '../../lib/containers/HumanSettlementName/index.svelte';
  import ZipCode from '../../lib/containers/ZipCode/index.svelte';
  import Schooling from '../../lib/containers/Schooling/index.svelte';
  import KnowsReadWriteAnErrand from '../../lib/containers/KnowsReadWriteAnErrand/index.svelte';
  import CurrentlyAttendingSchool from '../../lib/containers/CurrentlyAttendingSchool/index.svelte';
  import AttendingSpecialSchool from '../../lib/containers/AttendingSpecialSchool/index.svelte';
  import HealthServiceAffiliation from '../../lib/containers/HealthServiceAffiliation/index.svelte';
  import SocialSecurityNumber from '../../lib/containers/SocialSecurityNumber/index.svelte';
  import MaritalStatus from '../../lib/containers/MaritalStatus/index.svelte';
  import EconomicCondition from '../../lib/containers/EconomicCondition/index.svelte';
  import EconomicConditionOther from '../../lib/containers/EconomicConditionOther/index.svelte';
  import WorkPosition from '../../lib/containers/WorkPosition/index.svelte';
  import UsualOccupation from '../../lib/containers/UsualOccupation/index.svelte';
  import SocialHelp from '../../lib/containers/SocialHelp/index.svelte';
  import KinshipWithEvaluated from '../../lib/containers/KinshipWithEvaluated/index.svelte';
  import RelationshipWithEvaluated from '../../lib/containers/RelationshipWithEvaluated/index.svelte';
  import Phone from '../../lib/containers/Phone/index.svelte';
  import Email from '../../lib/containers/Email/index.svelte';
</script>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <Folio />
        <Date />
        <CURP />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          4. Nombre de la persona evaluada
        </h2>
      </Cell>
      <Cell span={12}>
        <FirstName />
        <LastName />
        <SecondName />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <Nationality />
        <BornCountry />
        <FederalEntityOfBorn />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <Sex />
        <Gender />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <BirthDate />
        <Age />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <OtherLanguage />
        <Language />
        <Indigenous />
        <Afrodescendant />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          16. Nombre de la persona evaluada
        </h2>
      </Cell>

      <Cell span={12}>
        <FederalEntity />
        <Municipality />
        <Locality />
        <RoadType />
        <RoadName />
        <OutdoorNumber />
        <IndoorNumber />
        <HousingType />
        <HousingClassification />
        <HumanSettlementName />
        <HumanSettlementType />
        <ZipCode />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          17. Escolaridad
        </h2>
      </Cell>

      <Cell span={12}>
        <Schooling />
        <KnowsReadWriteAnErrand />
        <CurrentlyAttendingSchool />
        <AttendingSpecialSchool />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          18. Servicios de Salud
        </h2>
      </Cell>
      <Cell span={12}>
        <HealthServiceAffiliation />
        <SocialSecurityNumber />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12} />
      <Cell span={12}>
        <MaritalStatus />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          20. Condición económica
        </h2>
      </Cell>
      <Cell span={12}>
        <EconomicCondition />
        <EconomicConditionOther />
        <WorkPosition />
        <UsualOccupation />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12} />
      <Cell span={12}>
        <SocialHelp />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          22. Nombre de la persona de apoyo (en caso de que la persona de apoyo
          no pueda responder)
        </h2>
      </Cell>
      <Cell span={12}>
        <FirstName identifier={22.1} />
        <LastName identifier={22.2} />
        <SecondName identifier={22.3} />
        <KinshipWithEvaluated />
        <RelationshipWithEvaluated />
      </Cell>
    </InnerGrid>
  </Content>
</Card>

<Card>
  <Content>
    <InnerGrid>
      <Cell span={12}>
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          23. Datos de contacto de la persona a valorar (o persona de apoyo)
        </h2>
      </Cell>
      <Cell span={12}>
        <Phone />
        <Email />
      </Cell>
    </InnerGrid>
  </Content>
</Card>
